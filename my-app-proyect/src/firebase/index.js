// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth } from 'firebase/app';
import { getFirestore } from 'firebase/auth'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtqD3c3MxN53g6-ZwDdAf5IZmBZR-Yyio",
  authDomain: "ecommerce-reysma.firebaseapp.com",
  projectId: "ecommerce-reysma",
  storageBucket: "ecommerce-reysma.appspot.com",
  messagingSenderId: "174969936922",
  appId: "1:174969936922:web:66b081d2961f5d1ba105a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)