import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import IBGE_API from "../../api/IBGE_API";
import type { IEstados } from "../../types";

interface EstadoSliceType {
	estados: IEstados[];
	status: string | null;
}

const initialState: EstadoSliceType = {
	estados: [],
	status: "",
};

export const estadosFetch = createAsyncThunk(
	"estados/estadosFetch",
	async () => {
		try {
			const response = await IBGE_API.get('estados');
			if (response.status === 200) {
				const data = await response.data as IEstados[];
				return data;
			}
		} catch (error) {

		}
	}
);

export const estadosSlice = createSlice({
	name: "estados",
	initialState,
	reducers: {},
	extraReducers: function (builder) {
		builder.addCase(estadosFetch.pending, (state, action) => {
			state.status = "pending";
		});
		builder.addCase(estadosFetch.rejected, (state, action) => {
			state.status = "rejected";
		});
		builder.addCase(estadosFetch.fulfilled, (state, action) => {
			state.status = "fulfilled";
			state.estados = action.payload as IEstados[];
		});
	},
});

export default estadosSlice.reducer;
