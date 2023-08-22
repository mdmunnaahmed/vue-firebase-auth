// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDa3k6jwqN6YhOwzZk81mXubmtMlVb8NbE",
  authDomain: "auth-munns.firebaseapp.com",
  databaseURL:
    "https://auth-munns-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "auth-munns",
  storageBucket: "auth-munns.appspot.com",
  messagingSenderId: "619798287814",
  appId: "1:619798287814:web:985d215b4bc263c2618ec7",
  measurementId: "G-S6L03S7TT0",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore();
export default db;
