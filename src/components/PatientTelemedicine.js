import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PatientTelemedicine = () => {
  const [selectedOption, setSelectedOption] = useState("Chat");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const optionSteps = {
    Chat: {
      title: "How it works:",
      steps: [
        "Write your health query in detail.",
        "Choose a chat plan that fits your needs and pay the consultation fee.",
        "Chat unlimited with a doctor based on your plan.",
      ],
      buttonText: "Start Chat consultation",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2f7cb261fed1d8b24eb7d9c8eb4d49a1f3cf031be678aab92654ff2e158c3f72?apiKey=370ce3c2a20944c1b14e584940571da5&",
      linkUrl: "/consult-chat",
    },
    Phone: {
      title: "How it works:",
      steps: [
        "Write your health query in detail and add photos/reports, if any.",
        "Pick a date and time slot for your medical phone consultation and pay the fee.",
        "Talk to a doctor over a highly secure end-to-end encrypted phone call.",
      ],
      buttonText: "Start phone consultation",
      imageSrc: "/images/call_img.png",
      linkUrl: "/consult-phone",
    },
    Video: {
      title: "How it works:",
      steps: [
        "Write your health query in detail and add photos/reports, if any.",
        "Pick a date and time slot for your medical video consultation and pay the fee.",
        "Join the video call at the scheduled time and talk to a doctor face-to-face.",
      ],
      buttonText: "Start video consultation",
      imageSrc: "/images/vc_img.png",
      linkUrl: "/consult-video",
    },
    Query: {
      title: "How it works:",
      steps: [
        "Write your health query in detail and add photos/reports, if any.",
        "Receive expert medical advice from a doctor within 24 hours.",
        "Get personalized recommendations and treatment options.",
      ],
      buttonText: "Submit query",
      imageSrc: "/images/query_img.png",
      linkUrl: "/submit-query",
    },
  };

  return (
    <main>
      <Container>
        <Header>
          A virtual consultation that feels <Highlight>less virtual</Highlight>
        </Header>
        <OptionsContainer>
          {["Chat", "Phone", "Video", "Query"].map((option) => (
            <Option
              key={option}
              onClick={() => handleOptionClick(option)}
              isSelected={selectedOption === option}
            >
              {optionSteps[option].buttonText}
            </Option>
          ))}
        </OptionsContainer>
        <InfoContainer>
          <StepsContainer>
            <Heading>{optionSteps[selectedOption].title}</Heading>
            {optionSteps[selectedOption].steps.map((step, index) => (
              <Step key={index}>
                <StepNumber>{index + 1}</StepNumber>
                <StepText>{step}</StepText>
              </Step>
            ))}
            <StartButton>
              <Link to={optionSteps[selectedOption].linkUrl}>
                {optionSteps[selectedOption].buttonText}
              </Link>
            </StartButton>
          </StepsContainer>
          <ImageContainer>
            <StyledImage
              alt="Consultation visual"
              src={optionSteps[selectedOption].imageSrc}
            />
          </ImageContainer>
        </InfoContainer>
      </Container>
    </main>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

const Header = styled.h1`
  color: #45c3f2;
  text-align: center;
  letter-spacing: -0.9px;
  font: 800 40px/40px Montserrat, sans-serif;
  margin-top: 20px;
  margin-bottom: 10px;
  @media (max-width: 991px) {
    font-size: 32px;
  }
`;

const Highlight = styled.span`
  color: #44c1a5;
`;

const OptionsContainer = styled.nav`
  display: flex;
  margin-top: 30px;
  align-items: start;
  gap: 16px;
  font-size: 16px;
  color: #1341a3;
  font-weight: 500;
  line-height: 120%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Option = styled.button`
  font-family: Montserrat, sans-serif;
  border-radius: 50px;
  background-color: ${({ isSelected }) =>
    isSelected ? "#1341a3" : "transparent"};
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#1341a3")};
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? "#112d7a" : "#e0e0e0"};
  }

  @media (max-width: 991px) {
    flex: 1 1 auto;
  }
`;

const InfoContainer = styled.section`
  display: flex;
  margin-top: 32px;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  padding: 43px 40px 43px 0px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;

const StepsContainer = styled.article`
  align-self: start;
  flex: 1;
`;

const Heading = styled.h2`
  color: #192849;
  font: 700 32px/120% Nunito Sans, sans-serif;
  @media (max-width: 991px) {
    font-size: 24px;
  }
`;

const Step = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 17px;
  align-items: center;
`;

const StepNumber = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 12.5px;
  background-color: #1341a3;
  color: #fff;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StepText = styled.p`
  color: #192849;
  margin: 0;
  font: 17px Nunito Sans, sans-serif;
`;

const StartButton = styled.div`
  cursor: pointer;
  border-radius: 50px;
  border: none;
  background-color: #1341a3;
  color: #fff;
  padding: 20px 35px;
  font: 600 16px/150% Montserrat, sans-serif;
  transition: background-color 0.3s;

  &:hover {
    background-color: #112d7a;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled.img`
  max-width: 300px;
  width: 100%;
  height: 260px;
  object-fit: contain;
`;

export default PatientTelemedicine;
