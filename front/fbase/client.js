import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDvUljyboev8HnD9pzDQA2Tvd2nKzBcne8",
  authDomain: "todobecas-488b8.firebaseapp.com",
  projectId: "todobecas-488b8",
  storageBucket: "todobecas-488b8.appspot.com",
  messagingSenderId: "782544549720",
  appId: "1:782544549720:web:453ba42f2c294a9031972d",
  measurementId: "G-NRV6C37CP7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);