import React, { useState } from "react";
import "../assets/style2.css"; // Make sure to import your CSS file

function VataPittaDosha() {
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
        <h1>UNDERSTAND DOSHA</h1>
      </section>
      <section className="vatapitta-dosha">
        <div className="row">
          <div className="vatapitta-col">
            <h1>UNDERSTANDING VATA PITTA </h1>
            <h4>Overview:</h4>
            <p>
              Vata-Pitta Dosha is a unique combination of the Vata and Pitta
              energies in Ayurveda, blending qualities of movement, creativity,
              and intensity.
              <br /> Individuals with this dosha combination exhibit
              characteristics of both Vata and Pitta, experiencing a dynamic
              interplay of their respective qualities.
              <br /> Balancing Vata-Pitta requires addressing the needs of both
              doshas to promote harmony and well-being.
            </p>

            <h4>Characteristics:</h4>
            <p>
              {" "}
              - Physical Characteristics: Vata-Pitta types often have a slender
              build with moderate muscle tone, sensitive skin, and prominent
              features. They may experience fluctuations in weight and
              digestion, with tendencies towards both dryness and heat-related
              issues.
              <br />
              - Mental Characteristics: These individuals are typically
              creative, innovative, and adaptable, combining Vata's flexibility
              with Pitta's intelligence and determination. However, they may
              also be prone to anxiety, perfectionism, and overexertion.
              <br />
              - Digestive Function: Vata-Pitta governs digestion with a balance
              of mobility and intensity. Imbalances may manifest as irregular
              digestion, sensitivity to certain foods, and fluctuations in
              appetite and energy levels.
              <br />
              - Emotional Traits: They may exhibit a blend of Vata's enthusiasm
              and Pitta's passion, with tendencies towards both excitement and
              intensity. Balancing emotions and avoiding excessive stress are
              essential for emotional well-being.
              <br />
            </p>
            <h4>Balancing Vata Pitta:</h4>
            <p>
              - Moderation: Balancing activities and commitments to avoid
              overexertion while maintaining creativity and productivity.
              <br />
              - Stress Management: Practicing relaxation techniques like
              meditation, yoga, and mindfulness to calm Vata's restlessness and
              Pitta's intensity.
              <br />
              - Nutrition: Consuming a balanced diet with a variety of foods,
              incorporating both warming and cooling elements to pacify Vata and
              Pitta qualities.
              <br />
              - Routine: Establishing a consistent daily routine with regular
              meal times, sleep schedule, and relaxation practices to ground
              Vata-Pitta energy.
              <br />
              - Self-Care: Prioritizing self-care practices such as massage,
              aromatherapy, and gentle exercise to nourish both body and mind.
              <br />
            </p>

            <h4>Imbalances and Remedies:</h4>
            <p>
              - Digestive Issues: Managing stress and incorporating digestive
              herbs like fennel, ginger, and licorice to support digestion and
              soothe inflammation.
              <br />
              - Anxiety and Irritability: Practicing calming techniques like
              deep breathing, meditation, and spending time in nature to ease
              anxiety and promote emotional balance.
              <br />
              - Skin Sensitivity: Using gentle skincare products and avoiding
              harsh chemicals, along with consuming cooling foods to alleviate
              heat-related skin issues.
              <br />
              - Overexertion: Learning to delegate tasks, set boundaries, and
              prioritize self-care to prevent burnout and exhaustion.
              <br />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VataPittaDosha;
