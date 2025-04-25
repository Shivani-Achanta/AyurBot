// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import { Link } from "react-router-dom"; // Import Link for routing
// import { useNavigate } from "react-router-dom";
// import "../components/PatientLogin.css"; // Import your CSS

// function PatientRegister() {
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

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5000/api/createpatient", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//       }),
//     });

//     const json = await response.json();

//     if (!json.success) {
//       // Check if the email already exists
//       if (json.error === "This email already exists") {
//         alert("This email already exists. Please use a different email.");
//       } else {
//         alert("Enter Valid Credentials");
//       }
//     } else {
//       // User was successfully created
//       navigate("/patient-home");
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="login-pagee">
//         <div className="login-containerr">
//           <h2>Patient Register</h2>
//           <form onSubmit={handleRegister}>
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="username">Email</label>
//               <input
//                 type="text"
//                 id="email"
//                 name="email"
//                 value={formData.username}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="form-groupp">
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
//             <div className="form-groupp">
//               <button type="submit">Register</button>
//             </div>
//             <div>
//               <Link to="/login-patient">
//                 Already have an account? Login here
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PatientRegister;

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../components/PatientLogin.css";

function PatientRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
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

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createpatient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const json = await response.json();

    if (!json.success) {
      if (json.error === "This email already exists") {
        alert("This email already exists. Please use a different email.");
      } else {
        alert("Enter Valid Credentials");
      }
    } else {
      // If registration is successful, store the token in local storage
      localStorage.setItem("token", json.token);
      // Redirect to patient home page
      navigate("/patient-home");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-pagee">
        <div className="login-containerr">
          <h2>Patient Register</h2>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
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
              <button type="submit">Register</button>
            </div>
            <div>
              <Link to="/login-patient">
                Already have an account? Login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PatientRegister;
