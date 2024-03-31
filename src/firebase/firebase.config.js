// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4G0EUmTEnoaGUOOz2knRmfJNBVS-_0YU",
  authDomain: "auth-64ca6.firebaseapp.com",
  projectId: "auth-64ca6",
  storageBucket: "auth-64ca6.appspot.com",
  messagingSenderId: "631889956655",
  appId: "1:631889956655:web:ff5ea47b70f2ce11ff1bda",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
