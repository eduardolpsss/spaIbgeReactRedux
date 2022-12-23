import { useEffect, useState } from 'react';

export interface IMunicipio {
    id: number;
    nome: string;
}

export const useMunicipios = ({ uf }) => {
    const [municipios, setMunicipios] = useState<IMunicipio[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!uf) return;

        setLoading(true);

        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
            .then((response) => response.json())
            .then((data) => setMunicipios(data))
            .then(() => setLoading(false));
    }, [uf]);
    
    return { municipios, loading };
}