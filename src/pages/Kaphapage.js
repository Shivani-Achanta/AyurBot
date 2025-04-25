import React, { useState } from "react";
import "../assets/style2.css"; // Make sure to import your CSS file

function KaphaDosha() {
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
      <section className="kapha-dosha">
        <div className="row">
          <div className="kapha-col">
            <h1>UNDERSTANDING KAPHA </h1>
            <h4>Overview:</h4>
            <p>
              Kapha Dosha is one of the three primary energies in Ayurveda,
              responsible for structure, lubrication, and stability in the body.
              <br /> Comprised of earth and water elements, Kapha embodies
              qualities of heaviness, stability, coolness, moisture, and
              softness.
              <br /> When balanced, Kapha promotes strength, endurance, and
              emotional calmness, but excess can lead to weight gain, lethargy,
              congestion, and attachment.
            </p>

            <h4>Characteristics:</h4>
            <p>
              {" "}
              - Physical Characteristics: Kapha-dominant individuals typically
              have a sturdy build, smooth skin, thick hair, and strong bones.
              They may have a tendency to gain weight easily and experience
              sluggish metabolism.
              <br />
              - Mental Characteristics: Kapha types are usually steady, loyal,
              and nurturing. However, they can also be prone to complacency,
              possessiveness, and resistance to change.
              <br />
              - Digestive Function: Kapha governs the structure and lubrication
              of the body, ensuring smooth digestion and elimination. Imbalances
              may manifest as slow digestion, heaviness after meals, or
              mucous-related issues.
              <br />
              - Energy Levels: Kapha individuals have stable energy levels but
              may struggle with motivation or inertia, especially in cold or
              damp weather.
              <br />
            </p>
            <h4>Balancing Kapha:</h4>
            <p>
              - Stimulating Foods: Incorporating pungent, bitter, and astringent
              flavors helps balance Kapha's heaviness. Foods like ginger,
              garlic, leafy greens, and legumes stimulate digestion and
              metabolism.
              <br />
              - Regular Exercise: Engaging in regular physical activity,
              particularly vigorous and stimulating exercises like brisk
              walking, jogging, or dancing, helps counteract Kapha's
              sluggishness.
              <br />
              - Variety: Introducing variety and excitement into daily routines
              and activities helps prevent stagnation and boredom, balancing
              Kapha's tendency towards inertia.
              <br />
              - Warmth: Keeping warm and dry, particularly during colder
              seasons, helps prevent excess accumulation of Kapha's cold and
              damp qualities.
              <br />- Detoxification: Incorporating detoxifying practices like
              dry brushing, sauna therapy, or herbal cleansing formulas helps
              remove excess Kapha from the body.
            </p>

            <h4>Imbalances and Remedies:</h4>
            <p>
              - Weight Gain: Following a Kapha-balancing diet with moderate
              portions, regular exercise, and metabolism-boosting herbs like
              turmeric or triphala can help manage weight.
              <br />
              - Congestion: Using steam inhalation with eucalyptus or peppermint
              oil, practicing nasal cleansing with saline solution, and avoiding
              dairy and heavy foods can help alleviate congestion.
              <br />
              - Lethargy: Establishing a consistent daily routine with
              energizing activities, waking up early, and practicing
              invigorating yoga poses or breathing techniques helps combat
              lethargy.
              <br />- Attachment: Cultivating mindfulness, practicing gratitude,
              and fostering a sense of detachment through meditation or
              journaling can help reduce attachment and promote emotional
              balance.
            </p>
          </div>
          <div className="kapha-col">
            <img src="/imagess/kapha.jpeg" alt="kapha" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default KaphaDosha;
