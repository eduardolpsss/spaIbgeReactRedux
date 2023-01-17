import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { IMunicipios } from "../../types";

interface CitySliceType {
	municipios: IMunicipios[];
	status: string | null;
}

const initialState: CitySliceType = {
	municipios: [],
	status: "",
};

export const municipiosFetch = createAsyncThunk(
	"municipios/municipiosFetch",
	async (sigla: string) => {
		try {
			const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sigla}/municipios`);
			if (response.status === 200) {
				const data = await response.data as IMunicipios[];
				return data;
			}
		} catch (error) {

		}
	}
);

export const municipioSlice = createSlice({
	name: "municipios",
	initialState,
	reducers: {},
	extraReducers: function (builder) {
		builder.addCase(municipiosFetch.pending, (state, action) => {
			state.status = "pending";
		});
		builder.addCase(municipiosFetch.rejected, (state, action) => {
			state.status = "rejected";
		});
		builder.addCase(municipiosFetch.fulfilled, (state, action) => {
			state.status = "fulfilled";
			state.municipios = action.payload as IMunicipios[];
		});
	},
});

export default municipioSlice.reducer;
