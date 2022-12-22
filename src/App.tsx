import { ChangeEvent, useEffect, useState } from 'react'
import axios from 'Axios'
import { Box, Container, FormControl, Select, Typography, Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, InputLabel } from '@mui/material'
import './App.css'

type IBGEEstadoResponse = {
  id: number
  sigla: string
  nome: string
}

type IBGEEMunicipioResponse = {
  id: number
  nome: string
  municipio: []
}

type IBGEEMunicipioInfoResponse = {
  id: number
  nome: string
  microrregiao: {
    id: number
    nome: string
    mesorregiao: {
      id: number
      nome: string
      UF: {
        id: number
        sigla: string
        nome: string
        regiao: {
          id: number
          sigla: string
          nome: string
        }
      }
    }
  }
  municipioInfo: []
}

function App() {

  const [estados, setEstados] = useState<IBGEEstadoResponse[]>([])
  const [municipios, setMunicipios] = useState<IBGEEMunicipioResponse[]>([])
  const [municipioInfo, setMunicipioInfo] = useState<IBGEEMunicipioInfoResponse[]>([])
  const [estadoSelecionado, setEstadoSelecionado] = useState('')
  const [municipioSelecionado, setMunicipioSelecionado] = useState('')

  useEffect(() => {
    // Fazendo GET na API de estados disponibilizada pelo IBGE e carregando os dados na varável
    axios
    .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then((response) => {
      setEstados(response.data)
    })  
  }, [])

  useEffect(() => {
    // Fazendo GET na API de municípios disponibilizada pelo IBGE e carregando os dados na varável
    axios
    .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`)
    .then((response) => {
      setMunicipios(response.data)
    })  
  }, [estadoSelecionado])

  useEffect(() => {
    municipioSelecionado != '' ? axios
    .get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${municipioSelecionado}`)
    .then((response) => {
      setMunicipioInfo(response.data)
    }) : console.log('Ótimo, você não selecionou um município')
  }, [municipioSelecionado])

  // Função para tratamento do estado selecionado no primeiro select
  function handleEstadoSelecionado(event: ChangeEvent<HTMLSelectElement>) {
    const estado = event.target.value
    setEstadoSelecionado(estado)
    console.log('Estado selecionado: '+estado)
  }

  // Função para tratamento do municipio selecionado no primeiro select
  function handleMunicipioSelecionado(event: ChangeEvent<HTMLSelectElement>) {
    const municipio = event.target.value
    setMunicipioSelecionado(municipio)
    console.log('Municipio selecioando: '+municipio)
  }

  return (
    <>
      <h1>
        Seletor de estados e municípios
      </h1>

      <div className="container">
        <select name='estado' id='estado' value={estadoSelecionado} onChange={handleEstadoSelecionado}>
          <option value="">Selecione o estado</option>
          {estados.map((estado) => (
            <option key={estado.id} value={estado.sigla}>
              {estado.nome}
            </option>
          ))}
        </select>

        <select name='municipio' id='municipio' value={municipioSelecionado} onChange={handleMunicipioSelecionado}>
          <option value="">Selecione o município</option>
          {municipios.map((municipio) => (
            <option key={municipio.id} value={municipio.id}>
              {municipio.nome}
            </option>
          ))}
        </select>
      </div>


      {municipioSelecionado != '' ? (
        
        <TableContainer component={Paper} sx={{mt: 3}}>
        <Table sx={{minWidth: 659}} aria-label='simple table'>
          <TableHead>
            <TableRow>
              {/* <TableCell align='center'>
                Sigla do estado selecionado
              </TableCell> */}
              <TableCell align='center'>
                ID do município
              </TableCell>
              <TableCell align='center'>
                Nome do município
              </TableCell>
              <TableCell align='center'>
                Microrregião
              </TableCell>
              <TableCell align='center'>
                Mesorregião
              </TableCell>
              <TableCell align='center'>
                UF
              </TableCell>
              <TableCell align='center'>
                Região  
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              {/* <TableCell align='center'>
                {estadoSelecionado}
              </TableCell> */}
              <TableCell align='center'>
                {municipioInfo.id}
              </TableCell>
              <TableCell align='center'>
                {municipioInfo.nome}
              </TableCell>
              <TableCell align='center'>
                
              </TableCell>
              <TableCell align='center'>
                
              </TableCell>
              <TableCell align='center'>
                {estadoSelecionado}
              </TableCell>
              <TableCell align='center'>
                
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>) : ''}
    </>
  )
}

export default App
