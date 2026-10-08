import React from 'react';

const About = ({ onShowToast }) => {
  const handleCopyEmail = () => {
    const email = 'KARTHICKD509@GMAIL.COM';
    navigator.clipboard
      .writeText(email)
      .then(() => {
        onShowToast('Email address copied to clipboard!', 'success');
      })
      .catch(() => {
        onShowToast('Direct email: KARTHICKD509@GMAIL.COM', 'info');
      });
  };

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-tag">
            <i className="fa-solid fa-user"></i> Discover My Story
          </div>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">A glimpse into my background, core focus areas, and technical journey.</p>
        </div>

        <div className="about-grid">
          {/* Left Column: Bio Card */}
          <div className="about-main-card glass-panel">
            <div className="about-card-badge">
              <i className="fa-solid fa-sparkles"></i>
              <span>Profile Snapshot</span>
            </div>

            <p className="about-bio-text">
              <strong>Dinesh Karthick L S</strong> is a B.Tech Artificial Intelligence and Machine Learning student
              interested in building practical technology solutions using AI, software development, and modern web
              technologies.
            </p>

            <p className="about-bio-text">
              He enjoys working on real-world projects, learning new technologies, and turning ideas into useful digital
              products. His current technical interests include <strong>Python</strong>, <strong>SQL</strong>,{' '}
              <strong>web development</strong>, <strong>AI/ML</strong>, and <strong>UI/UX design</strong>.
            </p>

            <div className="about-highlights-list">
              <div className="highlight-box">
                <div className="hl-icon">
                  <i className="fa-solid fa-brain"></i>
                </div>
                <div className="hl-content">
                  <h4>AI & Machine Learning</h4>
                  <p>Exploring machine learning models, predictive intelligence, and data-driven problem solving.</p>
                </div>
              </div>

              <div className="highlight-box">
                <div className="hl-icon">
                  <i className="fa-solid fa-code"></i>
                </div>
                <div className="hl-content">
                  <h4>Software & Web Tech</h4>
                  <p>Building clean, responsive web platforms and scalable application architectures.</p>
                </div>
              </div>

              <div className="highlight-box">
                <div className="hl-icon">
                  <i className="fa-solid fa-pen-ruler"></i>
                </div>
                <div className="hl-content">
                  <h4>UI/UX & Experience</h4>
                  <p>Focusing on human-centric interfaces, sleek visual hierarchy, and intuitive workflows.</p>
                </div>
              </div>
            </div>

            {/* Action Strip */}
            <div className="about-cta-strip">
              <a href="#contact" className="btn btn-primary btn-sm">
                <i className="fa-regular fa-paper-plane"></i> Get in Touch
              </a>
              <button className="btn btn-outline btn-sm" id="copyContactBtn" onClick={handleCopyEmail}>
                <i className="fa-regular fa-copy"></i> Copy Email
              </button>
            </div>
          </div>

          {/* Right Column: Key Details & Quick Info Panels */}
          <div className="about-sidebar">
            {/* Quick Info Card */}
            <div className="quick-info-card glass-panel">
              <h3 className="card-heading">
                <i className="fa-solid fa-id-card"></i> Quick Details
              </h3>
              <ul className="info-list">
                <li className="info-row">
                  <span className="info-label">
                    <i className="fa-solid fa-user-tag"></i> Name
                  </span>
                  <span className="info-value">Dinesh Karthick L S</span>
                </li>
                <li className="info-row">
                  <span className="info-label">
                    <i className="fa-solid fa-briefcase"></i> Role
                  </span>
                  <span className="info-value text-accent-light">AIML Engineer</span>
                </li>
                <li className="info-row">
                  <span className="info-label">
                    <i className="fa-solid fa-building-columns"></i> College
                  </span>
                  <span className="info-value">SNS College of Technology</span>
                </li>
                <li className="info-row">
                  <span className="info-label">
                    <i className="fa-solid fa-graduation-cap"></i> Degree
                  </span>
                  <span className="info-value">B.Tech (AI & ML)</span>
                </li>
                <li className="info-row">
                  <span className="info-label">
                    <i className="fa-regular fa-calendar-check"></i> Expected Grad
                  </span>
                  <span className="info-value badge-year">2029</span>
                </li>
                <li className="info-row">
                  <span className="info-label">
                    <i className="fa-solid fa-envelope"></i> Email
                  </span>
                  <a href="mailto:KARTHICKD509@GMAIL.COM" className="info-value text-link">
                    KARTHICKD509@GMAIL.COM
                  </a>
                </li>
                <li className="info-row">
                  <span className="info-label">
                    <i className="fa-solid fa-phone"></i> Phone
                  </span>
                  <a href="tel:9025898316" className="info-value text-link">
                    +91 9025898316
                  </a>
                </li>
              </ul>
            </div>

            {/* Current Focus Card */}
            <div className="focus-card glass-panel">
              <h3 className="card-heading">
                <i className="fa-solid fa-crosshairs"></i> What Drives Me
              </h3>
              <p className="focus-desc">
                Passionate about applying AI concepts into functional software systems that bridge academic concepts with
                real-world utility.
              </p>
              <div className="tag-cloud">
                <span className="mini-tag">Problem Solving</span>
                <span className="mini-tag">AI Application</span>
                <span className="mini-tag">Data Architecture</span>
                <span className="mini-tag">Modern Web</span>
                <span className="mini-tag">Clean Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
