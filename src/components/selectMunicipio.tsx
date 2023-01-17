import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/types/reduxTypes';
import { IMunicipios } from '../types';
import Select from "react-select";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { infoFetch } from '../redux/slices/municipiosInfoSlice';

export default function SelectMunicipio () {
  const dispatch = useAppDispatch();
	const { status } = useAppSelector((state) => state.municipios);
	const { municipios } = useAppSelector((state) => state.municipios);
	const [selectedMunicipio, setSelectedMunicipio] = useState<IMunicipios>()
	const [query, setQuery] = useState('')

	const filteredCities =
		query === ''
			? municipios
			: municipios.filter((municipios) =>
        municipios.nome
					.toLowerCase()
					.replace(/\s+/g, '')
					.includes(query.toLowerCase().replace(/\s+/g, ''))
			)

	useEffect(() => {
		if (status !== "fulfilled") setSelectedMunicipio({} as IMunicipios)
	}, [status])

	function handleSelectedMunicipio(item: IMunicipios) {
		const selectedMunicipio = item.id
		setSelectedMunicipio(item)
    	dispatch(infoFetch(selectedMunicipio))
	}

  return (
    <div>
      <Select
	  	isDisabled={status !== "fulfilled"}
        options={filteredCities}
        getOptionLabel={(option) => option.nome}
        getOptionValue={(option) => option.id}
        onChange={(item) => handleSelectedMunicipio(item as IMunicipios)}
        placeholder="Selecione um município"
      />
    </div>   
  );
};
