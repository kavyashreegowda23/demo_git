import React from 'react';

const Profile = () => {
    const userData = {
        empId: 'Emp008',
        name: 'Akshatha',
        contactNumber: '9975453903',
        gender: 'Female',
        dateOfBirth: '2001/11/28',
        email: 'akshatha23@gmail.com'
    };

    return (
        
            <div style={{ width: '80%', padding: '50px', backgroundColor: '#90EE90' }}>
                <h1>Dashboard</h1>
                <h2>Profile</h2>
                <div style={{ padding: '20px', backgroundColor: '#A9A9A9', borderRadius: '10px', maxWidth: '400px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <img src="path_to_profile_icon" alt="profile" style={{ width: '50px', borderRadius: '50%' }} />
                        <h3>{userData.name}</h3>
                    </div>
                    <p><strong>Emp:</strong> {userData.empId}</p>
                    <p><strong>Name:</strong> {userData.name}</p>
                    <p><strong>Contact Number:</strong> {userData.contactNumber}</p>
                    <p><strong>Gender:</strong> {userData.gender}</p>
                    <p><strong>Date of Birth:</strong> {userData.dateOfBirth}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                </div>
            </div>
    
    );
};

export default Profile;
