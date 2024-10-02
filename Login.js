import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import logo from './Image/logo.png';

function Login() {
  const navigate = useNavigate();

  const handleEmployeeClick = () => {
    navigate('/Emplogin');
  };

  const handleAdminClick = () => {
    navigate('/AdmLogin');
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={logo} alt="logo" width="100vh" />
        <h1>HARDIK HERBAL</h1>
      </div>
      <div className="login-box">
        <h2 style={{ fontFamily: 'WonderThaw' }}>Continue As</h2>
        <div className="button-container">
          <button className="login-button" onClick={handleEmployeeClick}>Employee</button>
          <button className="login-button" onClick={handleAdminClick}>Admin</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
