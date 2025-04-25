import React, { useState } from "react";
import "../assets/style2.css"; // Make sure to import your CSS file

function VataKaphaDosha() {
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
      <section className="vatakapha-dosha">
        <div className="row">
          <div className="vatakapha-col">
            <h1>UNDERSTANDING VATA KAPHA </h1>
            <h4>Overview:</h4>
            <p>
              Vata-Kapha Dosha is a unique combination of the Vata and Kapha
              energies in Ayurveda, blending qualities of movement, stability,
              and endurance.
              <br /> Individuals with this dosha combination exhibit
              characteristics of both Vata and Kapha, experiencing a dynamic
              interplay of their respective qualities.
              <br /> Balancing Vata-Kapha requires addressing the needs of both
              doshas to promote harmony and well-being.
            </p>

            <h4>Characteristics:</h4>
            <p>
              {" "}
              - Physical Characteristics: Vata-Kapha types often have a mixed
              physical appearance, with features of both Vata's lightness and
              Kapha's solidity. They may have a moderate build with a tendency
              towards weight gain, along with dry skin and hair.
              <br />
              - Mental Characteristics: These individuals are typically
              adaptable, nurturing, and grounded, combining Vata's creativity
              with Kapha's stability. However, they may also be prone to
              lethargy, indecision, and resistance to change.
              <br />
              - Digestive Function: Vata-Kapha governs digestion with a balance
              of mobility and stability. Imbalances may manifest as irregular
              digestion with a tendency towards both dryness and heaviness.
              <br />
              - Emotional Traits: They may exhibit a blend of Vata's enthusiasm
              and Kapha's calmness, with tendencies towards both excitement and
              contentment. Balancing emotions and avoiding stagnation are
              essential for emotional well-being.
              <br />
            </p>
            <h4>Balancing Vata Kapha:</h4>
            <p>
              - Moderation: Balancing Vata's movement with Kapha's stability,
              avoiding extremes in activity, diet, and lifestyle to prevent both
              depletion and stagnation.
              <br />
              - Stress Management: Practicing stress-reducing techniques such as
              meditation, gentle yoga, and mindfulness to calm Vata's
              restlessness and Kapha's inertia.
              <br />
              - Nutrition: Consuming a balanced diet with a variety of foods,
              incorporating both grounding and stimulating elements to pacify
              Vata and Kapha qualities.
              <br />
              - Routine: Establishing a consistent daily routine with regular
              meal times, exercise, and self-care practices to balance
              Vata-Kapha energy.
              <br />
              - Physical Activity: Engaging in regular physical activity,
              including both energizing exercises like brisk walking and
              grounding activities like tai chi or qigong.
              <br />
            </p>

            <h4>Imbalances and Remedies:</h4>
            <p>
              - Digestive Issues: Managing stress and incorporating
              digestion-supporting herbs like fennel, ginger, and fenugreek to
              enhance digestion and prevent both dryness and heaviness.
              <br />
              - Weight Management: Maintaining a balanced diet with moderation,
              regular exercise, and metabolism-boosting activities to prevent
              weight fluctuations and promote healthy weight management.
              <br />
              - Emotional Stability: Practicing self-care rituals, seeking
              support from loved ones, and engaging in creative pursuits to
              balance emotions and prevent stagnation.
              <br />
              - Joint Pain: Using warm oil massages, gentle stretching
              exercises, and maintaining a warm, dry environment to alleviate
              stiffness and discomfort associated with Vata-Kapha imbalance.
              <br />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VataKaphaDosha;
