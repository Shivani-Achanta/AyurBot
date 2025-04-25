import React, { useState } from "react";
import "../assets/style2.css"; // Make sure to import your CSS file

function AboutDoshas() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <section className="sub-header1">
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
        </nav1>
        <h1>ABOUT DOSHAS</h1>
      </section>
      <section className="about-dosha1">
        <div className="row">
          <div className="about-col1">
            <h1>INTRODUCTION</h1>
            <p>
              In Ayurveda, doshas are the three fundamental energies or
              principles that govern the physiological and psychological
              functions of the human body. They are known as Vata, Pitta, and
              Kapha. Each dosha represents a combination of the five elements
              (ether, air, fire, water, and earth) present in the universe, with
              one or two elements being dominant in each dosha:
              <br />
              1. Vata: Composed of ether and air elements, Vata is characterized
              by qualities of mobility, dryness, lightness, coldness, and
              roughness. It governs all movement in the body, including nerve
              impulses, circulation, respiration, elimination, and communication
              between cells. When in balance, Vata promotes creativity,
              vitality, and flexibility. However, an excess of Vata can lead to
              issues such as anxiety, insomnia, constipation, and irregular
              digestion.
              <br />
              2. Pitta: Comprised of fire and water elements, Pitta embodies
              qualities of heat, sharpness, lightness, fluidity, and intensity.
              It governs metabolism, digestion, absorption, assimilation,
              intelligence, and courage. Pitta in balance promotes intelligence,
              understanding, and a sharp intellect. But an excess of Pitta can
              manifest as anger, inflammation, acidity, ulcers, and skin
              irritations.
              <br />
              3. Kapha: Formed by the water and earth elements, Kapha is
              characterized by qualities of heaviness, stability, coolness,
              moisture, and softness. It governs the structure and lubrication
              of the body, including muscles, bones, joints, and the immune
              system. Balanced Kapha provides strength, stability, and emotional
              calmness. However, an excess of Kapha can lead to weight gain,
              lethargy, congestion, and attachment.
              <br />
              Each individual has a unique combination of these doshas, which is
              determined at the time of conception and remains relatively
              constant throughout life. This unique constitution is called one's
              Prakriti. It's typically a combination of two or sometimes all
              three doshas, with one or two doshas being predominant.
              <br /> For example:
              <br />
              - Vata-Pitta: Individuals with this combination tend to exhibit
              characteristics of both Vata and Pitta, such as creativity,
              intelligence, and sensitivity. They may experience imbalances
              related to both doshas, such as digestive issues coupled with
              anxiety or irritability.
              <br />
              - Pitta-Kapha: People with this combination typically have
              qualities of both Pitta and Kapha, such as determination,
              stability, and endurance. However, they may also face challenges
              like overheating or inflammation coupled with sluggish digestion
              or weight gain.
              <br />
              - Vata-Kapha: Those with this combination often display qualities
              of both Vata and Kapha, such as creativity, stability, and
              sensitivity. Imbalances may include issues like dry skin or
              constipation alongside feelings of heaviness or lethargy.
              <br />
              <br />
              Understanding one's dosha combination (Prakriti) helps in
              maintaining optimal health through lifestyle adjustments, dietary
              choices, herbal remedies, and therapeutic practices tailored to
              balance the specific doshic tendencies of the individual.
              Ayurvedic practitioners use this knowledge to recommend
              personalized wellness strategies to promote harmony and prevent
              disease.
              <br />
            </p>
          </div>
          <div className="about-col1">
            <img src="/imagess/comb.jpeg" alt="combination" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutDoshas;
