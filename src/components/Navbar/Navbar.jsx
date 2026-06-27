import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

import "./Navbar.scss";

function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });
  const [active, setActive] = useState("hero");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

 useEffect(() => {
   const sections = document.querySelectorAll("section");

   const observer = new IntersectionObserver(
     (entries) => {
       entries.forEach((entry) => {
         if (entry.isIntersecting) {
           setActive(entry.target.id);
         }
       });
     },

     {
       threshold: 0.2,
     },
   );

   sections.forEach((section) => observer.observe(section));

   return () => observer.disconnect();
 }, []);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <div className="navbar__brand">
          <div className="navbar__logo">A R</div>

          <span className="navbar__fullname">Ankith Ranuva</span>
        </div>

        {/* Menu */}
        <ul className="navbar__menu">
          <li>
            <a href="#about" className={active === "about" ? "active" : ""}>
              About
            </a>
          </li>

          <li>
            <a href="#experience" className={active === "experience" ? "active" : ""}>Experience</a>
          </li>

          <li>
            <a href="#skills" className={active === "skills" ? "active" : ""}>Skills</a>
          </li>

          <li>
            <a href="#projects" className={active === "projects" ? "active" : ""}>Projects</a>
          </li>

          <li>
            <a href="#contact" className={active === "contact" ? "active" : ""}>Contact</a>
          </li>
        </ul>

        {/* Theme */}
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
