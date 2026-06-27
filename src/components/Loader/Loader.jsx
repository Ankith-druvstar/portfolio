import "./Loader.scss";

function Loader() {
  return (
    <div className="loader">
      <div className="loader__content">
        <div className="loader__logo">AR</div>

        <h1>ANKITH RANUVA</h1>

        <div className="loader__line">
          <div className="loader__progress"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;