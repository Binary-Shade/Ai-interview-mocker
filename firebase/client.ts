import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAjHOHlfeQ43kBcRz0p-dVasAWzWw6Ujr4",
  authDomain: "ai-mocker-a1f07.firebaseapp.com",
  projectId: "ai-mocker-a1f07",
  storageBucket: "ai-mocker-a1f07.firebasestorage.app",
  messagingSenderId: "968773995054",
  appId: "1:968773995054:web:bd91ad442c3589d16a6dbf",
  measurementId: "G-YLZ12KBF52"
};

// Initialize Firebase
const app =initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const db = getFirestore(app);