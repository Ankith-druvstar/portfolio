import { useEffect } from "react";

export default function useReveal() {

  useEffect(() => {

    const elements =
      document.querySelectorAll(
        `
          .reveal,
          .reveal-left,
          .reveal-right,
          .reveal-scale,
          .reveal-stagger
        `
      );

    const observer =
      new IntersectionObserver(

        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "reveal--active"
                );

                observer.unobserve(
                  entry.target
                );
              }
            }
          );
        },

        {
          threshold: 0.15,

          rootMargin:
            "0px 0px -100px 0px",
        }
      );

    elements.forEach(
      (el) =>
        observer.observe(el)
    );

    return () =>
      observer.disconnect();

  }, []);
}