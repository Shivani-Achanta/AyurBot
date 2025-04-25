// import * as React from "react";
// import styled from "styled-components";

// function ConsultDocNavbar() {
//   const [isDropdownOpen, setIsDropdownOpen] = React.useState({
//     consultDoctor: false,
//     physicianDirectory: false,
//     more: false,
//   });

//   const toggleDropdown = (key) => {
//     setIsDropdownOpen((prevState) => ({
//       ...prevState,
//       [key]: !prevState[key],
//     }));
//   };

//   return (
//     <StyledHeader>
//       <LogoAndNav>
//         <Logo src="https://cdn.builder.io/api/v1/image/assets/TEMP/e34347be33211b15031a0df26eb45bde57e81d2147d9cd5fb25075e0f3f7c4c6?apiKey=370ce3c2a20944c1b14e584940571da5&" />
//         <NavItem onClick={() => toggleDropdown("consultDoctor")}>
//           Consult Doctor
//           {isDropdownOpen.consultDoctor && <Dropdown>Option 1</Dropdown>}
//         </NavItem>
//         <NavItem onClick={() => toggleDropdown("physicianDirectory")}>
//           Physician Directory
//           {isDropdownOpen.physicianDirectory && <Dropdown>Option 2</Dropdown>}
//         </NavItem>
//         <NavItem onClick={() => toggleDropdown("more")}>
//           More
//           {isDropdownOpen.more && (
//             <Dropdown>
//               <DropdownItem>Option 3</DropdownItem>
//               <DropdownItem>Option 4</DropdownItem>
//               <DropdownItem>Option 5</DropdownItem>
//             </Dropdown>
//           )}
//         </NavItem>
//         <SearchIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/2218aba1eb92b46f513335b2efd4f4954608d5d2d8914f78d3265a491e3df4ff?apiKey=370ce3c2a20944c1b14e584940571da5&" />
//       </LogoAndNav>
//     </StyledHeader>
//   );
// }

// const StyledHeader = styled.header`
//   background-color: #2a53e7;
//   display: flex;
//   justify-content: space-between;
//   gap: 20px;
//   font-size: 16px;
//   color: #fff;
//   font-weight: 700;
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
//   line-height: 143%;
//   padding: 23px;
//   @media (max-width: 991px) {
//     flex-wrap: wrap;
//   }
// `;

// const LogoAndNav = styled.nav`
//   display: flex;
//   align-items: center;
//   gap: 6px;
//   @media (max-width: 991px) {
//     max-width: 100%;
//     flex-wrap: wrap;
//   }
// `;

// const Logo = styled.img`
//   aspect-ratio: 3.23;
//   object-fit: cover;
//   width: 116px;
// `;

// const NavItem = styled.div`
//   font-family: Lato, sans-serif;
//   margin: auto 0;
//   cursor: pointer;
//   position: relative;
// `;

// const Dropdown = styled.div`
//   position: absolute;
//   top: 100%;
//   left: 0;
//   background-color: white;
//   color: black;
//   padding: 10px;
//   display: flex;
//   flex-direction: column;
//   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//   z-index: 100;
// `;

// const DropdownItem = styled.div`
//   padding: 10px 20px;
//   &:hover {
//     background-color: #f0f0f0;
//   }
// `;

// const SearchIcon = styled.img`
//   aspect-ratio: 1;
//   object-fit: cover;
//   width: 24px;
//   margin: auto 0;
// `;

// const AuthOptions = styled.div`
//   display: flex;
//   gap: 8px;
//   margin: auto 0;
//   @media (max-width: 991px) {
//     white-space: initial;
//   }
// `;

// const AuthLink = styled.div`
//   font-family: Lato, sans-serif;
//   cursor: pointer;
// `;

// const Divider = styled.div`
//   font-family: Lato, sans-serif;
// `;

// export default ConsultDocNavbar;

import * as React from "react";
import styled from "styled-components";

function ConsultDocNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState({
    consultDoctor: false,
    physicianDirectory: false,
    more: false,
  });

  const toggleDropdown = (key) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <StyledHeader>
      <LogoAndNav>
        <Logo src="https://cdn.builder.io/api/v1/image/assets/TEMP/e34347be33211b15031a0df26eb45bde57e81d2147d9cd5fb25075e0f3f7c4c6?apiKey=370ce3c2a20944c1b14e584940571da5&" />
        <NavItem onClick={() => toggleDropdown("consultDoctor")}>
          Consult Doctor
          <ArrowIcon />
          {isDropdownOpen.consultDoctor && <Dropdown>Option 1</Dropdown>}
        </NavItem>
        <NavItem onClick={() => toggleDropdown("physicianDirectory")}>
          Physician Directory
          <ArrowIcon />
          {isDropdownOpen.physicianDirectory && <Dropdown>Option 2</Dropdown>}
        </NavItem>
        <NavItem onClick={() => toggleDropdown("more")}>
          More
          <ArrowIcon />
          {isDropdownOpen.more && (
            <Dropdown>
              <DropdownItem>Option 3</DropdownItem>
              <DropdownItem>Option 4</DropdownItem>
              <DropdownItem>Option 5</DropdownItem>
            </Dropdown>
          )}
        </NavItem>
      </LogoAndNav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #2a53e7;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-size: 16px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  line-height: 143%;
  padding: 23px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const LogoAndNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Logo = styled.img`
  aspect-ratio: 3.23;
  object-fit: cover;
  width: 116px;
`;

const NavItem = styled.div`
  font-family: Lato, sans-serif;
  margin: auto 10px;
  padding-right: 20px;
  cursor: pointer;
  position: relative;
`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  background-color: white;
  color: black;
  padding: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

const DropdownItem = styled.div`
  padding: 10px 20px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ArrowIcon = styled.div`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #fff;
  position: absolute;
  right: 5px;
  top: calc(50% - 3px);
`;

const SearchIcon = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  width: 24px;
  margin: auto 0;
`;

const AuthOptions = styled.div`
  display: flex;
  gap: 8px;
  margin: auto 0;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const AuthLink = styled.div`
  font-family: Lato, sans-serif;
  cursor: pointer;
`;

const Divider = styled.div`
  font-family: Lato, sans-serif;
`;

export default ConsultDocNavbar;
