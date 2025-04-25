import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useLocation } from "react-router-dom"; // Import useLocation to access location state

const MyAppointmentScreen = () => {
  const [appointments, setAppointments] = useState([]);
  const location = useLocation(); // Get the current location object

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    const doctorEmail = location.state.doctorEmail; // Access patientEmail from location state
    try {
      const response = await axios.post(
        "http://localhost:5000/api/fetchdocappointments",
        {
          doctorEmail: doctorEmail,
        }
      );
      const appointmentsWithDetails = await Promise.all(
        response.data.map(async (appointment) => {
          const patientInfo = await fetchPatientInfo(appointment.patient);
          const doctorInfo = await fetchDoctorInfo(appointment.doctor);
          return {
            ...appointment,
            patientName: patientInfo.name,
            doctorPrakruthi: doctorInfo.prakruthi,
          };
        })
      );
      setAppointments(appointmentsWithDetails);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  // Function to fetch patient information based on patient ID
  const fetchPatientInfo = async (patientId) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/patient/${patientId}`
      );
      return response.data; // Return the patient's information
    } catch (error) {
      console.error("Error fetching patient information:", error);
      return {}; // Return an empty object if there's an error
    }
  };

  // Function to fetch doctor information based on doctor ID
  const fetchDoctorInfo = async (doctorId) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/doctor/${doctorId}`
      );
      return response.data; // Return the doctor's information
    } catch (error) {
      console.error("Error fetching doctor information:", error);
      return {}; // Return an empty object if there's an error
    }
  };

  return (
    <Container>
      <Title>My Appointments</Title>
      <AppointmentList>
        {appointments.map((appointment) => (
          <AppointmentItem key={appointment._id}>
            <AppointmentInfo>
              <AppointmentDetail>Date: {appointment.date}</AppointmentDetail>
              <AppointmentDetail>
                Patient : {appointment.patientName}
              </AppointmentDetail>
              <AppointmentDetail>
                Message: {appointment.message}
              </AppointmentDetail>
              <AppointmentDetail>
                Prakruthi: {appointment.prakruthi}
              </AppointmentDetail>
            </AppointmentInfo>
          </AppointmentItem>
        ))}
      </AppointmentList>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const AppointmentList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const AppointmentItem = styled.li`
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const AppointmentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppointmentDetail = styled.span`
  margin-bottom: 5px;
`;

export default MyAppointmentScreen;
