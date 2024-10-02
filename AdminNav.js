import React from 'react';
import './AdminNav.css';
import { NavLink } from 'react-router-dom';


const AdminNav = () => {
    return (
        <nav className="admin-nav">
            <div>
               
                <h3 className="admin-name">Admin</h3>
            </div>
            <div style={{ width: '90%', backgroundColor: '#006400', padding: '10px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '90vh' }}>
                
            <NavLink to="/admin/HomeAdmin">   
   <button style={{ width: '100%', padding: '10px', backgroundColor: 'white', color: 'black', display: 'flex' }}>Home</button>
</NavLink>

<NavLink to="/admin/EmployeeList">
   <button style={{ width: '100%', padding: '10px', backgroundColor: 'white', color: 'black', display: 'flex' }}>Employee List</button>
</NavLink>

<NavLink to="/admin/InboxAdmin">
   <button style={{ width: '100%', padding: '10px', backgroundColor: 'white', color: 'black', display: 'flex' }}>Inbox</button>
</NavLink>

<NavLink to="/admin/ProfileAdmin">
   <button style={{ width: '100%', padding: '10px', backgroundColor: 'white', color: 'black', display: 'flex' }}>Profile</button>
</NavLink>

            </div>
        </nav>
    );
};

export default AdminNav;
