// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRgNPOcI5pjZVJKM9aZ9CSQhCQkCh0kAk",
  authDomain: "tp-netflix-cac.firebaseapp.com",
  projectId: "tp-netflix-cac",
  storageBucket: "tp-netflix-cac.appspot.com",
  messagingSenderId: "1078011574689",
  appId: "1:1078011574689:web:8f14422f4d4e31858273e0"
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);