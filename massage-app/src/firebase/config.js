// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhYg7TGPgf3aGvzMgy8RjshMYymFH2oEk",
  authDomain: "massage-booking-app-e24ff.firebaseapp.com",
  projectId: "massage-booking-app-e24ff",
  storageBucket: "massage-booking-app-e24ff.firebasestorage.app",
  messagingSenderId: "1024712043510",
  appId: "1:1024712043510:web:1f82a98247327dec99b5d7",
  measurementId: "G-9JKNHP6S2C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);