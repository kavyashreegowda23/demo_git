import React, { useState } from 'react';
import './Employee.css';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([
        { id: 'EMP01', name: 'Ashok', gender: 'Male', contact: '1234567891', status: 'Active' },
        { id: 'EMP02', name: 'Bhavith', gender: 'Male', contact: '9876543219', status: 'Active' },
        { id: 'EMP03', name: 'Savitha', gender: 'Female', contact: '4590876543', status: 'Inactive' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [form, setForm] = useState({
        name: '',
        gender: '',
        employeeId: '',
        contact: '',
        status: '',
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSave = () => {
        if (!form.name || !form.gender || !form.employeeId || !form.contact || !form.status) {
            alert('Please fill in all fields');
            return;
        }

        if (!/^\d{10}$/.test(form.contact)) {
            alert('Contact number must be 10 digits.');
            return;
        }

        if (isEditing) {
            const updatedEmployees = employees.map((emp) =>
                emp.id === form.employeeId ? { ...form } : emp
            );
            setEmployees(updatedEmployees);
            setIsEditing(false);
        } else {
            const newEmployee = {
                id: form.employeeId,
                name: form.name,
                gender: form.gender,
                contact: form.contact,
                status: form.status,
            };
            setEmployees([...employees, newEmployee]);
        }

        handleCancel(); // Clear form inputs after saving
    };

    const handleCancel = () => {
        setForm({
            name: '',
            gender: '',
            employeeId: '',
            contact: '',
            status: '',
        });
        setIsEditing(false);
    };

    const handleEdit = (employee) => {
        setForm(employee);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        const updatedEmployees = employees.filter((emp) => emp.id !== id);
        setEmployees(updatedEmployees);
    };

    const filteredEmployees = employees.filter((emp) =>
        emp.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="employee-manager-container">
            <div className="content">
                <h2>Employee List</h2>
                <form className="employee-form" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                    />
                    <select
                        name="gender"
                        value={form.gender}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Employee ID"
                        name="employeeId"
                        value={form.employeeId}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="Contact Number"
                        name="contact"
                        value={form.contact}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="Status"
                        name="status"
                        value={form.status}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="form-buttons">
                        <button className="save-button" type="button" onClick={handleSave}>
                            {isEditing ? 'Update' : 'Save'}
                        </button>
                        <button className="cancel-button" type="button" onClick={handleCancel}>
                            Cancel
                        </button>
                    </div>
                </form>

                <table className="employee-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Contact Number</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEmployees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.contact}</td>
                                <td>{employee.status}</td>
                                <td>
                                    <button className="edit-button" onClick={() => handleEdit(employee)}>
                                        Edit
                                    </button>
                                    <button
                                        className="delete-button"
                                        onClick={() => handleDelete(employee.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmployeeList;
