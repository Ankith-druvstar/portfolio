import "./Hero.scss";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__content">
          <span className="hero__hello">Hello.</span>

          <h1 className="hero__title">I'm Ankith Ranuva.</h1>

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
            <button className="primary-btn">Explore My Work →</button>

            <button className="secondary-btn">Let's Connect</button>
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
