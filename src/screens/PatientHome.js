// import React from "react";
// import PatientHomeNavbar from "../components/PatientHomeNavbar";
// import PatientTelemedicine from "../components/PatientTelemedicine";
// import Prakruthiinfo from "../components/Prakruthiinfo";
// import PatientBanner from "../components/PatientBanner";

// const PatientHome = () => {
//   return (
//     <div style={{ backgroundColor: "#fff" }}>
//       <PatientHomeNavbar />
//       <PatientBanner />
//       <PatientTelemedicine />
//       {/* <Prakruthiinfo /> */}
//     </div>
//   );
// };

// export default PatientHome;

import React, { useEffect } from "react";
import PatientHomeNavbar from "../components/PatientHomeNavbar";
import PatientBanner from "../components/PatientBanner";

const PatientHome = () => {
  useEffect(() => {
    // Enable chatbot script
    window.__BP_CONFIG__ = {
      enable: true,
    };
    // Clean up function to disable chatbot script when component unmounts
    return () => {
      window.__BP_CONFIG__ = {
        enable: false,
      };
    };
  }, []);

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <PatientHomeNavbar />
      <PatientBanner />
      {/* Render other components */}
    </div>
  );
};

export default PatientHome;
