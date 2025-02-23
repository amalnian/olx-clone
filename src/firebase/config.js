import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtw5LnX82k0WjU6SwloC4TUNkGZdH8y9c",
  authDomain: "olx-clone-82fe0.firebaseapp.com",
  projectId: "olx-clone-82fe0",
  storageBucket: "olx-clone-82fe0.appspot.com", // ✅ Fixed storageBucket
  messagingSenderId: "402419085465",
  appId: "1:402419085465:web:6a84e566f7a1164cd58808"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ Explicitly export Firebase Auth
const db = getFirestore(app); // ✅ Explicitly export Firestore

export { app, auth, db };
