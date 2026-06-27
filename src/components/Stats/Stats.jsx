import { useEffect, useState } from "react";
import "./Stats.scss";

const stats = [
  {
    value: 5,
    suffix: "+",
    label: "Years Experience",
  },

  {
    value: 20,
    suffix: "+",
    label: "Projects Delivered",
  },

  {
    value: 2,
    suffix: "",
    label: "Spot Awards",
  },

  {
    value: 15,
    suffix: "+",
    label: "Technologies",
  },
];

function Counter({ target, suffix }) {

  const [count, setCount] = useState(0);

  useEffect(() => {

    let start = 0;

    const duration = 1500;

    const increment =
      target / (duration / 16);

    const timer = setInterval(() => {

      start += increment;

      if (start >= target) {

        setCount(target);

        clearInterval(timer);

      } else {

        setCount(
          Math.floor(start)
        );
      }

    }, 16);

    return () =>
      clearInterval(timer);

  }, [target]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function Stats() {

  return (
    <section className="stats">

      <div className="container">

        <div className="stats__grid">

          {stats.map((item) => (

            <div
              key={item.label}
              className="stats__card"
            >

              <h3>
                <Counter
                  target={item.value}
                  suffix={item.suffix}
                />
              </h3>

              <p>
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;