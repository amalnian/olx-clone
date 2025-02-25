import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FirebaseContext } from "./store/Context.jsx";
import { app, auth, db } from "./firebase/config.js"; // Ensure correct Firebase import
import { getFirestore } from "firebase/firestore"; // Import Firestore
import Context from './store/Context.jsx'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseContext.Provider value={{ app, db, auth }}> {/* ✅ Pass `db` here */}
      <Context>
        <App />
      </Context>
    </FirebaseContext.Provider>
  </StrictMode>
);
