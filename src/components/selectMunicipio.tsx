import Select from "react-select";
import { useMunicipios } from "../hooks/useMunicipios";
import { SelectHTMLAttributes, useState } from "react";
import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, InputLabel, MenuItem } from "@mui/material";

export const SelectMunicipio = ({ uf }: { uf: string }) => {
  const [selectedMunicipioId, setSelectedMunicipioId] = useState<number | null>(null);
  const [selectedMunicipioNome, setSelectedMunicipioNome ] = useState<string | undefined>(undefined);
  const [selectedMunicipioUf, setSelectedMunicipioUf ] = useState<string | undefined>(undefined);
  const [selectedMunicipioRegiao, setSelectedMunicipioRegiao ] = useState<string | undefined>(undefined);
  const [selectedMunicipioMicrorregiao, setSelectedMunicipioMicrorregiao ] = useState<string | undefined>(undefined);
  const [selectedMunicipioMesorregiao, setSelectedMunicipioMesorregiao ] = useState<string | undefined>(undefined);

  const { municipios } = useMunicipios({
    uf
  });

  const municipioOptions = municipios.map((municipio) => ({
    value: municipio.id,
    label: municipio.nome,
    uf: municipio.microrregiao.mesorregiao.UF.sigla,
    regiao: municipio.microrregiao.mesorregiao.UF.regiao,
    microrregiao: municipio.microrregiao.nome,
    mesorregiao: municipio.microrregiao.mesorregiao.nome
  }));

  const handleMunicipioUpdate = (
    event: any
  ) => {
    // Setando informações do município selecionado
    const municipioId = Number(event.value);
    setSelectedMunicipioId(municipioId);
    const municipioNome = String(event.label);
    setSelectedMunicipioNome(municipioNome);
    const municipioUf = String(event.uf);
    setSelectedMunicipioUf(municipioUf);
    const municipioRegiao = String(event.regiao.nome);
    setSelectedMunicipioRegiao(municipioRegiao);
    const municipioMicrorregiao = String(event.microrregiao);
    setSelectedMunicipioMicrorregiao(municipioMicrorregiao);
    const municipioMesorregiao = String(event.mesorregiao);
    setSelectedMunicipioMesorregiao(municipioMesorregiao);
  };

  function infoTable () {
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
                  {selectedMunicipioNome}
                </TableCell>
                <TableCell align="center">{selectedMunicipioUf}</TableCell>
                <TableCell align="center">{selectedMunicipioRegiao}</TableCell>
                <TableCell align="center">{selectedMunicipioMicrorregiao}</TableCell>
                <TableCell align="center">{selectedMunicipioMesorregiao}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }


  return (
    <div>
      <Select
      options={municipioOptions}
      placeholder="Selecione um município"
      onChange={handleMunicipioUpdate as any}
    />  

    {selectedMunicipioId && infoTable()}

    </div>
  );
};
