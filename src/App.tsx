import { useState } from 'react'
import { Box, Container, FormControl, Select, Typography, Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, InputLabel, MenuItem } from '@mui/material'
import './App.css'
import { useEstados } from './hooks/useEstados'
import { useMunicipios } from './hooks/useMunicipios'
import { useSelectedMunicipioInfo } from './hooks/useSelectedMunicipioInfo'

export default function App() {
  const {estados} = useEstados();
  const [selectedEstado, setSelectedEstado] = useState('');
  const [selectedMunicipio, setSelectedMunicipio] = useState('');
  const {municipios, loading: loadingMunicipos} = useMunicipios({ uf: selectedEstado });
  const [selectedMunicipioInfo, setSelectedMunicipioInfo] = useState('');
  const { municipioInfo } = useSelectedMunicipioInfo({ id: selectedMunicipio });

  const handleEstadoUpdate = (event) => {
    setSelectedEstado(event.target.value);
  };

  const handleMunicipioUpdate = (event) => {
    setSelectedMunicipio(event.target.value);

    handleSelectedMunicipioInfoUpdate(event.target.value)
    console.log('[handleMuncipioUpdate]'+event.target.value)
  };

  const handleSelectedMunicipioInfoUpdate = (selectedMunicipio) => {
    setSelectedMunicipioInfo(selectedMunicipio);
  };

  return (
    <>
      <h1>
        Seletor de estados e municípios
      </h1>

      <div className="container">
        <select value={selectedEstado} onChange={handleEstadoUpdate}>
          <option value="">Selecione o estado</option>
          {estados.map((estado) => (
            <option key={estado.id} value={estado.sigla}>{estado.nome}</option>
          ))}
        </select>

        {loadingMunicipos ? (<Typography>Carregando...</Typography>) : (
          <select value={selectedMunicipio} onChange={handleMunicipioUpdate}>
            <option>Selecione o municipio</option>
            {municipios.map((municipio) => (
              <option key={municipio.id} value={municipio.id}>{municipio.nome}</option>
            ))}
          </select>
        )}
      </div>

      <h1>
        Informações do município selecionado
      </h1>

      {selectedMunicipio != '' ? (
        <div className="container">
          <TableContainer component={Paper} sx={{mt: 5}}>
            <Table sx={{minWidth: 659}} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='center'>ID</TableCell>
                  <TableCell align='center'>Nome</TableCell>
                  <TableCell align='center'>Microrregião</TableCell>
                  <TableCell align='center'>Mesorregião</TableCell>
                  <TableCell align='center'>UF</TableCell>
                  <TableCell align='center'>Região</TableCell>
                </TableRow>
              </TableHead> 
              <TableBody>
                <TableRow>
                  <TableCell align='center'>{municipioInfo.id}</TableCell>
                  <TableCell align='center'>{municipioInfo.nome}</TableCell>
                  {/* <TableCell align='center'>{municipioInfo.microrregiao.nome}</TableCell>
                  <TableCell align='center'>{municipioInfo.microrregiao.mesorregiao.nome}</TableCell>
                  <TableCell align='center'>{municipioInfo.microrregiao.mesorregiao.UF.sigla}</TableCell>
                  <TableCell align='center'>{municipioInfo.microrregiao.mesorregiao.UF.regiao.nome}</TableCell> */}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <div className="container">
          <TableContainer component={Paper} sx={{mt: 3}}>
            <Table sx={{minWidth: 659}} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='center'>ID</TableCell>
                  <TableCell align='center'>Nome</TableCell>
                  <TableCell align='center'>Microrregião</TableCell>
                  <TableCell align='center'>Mesorregião</TableCell>
                  <TableCell align='center'>UF</TableCell>
                  <TableCell align='center'>Região</TableCell>
                </TableRow>
              </TableHead> 

              <TableBody>
                <TableRow>
                  <TableCell align='center' colSpan={6}>
                    Selecione um município
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}

      
    </>
  )
}