import React, { useState } from "react";
import "./Register.css"; 
import { useNavigate } from "react-router-dom";
import logo from './Image/logo.png';

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User registered with:", { firstName, lastName, email, password, phone });

    navigate("/Login");
  };

  return (
    <div className="register-container">
      <div className="logo">
      <h1>Hardik Herbals</h1>
      <img src={logo} alt="logo"   />
  </div>
      <div className="form-section">
        <h2>Let's Get Started</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Phone Number:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91"
              required
            />
          </div>
          <button type="submit" className="submit-btn">Finish Up</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
