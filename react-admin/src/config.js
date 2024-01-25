import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCa8sFzQJO8UVi12cyEPjqroK7MHtCj5IE",
  authDomain: "water-level-b0a41.firebaseapp.com",
  databaseURL:
    "https://water-level-b0a41-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "water-level-b0a41",
  storageBucket: "water-level-b0a41.appspot.com",
  messagingSenderId: "1089836599414",
  appId: "1:1089836599414:web:e40b38de54ff90b48b7757",
  measurementId: "G-VVVC8GC3BL",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
