// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4lXtkMjNcynVjW-HWODggNVt35YZf7U0",
  authDomain: "splitr-d3d02.firebaseapp.com",
  projectId: "splitr-d3d02",
  storageBucket: "splitr-d3d02.appspot.com",
  messagingSenderId: "19636093381",
  appId: "1:19636093381:web:3cde31cd941ed7ea740bac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth(app);


