// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAVXbVxfkVS54t2YigNTPCYMDPgQoBDAw",
  authDomain: "massage-appointment-sett-68406.firebaseapp.com",
  projectId: "massage-appointment-sett-68406",
  storageBucket: "massage-appointment-sett-68406.firebasestorage.app",
  messagingSenderId: "976391566217",
  appId: "1:976391566217:web:586bc9b232ea0c047f6758",
  measurementId: "G-MPK3SX9GSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };