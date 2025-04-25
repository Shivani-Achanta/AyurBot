import React from "react";
import styled from "styled-components";

const PatientMenu = ({ onClose }) => (
  <MenuContainer>
    <CloseButton onClick={onClose}>X</CloseButton>
    <MenuWrapper>
      <MenuLink href="#find-a-doctor">Find a doctor</MenuLink>
      <MenuLink href="#patient-resource-center">
        Patient Resource Center
      </MenuLink>
      <MenuLink href="#symptom-checker">Symptom Checker</MenuLink>
      <MenuLink href="#deals-offers">Deals & Offers</MenuLink>
      <MenuLink href="#icliniq-cope">iCliniq Cope</MenuLink>
      <MenuLink href="#health-tools">Health tools</MenuLink>
      <MenuLink href="#get-app">Get iCliniq App</MenuLink>
      <MenuLink href="#for-doctors">For doctors & hospitals</MenuLink>
      <MenuLink href="#about-us">About us</MenuLink>
      <MenuLink href="#contact">Contact</MenuLink>
    </MenuWrapper>
  </MenuContainer>
);

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 200px;
  background-color: #1341a3;
  display: flex;
  flex-direction: column;
  z-index: 9999;
`;

const MenuWrapper = styled.div`
  overflow-y: auto;
  flex: 1;
  padding-right: 10px; /* Add padding to avoid content being hidden behind scrollbar */
  /* Hide scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  font-size: 20px;
  cursor: pointer;
  align-self: flex-end;
  padding: 10px;
`;

const MenuLink = styled.a`
  background-color: #1341a3;
  color: #fff;
  padding: 20px;
  display: block;
  text-decoration: none;
  font: 500 16px/150% Montserrat, sans-serif;
  margin-top: 5px;
`;

export default PatientMenu;

// import * as React from "react";
// import styled from "styled-components";

// const SectionItem = ({ src, alt, text }) => {
//   return (
//     <SectionItemWrapper>
//       <StyledImage src={src} alt={alt} />
//       <SectionItemText>{text}</SectionItemText>
//     </SectionItemWrapper>
//   );
// };

// const TelemedicineApp = () => {
//   const sectionData = [
//     {
//       src: "https://cdn.builder.io/api/v1/image/assets/TEMP/98afcfc76ed69f6092c7baa032b16ec97d4fba628feb4ce146432035e4af1ba5?apiKey=370ce3c2a20944c1b14e584940571da5&",
//       alt: "Home icon",
//       text: "Home",
//     },
//     {
//       src: "https://cdn.builder.io/api/v1/image/assets/TEMP/603f9411e1686ac470a83653af7fe482a02621a5ce2efa464159527f7b0152ef?apiKey=370ce3c2a20944c1b14e584940571da5&",
//       alt: "About Ayurveda icon",
//       text: "About Ayurveda",
//     },
//     {
//       src: "https://cdn.builder.io/api/v1/image/assets/TEMP/940acf81599a42c864e63cbbadae1c28a4d2bac72d2188bea28905dca6079807?apiKey=370ce3c2a20944c1b14e584940571da5&",
//       alt: "Consultations icon",
//       text: "Consultations",
//     },
//     {
//       src: "https://cdn.builder.io/api/v1/image/assets/TEMP/af5068467bcc6f6728d0871d3b0162ab73fa3a3e3c6f711f6bcce6a051a0467a?apiKey=370ce3c2a20944c1b14e584940571da5&",
//       alt: "Blog icon",
//       text: "Blog",
//     },
//   ];

//   const [menuOpen, setMenuOpen] = React.useState(true);

//   const handleToggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <MainWrapper menuOpen={menuOpen}>
//       {menuOpen && (
//         <>
//           <CloseButton onClick={handleToggleMenu}>X</CloseButton>
//           <AppTitle>Ayurvedic Telemedicine</AppTitle>
//           {sectionData.map((item, index) => (
//             <SectionItem
//               key={index}
//               src={item.src}
//               alt={item.alt}
//               text={item.text}
//             />
//           ))}
//           <ContactUs>Contact</ContactUs>
//         </>
//       )}
//     </MainWrapper>
//   );
// };

// const MainWrapper = styled.main`
//   background-color: #f7fafc;
//   width: 200px;
//   height: 100vh;
//   position: fixed;
//   top: 0;
//   left: ${({ menuOpen }) => (menuOpen ? "0" : "-200px")};
//   font-size: 14px;
//   color: #0d171c;
//   font-weight: 500;
//   line-height: 150%;
//   padding: 16px;
//   z-index: 999;
//   overflow-y: auto;
// `;

// const AppTitle = styled.h1`
//   font-size: 16px;
//   font-family: Inter, sans-serif;
// `;

// const SectionItemWrapper = styled.section`
//   border-radius: 12px;
//   background-color: #e8f0f2;
//   display: flex;
//   margin-top: 16px;
//   justify-content: flex-start;
//   gap: 12px;
//   white-space: nowrap;
//   padding: 8px 12px;
//   width: fit-content;
// `;

// const StyledImage = styled.img`
//   aspect-ratio: 1;
//   width: 24px;
//   object-fit: cover;
//   object-position: center;
// `;

// const SectionItemText = styled.div`
//   font-size: 14px;
//   font-family: Inter, sans-serif;
//   align-self: center;
//   flex-grow: 1;
// `;

// const ContactUs = styled.button`
//   justify-content: center;
//   align-items: center;
//   border-radius: 12px;
//   background-color: #1aa3e5;
//   display: flex;
//   margin-top: 32px;
//   color: #f7fafc;
//   font-weight: 700;
//   white-space: nowrap;
//   letter-spacing: 0.21px;
//   padding: 10px 60px;
//   font-size: 14px;
//   font-family: Inter, sans-serif;
//   cursor: pointer;
// `;

// const CloseButton = styled.button`
//   background-color: transparent;
//   color: #fff;
//   border: none;
//   font-size: 20px;
//   cursor: pointer;
//   position: absolute;
//   top: 16px;
//   right: 16px;
// `;

// export default TelemedicineApp;
