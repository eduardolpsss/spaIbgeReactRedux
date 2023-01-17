import { configureStore } from "@reduxjs/toolkit";
import estadoReducer, { estadosFetch } from "../redux/slices/estadoSlice";
import muncipioReducer from "../redux/slices/municipioSlice";
import infoReducer from "../redux/slices/municipiosInfoSlice";

export const store = configureStore({
    reducer: {
        // Add your reducers here
        estados: estadoReducer,
        municipios: muncipioReducer,
        info: infoReducer
    },
});

store.dispatch(estadosFetch());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;