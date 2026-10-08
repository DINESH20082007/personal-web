import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-avatar brand-avatar-sm">
              <span className="brand-initials">DK</span>
            </span>
            <div>
              <h3 className="footer-name">Dinesh Karthick L S</h3>
              <p className="footer-tagline">AIML Engineer &middot; B.Tech Artificial Intelligence and Machine Learning</p>
            </div>
          </div>

          <ul className="footer-nav">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; <span id="currentYear">{currentYear}</span> <strong>Dinesh Karthick L S</strong> — AIML Engineer. All
            rights reserved.
          </p>
          <p className="footer-note">Designed with a modern black & technology-focused aesthetic.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
