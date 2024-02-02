// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALnNmu2Ar9nPlXZEdMH2418ce83ZNMHB4",
  authDomain: "ig-clone-886a5.firebaseapp.com",
  projectId: "ig-clone-886a5",
  storageBucket: "ig-clone-886a5.appspot.com",
  messagingSenderId: "979209097641",
  appId: "1:979209097641:web:e1da76cf07615f2ff974b8",
  measurementId: "G-H5NNTG5LCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };