import React from 'react';
import './AdmInbox.css'

const InboxAdmin = () => {
    const requests = [
        { name: 'Ashok', empID: 'EMP01', startDate: '2024/08/20', endDate: '2024/08/28', type: 'Vacation', reason: 'Family vacation' },
        { name: 'Akshatha', empID: 'EMP05', startDate: '2024/08/15', endDate: '2024/08/20', type: 'Sick Leave', reason: 'Medical reason' }
    ];

    const handleAccept = (id) => {
        console.log("Accepted request for ID:", id);
    };

    const handleReject = (id) => {
        console.log("Rejected request for ID:", id);
    };

    return (
        <div className="inbox-container">
            <div className="inbox-content">
                <h3>Requests to leave</h3>
                {requests.map((req, index) => (
                    <div key={index} className="request-box">
                        <p>Name: {req.name}</p>
                        <p>Employee ID: {req.empID}</p>
                        <p>Start Date: {req.startDate}</p>
                        <p>End Date: {req.endDate}</p>
                        <p>Leave Type: {req.type}</p>
                        <p>Leave Reason: {req.reason}</p>
                        <button className="accept-button" onClick={() => handleAccept(req.empID)}>Accept</button>
                        <button className="reject-button" onClick={() => handleReject(req.empID)}>Reject</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InboxAdmin;
