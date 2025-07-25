import { firebaseApi } from "../../../api/firebaseApi";
import { LoadingChurchData, ObjPreload, SetChurchData, ObjLoaded } from "./churchSlice";

export const getChurch = (church = 0) => {
    
    return async (dispatch, getState) => {
        dispatch(LoadingChurchData());

        //TODO: realizar peticion HTTP
        const resp = await firebaseApi.get(``);
        // console.log(resp)
        
        //XXX dispatch(SetData());
        dispatch(SetChurchData({Name:resp.data.Name,Information:resp.data.Information,PathToModel:resp.data.PathToModel,ModelStruct:resp.data.ModelStruct}));

        await dispatch(ObjPreload());

        dispatch(ObjLoaded());
    }
}