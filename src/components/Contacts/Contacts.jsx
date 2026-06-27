import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

import "./Contacts.scss";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__content">
          <span className="section-tag">Contact</span>

          <h2 className="section-title">Let's Build Something Great.</h2>

          <p className="contact__description">
            Whether it's enterprise software, frontend architecture, scalable
            applications, or your next product, I'm always interested in solving
            meaningful problems and building experiences that make an impact.
          </p>

          <div className="contact__links">
            <a href="mailto:ankithrao0005@gmail.com" className="contact__card">
              <div className="contact__icon">
                <FaEnvelope />
              </div>

              <div>
                <h3>Email</h3>

                <p>Let's connect</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/ankith-ranuva-b790a7205"
              target="_blank"
              rel="noreferrer"
              className="contact__card"
            >
              <div className="contact__icon">
                <FaLinkedin />
              </div>

              <div>
                <h3>LinkedIn</h3>

                <p>Professional profile</p>
              </div>
            </a>

            <a
              href="https://github.com/Ankith-druvstar"
              target="_blank"
              rel="noreferrer"
              className="contact__card"
            >
              <div className="contact__icon">
                <FaGithub />
              </div>

              <div>
                <h3>GitHub</h3>

                <p>View repositories</p>
              </div>
            </a>

            <a
              href="/Ankith_Ranuva_Resume.pdf"
              download="Ankith_Ranuva_Resume.pdf"
              className="contact__card"
            >
              <div className="contact__icon">
                <FaFileAlt />
              </div>

              <div>
                <h3>Resume</h3>

                <p>Download CV</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;