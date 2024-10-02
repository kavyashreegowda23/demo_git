import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Leaveapply.css';

const LeaveApply = () => {
  const [employeeID, setEmployeeID] = useState('');
  const [fullName, setFullName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [leaveType, setLeaveType] = useState('Vacation');
  const [reasonForLeave, setReasonForLeave] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Log the form data
    console.log('Form submitted!');
    console.log('Employee ID:', employeeID);
    console.log('Full Name:', fullName);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    console.log('Leave Type:', leaveType);
    console.log('Reason for Leave:', reasonForLeave);

    // Navigate to the Admin Inbox page
    navigate('/AdmInbox');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Leave Form</h2>
        <div className="form-group">
          <label htmlFor="employeeID">Employee ID:</label>
          <input
            type="text"
            id="employeeID"
            value={employeeID}
            onChange={(e) => setEmployeeID(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="leaveType">Leave Type:</label>
          <select
            id="leaveType"
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
          >
            <option value="Vacation">Vacation</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Personal Leave">Personal Leave</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="reasonForLeave">Reason for Leave:</label>
          <textarea
            id="reasonForLeave"
            value={reasonForLeave}
            onChange={(e) => setReasonForLeave(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LeaveApply;
