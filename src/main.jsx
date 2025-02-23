import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FirebaseContext } from "./store/FirebaseContext.jsx";
import { app } from "./firebase/config.js"; // Ensure correct Firebase import
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Initialize Firestore
const db = getFirestore(app); 

createRoot(document.getElementById("root")).render(
  <FirebaseContext.Provider value={{ app, db }}> {/* ✅ Pass `db` here */}
    <StrictMode>
      <App />
    </StrictMode>
  </FirebaseContext.Provider>
);
