import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SettingForm.css';

const  SettingForm = () => {
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://muzamilbackend.gmgsolution.com/api/logged-in-user', {
                    headers: {
                        Authorization: `Bearer 328|bQFmuR7ZRmhzlRUlNLQhkZ5O0h4v9fpm4HDsoyWb4a43d097` // Replace with your actual access token
                    }
                });
                console.log(response.data);
                // Assuming the response contains data that you want to set in your state
                setData(response.data);
            } catch (error) {
                console.error(error);
                alert('Failed to fetch data');
            }
        }
    
        // Call fetchData when the component mounts to fetch data
        fetchData();
    }, []);
    
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
        <div className="login-box2">
            <h2  style={{color:"white", marginTop:"-15px"}}>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="user-box2">
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                    />
                    <label style={{color:"white", marginTop:"-15px"}}>Name</label>
                    {errors.name && <div className="error text-danger mb-5">{errors.name}</div>}
                </div>
                
                <div className="user-box2">
                    <input
                        type="text"
                        name="user_type"
                        value={data.user_type}
                        onChange={handleChange}
                    />
                    <label style={{color:"white", marginTop:"-15px"}}>User Type</label>
                    {errors.user_type && <div className="error  text-danger mb-5">{errors.user_type}</div>}
                </div>
                <div className="user-box2">
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                    />
                    <label style={{color:"white", marginTop:"-15px"}}>Email</label>
                    {errors.email && <div className="error  text-danger mb-5">{errors.email}</div>}
                </div>
                <div className="user-box2">
                    <input
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                    />
                    <label  style={{color:"white", marginTop:"-15px"}}>Password</label>
                    {errors.password && <div className="error  text-danger mb-5" >{errors.password}</div>}
                </div>
                <div className="user-box2">
                    <input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        onChange={handleChange}
                    />
                    <label  style={{color:"white", marginTop:"-15px"}}>Password Confirmation</label>
                    {errors.password_confirmation && <div className="error  text-danger mb-5 "  >{errors.password_confirmation}</div>}
                </div>
                <div className="user-box2">
                    <input
                        type="number"
                        name="contact"
                        value={data.contact}
                        onChange={handleChange}
                    />
                    <label  style={{color:"white", marginTop:"-15px"}}>Contact</label>
                    {errors.contact && <div className="error  text-danger mb-5">{errors.contact}</div>}
                </div>
                <button className="btn2" type="submit" style={{ color: "white",  }}>Save</button>
            </form>
        </div>
    );
};

export default SettingForm;
