// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_KEY,
  authDomain: "dwelling-mern.firebaseapp.com",
  projectId: "dwelling-mern",
  storageBucket: "dwelling-mern.appspot.com",
  messagingSenderId: "895301359520",
  appId: "1:895301359520:web:665d4eb196e0841246b6c5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
