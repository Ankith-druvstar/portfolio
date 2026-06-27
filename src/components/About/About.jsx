import "./About.scss";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        <div className="about__content">

          {/* Section Header */}

          <h2 className="section-title">
            The Journey Behind
            The Engineer
          </h2>

          {/* Story */}

          <p className="about__description">
            My journey into software engineering began with
            curiosity and a passion for understanding how
            technology can solve real-world problems.

            What started as exploring programming fundamentals
            gradually evolved into researching cybersecurity,
            machine learning, and eventually building
            enterprise-grade software used by real customers.

            Today, I specialize in developing scalable,
            high-performance applications, enterprise
            analytics platforms, and intuitive user
            experiences while continuously learning
            and exploring better ways to build software.
          </p>

          {/* Journey Timeline */}

          <div className="about__journey">

            <div className="journey__item">

              <div className="journey__year">
                2017
              </div>

              <div className="journey__content">

                <h3>
                  Learning & Exploration
                </h3>

                <p>
                  Started exploring programming,
                  web technologies, databases,
                  and software engineering
                  fundamentals.
                </p>

              </div>

            </div>

            <div className="journey__item">

              <div className="journey__year">
                2019
              </div>

              <div className="journey__content">

                <h3>
                  Cybersecurity & Research
                </h3>

                <p>
                  Developed machine learning
                  based phishing website
                  detection and security
                  research projects using
                  Python, Django and MySQL.
                </p>

              </div>

            </div>

            <div className="journey__item">

              <div className="journey__year">
                2020
              </div>

              <div className="journey__content">

                <h3>
                  Professional Engineering
                </h3>

                <p>
                  Started building enterprise
                  applications, dashboards,
                  real-time systems and
                  production-grade frontend
                  architectures.
                </p>

              </div>

            </div>

            <div className="journey__item">

              <div className="journey__year">
                Today
              </div>

              <div className="journey__content">

                <h3>
                  Enterprise Frontend Engineer
                </h3>

                <p>
                  Building enterprise analytics
                  platforms, scalable user
                  interfaces and delivering
                  high-impact features for
                  real-world customers.
                </p>

              </div>

            </div>

          </div>

          {/* Achievements */}

          <div className="about__achievements">

            <div className="achievement">
              🏆 Highest Rated Engineer
            </div>

            <div className="achievement">
              ⭐ Two Spot Awards
            </div>

            <div className="achievement">
              🚀 5+ Major Features Delivered
            </div>

            <div className="achievement">
              🌍 Enterprise Analytics Platforms
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
