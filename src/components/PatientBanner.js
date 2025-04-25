import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function AyurVedaLandingPage() {
  return (
    <StyledPage>
      <HeaderSection>
        <HeroImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6641ce21b0baee3f4055b14ddac464b196807c9ce0e872e86ec296f374693249?apiKey=370ce3c2a20944c1b14e584940571da5&"
          alt="AyurVeda Landing"
        />
        <HeroContent>
          <Title>Welcome to AyurBot</Title>
          <Description>
            Your personal guide to Ayurvedic health, with expert consultations
            and natural remedies
          </Description>
        </HeroContent>
      </HeaderSection>
      <MainContent>
        <FeaturedServices>Featured Services</FeaturedServices>
        <ServicesList>
          <Service>
            <Link to="/consultations">
              <ServiceImage
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cae42ed6c9c2ac8ad9355ef31c43d203dcc16868ab08f9e5ee816ab2a00f404c?apiKey=370ce3c2a20944c1b14e584940571da5&"
                alt="Consult with an Ayurvedic doctor"
              />
              <ServiceTitle>Consult with an Ayurvedic doctor</ServiceTitle>
            </Link>
          </Service>

          <Service>
            <Link to="/chatbot">
              <ServiceImage
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6b77e3b43c9018e7b22bf9413c880f18ba10836f5fefd30a4a988ef589f662a?apiKey=370ce3c2a20944c1b14e584940571da5&"
                alt="Chat with our Ayurveda bot"
              />
              <ServiceTitle>Chat with our Ayurveda bot</ServiceTitle>
            </Link>
          </Service>
          <Service>
            <Link to="/education-prakrithi">
              <ServiceImage
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/32970d557b4141f1bccf4114b0b676be9619dde205344d1bb978ca721ea14533?apiKey=370ce3c2a20944c1b14e584940571da5&"
                alt="Explore About Prakriti"
              />
              <ServiceTitle>Explore About Prakriti</ServiceTitle>
            </Link>
          </Service>
        </ServicesList>
      </MainContent>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  padding: 20px;

  @media (min-width: 768px) {
    padding: 20px 40px;
  }

  @media (min-width: 1024px) {
    padding: 20px 80px;
  }
`;

const HeaderSection = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 12px;
`;

const HeroContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 50px 40px 24px;
`;

const Title = styled.h1`
  color: #fff;
  font-weight: 900;
  font-size: 48px;
  margin-top: 202px;
`;

const Description = styled.p`
  color: #fff;
  line-height: 150%;
  margin-top: 8px;
`;
const MainContent = styled.main``;

const FeaturedServices = styled.h2`
  margin-top: 36px;
  font-weight: 700;
  font-size: 22px;
`;

const ServicesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 12px;
  justify-content: center;
`;

const Service = styled.div`
  flex-basis: calc(25% - 20px);
  display: flex;
  flex-direction: column;
`;

const ServiceImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
`;

const ServiceTitle = styled.h3`
  margin-top: 12px;
  font-weight: 500;
`;

export default AyurVedaLandingPage;
