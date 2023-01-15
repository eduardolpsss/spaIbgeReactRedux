import { useEffect, useState } from "react";

export interface Regiao {
  id: number;
  sigla: string;
  nome: string;
}

export interface IEstado {
  id: number;
  sigla: string;
  nome: string;
  regiao: Regiao;
}

export const useEstados = () => {
  const [estados, setEstados] = useState<IEstado[]>([]);

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => response.json())
      .then((data) => setEstados(data));
  }, []);

  return {
    estados
  };
};
