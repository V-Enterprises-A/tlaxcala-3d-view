import { Preload, useGLTF } from '@react-three/drei';
import { createSlice } from '@reduxjs/toolkit';

export const churchSlice = createSlice({
    name: 'DataChurch',
    initialState: {
        id: 2,
        Name: 'Capilla Jesus del Rio',
        Information: 'Situada en una tranquila esquina del centro histórico, la Capilla Jesús del Río es una joya poco conocida que ofrece una experiencia íntima con el pasado colonial de Tlaxcala. Aunque modesta en tamaño, su arquitectura de influencia renacentista y su cúpula sobre el crucero la convierten en un espacio singular y armonioso.\r\rEsta capilla ha sido un punto de reunión espiritual durante siglos, y su atmósfera serena invita a la contemplación y la pausa. El interior, sencillo pero acogedor, conserva una sensación de recogimiento difícil de encontrar en otras construcciones más concurridas.',
        PathToModel: './models/exConventoSF.glb',
        isPreload: false,
        isLoadingData: false
    },
    reducers: {
        SetChurchData: (state, action) => {
            // console.log(action);
            // state.id = action.payload.id;
            state.Name = action.payload.Name;
            state.Information = action.payload.Information;
            state.PathToModel = action.payload.PathToModel;
            state.isLoadingData = false;
        },
        ChangeData: (state) => {
            state.Name = 'Iglesia Y';
            state.Information = 'Information Y';
        },
        ObjPreload: (state) => {
            state.isPreload = true;
            useGLTF.preload(state.PathToModel);
        },
        ObjLoaded: (state) => {
            state.isPreload = false;
        },
        LoadingChurchData: (state) => {
            state.isLoadingData = true;
        },
    },
})

// Action creators are generated for each case reducer function
export const { LoadingChurchData, SetChurchData, ChangeData, ObjPreload, ObjLoaded } = churchSlice.actions;