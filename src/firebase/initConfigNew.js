// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8jRbVC-MYCQbBLm0FmClSkk0F_iCGHec",
  authDomain: "tp-integrador-react.firebaseapp.com",
  projectId: "tp-integrador-react",
  storageBucket: "tp-integrador-react.appspot.com",
  messagingSenderId: "613769707235",
  appId: "1:613769707235:web:5151da77f8b5fb36accfd6"
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);