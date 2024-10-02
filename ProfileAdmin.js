import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Profile.css';

const ProfileAdmin = () => {
    const navigate = useNavigate(); 
    const [profile, setProfile] = useState({
        name: 'Amir Khan',
        email: 'amir.khan@example.com',
        phone: '123-456-7890',
        address: '123 Green Street, Herbal City, HC 56789',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value,
        });
    };

    const handleSave = () => {
        console.log('Profile saved:', profile);
    };

    const handleLogout = () => {
        // Perform any logout actions here (e.g., clearing tokens, etc.)
        console.log('User logged out');
        
        // Redirect to the login page
        navigate('/login');
    };

    return (
        <div className="profile-container">
            <h2 className="profile-title">Admin Profile</h2>
            <div className="profile-section">
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    disabled
                />
            </div>
            <div className="profile-section">
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                />
            </div>
            <div className="profile-section">
                <label>Phone number:</label>
                <input
                    type="text"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                />
            </div>
            <div className="profile-section">
                <label>Address:</label>
                <input
                    type="text"
                    name="address"
                    value={profile.address}
                    onChange={handleChange}
                />
            </div>
            <div className="profile-section">
                <label>Change password:</label>
                <input
                    type="password"
                    name="password"
                    value={profile.password}
                    onChange={handleChange}
                    placeholder="Enter new password"
                />
            </div>
            <div className="profile-section">
                <button className="save-button" onClick={handleSave}>
                    Save Changes
                </button>
                <button className="logout-button" onClick={handleLogout}>
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default ProfileAdmin;
