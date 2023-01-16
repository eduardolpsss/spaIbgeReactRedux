import Select from "react-select";
import { useMunicipios } from "../hooks/useMunicipios";
import { SelectHTMLAttributes, useState } from "react";
import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, InputLabel, MenuItem } from "@mui/material";

import InfoTable from "./InfoTable";

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

  return (
    <div>
      <Select
      options={municipioOptions}
      placeholder="Selecione um município"
      onChange={handleMunicipioUpdate as any}
    />  

    {selectedMunicipioId && <InfoTable {...{selectedMunicipioId, selectedMunicipioNome, selectedMunicipioUf, selectedMunicipioRegiao, selectedMunicipioMicrorregiao, selectedMunicipioMesorregiao}} />}
    </div>
  );
};
