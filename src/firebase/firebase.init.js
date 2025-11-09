// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2HpkxRnv34v_9BiGgEanlLE8YOTqURWw",
  authDomain: "pawmart-project-auth.firebaseapp.com",
  projectId: "pawmart-project-auth",
  storageBucket: "pawmart-project-auth.firebasestorage.app",
  messagingSenderId: "998097231715",
  appId: "1:998097231715:web:27bcd48ad423a334ed3d56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);