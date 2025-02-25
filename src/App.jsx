import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { AuthContext, FirebaseContext } from './store/Context';
import { onAuthStateChanged } from 'firebase/auth';
import Create from './Pages/Create'

function App() {
  const { setUser } = useContext(AuthContext);
  const { auth } = useContext(FirebaseContext); // ✅ Use `auth` correctly

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe(); // ✅ Cleanup function to prevent memory leaks
  }, [auth]); // ✅ Add `auth` to dependency array

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/create" element={<Create />} /> 
      </Routes>
    </Router>
  );
}

export default App;
