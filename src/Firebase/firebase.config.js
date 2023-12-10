// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGTMzOr7dfjJ1BDPksK9qstBNZtvOEY0Y",
  authDomain: "talim-libary.firebaseapp.com",
  projectId: "talim-libary",
  storageBucket: "talim-libary.appspot.com",
  messagingSenderId: "1093260459093",
  appId: "1:1093260459093:web:870f69d84837191ae0a8dc",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
