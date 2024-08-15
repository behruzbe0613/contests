import React, { useState } from 'react'
import Register from './Register';
import { Link } from 'react-router-dom';

export default function Login() {
    const usernameRegex = /^[a-zA-Z0-9]{3,16}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};

        if (!usernameRegex.test(formData.username)) {
            newErrors.username = 'Username must be 3-16 characters long and contain only letters and numbers.';
        }
        if (!passwordRegex.test(formData.password)) {
            newErrors.password = 'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            // Handle successful form submission (e.g., send data to server)
            console.log('Form Data Submitted:', formData);
        }
    };
    return (
        <section className="register">
            <div className='container'>
                <div className="register-box">
                    <img src="./images/logo.avif" alt="img" />
                    <form method='post' id='login-form' onSubmit={handleSubmit}>
                        <input type="text" placeholder='Username' required value={formData.username} onChange={handleChange} name='username' />
                        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                        <input type="password" placeholder='Password' required value={formData.password} onChange={handleChange} name='password' />
                        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                        <button type='submit'>Sign In</button>
                    </form>
                    <div className="info-login">
                        <span>Haven't an account? </span>
                        <Link to="/register">Sign Up</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
