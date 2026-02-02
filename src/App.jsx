import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import { Home, About, Projects } from "./pages/index.js";
import Canvas3D from "./components/Canvas3D.jsx"; 
import C3D from "./components/C3D.jsx";

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('.snap-section');
    
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <Router>
      {/* Navbar on top */}
      <Navbar />

      {/* Global floating 3D element */}
      <C3D />

      {/* Fixed background */}
      <div className="fixed inset-0 -z-10 bg-image" />

      {/* Scrollable sections */}
      <main>
        <section id="home" className={`snap-section fade-section ${activeSection === 'home' ? 'active' : ''}`}>
          <Home />
        </section>
        <section id="projects" className={`snap-section fade-section ${activeSection === 'projects' ? 'active' : ''}`}>
          <Projects />
        </section>
        <section id="about" className={`snap-section fade-section ${activeSection === 'about' ? 'active' : ''}`}>
          <About />
        </section>
      </main>

      {/* Footer */}
      <footer className="footer-social">
        <a href="https://github.com/NatsuDragneel314" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src="/assets/icons/github.svg" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/avaneeth-pkt-58229b28a/" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src="/assets/icons/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="mailto:pktappu123@gmail.com" className="social-link">
          <img src="/assets/icons/email.svg" alt="Email" />
        </a>
      </footer>
    </Router>
  );
};

export default App;
