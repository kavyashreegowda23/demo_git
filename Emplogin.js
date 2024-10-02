import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import logo from './Image/logo.png';

import './EmpLogin.css';
 
function Emplogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  

  const handleSubmit = (event) => {
    event.preventDefault();
    
   
    console.log("Email:", email);
    console.log("Password:", password);

    
    navigate("/employee/home");
  };

  return (
    <div className="container">
      <div className="login-form">
        <div className="title">
        <img src={logo} alt="logo" width="80px" height="80px"  />
          <h2>Login as Employee</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Log In</button>
          <a href="https://example.com">Forgot password</a>
        </form>
      </div>
    </div>
  );
}

export default Emplogin;
