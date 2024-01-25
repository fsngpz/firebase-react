import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC5BE0z4HKyi8NC9nmeMis7DOXwKeN7tsg",
  authDomain: "reactjs-c5b72.firebaseapp.com",
  databaseURL: "https://reactjs-c5b72-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reactjs-c5b72",
  storageBucket: "reactjs-c5b72.appspot.com",
  messagingSenderId: "63389557512",
  appId: "1:63389557512:web:8fb1c5db3e80d26b0a82bd",
  measurementId: "G-WRK1NJ4VZG"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);