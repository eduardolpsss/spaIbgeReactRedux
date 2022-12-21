import { ChangeEvent, useEffect, useState } from 'react'
import axios from 'Axios'
import './App.css'

type IBGEEstadoResponse = {
  id: number
  sigla: string
  nome: string
}

type IBGEEMunicipioResponse = {
  id: number
  nome: string
}

function App() {

  const [estados, setEstados] = useState<IBGEEstadoResponse[]>([])
  const [municipios, setMunicipios] = useState<IBGEEMunicipioResponse[]>([])
  const [estadoSelecionado, setEstadoSelecionado] = useState('0')
  const [municipioSelecionado, setMunicipioSelecionado] = useState('0')

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

  // Função para tratamento do estado selecionado no primeiro select
  function handleEstadoSelecionado(event: ChangeEvent<HTMLSelectElement>) {
    const estado = event.target.value
    setEstadoSelecionado(estado)
  }

  // Função para tratamento do municipio selecionado no primeiro select
  function handleMunicipioSelecionado(event: ChangeEvent<HTMLSelectElement>) {
    const municipio = event.target.value
    setMunicipioSelecionado(municipio)
  }

  return (
    <>
      <h1>
        Seletor de estados e municípios
      </h1>

      <div className="container">
        <select name='estado' id='estado' onChange={handleEstadoSelecionado}>
          <option value="0">Selecione o estado</option>
          {estados.map((estado) => (
            <option key={estado.id} value={estado.sigla}>
              {estado.nome}
            </option>
          ))}
        </select>

        <select name='municipio' id='municipio' value={municipioSelecionado} onChange={handleMunicipioSelecionado}>
          <option value="0">Selecione o município</option>
          {municipios.map((municipio) => (
            <option key={municipio.id} value={municipio.nome}>
              {municipio.nome}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default App
