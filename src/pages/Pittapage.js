import React, { useState } from "react";
import "../assets/style2.css"; // Make sure to import your CSS file

function PittaDosha() {
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
                      <a href="vatakapha dosha.html">VATA-KAPHA</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <i className="fa fa-bars" onClick={toggleMenu}></i>
        </nav1>
        <h1>UNDERSTAND DOSHA</h1>
      </section>
      <section className="pitta-dosha">
        <div className="row">
          <div className="pitta-col">
            <h1>UNDERSTANDING PITTA </h1>
            <h4>Overview:</h4>
            <p>
              Pitta Dosha, one of the three primary energies in Ayurveda,
              governs metabolism, digestion, and transformation in the body.
              <br /> Composed of fire and water elements, Pitta exhibits
              qualities of heat, sharpness, lightness, fluidity, and intensity.
              <br /> When balanced, Pitta promotes intelligence, understanding,
              and courage, but excess can lead to anger, inflammation, acidity,
              and skin irritations.
            </p>

            <h4>Characteristics:</h4>
            <p>
              {" "}
              - Physical Characteristics: Pitta-dominant individuals often have
              a medium build, warm skin, sharp facial features, and strong
              digestion. They may be prone to conditions like acne, rashes, or
              excess sweating.
              <br />
              - Mental Characteristics: Pitta types are typically intelligent,
              focused, and determined. However, they can also be competitive,
              critical, and prone to anger or impatience.
              <br />
              - Digestive Function: Pitta governs digestion and metabolism,
              ensuring efficient assimilation of nutrients. Imbalances may
              manifest as hyperacidity, heartburn, ulcers, or diarrhea.
              <br />
              - Body Temperature: Pitta individuals tend to have a slightly
              higher body temperature and may feel uncomfortable in hot
              environments.
              <br />
            </p>
            <h4>Balancing Pitta:</h4>
            <p>
              - Cooling Foods: Incorporating cooling and hydrating foods like
              fresh fruits, leafy greens, cucumber, and coconut water helps
              balance Pitta's heat.
              <br />
              - Moderation: Pitta benefits from a balanced lifestyle with
              moderation in work, exercise, and diet, avoiding excesses that can
              aggravate its intensity.
              <br />
              - Relaxation: Engaging in calming activities like meditation,
              gentle yoga, or spending time in nature helps pacify Pitta's fiery
              nature and promote relaxation.
              <br />
              - Routine: Establishing a regular routine with adequate rest, meal
              times, and relaxation practices helps stabilize Pitta energy.
              <br />
              - Hydration: Drinking plenty of water throughout the day and
              avoiding excessive caffeine or alcohol intake helps maintain
              Pitta's fluid balance.
              <br />
            </p>

            <h4>Imbalances and Remedies:</h4>
            <p>
              - Acidity and Heartburn: Consuming cooling foods like coconut
              water, aloe vera juice, and coriander can help soothe acidity and
              promote digestive balance.
              <br />
              - Skin Irritations: Applying cooling and soothing substances like
              aloe vera gel, sandalwood paste, or rose water helps calm
              inflammation and skin irritations.
              <br />
              - Anger and Irritability: Practicing mindfulness, deep breathing
              exercises, and expressing emotions constructively can help manage
              anger and promote emotional balance.
              <br />
              - Excess Heat: Using cooling herbs like peppermint, fennel, or
              cilantro in cooking or herbal teas helps cool Pitta's fiery energy
              and balance body temperature.
              <br />
            </p>
          </div>
          <div className="pitta-col">
            <img src="/imagess/pitta.jpeg" alt="pitta" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default PittaDosha;
