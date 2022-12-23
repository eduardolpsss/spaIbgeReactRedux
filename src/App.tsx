import { useState } from 'react'
import { Box, Container, FormControl, Select, Typography, Card, AppBar, Toolbar, CssBaseline, useScrollTrigger, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, InputLabel, MenuItem } from '@mui/material'
import { useEstados } from './hooks/useEstados'
import { useMunicipios } from './hooks/useMunicipios'
import { useSelectedMunicipioInfo } from './hooks/useSelectedMunicipioInfo'
import ButtonAppBar from './components/NavBar'

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
  };

  return (
    <>
      <ButtonAppBar />

      <Typography variant="h4" gutterBottom m={3}>
        Seletor de estados e municípios
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            sx={{mb: 2.5}}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Selecione o estado</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Selecione o estado"
                value={selectedEstado}
                onChange={handleEstadoUpdate}
              >
                <MenuItem value="">Selecione o estado</MenuItem>
                {estados.map((estado) => (
                  <MenuItem key={estado.id} value={estado.sigla}>{estado.nome}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{mb: 2.5}}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Selecione o municipio</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Selecione o municipio"
                value={selectedMunicipio}
                onChange={handleMunicipioUpdate}
              >
              <MenuItem>Selecione o municipio</MenuItem>
              {municipios.map((municipio) => (
                <MenuItem key={municipio.id} value={municipio.id}>{municipio.nome}</MenuItem>
              ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>



      <Typography variant="h4" gutterBottom m={3}>
        Informações do município
      </Typography>

      {municipioInfo != '' ? (
        <div className="container">
          <TableContainer component={Paper} sx={{mt: 5}}>
            <Table sx={{minWidth: 659}} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='center'>ID</TableCell>
                  <TableCell align='center'>Nome</TableCell>
                  <TableCell align='center'>Microrregião</TableCell>
                  <TableCell align='center'>Mesorregião</TableCell>
                  <TableCell align='center'>UF (sigla)</TableCell>
                  <TableCell align='center'>Região</TableCell>
                </TableRow>
              </TableHead> 
              <TableBody>
                <TableRow>
                  <TableCell align='center'>{municipioInfo.id}</TableCell>
                  <TableCell align='center'>{municipioInfo.nome}</TableCell>
                  <TableCell align='center'>{municipioInfo.microrregiao.nome}</TableCell>
                  <TableCell align='center'>{municipioInfo.microrregiao.mesorregiao.nome}</TableCell>
                  <TableCell align='center'>{municipioInfo.microrregiao.mesorregiao.UF.sigla}</TableCell>
                  <TableCell align='center'>{municipioInfo.microrregiao.mesorregiao.UF.regiao.nome}</TableCell>
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
                  <TableCell align='center'>UF (sigla)</TableCell>
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