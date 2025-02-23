import React, { useState,useContext } from "react";
import { FirebaseContext } from "../../store/FirebaseContext"; 
import Logo from "../../olx-logo.png";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const {auth} = useContext(FirebaseContext)

  const handleLogin = (e)=>{
    e.preventDefault()

  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
