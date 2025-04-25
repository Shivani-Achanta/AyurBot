import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Home.css";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="left-content">
          <h1>For Doctors</h1>
          <Link to="/login-doctor"><button>Login</button></Link>
          <p>
            Don't have an account? <Link to="/register-doctor">Register</Link>
          </p>
        </div>
        <div className="right-content">
          <h1>For Patients</h1>
          <Link to="/login-patient"><button>Login</button></Link>
          <p>
            Don't have an account? <Link to="/register-patient">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;