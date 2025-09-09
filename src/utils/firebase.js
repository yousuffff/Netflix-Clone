// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3zFhxSoOBZEkLK8_OW2WggsjlNoEbJM8",
  authDomain: "netflixgpt-bc18d.firebaseapp.com",
  projectId: "netflixgpt-bc18d",
  storageBucket: "netflixgpt-bc18d.firebasestorage.app",
  messagingSenderId: "856257665665",
  appId: "1:856257665665:web:ce2844174b829e6e014b80",
  measurementId: "G-FX9XT025E8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
