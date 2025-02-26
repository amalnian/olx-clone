import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FirebaseContext } from "./store/Context.jsx";
import { app, auth, db } from "./firebase/config.js"; 
import { getFirestore } from "firebase/firestore";
import Context from './store/Context.jsx';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseContext.Provider value={{ app, db, auth }}> 
      <Context>
        <App />
        <ToastContainer position="top-right" autoClose={3000} /> 
      </Context>
    </FirebaseContext.Provider>
  </StrictMode>
);
