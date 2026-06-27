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
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem(
      "theme",
      theme
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme(
      theme === "dark"
        ? "light"
        : "dark"
    );
  };

  const scrollToSection = (id) => {
    const section =
      document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const sections =
      document.querySelectorAll(
        "section"
      );

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (
                entry.isIntersecting
              ) {
                setActive(
                  entry.target.id
                );
              }
            }
          );
        },
        {
          threshold: 0.3,
        }
      );

    sections.forEach(
      (section) =>
        observer.observe(
          section
        )
    );

    return () =>
      observer.disconnect();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">

          {/* Logo */}

          <div
            className="navbar__brand"
            onClick={() =>
              scrollToSection(
                "hero"
              )
            }
          >
            <div className="navbar__logo">
              A R
            </div>

            <span className="navbar__fullname">
              Ankith Ranuva
            </span>
          </div>

          {/* Desktop */}

          <ul className="navbar__menu">

            <li>
              <a
                onClick={() =>
                  scrollToSection(
                    "about"
                  )
                }
                className={
                  active === "about"
                    ? "active"
                    : ""
                }
              >
                About
              </a>
            </li>

            <li>
              <a
                onClick={() =>
                  scrollToSection(
                    "experience"
                  )
                }
                className={
                  active ===
                  "experience"
                    ? "active"
                    : ""
                }
              >
                Experience
              </a>
            </li>

            <li>
              <a
                onClick={() =>
                  scrollToSection(
                    "skills"
                  )
                }
                className={
                  active ===
                  "skills"
                    ? "active"
                    : ""
                }
              >
                Skills
              </a>
            </li>

            <li>
              <a
                onClick={() =>
                  scrollToSection(
                    "projects"
                  )
                }
                className={
                  active ===
                  "projects"
                    ? "active"
                    : ""
                }
              >
                Projects
              </a>
            </li>

            <li>
              <a
                onClick={() =>
                  scrollToSection(
                    "contact"
                  )
                }
                className={
                  active ===
                  "contact"
                    ? "active"
                    : ""
                }
              >
                Contact
              </a>
            </li>

          </ul>

          {/* Theme */}

          <button
            className="theme-btn"
            onClick={toggleTheme}
          >
            {
              theme === "dark"
                ? <Sun size={18}/>
                : <Moon size={18}/>
            }

            <span className="theme-tooltip">
              {
                theme === "dark"
                  ? "Turn on light mode"
                  : "Turn on dark mode"
              }
            </span>
          </button>

          {/* Mobile */}

          <button
            className="mobile-btn"
            onClick={() =>
              setMenuOpen(
                !menuOpen
              )
            }
          >
            {
              menuOpen
                ? <HiX/>
                : <HiOutlineMenuAlt3/>
            }
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}

      <div
        className={`mobile-menu ${
          menuOpen
            ? "open"
            : ""
        }`}
      >

        <a
          onClick={() =>
            scrollToSection(
              "about"
            )
          }
        >
          About
        </a>

        <a
          onClick={() =>
            scrollToSection(
              "experience"
            )
          }
        >
          Experience
        </a>

        <a
          onClick={() =>
            scrollToSection(
              "skills"
            )
          }
        >
          Skills
        </a>

        <a
          onClick={() =>
            scrollToSection(
              "projects"
            )
          }
        >
          Projects
        </a>

        <a
          onClick={() =>
            scrollToSection(
              "contact"
            )
          }
        >
          Contact
        </a>

        <button
          className="mobile-theme"
          onClick={toggleTheme}
        >
          {
            theme === "dark"
              ? "☀ Light Mode"
              : "🌙 Dark Mode"
          }
        </button>

      </div>
    </>
  );
}

export default Navbar;