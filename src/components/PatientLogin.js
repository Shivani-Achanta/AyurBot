import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../components/PatientLogin.css";
import { Link } from "react-router-dom";

function PatientLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/loginpatient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      // Store token in localStorage
      localStorage.setItem("token", data.token);

      // Redirect to patient home page
      window.location.href = "/patient-home";
    } catch (error) {
      alert(error.message || "An error occurred");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-pagee">
        <div className="login-containerr">
          <h2>Patient Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-groupp">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-groupp">
              <button type="submit">Login</button>
            </div>
            <div className="forget">
              <Link to="/register-patient">Sign Up</Link>
              <Link to="/patient-forgot">Forgot Password?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PatientLogin;
