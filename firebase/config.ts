
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTJ2EwqCk3w3Q8NvERagemZl2PedsLrW4",
  authDomain: "creatorsflow-b20e4.firebaseapp.com",
  projectId: "creatorsflow-b20e4",
  storageBucket: "creatorsflow-b20e4.appspot.com",
  messagingSenderId: "828107883249",
  appId: "1:828107883249:web:493476c58d2a0699b95f50",
  measurementId: "G-YEM0086MH9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const authfunc = getAuth(app)
