import "./Hero.scss";
import { FaReact } from "react-icons/fa";

import { SiRedux, SiJavascript, SiMongodb, SiPostgresql } from "react-icons/si";

import { TbDatabase, TbApi, TbCode } from "react-icons/tb";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__wrapper">
          {/* LEFT */}

          <div className="hero__content">
            <span className="hero__hello">Hello.</span>

            <h1 className="hero__title">
              I'm Ankith
              <br />
              Ranuva.
            </h1>

            <p className="hero__description">
              I build enterprise-grade digital experiences using modern web
              technologies, focusing on performance, scalability, and user
              experience.
            </p>

            <div className="hero__tech">
              <span className="hero__role">
                <span className="role-dot"></span>
                Frontend Engineer
              </span>

              <div className="dot"></div>

              <span>React</span>

              <div className="dot"></div>

              <span>JavaScript</span>

              <div className="dot"></div>

              <span>Redux</span>
            </div>

            <div className="hero__status">
              <div className="hero__statusIcon">↗</div>

              <span>Currently building enterprise analytics platforms.</span>
            </div>

            <div className="hero__actions">
              <a href="#projects" className="primary-btn">
                View Projects →
              </a>

              <a
                href="/Ankith_Ranuva_Resume.pdf"
                download
                className="secondary-btn"
              >
                ↓ Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT */}

          <div className="hero__visual">
            <div className="hero__ring"></div>

            <div className="hero__orbit"></div>
            <div className="hero__orbit2"></div>

            <img src="/avatar.png" alt="Ankith" className="hero__avatar" />

            <div className="floating react">
              <FaReact />
            </div>

            <div className="floating js">
              <SiJavascript />
            </div>

            <div className="floating redux">
              <SiRedux />
            </div>

            <div className="floating db">
              <TbDatabase />
            </div>

            <div className="floating api">
              <TbApi />
            </div>

            <div className="floating pg">
              <SiPostgresql />
            </div>

            <div className="floating mongo">
              <SiMongodb />
            </div>

            <div className="floating code">
              <TbCode />
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <span>Scroll to explore</span>

        <div className="hero__scrollArrow">↓</div>
      </div>
    </section>
  );
}

export default Hero;
