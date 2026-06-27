import "./Home.scss";

import Hero from '../../components/Hero/Hero';

import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import Experience from "../../components/Experience/Experience";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import Contact from "../../components/Contacts/Contacts";

function Home() {
    return (
        <>
            <Navbar />

            <section id="hero">
                <Hero/>
            </section>

            <section id="about">
                <About/>
            </section>

            <section id="experience">
                <Experience/>
            </section>

            <section id="skills">
                <Skills/>
            </section>

            <section id="projects">
                <Projects/>
            </section>

            <section id="contact">
                <Contact/>
            </section>
        </>
    );
}

export default Home;