import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./PatientForgot.css"; // Import your CSS for the PatientForgotPassword page

function PatientForgotPassword() {
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

    try {
      const response = await fetch("/api/patientfogot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
        }),
      });

      if (response.ok) {
        // The email was sent successfully. Display a message to the user.
        alert(
          "An email with a password reset link has been sent to your email address."
        );
      } else {
        // Handle the case when the email couldn't be sent (e.g., server error).
        console.log("Request failed with status: " + response.status);
      }
    } catch (error) {
      // Handle any client-side errors.
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-pagee">
        <div className="login-containerr">
          <h2>Patient Forgot Password</h2>
          <form onSubmit={handleSendEmail}>
            <div className="form-groupp">
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
            <div className="form-groupp">
              <button type="submit">Send Email</button>
            </div>
            <div className="forget">
              <Link to="/login-patient">Back to Login</Link>
              <Link to="/register-patient">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PatientForgotPassword;
