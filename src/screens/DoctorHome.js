import React from "react";
import DoctorNavbar from "../components/DoctorNavbar";
import DoctorHomeHero from "../components/DoctorHomeHero";

const DoctorHome = () => {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <DoctorNavbar />
      <DoctorHomeHero />
    </div>
  );
};

export default DoctorHome;
