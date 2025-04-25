import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom"; // Import NavLink
import styled from "styled-components";

function DoctorNavbar() {
  const defaultImageUrl =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/b510b739a6814ca4fa91170faaca87bf3ba16ec95684165bd2ae7bb36aba6e19?apiKey=370ce3c2a20944c1b14e584940571da5&";

  const [profilePicUrl, setProfilePicUrl] = useState(
    localStorage.getItem("profilePicUrl") || defaultImageUrl
  );

  useEffect(() => {
    localStorage.setItem("profilePicUrl", profilePicUrl);
  }, [profilePicUrl]);

  return (
    <Header>
      <LogoAndTitle to="/">
        {/* <MenuIcon
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3027ffb7897f272ea9523645c370785a801a4c95113008b6088c19a7adb0be60?apiKey=370ce3c2a20944c1b14e584940571da5&"
          alt="Menu"
        /> */}
        <Logo src="./images/logo.png" alt="AyurVeda Logo" />
      </LogoAndTitle>
      <Nav>
        <CustomNavLink exact to="/doctor-home">
          Home
        </CustomNavLink>
        {/* <CustomNavLink to="/consultations">Consultations</CustomNavLink> */}
        {/* <CustomNavLink to="/chatbot">ChatBot</CustomNavLink>
        <CustomNavLink to="/about-us">Education</CustomNavLink> */}
        {/* <HelpButton>Help</HelpButton> */}
        <ProfilePic to="/doctor-profile">
          <img src={profilePicUrl} alt="Profile Avatar" />
        </ProfilePic>
      </Nav>
    </Header>
  );
}

const Header = styled.header`
  justify-content: space-between;
  border-bottom: 1px solid #e5e8eb;
  display: flex;
  padding: 13px 40px;
  flex-wrap: wrap;
  background-color: #fff;
  margin: 0 auto;

  @media (max-width: 991px) {
    padding: 13px 20px;
    width: 100%;
  }
`;

const LogoAndTitle = styled(Link)`
  display: flex;
  gap: 16px;
  align-items: center;
  margin: auto 0;
  text-decoration: none;
`;

// const MenuIcon = styled.img`
//   width: 30px;
//   height: 30px;
//   cursor: pointer;
// `;

const Logo = styled.img`
  width: 102px;
  height: 29px;
  object-fit: contain;
`;

const Nav = styled.nav`
  justify-content: space-between;
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const CustomNavLink = styled(NavLink)`
  font-feature-settings: "dlig" on;
  font-family: Inter, sans-serif;
  font-size: 14px;
  color: #0d171c;
  font-weight: 500;
  text-decoration: none;
  padding: 10px 0;
  background-color: transparent;

  &.active {
    background-color: black;
    color: white;
    border-radius: 20px;
    padding: 8px 16px;
  }
`;

// const HelpButton = styled.button`
//   justify-content: center;
//   border-radius: 12px;
//   background-color: #e8f0f2;
//   display: flex;
//   font-size: 14px;
//   color: #0d171c;
//   font-weight: 700;
//   white-space: nowrap;
//   letter-spacing: 0.21px;
//   line-height: 150%;
//   padding: 10px 26px;
//   border: none;
//   cursor: pointer;
// `;

const ProfilePic = styled(Link)`
  width: 40px;
  height: 40px;
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default DoctorNavbar;
