import { useEffect, useState } from 'react';

export interface Regiao2 {
    id: number;
    sigla: string;
    nome: string;
}

export interface UF2 {
    id: number;
    sigla: string;
    nome: string;
    regiao: Regiao2;
}


export interface RegiaoIntermediaria {
    id: number;
    nome: string;
    UF: UF2;
}

export interface RegiaoImediata {
    id: number;
    nome: string;
    regiaoIntermediaria: RegiaoIntermediaria;
}

export interface IMunicipioInfo {
    id: number;
    nome: string;
    microrregiao: Microrregiao;
    regiaoImediata: RegiaoImediata;
}

export interface Regiao {
    id: number;
    sigla: string;
    nome: string;
}

export interface UF {
    id: number;
    sigla: string;
    nome: string;
    regiao: Regiao;
}

export interface Mesorregiao {
    id: number;
    nome: string;
    UF: UF;
}

export interface Microrregiao {
    id: number;
    nome: string;
    mesorregiao: Mesorregiao;
}

export const useSelectedMunicipioInfo = ({ id }) => {
    const [ municipioInfo, setMunicipioInfo] = useState<IMunicipioInfo[]>([]);

    useEffect(() => {
        if (id !== '') {
            fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${id}`)
                .then(response => response.json())
                .then(data => {
                    setMunicipioInfo(data);
                });
        } return
    }, [id]);
    
    return { municipioInfo };
}