import React, { useState } from "react";
import "../assets/style2.css"; // Make sure to import your CSS file

function Doshas() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <section className="sub-header1">
        <nav>
          <a href="/patient-home">
            {/* <img src="/imagess/logo.png" alt="logo" /> */}
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
                  UNDERSTAND DOSHA <i className="fas fa-caret-down"></i>
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
        </nav>
        <div className="text-box1">
          <h1>DOSHAS</h1>
          <p> </p>
        </div>
      </section>
      <section className="footer1">
        <div className="row">
          <div className="key-col1">
            <h1>KEY PRINCIPLES OF AYURVEDA</h1>
            <p>
              1. Doshas: Ayurveda recognizes three primary doshas or
              bio-energies - Vata, Pitta, and Kapha. <br />
              Each person is believed to have a unique combination of these
              doshas, which govern their physiological and psychological
              characteristics.
              <br />
              2. Prakriti: This refers to an individual's unique constitution,
              determined by the dominant doshas present at birth.
              <br /> Understanding one's prakriti helps in personalized health
              management and preventive care.
              <br />
              3. Balance: Ayurveda emphasizes the importance of maintaining
              balance within the body and mind. <br />
              Imbalances in the doshas are believed to lead to illness, while
              restoring balance promotes health and vitality.
              <br />
              4. Diet and Lifestyle: Ayurveda places great emphasis on the role
              of diet, lifestyle, and daily routines in maintaining health.{" "}
              <br />
              It recommends consuming fresh, seasonal foods, practicing mindful
              eating, and following daily routines (dinacharya) for optimal
              well-being.
              <br />
              5. Herbal Remedies: Ayurvedic medicine utilizes a wide range of
              herbs, minerals, and natural substances to treat various health
              conditions.
              <br /> These remedies are often prepared as powders, pastes,
              decoctions, or oils and are tailored to individual needs.
              <br />
              6. Yoga and Meditation: Ayurveda considers yoga and meditation as
              essential practices for promoting physical and mental health.
              <br /> Yoga postures (asanas), breathing exercises (pranayama),
              and meditation techniques are believed to help balance the doshas
              and promote overall well-being.
              <br />
              7. Detoxification: Ayurveda advocates periodic cleansing and
              detoxification treatments (panchakarma) to remove toxins (ama)
              from the body and restore balance.
              <br />
              Ayurveda continues to be practiced widely in India and has gained
              popularity in many other parts of the world as people seek
              holistic approaches to health and wellness.
              <br /> It complements modern medicine and offers a holistic
              perspective on health that integrates physical, mental, and
              spiritual aspects.
            </p>
          </div>
          <div className="key-col1">
            <img src="/imagess/about1.jpeg" alt="about1" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Doshas;
