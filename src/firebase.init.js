// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOpiEqlNAs-RLzfLgwg0I2pBY9VI5STtU",
    authDomain: "ema-john-simple-6df51.firebaseapp.com",
    projectId: "ema-john-simple-6df51",
    storageBucket: "ema-john-simple-6df51.appspot.com",
    messagingSenderId: "896488637540",
    appId: "1:896488637540:web:cf0ccd9308293d76e20b71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;