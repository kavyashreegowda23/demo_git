import React from 'react';
import './HomeAdmin.css'

const HomeAdmin = () => {
    return (
        <div className="admin-container">
           
            <main className="admin-content">
                <section className="dashboard">
                    <h2 className="dashboard-title">Dashboard</h2>
                    <div className="welcome-box">
                        <h3>Hi admin</h3>
                        <p>Welcome to Leave Management</p>
                        <p>Employee activity updated here.</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomeAdmin;
