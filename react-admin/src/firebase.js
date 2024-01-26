import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAVPC5qc0oLMomTZ6vkIwNy4PncJg6wuTQ",
  authDomain: "water-level-a7373.firebaseapp.com",
  databaseURL: "https://water-level-a7373-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "water-level-a7373",
  storageBucket: "water-level-a7373.appspot.com",
  messagingSenderId: "261030377562",
  appId: "1:261030377562:web:a8515653cfb7bc07cfc063",
  measurementId: "G-Z88EZ66GVP"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);