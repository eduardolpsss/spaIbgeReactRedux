// Description: This file contains all the types used in the project

// Interface dos estados 
export interface IEstados {
	id: number;
	sigla: string;
	nome: string;
}

// Interface dos municipios
export interface IMunicipios {
	id: string;
	nome: string;
}

// Interface das informações
export interface IInfoMunicipio {
	id: number,
	nome: string,
	municipio: {
		id: number,
		nome: string,
		microrregiao: {
			id: number,
			nome: string
			mesorregiao: {
				id: number,
				nome: string
				UF: {
					id: number
					nome: string
					sigla: string
					regiao: {
						id: number
						nome: string
						sigla: string
					}
				}
			}
		}
		'regiao-imediata': {
			id: number,
			nome: string,
			'regiao-intermediaria': {
				id: number,
				nome: string
				UF: {
					id: number
					nome: string
					sigla: string
					regiao: {
						id: number,
						nome: string
						sigla: string
					}
				}
			}
		}
	}
}

// Interface das informações dos municipios (usado no componente Info)
export interface IInfoResumo {
	Município: {
		id: number,
		nome: string,
		uf: string,
		regiao: string,
		microrregiao: string,
		mesorregiao: string,
	}
}