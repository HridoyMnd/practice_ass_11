// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjad3abxIfpIjAzjro6Av2ZP4he6Xf--Y",
  authDomain: "form-email-password-1586b.firebaseapp.com",
  projectId: "form-email-password-1586b",
  storageBucket: "form-email-password-1586b.firebasestorage.app",
  messagingSenderId: "78106268173",
  appId: "1:78106268173:web:b5451edfdc2289be7cbb44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

