import "./About.scss";

function About() {
  return (
    <section className="about reveal" id="about">
      <div className="container">
        <div className="about__content">
          <h2 className="section-title">The Journey Behind The Engineer</h2>

          <p className="about__description">
            My journey into software engineering began with curiosity and a
            passion for solving real-world problems through technology.
            <br />
            <br />
            Starting with programming fundamentals, I gradually moved into
            cybersecurity, machine learning research, and eventually enterprise
            software development.
            <br />
            <br />
            Today, I specialize in building scalable frontend applications,
            enterprise analytics platforms, and intuitive user experiences while
            continuously exploring new technologies and better ways to engineer
            software.
          </p>

          <div className="about__journey">
            <div className="journey__item">
              <div className="journey__year">2017</div>

              <div className="journey__content">
                <h3>Learning & Exploration</h3>

                <p>
                  Started exploring programming, web technologies, databases,
                  and software engineering fundamentals.
                </p>
              </div>
            </div>

            <div className="journey__item">
              <div className="journey__year">2019</div>

              <div className="journey__content">
                <h3>Cybersecurity & Research</h3>

                <p>
                  Developed machine learning based phishing website detection
                  and security research projects using Python, Django and MySQL.
                </p>
              </div>
            </div>

            <div className="journey__item">
              <div className="journey__year">2020</div>

              <div className="journey__content">
                <h3>Professional Engineering</h3>

                <p>
                  Started building enterprise applications, dashboards,
                  real-time systems and production-grade frontend architectures.
                </p>
              </div>
            </div>

            <div className="journey__item">
              <div className="journey__year">Today</div>

              <div className="journey__content">
                <h3>Enterprise Frontend Engineer</h3>

                <p>
                  Building enterprise analytics platforms, scalable user
                  interfaces and delivering high-impact features for real-world
                  customers.
                </p>
              </div>
            </div>
          </div>

          <div className="about__achievements reveal-stagger">
            <div className="achievement-card">
              <div className="achievement-icon">🏆</div>

              <h4>Highest Rated Engineer</h4>

              <p>
                Recognized as one of the highest performing engineers within the
                team.
              </p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">⭐</div>

              <h4>Two Spot Awards</h4>

              <p>Awarded for exceptional performance and contribution.</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">🚀</div>

              <h4>5+ Major Features</h4>

              <p>Delivered production-grade enterprise features.</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">🌍</div>

              <h4>Enterprise Platforms</h4>

              <p>Built analytics systems used by enterprise customers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
