// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhZNPXXj73hogXePU_AwzHaIDB4PlEyNU",
    authDomain: "login-registration-101.firebaseapp.com",
    projectId: "login-registration-101",
    storageBucket: "login-registration-101.appspot.com",
    messagingSenderId: "54698360772",
    appId: "1:54698360772:web:5a1285c1aa6c8613a26e91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;