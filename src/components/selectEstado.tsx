import { SelectHTMLAttributes, useState } from "react";
import Select from "react-select";
import { useEstados } from "../hooks/useEstados";

export const SelectEstado = ({ onChange }: { onChange: (uf: string) => void }) => {
  const { estados } = useEstados();
  const [selectedEstado, setSelectedEstado] = useState<number | null>(null);

  const estadoOptions = estados.map((estado) => ({
    value: estado.id,
    label: estado.nome
  }));

  const selectedOptionEstado = estadoOptions.find(
    (e) => e.value === selectedEstado
  );

  const handleEstadoUpdate = (event: SelectHTMLAttributes<HTMLOptionElement>) => {
    const selectedEstado = Number(event.value);
    const selectedUf = estados.find((e) => e.id === event.value)?.sigla;
    onChange(selectedUf as string);
  };

  return (
    <Select
      placeholder="Selecione um estado"
      options={estadoOptions}
      value={selectedOptionEstado}
      onChange={handleEstadoUpdate as any}
    />
  );
};
