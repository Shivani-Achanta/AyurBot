import React, { useState } from "react";
import "../assets/style2.css"; // Import your CSS file here

function AyurBot() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <section className="header1">
        <nav1>
          <a href="/patient-home">
            <img src="/imagess/logo.png" alt="logo" />
          </a>
          <div
            className={showMenu ? "nav-links1 active" : "nav-links1"}
            id="navLinks"
          >
            <i className="fa fa-times" onClick={toggleMenu}></i>
            <ul>
              <li>
                <a href="education-prakrithi">HOME</a>
              </li>
              <li>
                <a href="about-us">ABOUT</a>
              </li>
              <li>
                <a href="key">KEY PRINCIPLES OF AYURVEDA</a>
              </li>
              <li>
                <a href="">
                  UNDERSTAND DOSHA <i className="fa-caret-down"></i>
                </a>
                <div className="dropdown_menu1">
                  <ul>
                    <li>
                      <a href="vata">VATA</a>
                    </li>
                    <li>
                      <a href="pitta">PITTA</a>
                    </li>
                    <li>
                      <a href="kapha">KAPHA</a>
                    </li>
                    <li>
                      <a href="vatapitta">VATA-PITTA</a>
                    </li>
                    <li>
                      <a href="pittakapha">PITTA-KAPHA</a>
                    </li>
                    <li>
                      <a href="vatakapha">VATA-KAPHA</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <i className="fa fa-bars" onClick={toggleMenu}></i>
        </nav1>
        <div className="text-box1">
          <h1>AyurBot</h1>
          <p></p>
        </div>
      </section>
      <section className="footer1">
        <h4>About Ayurbot</h4>
        <p>
          The significance of AyurBot lies in its potential to streamline the
          Prakriti assessment process, making personalized healthcare insights
          more accessible.
          <br /> AyurBot not only expedites the evaluation but also offers
          individualized health recommendations and educational resources.
          <br /> Bridging the gap between traditional Ayurvedic concepts and
          contemporary healthcare, AyurBot facilitates telemedicine
          consultations, enhancing the overall accessibility of Ayurvedic
          insights.
        </p>
      </section>
    </div>
  );
}

export default AyurBot;
