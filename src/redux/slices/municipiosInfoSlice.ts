import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { IInfoMunicipio } from "../../types";

interface InfoSliceType {
	info: IInfoMunicipio;
	status: string | null;
}

const initialState: InfoSliceType = {
	info: {} as IInfoMunicipio,
	status: "",
};

export const infoFetch = createAsyncThunk(
	"cidades/infoFetch",
	async (id: string) => {
		try {
			const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${id}/distritos`);
			if (response.status === 200) {
				const data = await response.data[0] as IInfoMunicipio;
				return data;
			}
		} catch (error) {

		}
	}
);

export const municipioInfoSlice = createSlice({
	name: "info",
	initialState,
	reducers: {},
	extraReducers: function (builder) {
		builder.addCase(infoFetch.pending, (state, action) => {
			state.status = "pending";
		});
		builder.addCase(infoFetch.rejected, (state, action) => {
			state.status = "rejected";
		});
		builder.addCase(infoFetch.fulfilled, (state, action) => {
			state.status = "fulfilled";
			state.info = action.payload as IInfoMunicipio;
		});
	},
});

export default municipioInfoSlice.reducer;
