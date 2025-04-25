import React, { useState } from "react";
import "../assets/style2.css"; // Make sure to import your CSS file

function PittaKaphaDosha() {
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
      <section className="pittakapha-dosha">
        <div className="row">
          <div className="pittakapha-col">
            <h1>UNDERSTANDING PITTA KAPHA </h1>
            <h4>Overview:</h4>
            <p>
              Pitta-Kapha Dosha is a unique combination of the Pitta and Kapha
              energies in Ayurveda, blending qualities of intensity, stability,
              and endurance.
              <br /> Individuals with this dosha combination exhibit
              characteristics of both Pitta and Kapha, experiencing a dynamic
              interplay of their respective qualities.
              <br /> Balancing Pitta-Kapha requires addressing the needs of both
              doshas to promote harmony and well-being.
            </p>

            <h4>Characteristics:</h4>
            <p>
              {" "}
              - Physical Characteristics: Pitta-Kapha types often have a
              moderate build with a tendency towards a strong, sturdy physique.
              They may have warm, oily skin, with a combination of Pitta's
              intensity and Kapha's stability.
              <br />
              - Mental Characteristics: These individuals are typically
              determined, focused, and loyal, combining Pitta's intelligence
              with Kapha's steady demeanor. However, they may also be prone to
              stubbornness, possessiveness, and resistance to change.
              <br />
              - Digestive Function: Pitta-Kapha governs digestion with a balance
              of intensity and stability. Imbalances may manifest as sluggish
              digestion with a tendency towards acidity or weight gain.
              <br />
              - Emotional Traits: They may exhibit a blend of Pitta's passion
              and Kapha's calmness, with tendencies towards both assertiveness
              and patience. Balancing emotions and avoiding excessive stress are
              essential for emotional well-being.
              <br />
            </p>
            <h4>Balancing Pitta Kapha:</h4>
            <p>
              - Moderation: Balancing intensity with stability, avoiding
              extremes in work, diet, and lifestyle to prevent burnout and
              lethargy.
              <br />
              - Stress Management: Practicing stress-reducing techniques such as
              yoga, meditation, and relaxation to calm Pitta's intensity and
              Kapha's inertia.
              <br />
              - Nutrition: Consuming a balanced diet with a variety of foods,
              incorporating both heating and cooling elements to pacify Pitta
              and Kapha qualities.
              <br />
              - Routine: Establishing a consistent daily routine with regular
              meal times, exercise, and self-care practices to balance
              Pitta-Kapha energy.
              <br />
              - Physical Activity: Engaging in regular physical activity,
              including both stimulating exercises like cardio and grounding
              activities like yoga or tai chi.
              <br />
            </p>

            <h4>Imbalances and Remedies:</h4>
            <p>
              - Digestive Issues: Managing stress and incorporating
              digestion-supporting herbs like ginger, turmeric, and triphala to
              enhance metabolism and promote digestive balance.
              <br />
              - Weight Management: Maintaining a balanced diet with portion
              control, regular exercise, and metabolism-boosting activities to
              prevent weight gain and promote healthy weight management.
              <br />
              - Emotional Stability: Practicing mindfulness, journaling, and
              seeking support from loved ones to navigate emotional challenges
              and promote inner balance.
              <br />
              - Skin Conditions: Using gentle skincare products and maintaining
              a clean, balanced diet to prevent Pitta-related skin issues such
              as inflammation or acne.
              <br />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PittaKaphaDosha;
