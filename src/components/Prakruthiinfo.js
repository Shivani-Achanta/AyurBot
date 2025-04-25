import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Prakruthiinfo = () => {
  const contentSections = [
    {
      id: 1,
      text: `In Ayurveda, doshas are the three fundamental energies or principles that govern the physiological and psychological functions of the human body. They are known as Vata, Pitta, and Kapha. Each dosha represents a combination of the five elements (ether, air, fire, water, and earth) present in the universe, with one or two elements being dominant in each dosha:`,
    },
    {
      id: 2,
      text: `1. Vata: Composed of ether and air elements, Vata is characterized by qualities of mobility, dryness, lightness, coldness, and roughness. It governs all movement in the body, including nerve impulses, circulation, respiration, elimination, and communication between cells. When in balance, Vata promotes creativity, vitality, and flexibility. However, an excess of Vata can lead to issues such as anxiety, insomnia, constipation, and irregular digestion.`,
    },
    {
      id: 3,
      text: `2. Pitta: Comprised of fire and water elements, Pitta embodies qualities of heat, sharpness, lightness, fluidity, and intensity. It governs metabolism, digestion, absorption, assimilation, intelligence, and courage. Pitta in balance promotes intelligence, understanding, and a sharp intellect. But an excess of Pitta can manifest as anger, inflammation, acidity, ulcers, and skin irritations.`,
    },
    {
      id: 4,
      text: `3. Kapha: Formed by the water and earth elements, Kapha is characterized by qualities of heaviness, stability, coolness, moisture, and softness. It governs the structure and lubrication of the body, including muscles, bones, joints, and the immune system. Balanced Kapha provides strength, stability, and emotional calmness. However, an excess of Kapha can lead to weight gain, lethargy, congestion, and attachment.
      Each individual has a unique combination of these doshas, which is determined at the time of conception and remains relatively constant throughout life. This unique constitution is called one's Prakriti. It's typically a combination of two or sometimes all three doshas, with one or two doshas being predominant.`,
    },
    {
      id: 5,
      text: `For example:
      - Vata-Pitta: Individuals with this combination tend to exhibit characteristics of both Vata and Pitta, such as creativity, intelligence, and sensitivity. They may experience imbalances related to both doshas, such as digestive issues coupled with anxiety or irritability.
      - Pitta-Kapha: People with this combination typically have qualities of both Pitta and Kapha, such as determination, stability, and endurance. However, they may also face challenges like overheating or inflammation coupled with sluggish digestion or weight gain.
      - Vata-Kapha: Those with this combination often display qualities of both Vata and Kapha, such as creativity, stability, and sensitivity. Imbalances may include issues like dry skin or constipation alongside feelings of heaviness or lethargy.`,
    },
    {
      id: 6,
      text: `Understanding one's dosha combination (Prakriti) helps in maintaining optimal health through lifestyle adjustments, dietary choices, herbal remedies, and therapeutic practices tailored to balance the specific doshic tendencies of the individual. Ayurvedic practitioners use this knowledge to recommend personalized wellness strategies to promote harmony and prevent disease.`,
    },
  ];

  return (
    <MainWrapper>
      <Header>
        <Title>About Doshas</Title>
        <LogoImg
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets%2F370ce3c2a20944c1b14e584940571da5%2F439cdac905524a4e89ad38967c525242"
          alt="iCliniq Logo"
        />
      </Header>
      {contentSections.map((section) => (
        <Section key={section.id}>{section.text}</Section>
      ))}
      <CallToActionButton to="/education-prakrithi">
        Read More...
      </CallToActionButton>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  background-color: #074785;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #fff;
  font-weight: 400;
  line-height: 24px;
  padding: 49px 80px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  font-size: 40px;
  color: #db2150;
  font-weight: 500;
  line-height: 48px;
  margin: 6px 20px 0;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 10px;
    flex-wrap: wrap;
  }
`;

const Title = styled.h1`
  font-family: Montserrat, sans-serif;
  align-self: stretch;
  flex-grow: 1;
  flex-basis: auto;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const LogoImg = styled.img`
  aspect-ratio: 3.62;
  object-fit: cover;
  object-position: center;
  width: 161px;
  align-self: stretch;
  max-width: 100%;
  margin: auto 0;
`;

const Section = styled.section`
  font-family: Nunito Sans, sans-serif;
  margin: 40px 34px 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 10px;
  }
`;

const CallToActionButton = styled(Link)`
  font-family: Montserrat, sans-serif;
  justify-content: center;
  border-radius: 50px;
  border: 1px solid #db2150;
  background-color: #db2150;
  align-self: center;
  margin-top: 52px;
  font-weight: 600;
  color: #fff;
  text-align: center;
  line-height: 150%;
  padding: 19px 35px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #ff3366;
  }
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 15px 20;
  }
`;

export default Prakruthiinfo;
