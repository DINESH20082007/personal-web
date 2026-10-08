import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorSpotlight from './components/CursorSpotlight';
import Toast from './components/Toast';

function App() {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  useEffect(() => {
    // Scroll reveal observer
    const revealElements = document.querySelectorAll('.glass-panel, .section-header');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );

      revealElements.forEach((el) => {
        el.classList.add('reveal-item');
        observer.observe(el);
      });

      return () => observer.disconnect();
    } else {
      revealElements.forEach((el) => el.classList.add('revealed'));
    }
  }, []);

  return (
    <>
      {/* Background Ambient Glow & Cyber Grid */}
      <div className="ambient-glow-container" aria-hidden="true">
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="grid-overlay"></div>
      </div>

      {/* Mouse Follower Spotlight */}
      <CursorSpotlight />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About onShowToast={addToast} />
        <Skills />
        <Projects />
        <Education />
        <Contact onShowToast={addToast} />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Global Dynamic Toast Notifications */}
      <Toast toasts={toasts} />
    </>
  );
}

export default App;
