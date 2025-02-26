import React, { useContext, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import { AuthContext, FirebaseContext } from "./store/Context";
import { onAuthStateChanged } from "firebase/auth";
import Post from "./store/PostContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = lazy(() => import("./Pages/Login"));
const Signup = lazy(() => import("./Pages/Signup"));
const Create = lazy(() => import("./Pages/Create"));
const View = lazy(() => import("./Pages/ViewPost"));

function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
}

function RedirectIfLoggedIn({ children }) {
  const { user } = useContext(AuthContext);
  return user ? <Navigate to="/" /> : children;
}

function App() {
  const { setUser } = useContext(AuthContext);
  const { auth } = useContext(FirebaseContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <Post>
      <Router>
        <ToastContainer position="top-right" autoClose={3000} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<RedirectIfLoggedIn><Signup /></RedirectIfLoggedIn>} />
            <Route path="/login" element={<RedirectIfLoggedIn><Login /></RedirectIfLoggedIn>} />
            <Route path="/create" element={<ProtectedRoute><Create /></ProtectedRoute>} />
            <Route path="/view" element={<ProtectedRoute><View /></ProtectedRoute>} />
          </Routes>
      </Router>
    </Post>
  );
}

export default App;
