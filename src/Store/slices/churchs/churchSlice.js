import { useGLTF } from '@react-three/drei';
import { createSlice } from '@reduxjs/toolkit';

export const churchSlice = createSlice({
    name: 'DataChurch',
    initialState: {
        id: 1,
        Name: '',
        Information: '',
        PathToModel: '',
        isPreload: false,
        isLoadingData: false,
        exist:false
    },
    reducers: {
        SetChurchData: (state, action) => {
            state.id = action.payload.id;
            state.Name = action.payload.Name;
            state.Information = action.payload.Information;
            state.PathToModel = action.payload.PathToModel;
            state.isLoadingData = false;
            state.exist = true;
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
        NextChurch: (state) => {
            state.id = state.id + 1
        },
        PrevChurch: (state) => {
            state.id > 1 ? state.id = state.id - 1 : state.id = 1;
        }

    },
})

// Action creators are generated for each case reducer function
export const { LoadingChurchData, SetChurchData, ChangeData, ObjPreload, ObjLoaded } = churchSlice.actions;