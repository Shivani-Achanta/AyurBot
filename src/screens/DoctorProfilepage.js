import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import DoctorNavbar from "../components/DoctorNavbar";

const HealthDashboard = () => {
  const [doctorName, setDoctorName] = useState("");
  const [doctorEmail, setDoctorEmail] = useState("");
  const navigate = useNavigate(); // Get the navigation function

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken && decodedToken.doctor) {
        setDoctorName(decodedToken.doctor.name); // Use default value if name is undefined
        setDoctorEmail(decodedToken.doctor.email); // Use default value if email is undefined
        // You can add more properties if needed
      }
    }
  }, []);

  const defaultImageUrl =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/776080fd7b4da4e0b3316a1d9c9be0858f1222a31196c6de648fc77a974b8b72?apiKey=370ce3c2a20944c1b14e584940571da5&";

  const [profilePicUrl, setProfilePicUrl] = useState(
    localStorage.getItem("profilePicUrl") || defaultImageUrl
  );
  const fileInputRef = useRef(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicUrl(reader.result);
        localStorage.setItem("profilePicUrl", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMyAppointmentsClick = () => {
    // Navigate to My Appointments screen with patient email state
    navigate("/doc-appointments", { state: { doctorEmail: doctorEmail } });
  };

  const handleProfilePicClick = () => {
    fileInputRef.current.click();
  };

  // Define appointmentData array
  const appointmentData = [
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7c67ebff89bf368a7d3ff1a3de8d3e0d7b903dd9f2d0533635ca5e01a9bb03df?apiKey=370ce3c2a20944c1b14e584940571da5&",
      consultation: "Consultation with Dr. Raj",
      date: "5th Jan, 2023",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/27109c8458a9853bd98e61225f0f7f673e715f11c62ebb1070515f051cdb749a?apiKey=370ce3c2a20944c1b14e584940571da5&",
      consultation: "Consultation with Dr. Raj",
      date: "5th Jan, 2023",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e702e993bd380a1a14cce09f836a5fbd84e4e7f366e64e904bf8efb714180e6b?apiKey=370ce3c2a20944c1b14e584940571da5&",
      consultation: "Consultation with Dr. Raj",
      date: "5th Jan, 2023",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c2494d7be5e1d190f3f6cc063ad671f41f2a1f559f5084e50db7fb219cd4ee06?apiKey=370ce3c2a20944c1b14e584940571da5&",
      consultation: "Consultation with Dr. Raj",
      date: "5th Jan, 2023",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/30f91ac0192c024f091703943fe5bb5d1d349fa4318b1f2cc9eb87d6d2c0a488?apiKey=370ce3c2a20944c1b14e584940571da5&",
      consultation: "Consultation with Dr. Raj",
      date: "5th Jan, 2023",
    },
  ];

  return (
    <BigContainer>
      <DoctorNavbar />
      <MainContainer>
        <BackButton to="/doctor-home">Back</BackButton>
        <ProfileSection>
          <ProfileImageContainer onClick={handleProfilePicClick}>
            {profilePicUrl && (
              <ProfileImage src={profilePicUrl} alt="Namaste, DOC" />
            )}
            <ProfileImageInput
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileInputChange}
            />
            {!profilePicUrl && <DragDropText>Click to Upload</DragDropText>}
          </ProfileImageContainer>
          <Greeting>Namaste, {doctorName}</Greeting>
          <PatientEmail>Email: {doctorEmail}</PatientEmail>
          <Tagline>Your personal guide to Ayurvedic health</Tagline>
          <Navigation>
            <NavItem onClick={handleMyAppointmentsClick}>
              My Appointments
            </NavItem>
          </Navigation>
          <SubHeading>Appointment History</SubHeading>
        </ProfileSection>
        {/* <AppointmentList>
        {appointmentData.map((appointment, index) => (
          <AppointmentInfo key={index}>
            <div>
              <AppointmentImage
                src={appointment.imgSrc}
                alt={"Appointment with Dr. Raj"}
              />
              <AppointmentDetails>
                <AppointmentTitle>{appointment.consultation}</AppointmentTitle>
                <AppointmentDate>Date: {appointment.date}</AppointmentDate>
              </AppointmentDetails>
            </div>
            <ViewPrescription>View Prescription</ViewPrescription>
          </AppointmentInfo>
        ))}
      </AppointmentList> */}
      </MainContainer>
    </BigContainer>
  );
};

const BigContainer = styled.main`
  width: 100%;
  margin-top: 0px;
  background-color: #fff; /* Set background color to white */
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: -4px;
  padding: 114px 76px 0;
  background-color: #fff; /* Set background color to white */
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
  align-items: center; /* Center align child elements */
`;

const ProfileImageContainer = styled.div`
  position: relative;
`;

const ProfileImage = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
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

const Greeting = styled.h1`
  color: #0d171c;
  margin: 10px 0;
`;

const Tagline = styled.p`
  color: #4f8096;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 10px;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 12px;
`;

const NavItem = styled.button`
  justify-content: center;
  border-radius: 12px;
  background-color: ${(props) => props.background};
  color: ${(props) => (props.background === "#e8f0f2" ? "#0d171c" : "#f7fafc")};
  display: flex;
  padding: 10px 16px;
  border: none;
  cursor: pointer;
`;

const SubHeading = styled.h2`
  color: #0d171c;
  margin: 20px 0;
`;

const AppointmentList = styled.section`
  margin-top: 12px;
`;

const AppointmentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f7fafc;
  margin-top: 12px;
  width: 100%;
  padding: 8px 16px;
`;

const AppointmentImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  object-fit: cover;
`;

const AppointmentDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
`;

const AppointmentTitle = styled.h3`
  color: #0d171c;
  font-weight: 500;
  font-size: 16px;
`;

const AppointmentDate = styled.time`
  color: #4f8096;
  font-weight: 400;
  font-size: 14px;
`;

const ViewPrescription = styled.button`
  padding: 6px 16px;
  background-color: #e8f0f2;
  border-radius: 12px;
  color: #0d171c;
  border: none;
  cursor: pointer;
`;

const PatientEmail = styled.p`
  color: #4f8096;
  margin-bottom: 5px;
`;

export default HealthDashboard;
