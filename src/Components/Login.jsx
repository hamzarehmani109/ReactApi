import React, { useState } from 'react';
import "./Login.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Make sure to import useNavigate correctly

function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    function handleOnChange(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        if (!data.email.includes('@')) tempErrors.email = 'Email is not valid';
        if (!data.password) tempErrors.password = 'Password is required';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    }
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            const response = await axios.post('https://muzamilbackend.gmgsolution.com/api/login', {
                email: data.email,
                password: data.password,
            });

            if (response.status === 200) {
                alert('Login successful');
                navigate('/');
            } else if (response.status === 400) {
                alert('Validation error');
            } else {
                alert('Server error');
            }
        } catch (error) {
            console.error(error);
            alert('Login failed');
        }
    };

    return (
        <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input 
                        type="text" 
                        name="email" 
                      
                        value={data.email} 
                        onChange={handleOnChange} 
                    />
                    <label>Email</label>
                    {errors.email && <div className="error  text-danger mb-5">{errors.email}</div>}
                </div>
                <div className="user-box">
                    <input 
                        type="password" 
                        name="password" 
                        value={data.password} 
                        onChange={handleOnChange} 
                    />
                    <label>Password</label>
                    {errors.password && <div className="error  text-danger mb-5" >{errors.password}</div>}
                </div>
                <button className="btn" type="submit"  style={{color:"white"}}>Submit</button>
            </form>
        </div>
    );
}

export default Login;
