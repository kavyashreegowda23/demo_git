import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const EmpNav = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
       
        navigate('/login'); 
    };

    return (
        <div style={{ width: '20%', backgroundColor: '#006400', padding: '20px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
            <div>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    
                    <h3>Employee</h3>
                </div>
                <Link to="/employee/Home" >
                    <button style={{ width: '100%', padding: '10px', marginBottom: '10px', backgroundColor: 'white', color: 'black' }}>Home</button>
                </Link>
                <Link to="/employee/Leaveapply">
                    <button style={{ width: '100%', padding: '10px', marginBottom: '10px', backgroundColor: 'white', color: 'black' }}>Leave Apply</button>
                </Link>
                <Link to="/employee/Inbox" >
                    <button style={{ width: '100%', padding: '10px', marginBottom: '10px', backgroundColor: 'white', color: 'black' }}>Inbox</button>
                </Link>
                <Link to="/employee/Profile">
                    <button style={{ width: '100%', padding: '10px', backgroundColor: 'white', color: 'black' }}>Profile</button>
                </Link>
            </div>
            <button onClick={handleLogout} style={{ width: '100%', padding: '10px', backgroundColor: 'white', color: 'black' }}>Log out</button>
        </div>
    );
};

export default EmpNav;