import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom"; // Import Link for routing
import { useNavigate } from "react-router-dom";
import "./DoctorForgot.css"; // Import your CSS for the ForgotPassword page

function DoctorForgot() {
  const navigate = useNavigate(); // Get the navigation function
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    // Implement the logic to send a password reset email here

    // After sending the email, you can redirect the user to a success message or another page.
    navigate("/password-reset-success");
  };

  return (
    <div>
      <Navbar />
      <div className="forgot-password-page">
        <div className="forgot-password-container">
          <h2>Forgot Password</h2>
          <form onSubmit={handleSendEmail}>
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
              <button type="submit">Send Email</button>
            </div>
            <div className="link-to-login-signup">
              <Link to="/login-doctor">Back to Login</Link>
              <Link to="/register-doctor">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DoctorForgot;
