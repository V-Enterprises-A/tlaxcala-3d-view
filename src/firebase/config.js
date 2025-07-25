// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore/lite";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQ3NpeC08a7QvjVdgy5R2pKTtFk0T_5RQ",
    authDomain: "tlaxcala-views.firebaseapp.com",
    projectId: "tlaxcala-views",
    storageBucket: "tlaxcala-views.firebasestorage.app",
    messagingSenderId: "805657331476",
    appId: "1:805657331476:web:ee9d64051b9955db81e401",
    measurementId: "G-K9F6KWT5LV"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirestoreDB = getFirestore(FirebaseApp);
// const analytics = getAnalytics(FirebaseApp);