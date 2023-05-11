// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6zkhnEz43-2ENX-j0wrSxCo3JAkY1c6I",
  authDomain: "clone-5a84c.firebaseapp.com",
  projectId: "clone-5a84c",
  storageBucket: "clone-5a84c.appspot.com",
  messagingSenderId: "734234374183",
  appId: "1:734234374183:web:a0b790df636953dc599e02",
  measurementId: "G-4SH1SV9RKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);