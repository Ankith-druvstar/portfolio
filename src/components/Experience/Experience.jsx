import "./Experience.scss";

function Experience() {
  return (
    <section className="experience" id="experience">

      <div className="container">

        <div className="experience__content">

          <span className="section-tag">
            Experience
          </span>

          <h2 className="section-title">
            Building Enterprise
            Software
          </h2>

          <p className="experience__description">
            Over the years, I've worked on enterprise
            analytics platforms, real-time applications,
            research projects, and scalable frontend
            architectures while continuously improving
            performance, usability, and developer
            experience.
          </p>

          <div className="experience__timeline">

            {/* ASI */}

            <div className="experience__item">

              <div className="experience__year">
                2023
                <br />
                Present
              </div>

              <div className="experience__details">

                <span className="experience__company">
                  ASI Cyber Security
                </span>

                <h3>
                  Software Engineer
                </h3>

                <ul>

                  <li>
                    Working on DruvStar Data
                    Vision Platform.
                  </li>

                  <li>
                    Built 5+ major production
                    features.
                  </li>

                  <li>
                    Developed a global login
                    activity visualization
                    system.
                  </li>

                  <li>
                    Designed enterprise
                    analytics dashboards.
                  </li>

                  <li>
                    Recognized as the
                    highest-rated engineer
                    in the team.
                  </li>

                </ul>

                <div className="experience__stack">

                  <span>React</span>
                  <span>Redux</span>
                  <span>TypeScript</span>
                  <span>CubeJS</span>
                  <span>PostgreSQL</span>

                </div>

              </div>

            </div>

            {/* Innominds */}

            <div className="experience__item">

              <div className="experience__year">
                2020
                <br />
                2023
              </div>

              <div className="experience__details">

                <span className="experience__company">
                  Innominds
                </span>

                <h3>
                  Software Engineer
                </h3>

                <ul>

                  <li>
                    Developed enterprise
                    dashboards and analytics
                    platforms.
                  </li>

                  <li>
                    Built modules for
                    BrightAuthor UI.
                  </li>

                  <li>
                    Developed a real-time
                    messenger application.
                  </li>

                  <li>
                    Worked on machine learning
                    and cybersecurity research
                    projects.
                  </li>

                  <li>
                    Received multiple
                    performance awards.
                  </li>

                </ul>

                <div className="experience__stack">

                  <span>React</span>
                  <span>Redux</span>
                  <span>SCSS</span>
                  <span>Django</span>
                  <span>MongoDB</span>
                  <span>Python</span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;