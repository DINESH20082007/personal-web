import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 120;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container nav-container">
        <a href="#hero" className="nav-brand" aria-label="Dinesh Karthick L S Portfolio Home" onClick={closeMobileMenu}>
          <span className="brand-avatar">
            <span className="brand-initials">DK</span>
            <span className="brand-pulse"></span>
          </span>
          <div className="brand-text">
            <span className="brand-name">Dinesh Karthick L S</span>
            <span className="brand-sub">AIML Engineer</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            <li>
              <a href="#hero" className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`} id="nav-link-hero">
                <span className="nav-num">01.</span> Home
              </a>
            </li>
            <li>
              <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} id="nav-link-about">
                <span className="nav-num">02.</span> About
              </a>
            </li>
            <li>
              <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} id="nav-link-skills">
                <span className="nav-num">03.</span> Skills
              </a>
            </li>
            <li>
              <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} id="nav-link-projects">
                <span className="nav-num">04.</span> Projects
              </a>
            </li>
            <li>
              <a href="#education" className={`nav-link ${activeSection === 'education' ? 'active' : ''}`} id="nav-link-education">
                <span className="nav-num">05.</span> Education
              </a>
            </li>
            <li>
              <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} id="nav-link-contact">
                <span className="nav-num">06.</span> Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="nav-actions">
          <a href="#contact" className="btn btn-outline-nav btn-sm d-none-mobile">
            <span>Let's Connect</span>
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
          <button
            className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
            id="mobileMenuBtn"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobileMenu"
            onClick={toggleMobileMenu}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} id="mobileMenu" aria-hidden={!mobileMenuOpen}>
        <div className="mobile-menu-inner">
          <ul className="mobile-nav-links">
            <li>
              <a href="#hero" className="mobile-nav-link" onClick={closeMobileMenu}>
                <i className="fa-solid fa-house"></i> Home
              </a>
            </li>
            <li>
              <a href="#about" className="mobile-nav-link" onClick={closeMobileMenu}>
                <i className="fa-solid fa-user-astronaut"></i> About
              </a>
            </li>
            <li>
              <a href="#skills" className="mobile-nav-link" onClick={closeMobileMenu}>
                <i className="fa-solid fa-microchip"></i> Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="mobile-nav-link" onClick={closeMobileMenu}>
                <i className="fa-solid fa-folder-tree"></i> Projects
              </a>
            </li>
            <li>
              <a href="#education" className="mobile-nav-link" onClick={closeMobileMenu}>
                <i className="fa-solid fa-graduation-cap"></i> Education
              </a>
            </li>
            <li>
              <a href="#contact" className="mobile-nav-link" onClick={closeMobileMenu}>
                <i className="fa-solid fa-paper-plane"></i> Contact
              </a>
            </li>
          </ul>
          <div className="mobile-menu-footer">
            <div className="mobile-contact-quick">
              <a href="mailto:KARTHICKD509@GMAIL.COM" className="mobile-quick-link">
                <i className="fa-regular fa-envelope"></i> KARTHICKD509@GMAIL.COM
              </a>
              <a href="tel:9025898316" className="mobile-quick-link">
                <i className="fa-solid fa-phone"></i> +91 9025898316
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
