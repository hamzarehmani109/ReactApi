import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        user_type: "",
        email: "",
        password: "",
        contact: "",
        password_confirmation: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });

        // Clear error on change
        setErrors({ ...errors, [e.target.name]: '' });
    }

    const validate = () => {
        let tempErrors = {};
        if (!data.name || data.name.length < 2) tempErrors.name = 'Name is required';
        if (!data.user_type) tempErrors.user_type = 'User type is required';
        if (!data.email.includes('@')) tempErrors.email = 'Email is not valid';
        if (!data.password) tempErrors.password = 'Password is required';
        if (data.contact && data.contact.length < 10) tempErrors.contact = 'Contact must be at least 10 digits';
        if (data.password !== data.password_confirmation) tempErrors.password_confirmation = "Passwords don't match";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return; // Stop the submission if validation fails

        try {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('user_type', data.user_type);
            formData.append('email', data.email);
            formData.append('password', data.password);
            formData.append('contact', data.contact);
            formData.append('password_confirmation', data.password_confirmation);

            const response = await axios.post('https://muzamilbackend.gmgsolution.com/api/register', formData);
            if (response.status === 200) {
                alert('Register Successfully');
                navigate('/login');
            } else if (response.status === 400) {
                alert('Validation error');
            } else {
                alert('Server error');
            }
        } catch (error) {
            console.error(error);
            alert('Registration failed');
        }
    }

    return (
        <div>
        <div className="login-box">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                    />
                    <label>Name</label>
                    {errors.name && <div className="error text-danger mb-5">{errors.name}</div>}
                </div>
                <div className="user-box">
                    <input
                        type="text"
                        name="user_type"
                        value={data.user_type}
                        onChange={handleChange}
                    />
                    <label>User Type</label>
                    {errors.user_type && <div className="error  text-danger mb-5">{errors.user_type}</div>}
                </div>
                <div className="user-box">
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                    />
                    <label>Email</label>
                    {errors.email && <div className="error  text-danger mb-5">{errors.email}</div>}
                </div>
                <div className="user-box">
                    <input
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                    />
                    <label>Password</label>
                    {errors.password && <div className="error  text-danger mb-5" >{errors.password}</div>}
                </div>
                <div className="user-box">
                    <input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        onChange={handleChange}
                    />
                    <label>Password Confirmation</label>
                    {errors.password_confirmation && <div className="error  text-danger mb-5 "  >{errors.password_confirmation}</div>}
                </div>
                <div className="user-box">
                    <input
                        type="number"
                        name="contact"
                        value={data.contact}
                        onChange={handleChange}
                    />
                    <label>Contact</label>
                    {errors.contact && <div className="error  text-danger mb-5">{errors.contact}</div>}
                </div>
                <button className="btn" type="submit" style={{ color: "white" }}>Submit</button>
            </form>
        </div>
        
        </div>
        
    );
};

export default Register;
