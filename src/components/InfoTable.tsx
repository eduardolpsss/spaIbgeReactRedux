import React from 'react';
import {
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';

export default function InfoTable (props: any) {
  return (
    <div style={{ marginTop: 20 }}>
      <Typography variant="h5" gutterBottom m={3}>
        Informações do município selecionado
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple">
          <TableHead style={{ backgroundColor: '#4c8eca'}}>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold', color: 'white'}} align="center">Nome</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: 'white'}} align="center">UF</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: 'white'}} align="center">Região</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: 'white'}} align="center">Microrregião</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: 'white'}} align="center">Mesorregião</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ justifyContent: 'center'}}>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {props.selectedMunicipioNome}
              </TableCell>
              <TableCell align="center">{props.selectedMunicipioUf}</TableCell>
              <TableCell align="center">{props.selectedMunicipioRegiao}</TableCell>
              <TableCell align="center">{props.selectedMunicipioMicrorregiao}</TableCell>
              <TableCell align="center">{props.selectedMunicipioMesorregiao}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}