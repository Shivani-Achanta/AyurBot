// // DoctorDropdown component
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const DoctorDropdown = ({ value, onChange }) => {
//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     fetchDoctors();
//   }, []);

//   const fetchDoctors = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/fetchdoc");
//       setDoctors(response.data);
//     } catch (error) {
//       console.error("Error fetching doctors:", error);
//     }
//   };

//   const handleSelectDoctor = (event) => {
//     onChange(event.target.value);
//   };

//   return (
//     <div>
//       <h2>Select a Doctor:</h2>
//       <select value={value} onChange={handleSelectDoctor}>
//         <option value="">Select a doctor</option>
//         {doctors.map((doctor) => (
//           <option key={doctor._id} value={doctor.name}>
//             {doctor.name}
//           </option>
//         ))}
//       </select>
//       {value && <p>Selected Doctor: {value}</p>}
//     </div>
//   );
// };

// export default DoctorDropdown;

// DoctorDropdown component
import React, { useState, useEffect } from "react";
import axios from "axios";

const DoctorDropdown = ({ value, onChange }) => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/fetchdoc");
      setDoctors(response.data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  const handleSelectDoctor = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <h2>Select a Doctor:</h2>
      <select value={value} onChange={handleSelectDoctor}>
        <option value="">Select a doctor</option>
        {doctors.map((doctor) => (
          <option key={doctor._id} value={doctor.name}>
            {`${doctor.name} - ${doctor.specialization}`}
          </option>
        ))}
      </select>
      {value && <p>Selected Doctor: {value}</p>}
    </div>
  );
};

export default DoctorDropdown;
