// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYSER6L-Vj84N82YZ33yGG5gmzZr9YYZ4",
  authDomain: "todolist-877cc.firebaseapp.com",
  projectId: "todolist-877cc",
  storageBucket: "todolist-877cc.appspot.com",
  messagingSenderId: "349182943862",
  appId: "1:349182943862:web:636dcebcfbd50e96423557",
  measurementId: "G-PMQH4T80N3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

window.firebase = app;
window.analytics = analytics;
window.auth = auth;