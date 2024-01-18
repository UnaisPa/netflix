// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcGhxCBSmWsSGXZ2yqA-gtOjMHQltleCs",
    authDomain: "netflixclone-59008.firebaseapp.com",
    projectId: "netflixclone-59008",
    storageBucket: "netflixclone-59008.appspot.com",
    messagingSenderId: "88194754399",
    appId: "1:88194754399:web:b952484accaa2e380578ea",
    measurementId: "G-YF6G4ZFZV9"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);