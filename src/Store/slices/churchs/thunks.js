// import { firebaseApi } from "../../../api/firebaseApi";
import { LoadingChurchData, ObjPreload, SetChurchData, ObjLoaded } from "./churchSlice";
import { FirestoreDB } from "../../../firebase/config";
import { doc, getDoc  } from "firebase/firestore/lite";

export const getChurch = (church = 1) => {

    return async (dispatch, getState) => {
        dispatch(LoadingChurchData());

        //TODO: realizar peticion HTTP
        const docRef = doc(FirestoreDB, `Churchs`, `${church}`);
        const docSnap = await getDoc(docRef);
        
        if (!docSnap.exists()) return; 


        //XXX dispatch(SetData());
        dispatch(SetChurchData({ id: church, Name: docSnap.data().Name, Information: docSnap.data().Information, PathToModel: docSnap.data().PathToModel }));

        await dispatch(ObjPreload());

        dispatch(ObjLoaded());

    }
}