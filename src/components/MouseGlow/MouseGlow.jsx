import { useEffect, useRef } from "react";
import "./MouseGlow.scss";

function MouseGlow() {

  const glowRef = useRef(null);

  useEffect(() => {

    const handleMove = (e) => {

      if (!glowRef.current) return;

      glowRef.current.style.transform =
        `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener(
      "mousemove",
      handleMove,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMove
      );
  }, []);

  return (
    <div
      ref={glowRef}
      className="mouse-glow"
    />
  );
}

export default MouseGlow;