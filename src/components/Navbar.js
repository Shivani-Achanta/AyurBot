import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <Link to="/" className="logo-link">
          <img src="/images/logo.png" alt="Company Logo" className="logo" />
        </Link>
      </header>
    </div>
  );
};

export default Navbar;
