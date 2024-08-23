// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-trip-planner-922a0.firebaseapp.com",
  projectId: "ai-trip-planner-922a0",
  storageBucket: "ai-trip-planner-922a0.appspot.com",
  messagingSenderId: "827516620512",
  appId: "1:827516620512:web:f1c3ac46caa2adc75d8a85",
  measurementId: "G-KK5MN9LZNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
