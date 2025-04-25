import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import PatientNavbar from "../components/PatientHomeNavbar";

const HealthDashboard = () => {
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const [predictedPrakriti, setPredictedPrakriti] = useState(""); // State for predicted Prakriti
  const fileInputRef = useRef(null);
  const navigate = useNavigate(); // Get the navigation function

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setPatientName(decodedToken.patient.name);
      setPatientEmail(decodedToken.patient.email);
      setProfilePicUrl(localStorage.getItem("profilePicUrl"));

      // Fetch predicted Prakriti data when component mounts
      fetchPredictedPrakriti(decodedToken.patient.email);
    }
  }, []);

  // Function to fetch predicted Prakriti data
  const fetchPredictedPrakriti = async (email) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/viewprakruthi",
        {
          email: email,
        }
      );

      if (!response.data || response.data.length === 0) {
        throw new Error("No data received");
      }

      // Set the predicted Prakriti state
      setPredictedPrakriti(response.data[0].Predicted_PRAKRITI);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  const handleMyAppointmentsClick = () => {
    // Navigate to My Appointments screen with patient email state
    navigate("/my-appointments", { state: { patientEmail: patientEmail } });
  };

  const handleFileInputChange = (event) => {
    // Code for handling file input...
  };

  const handleProfilePicClick = () => {
    // Code for handling profile pic click...
  };

  return (
    <Screen>
      <PatientNavbar />
      <MainContainer>
        <BackButton to="/patient-home">Back</BackButton>
        <ProfileSection>
          <ProfileImageContainer onClick={handleProfilePicClick}>
            {profilePicUrl && (
              <ProfileImage
                src={profilePicUrl}
                alt={`Namaste, ${patientName}`}
              />
            )}
            <ProfileImageInput
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileInputChange}
            />
            {!profilePicUrl && <DragDropText>Click to Upload</DragDropText>}
          </ProfileImageContainer>
          <Greeting>Namaste, {patientName}</Greeting>
          <PatientEmail>Email: {patientEmail}</PatientEmail>
          <PredictedPrakriti>
            Predicted Prakriti: {predictedPrakriti}
          </PredictedPrakriti>
          <Navigation>
            <NavItem onClick={handleMyAppointmentsClick}>
              My Appointments
            </NavItem>
          </Navigation>
        </ProfileSection>
      </MainContainer>
    </Screen>
  );
};
// Styled components...

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: -4px;
  padding: 114px 76px 0;
  background-color: #fff; /* Set background color to white */
`;

const Screen = styled.main`
  width: 100%;
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 70px;
  left: 20px;
  background: none;
  border: none;
  color: #0d171c;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
`;

const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 128px; /* Set width and height to create a circular container */
  height: 128px;
  border-radius: 50%; /* Make it circular */
  overflow: hidden; /* Hide overflow to make sure the image is clipped */
`;

const ProfileImage = styled.img`
  width: 100%; /* Make sure the image covers the entire circular container */
  height: 100%;
  object-fit: cover;
`;

const ProfileImageInput = styled.input`
  display: none;
`;

const DragDropText = styled.p`
  color: #1aa3e5;
  font-weight: 700;
  cursor: pointer;
`;

const PatientEmail = styled.p`
  color: #4f8096;
  margin-bottom: 5px;
`;

const Greeting = styled.h1`
  color: #0d171c;
  margin-bottom: 5px;
`;

const Navigation = styled.nav`
  display: flex;
  margin-top: 6px;
  justify-content: space-between;
  gap: 12px;
`;

const NavItem = styled.button`
  justify-content: center;
  border-radius: 12px;
  background-color: ${(props) => props.background};
  color: ${(props) => (props.background === "#e8f0f2" ? "#0d171c" : "#f7fafc")};
  display: flex;
  flex-grow: 1;
  padding: 10px 16px;
  border: none;
  cursor: pointer;
`;

const SubHeading = styled.h2`
  color: #0d171c;
  margin-top: 36px;
`;

const PredictedPrakriti = styled.p`
  // Defined PredictedPrakriti styled component
  color: #4f8096;
  margin-bottom: 5px;
`;

export default HealthDashboard;
