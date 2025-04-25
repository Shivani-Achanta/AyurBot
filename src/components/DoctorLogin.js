// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import "../components/DoctorLogin.css"; // Import your CSS
// import { Link } from "react-router-dom"; // Import Link for routing
// import { useNavigate } from "react-router-dom";

// function DoctorLogin() {
//   const navigate = useNavigate(); // Get the navigation function
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5000/api/logindoctor", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: formData.email,
//         password: formData.password,
//       }),
//     });

//     const json = await response.json();

//     if (!json.success) {
//       if (json.error === "This email does not exist") {
//         alert("This email does not exist.");
//       } else if (json.error === "Invalid Password or emailid") {
//         alert("Invalid Password");
//       }
//     } else {
//       // Store token in localStorage
//       localStorage.setItem("token", data.token);
//       navigate("/doctor-home");
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="login-page">
//         <div className="login-container">
//           <h2>Doctor Login</h2>
//           <form onSubmit={handleLogin}>
//             <div className="form-group">
//               <label htmlFor="username">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <button type="submit">Login</button>
//             </div>
//             <div className="forget">
//               <Link to="/register-doctor">SignUP</Link>
//               <Link to="/doctor-forgot">Forgot Password?</Link>{" "}
//               {/* Link to the "Forgot Password" page */}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DoctorLogin;

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../components/DoctorLogin.css";
import { Link } from "react-router-dom";

function DoctorLogin() {
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
      const response = await fetch("http://localhost:5000/api/logindoctor", {
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

      // Redirect to doctor home page
      window.location.href = "/doctor-home";
    } catch (error) {
      alert(error.message || "An error occurred");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-pagee">
        <div className="login-containerr">
          <h2>doctor Login</h2>
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
              <Link to="/register-doctor">Sign Up</Link>
              <Link to="/doctor-forgot">Forgot Password?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DoctorLogin;
