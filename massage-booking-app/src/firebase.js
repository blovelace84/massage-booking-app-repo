// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUbgbT2jHH0h_gyloevBDc4Lt8XMVLXY0",
  authDomain: "massagebookingapp-cf3bd.firebaseapp.com",
  projectId: "massagebookingapp-cf3bd",
  storageBucket: "massagebookingapp-cf3bd.firebasestorage.app",
  messagingSenderId: "641528076835",
  appId: "1:641528076835:web:907aea34a1289e81336f96",
  measurementId: "G-K0HBFB63WE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);