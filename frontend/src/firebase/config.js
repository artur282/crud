// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyABl50xDNNlaRo9Kj6tuXkKfNQPtb24DDE",
  authDomain: "registro-estudiantes-e00fd.firebaseapp.com",
  projectId: "registro-estudiantes-e00fd",
  storageBucket: "registro-estudiantes-e00fd.firebasestorage.app",
  messagingSenderId: "285732829576",
  appId: "1:285732829576:web:fde513f16d8d1f0b65623d",
  measurementId: "G-CQHK4KX3WQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);




