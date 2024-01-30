// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-website-9dcbf.firebaseapp.com",
  projectId: "blog-website-9dcbf",
  storageBucket: "blog-website-9dcbf.appspot.com",
  messagingSenderId: "551244523437",
  appId: "1:551244523437:web:67996a412be26b2442a324"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);