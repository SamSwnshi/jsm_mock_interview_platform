// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);