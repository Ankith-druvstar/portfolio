import "./Projects.scss";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects__content">
          <span className="section-tag">Selected Projects</span>

          <h2 className="section-title">
            Building Products, Platforms & Experiences
          </h2>

          <p className="projects__description">
            Throughout my career, I've contributed to enterprise platforms,
            product development, real-time applications, and security research
            projects.
          </p>

          {/* Project 1 */}

          {/* Project 1 */}

          <div className="project">
            <div className="project__number">01</div>

            <div className="project__content">
              <span className="project__type">
                Enterprise Analytics Platform
              </span>

              <h3>DruvStar Data Vision Platform</h3>

              <p>
                Serving as the Frontend SPOC for the DruvStar Data Vision
                Platform, I lead the development of enterprise-grade analytics
                dashboards, visualization systems, and scalable frontend
                architectures used by enterprise customers worldwide.
              </p>

              <ul>
                <li>
                  Act as the primary Frontend SPOC for multiple platform
                  modules.
                </li>

                <li>
                  Designed and developed complex analytics dashboards and data
                  visualization features.
                </li>

                <li>
                  Built interactive charting components and reporting systems.
                </li>

                <li>
                  Developed a global login activity visualization module
                  displaying user access locations worldwide.
                </li>

                <li>Integrated multiple REST APIs and analytics services.</li>

                <li>
                  Implemented scalable state management using Redux and Redux
                  Saga.
                </li>

                <li>
                  Optimized frontend performance, code architecture, and user
                  experience.
                </li>

                <li>
                  Collaborated with backend, analytics, and product teams to
                  deliver production-ready enterprise features.
                </li>
              </ul>

              <div className="project__stack">
                <span>React.js</span>
                <span>JavaScript</span>
                <span>Redux</span>
                <span>Redux Saga</span>
                <span>SCSS</span>
                <span>CubeJS</span>
                <span>Axios</span>
                <span>REST APIs</span>
                <span>PostgreSQL</span>
                <span>Material UI</span>
                <span>Git</span>
              </div>
            </div>
          </div>

          {/* Project 2 */}

          <div className="project">
            <div className="project__number">02</div>

            <div className="project__content">
              <span className="project__type">Enterprise Product</span>

              <h3>BrightAuthor UI</h3>

              <p>
                Worked as a frontend engineer contributing to production
                enterprise applications by resolving critical issues and
                developing new features.
              </p>

              <ul>
                <li>Developed new frontend modules</li>

                <li>Fixed production issues</li>

                <li>Improved application stability</li>

                <li>Added automated tests</li>
              </ul>

              <div className="project__stack">
                <span>React</span>
                <span>TypeScript</span>
                <span>Jest</span>
                <span>Enzyme</span>
                <span>SCSS</span>
              </div>
            </div>
          </div>

          {/* Project 3 */}

          <div className="project">
            <div className="project__number">03</div>

            <div className="project__content">
              <span className="project__type">Personal Project</span>

              <h3>Messenger Web Application</h3>

              <p>
                Developed a WhatsApp-inspired real-time messaging application
                featuring authentication, messaging, routing and responsive UI.
              </p>

              <ul>
                <li>Implemented real-time messaging</li>

                <li>Developed authentication flow</li>

                <li>Built responsive UI</li>

                <li>Implemented state management</li>
              </ul>

              <div className="project__stack">
                <span>React</span>
                <span>Redux</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>

          {/* Project 4 */}

          <div className="project">
            <div className="project__number">04</div>

            <div className="project__content">
              <span className="project__type">Research</span>

              <h3>Cybersecurity Research</h3>

              <p>
                Developed machine learning solutions for phishing website
                detection and CSRF vulnerability analysis.
              </p>

              <ul>
                <li>Phishing detection using ELM</li>

                <li>CSRF vulnerability detection</li>

                <li>Django-based implementation</li>

                <li>Machine learning models</li>
              </ul>

              <div className="project__stack">
                <span>Python</span>
                <span>Django</span>
                <span>MySQL</span>
                <span>Machine Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
