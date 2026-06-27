import { useState, useEffect } from "react";

import "./Home.scss";

import Loader from "../../components/Loader/Loader";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Experience from "../../components/Experience/Experience";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contacts/Contacts";
import useReveal from "../../hooks/useReveal";

function Home() {
  const [loading, setLoading] = useState(true);
  useReveal(!loading);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="ambient ambient-1" />
      <div className="ambient ambient-2" />
      <div className="ambient ambient-3" />
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;
