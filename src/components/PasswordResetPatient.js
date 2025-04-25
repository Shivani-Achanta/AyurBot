import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./PasswordRestPatient.css"; // Import your CSS for the PatientResetPassword page

function PasswordRestPatient() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    newPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    // Implement the logic to reset the password here

    // After resetting the password, you can redirect the user to a success message or another page.
    navigate("/patient-password-reset-success");
  };

  return (
    <div>
      <Navbar />
      <div className="login-pagee">
        <div className="login-containerr">
          <h2>Patient Reset Password</h2>
          <form onSubmit={handleResetPassword}>
            <div className="form-groupp">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-groupp">
              <button type="submit">Reset Password</button>
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

export default PasswordRestPatient;
