import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../components/DoctorLogin.css"; // Import your CSS
import { Link } from "react-router-dom"; // Import Link for routing
import { useNavigate } from "react-router-dom";

function DoctorRegister() {
  const navigate = useNavigate(); // Get the navigation function
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    specialization: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createdoctor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        specialization: formData.specialization,
      }),
    });

    const json = await response.json();

    if (!json.success) {
      // Check if the email already exists
      if (json.error === "This email already exists") {
        alert("This email already exists. Please use a different email.");
      } else {
        alert("Enter Valid Credentials");
      }
    } else {
      // User was successfully created
      localStorage.setItem("token", json.token);
      navigate("/doctor-home");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-page">
        <div className="login-container">
          <h2>Doctor Register</h2>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
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
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Visible to Patients"
              />
            </div>
            <div className="form-group">
              <label htmlFor="specialization">Specialization</label>
              <input
                type="text"
                id="specialization"
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <button type="submit">Register</button>
            </div>
            <div className="forget">
              <Link to="/login-doctor">
                Already have an account? Login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DoctorRegister;
