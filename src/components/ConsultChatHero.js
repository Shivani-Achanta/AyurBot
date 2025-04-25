import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import DoctorDropdown from "./DoctorDropdown";

const MyComponent = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const [prakruthi, setPrakruthi] = useState(""); // Added state for prakruthi

  const handleSubmit = async () => {
    console.log("Submitting appointment...");
    console.log("Selected Doctor:", selectedDoctor);
    console.log("Selected Date:", selectedDate);
    console.log("Query:", query);
    console.log("Patient Email:", email);
    console.log("Prakruthi:", prakruthi);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/createappointment",
        {
          doctorName: selectedDoctor, // Pass the selectedDoctor directly
          date: selectedDate,
          message: query,
          patientEmail: email,
          prakruthi: prakruthi, // Include the prakruthi field
        }
      );

      console.log("Appointment saved successfully:", response.data);

      // Show alert message
      window.alert("Appointment saved successfully!");

      // Refresh the page
      window.location.reload();
    } catch (error) {
      console.error("Error saving appointment:", error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <QuerySection>
          <Icon></Icon>
          <QueryTitle>Type Your Health Query</QueryTitle>
        </QuerySection>
        <QueryInput
          rows="4"
          placeholder="Describe your health concern"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SelectionSection>
          <Step>1</Step>
          <StepDescription>Choose a Doctor</StepDescription>
        </SelectionSection>
        <DoctorDropdown value={selectedDoctor} onChange={setSelectedDoctor} />
        <DateSection>
          <Step>2</Step>
          <StepDescription>Select Appointment Date</StepDescription>
          <DateInput
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </DateSection>
        <PrakruthiSection>
          {" "}
          {/* Section for prakruthi */}
          <Step>3</Step>
          <StepDescription>Select Prakruthi</StepDescription>
          <PrakruthiDropdown
            value={prakruthi}
            onChange={(e) => setPrakruthi(e.target.value)}
          >
            <option value="">Select Prakruthi</option>
            <option value="Vatha">Vatha</option>
            <option value="Kapha">Kapha</option>
            <option value="Pitta">Pitta</option>
            <option value="Vatha-Kapha">Vatha-Kapha</option>
            <option value="Vatha-Pitta">Vatha-Pitta</option>
            <option value="Kapha-Pitta">Kapha-Pitta</option>
            <option value="Vatha-Kapha-Pitta">Vatha-Kapha-Pitta</option>
          </PrakruthiDropdown>
        </PrakruthiSection>
        <EmailSection>
          <Step>4</Step>
          <StepDescription>Enter Email</StepDescription>
          <EmailInput
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </EmailSection>
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 8px 0px #ccc;
  border-radius: 4px;
  max-width: 1440px;
  margin: auto;
  padding: 25px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuerySection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Icon = styled.div`
  color: #fff;
  background-color: #ff5200;
  border-radius: 18.1px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 36px;
  height: 36px;
  margin-right: 10px;
`;

const QueryTitle = styled.div`
  color: #333c4e;
  font: 700 17px/120% Lato, sans-serif;
`;

const QueryInput = styled.textarea`
  width: 100%;
  margin-top: 10px;
  padding: 12px;
  font-size: 14px;
  border-radius: 4px;
  border: 2px solid #ccc;
`;

const SelectionSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Step = styled.div`
  background-color: #ff5200;
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  font-size: 16px;
  margin-right: 10px;
`;

const StepDescription = styled.div`
  color: #333c4e;
  font: 700 17px/143% Lato, sans-serif;
`;

const PrakruthiSection = styled.div`
  /* Added styled component for prakruthi section */
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const PrakruthiDropdown = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

const DateSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const DateInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const EmailSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const EmailInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff5200;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #e04e00;
  }
`;

export default MyComponent;
