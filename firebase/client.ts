// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUMJje1foSN4jGFtkBhhNRL-mBIwzAyrw",
  authDomain: "mock-interview-5160e.firebaseapp.com",
  projectId: "mock-interview-5160e",
  storageBucket: "mock-interview-5160e.firebasestorage.app",
  messagingSenderId: "49480521341",
  appId: "1:49480521341:web:a86c968d70981a07bd8314",
  measurementId: "G-464K8TDLS2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);