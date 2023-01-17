
import React, { useEffect } from 'react';
import { Fragment, useState } from 'react'
import { estadosFetch } from '../redux/slices/estadoSlice';
import { useAppDispatch, useAppSelector } from '../redux/types/reduxTypes';
import { IEstados } from '../types';
import Select from "react-select";
import { municipiosFetch } from '../redux/slices/municipioSlice';

export default function SelectEstados() {
	const dispatch = useAppDispatch();
	const { estados } = useAppSelector((state) => state.estados);
	const [selected, setSelected] = useState<IEstados>()

	useEffect(() => {
		dispatch(estadosFetch);
	}, [dispatch]);

	function handleSelectedEstado(item: IEstados){
		const selectedState = item.sigla
		setSelected(item)
		dispatch(municipiosFetch(selectedState))
	}

	return (
		<>
			<Select
				options={estados}
				getOptionLabel={(option) => option.nome}
				getOptionValue={(option) => option.sigla}
				onChange={(item) => handleSelectedEstado(item as IEstados)}
				placeholder="Selecione um estado"
			/>
		</>
	);
};