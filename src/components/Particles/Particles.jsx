import "./Particles.scss";

function Particles() {

  return (
    <div className="particles">

      {[...Array(44)].map((_, i) => (
        <span
          key={i}
          className="particle"
        />
      ))}

    </div>
  );
}

export default Particles;