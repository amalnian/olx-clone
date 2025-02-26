import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config"; 
import Logo from "../../olx-logo.png";
import "./Login.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      
      toast.success("Login successful! ", { position: "top-right" });

      navigate("/");
    } catch (error) {
      toast.error("Login failed! Check your credentials.", { position: "top-right" });

      console.log(error);
    }
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        <a style={{ cursor: "pointer" }} onClick={() => navigate("/signup")}>
          Signup
        </a>
      </div>
    </div>
  );
}

export default Login;
