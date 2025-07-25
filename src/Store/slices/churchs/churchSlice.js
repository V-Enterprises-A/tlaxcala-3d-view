import { Preload, useGLTF } from '@react-three/drei';
import { createSlice } from '@reduxjs/toolkit';

export const churchSlice = createSlice({
    name: 'DataChurch',
    initialState: {
        id: 0,
        Name: 'Iglesia X',
        Information: 'Information X',
        PathToModel: 'path',
        ModelStruct: '<></>',
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
            state.ModelStruct = action.ModelStruct; 
            state.isLoadingData = false;
        },
        ChangeData: (state) => {
            state.Name = 'Iglesia Y';
            state.Information = 'Information Y';
        },
        ObjPreload: (state) => {
            state.isPreload = true;
            // useGLTF.preload(state.PathToModel);
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
export const {LoadingChurchData, SetChurchData, ChangeData, ObjPreload, ObjLoaded } = churchSlice.actions;