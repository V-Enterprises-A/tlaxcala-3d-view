import axios from "axios";
import { FirestoreDB } from "../firebase/config";
import { collection } from "firebase/lite";

export const firebaseApi = axios.create(
    {
        baseURL: ''
    }
);