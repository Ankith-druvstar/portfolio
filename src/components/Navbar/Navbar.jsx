import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

import "./Navbar.scss";

function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

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
    <>
      <nav className="navbar">
        <div className="navbar__container">
          {/* Logo */}

          <div className="navbar__brand">
            <div className="navbar__logo">A R</div>

            <span className="navbar__fullname">Ankith Ranuva</span>
          </div>

          {/* Desktop Menu */}

          <ul className="navbar__menu">
            <li>
              <a href="#about" className={active === "about" ? "active" : ""}>
                About
              </a>
            </li>

            <li>
              <a
                href="#experience"
                className={active === "experience" ? "active" : ""}
              >
                Experience
              </a>
            </li>

            <li>
              <a href="#skills" className={active === "skills" ? "active" : ""}>
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className={active === "projects" ? "active" : ""}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className={active === "contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Theme */}

          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile */}

          <button className="mobile-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="#experience" onClick={() => setMenuOpen(false)}>
          Experience
        </a>

        <a href="#skills" onClick={() => setMenuOpen(false)}>
          Skills
        </a>

        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>

        <button className="mobile-theme" onClick={toggleTheme}>
          {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </>
  );
}

export default Navbar;
