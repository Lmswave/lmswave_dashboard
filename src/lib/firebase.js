// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAevwQqFlwJxYNzxNdOF_4-cz8O-Da7Hxc",
  authDomain: "lmsproject-a89a5.firebaseapp.com",
  projectId: "lmsproject-a89a5",
  storageBucket: "lmsproject-a89a5.firebasestorage.app",
  messagingSenderId: "92240274222",
  appId: "1:92240274222:web:c7589332e62f56fe7c50bf",
  measurementId: "G-3XLRDSGK6T"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth instance
export const auth = getAuth(app);
