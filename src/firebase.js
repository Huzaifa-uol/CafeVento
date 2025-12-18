import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace these with your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
