// firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU0Wa4u3dIXVZjmYT3vUxAFwjtzepn_i4",
  authDomain: "i-can-life.firebaseapp.com",
  projectId: "i-can-life",
  storageBucket: "i-can-life.appspot.com",
  messagingSenderId: "205872110638",
  appId: "1:205872110638:web:7806cc88373851bc4553bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
