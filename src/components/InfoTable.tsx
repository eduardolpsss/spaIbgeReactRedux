import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../redux/types/reduxTypes';
import { IInfoResumo } from '../types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function InfoTable() {
    const { status } = useAppSelector((state) => state.info);
    const { info } = useAppSelector((state) => state.info);
    const [categories, setCategories] = useState<IInfoResumo>({} as IInfoResumo)

	useEffect(() => {
		if (status === "fulfilled"){
			setCategories({
				Município: {
					id: info.id,
					nome: info.nome,
					uf: info.municipio['regiao-imediata']['regiao-intermediaria'].UF.sigla,
					regiao:  info.municipio['regiao-imediata']['regiao-intermediaria'].UF.regiao.nome,
					microrregiao: info.municipio.microrregiao.nome,
					mesorregiao: info.municipio.microrregiao.mesorregiao.nome,
				}
			})
		} else setCategories({} as IInfoResumo)
	}, [status, info])


    return (
        <div>
            {
                status === "fulfilled" ? (
                    <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead
                            sx={{
                                backgroundColor: '#4c8eca'
                            }}
                        >
                            <TableRow>
                                <TableCell align="center" style={{color: 'white'}}>Nome</TableCell>
                                <TableCell align="center" style={{color: 'white'}}>UF</TableCell>
                                <TableCell align="center" style={{color: 'white'}}>Região</TableCell>
                                <TableCell align="center" style={{color: 'white'}}>Microrregião</TableCell> 
                                <TableCell align="center" style={{color: 'white'}}>Mesorregião</TableCell> 
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Object.values(categories).map((category) => (
                                <TableRow 
                                    key={category.id}
                                >
                                    <TableCell align="center">{category.nome}</TableCell>
                                    <TableCell align="center">{category.uf}</TableCell>
                                    <TableCell align="center">{category.regiao}</TableCell>
                                    <TableCell align="center">{category.microrregiao}</TableCell>
                                    <TableCell align="center">{category.mesorregiao}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                ) : <></>
            }
        </div>
    );
}
