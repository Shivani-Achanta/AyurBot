import React, { useState } from "react";
import "../assets/style2.css"; // Make sure to import your CSS file

function VataDosha() {
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
      <section className="vata-dosha">
        <div className="row">
          <div className="vata-col">
            <h1>UNDERSTANDING VATA </h1>
            <h4>Overview:</h4>
            <p>
              Vata Dosha is one of the three fundamental energies in Ayurveda,
              governing movement and communication in the body.
              <br /> Comprised of ether and air elements, Vata is characterized
              by qualities of mobility, dryness, lightness, coldness, and
              roughness. <br />
              When balanced, Vata promotes creativity, vitality, and
              flexibility, but an excess can lead to anxiety, insomnia,
              constipation, and irregular digestion.
            </p>

            <h4>Characteristics:</h4>
            <p>
              {" "}
              -Physical Characteristics: Individuals with dominant Vata often
              have a slender build, dry skin, thin hair, and prominent joints.
              They may also experience cold hands and feet.
              <br />
              - Mental Characteristics: Vata types tend to be creative,
              enthusiastic, and quick-thinking. However, they can also be prone
              to anxiety, nervousness, and forgetfulness.
              <br />
              - Digestive Function: Vata governs the movement of food through
              the digestive tract. Imbalances may lead to irregular digestion,
              bloating, gas, and constipation.
              <br />
              - Sleep Patterns: Vata individuals may have irregular sleep
              patterns, experiencing difficulty falling asleep or staying asleep
              due to an overactive mind.
              <br />
            </p>
            <h4>Balancing Vata:</h4>
            <p>
              - Diet: Warm, nourishing foods like soups, stews, cooked grains,
              and steamed vegetables are beneficial. Avoiding cold, dry, or raw
              foods helps balance Vata.
              <br />
              - Routine: Establishing a regular daily routine with consistent
              meal times, sleep schedule, and relaxation practices helps ground
              Vata energy.
              <br />
              - Warmth: Keeping warm and cozy, especially during colder seasons,
              helps pacify Vata's cold and dry qualities.
              <br />
              - Moisture: Hydrating practices such as drinking warm herbal teas
              and using natural oils for self-massage nourish Vata and combat
              dryness.
              <br />
              - Relaxation: Gentle yoga, meditation, and deep breathing
              exercises calm Vata's restless nature and promote relaxation.
              <br />
            </p>

            <h4>Imbalances and Remedies:</h4>
            <p>
              - Anxiety and Stress: Practicing mindfulness, meditation, and
              soothing activities like warm baths or aromatherapy can alleviate
              anxiety and promote relaxation.
              <br />
              - Digestive Issues: Consuming warm, well-cooked meals and
              incorporating digestive spices like ginger and cumin aids
              digestion and relieves bloating.
              <br />
              - Insomnia: Creating a calming bedtime routine, such as herbal
              tea, gentle stretching, and avoiding screens before bed, can
              improve sleep quality.
              <br />
              - Joint Pain: Regular oil massage, warm compresses, and gentle
              stretching exercises help alleviate stiffness and discomfort in
              joints.
              <br />
            </p>
          </div>
          <div className="vata-col">
            <img src="/imagess/vata.jpeg" alt="vata" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default VataDosha;
