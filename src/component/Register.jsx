import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

export default function Register() {
  const usernameRegex = /^[a-zA-Z0-9]{3,16}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.dir(e.target);
    console.log("Value:" + value);
  };

  const validate = () => {
    const newErrors = {};

    if (!usernameRegex.test(formData.username)) {
      newErrors.username =
        "Username must be 3-16 characters long and contain only letters and numbers.";
    }
    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.";
    }
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid phone number.";
    }
    if (!usernameRegex.test(formData.loginName)) {
      newErrors.loginName =
        "Username must be 3-16 characters long and contain only letters and numbers.";
    }
    if (!passwordRegex.test(formData.loginPassword)) {
      newErrors.loginPassword =
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.";
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
      console.log("Form Data Submitted:", formData);
    }
  };
  const {username,password} = errors

  return (
    <section className="register">
      <div className="container">
        <div className="register-box">
          <img src="./images/logo.avif" alt="img" />
          <form method="post" id="register-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              required
              value={formData.username}
              onChange={handleChange}
              name="username"
            />
            {errors.username && (
              <p style={{ color: "red" }}>{errors.username}</p>
            )}
            <input
              type="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              name="password"
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
            <input
              type="email"
              placeholder="E-mail address"
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            <input
              type="tel"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              name="phone"
            />
            {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
            <button type="submit">Sign Up</button>
          </form>
          <div className="info-login">
            <span>Have an account? </span>
            <Link to="/login">Sign In</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
