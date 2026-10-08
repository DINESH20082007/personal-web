import React, { useState, useEffect } from 'react';
import NeuralCanvas from './NeuralCanvas';

const Hero = () => {
  const [typewriterText, setTypewriterText] = useState('');

  // Typewriter effect
  useEffect(() => {
    const roles = [
      "AI & Machine Learning Explorer",
      "Python & Data Systems Student",
      "Modern Web & UI/UX Enthusiast",
      "SNS College of Technology"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    function typeEffect() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        setTypewriterText(currentRole.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypewriterText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      }

      let speed = isDeleting ? 40 : 90;

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        speed = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 500;
      }

      timeoutId = setTimeout(typeEffect, speed);
    }

    typeEffect();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="hero" className="hero-section">
      {/* 3D Interactive AI Neural Canvas */}
      <NeuralCanvas />

      <div className="container hero-container">
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-badge reveal-item revealed">
            <span className="status-indicator">
              <span className="status-dot"></span>
              <span className="status-ping"></span>
            </span>
            <span className="badge-text">Aspiring AIML Engineer &middot; Tech Innovator</span>
          </div>

          {/* Hero Headline */}
          <h1 className="hero-title reveal-item revealed">
            <span className="hero-greeting">Hi, I'm</span>
            <span className="hero-name-gradient">Dinesh Karthick L S</span>
          </h1>

          {/* Hero Subtitle with dynamic typewriter accent */}
          <div className="hero-subtitle reveal-item revealed">
            <span className="role-static">AIML Engineer</span>
            <span className="role-separator">|</span>
            <span className="role-dynamic" id="typewriterText">
              {typewriterText}
            </span>
          </div>

          {/* Short Description */}
          <p className="hero-description reveal-item revealed">
            "Building practical solutions with AI, technology, and creative problem solving."
          </p>

          {/* Key Highlights Ticker */}
          <div className="hero-metrics reveal-item revealed">
            <div className="metric-item">
              <span className="metric-val">B.Tech</span>
              <span className="metric-lbl">AI & ML Program</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-val">7+</span>
              <span className="metric-lbl">Practical Projects</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-val">2029</span>
              <span className="metric-lbl">Graduation Year</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-actions reveal-item revealed">
            <a href="#projects" className="btn btn-primary btn-glow" id="heroViewProjectsBtn">
              <span>View My Projects</span>
              <i className="fa-solid fa-arrow-down"></i>
            </a>
            <a href="#contact" className="btn btn-secondary" id="heroContactBtn">
              <span>Contact Me</span>
              <i className="fa-regular fa-envelope"></i>
            </a>
          </div>

          {/* Quick Social & Coordinates */}
          <div className="hero-social-strip reveal-item revealed">
            <span className="social-label">Find me on:</span>
            <a href="mailto:KARTHICKD509@GMAIL.COM" className="social-icon-btn" title="Send Email" aria-label="Email Dinesh">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="tel:9025898316" className="social-icon-btn" title="Call Dinesh" aria-label="Call Dinesh">
              <i className="fa-solid fa-phone"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="GitHub (Placeholder)"
              aria-label="GitHub Profile"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="LinkedIn (Placeholder)"
              aria-label="LinkedIn Profile"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="scroll-down-hint" aria-label="Scroll to About Section">
        <span className="mouse-icon">
          <span className="wheel"></span>
        </span>
        <span className="scroll-text">Scroll Down</span>
      </a>
    </section>
  );
};

export default Hero;
