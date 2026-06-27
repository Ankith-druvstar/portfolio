import { useEffect, useRef } from "react";
import "./progressBar.scss";

function ProgressBar() {

  const progressRef = useRef(null);

  useEffect(() => {

    const updateProgress = () => {

      const total =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        (window.scrollY / total) * 100;

      if (progressRef.current) {

        progressRef.current.style.width =
          `${progress}%`;
      }
    };

    window.addEventListener(
      "scroll",
      updateProgress,
      { passive: true }
    );

    updateProgress();

    return () =>
      window.removeEventListener(
        "scroll",
        updateProgress);

  }, []);

  return (
    <div
      ref={progressRef}
      className="progress-bar"
    />
  );
}

export default ProgressBar;