import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";

// Import images
// import logo from "../public/images/logo.png"; // Check if the path is correct and the image file exists

const SubHeader = styled.section`
  background-color: #f2f4f6;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 50px;
`;

const Logo = styled.img`
  width: 100px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  position: relative;
  &:hover > div {
    display: block;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  top: 40px;
  left: 0;
  display: none;
`;

const SubHeaderTextBox = styled.div`
  text-align: center;
  padding: 50px 20px;
`;

const KeyPrincipleSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 50px;
`;

const KeyColumn = styled.div`
  flex: 1;
`;

const KeyImage = styled.img`
  width: 100%;
  max-width: 400px;
`;

const Prakruthiinfo = () => {
  const showMenu = () => {
    console.log("Menu clicked");
  };

  return (
    <>
      <SubHeader>
        <Nav>
          {/* <Logo src={logo} alt="Logo" /> */}
          <NavLinks>
            <NavItem href="#">HOME</NavItem>
            <NavItem href="#">ABOUT</NavItem>
            <NavItem href="#">KEY PRINCIPLES OF AYURVEDA</NavItem>
            <NavItem href="#">
              UNDERSTAND DOSHA <FontAwesomeIcon icon={faCaretDown} />
              <DropdownMenu>
                <ul>
                  <li>
                    <a href="vata dosha.html">VATA</a>
                  </li>
                  <li>
                    <a href="pitta dosha.html">PITTA</a>
                  </li>
                  <li>
                    <a href="kapha dosha.html">KAPHA</a>
                  </li>
                  <li>
                    <a href="vatapitta dosha.html">VATA-PITTA</a>
                  </li>
                  <li>
                    <a href="pittakapha dosha.html">PITTA-KAPHA</a>
                  </li>
                  <li>
                    <a href="vatakapha dosha.html">VATA-KAPHA</a>
                  </li>
                </ul>
              </DropdownMenu>
            </NavItem>
          </NavLinks>
          <FontAwesomeIcon icon={faBars} onClick={showMenu} />
        </Nav>
        <SubHeaderTextBox>
          <h1>DOSHAS</h1>
        </SubHeaderTextBox>
      </SubHeader>
      <KeyPrincipleSection>
        <KeyColumn>
          <h1>KEY PRINCIPLES OF AYURVEDA</h1>
          <p>
            1. Doshas: Ayurveda recognizes three primary doshas or bio-energies
            - Vata, Pitta, and Kapha. <br />
            Each person is believed to have a unique combination of these
            doshas, which govern their physiological and psychological
            characteristics.
            <br />
            2. Prakriti: This refers to an individual's unique constitution,
            determined by the dominant doshas present at birth.
            <br />
            Understanding one's prakriti helps in personalized health management
            and preventive care.
            <br />
            ...
          </p>
        </KeyColumn>
        {/* <KeyColumn>
          <KeyImage src={aboutImage} alt="About" />
        </KeyColumn> */}
      </KeyPrincipleSection>
    </>
  );
};

export default Prakruthiinfo;
