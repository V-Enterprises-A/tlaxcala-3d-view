import axios from "axios";

export const firebaseApi = axios.create(
    {
        baseURL: ''
    }
);