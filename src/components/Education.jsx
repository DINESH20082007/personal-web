import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section-padding education-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-tag">
            <i className="fa-solid fa-graduation-cap"></i> Academic Pathway
          </div>
          <h2 className="section-title">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="section-subtitle">
            Building strong foundational knowledge in artificial intelligence, mathematics, and computation.
          </p>
        </div>

        <div className="education-container">
          {/* Education Timeline Card */}
          <div className="edu-card glass-panel">
            <div className="edu-card-left">
              <div className="college-badge">
                <i className="fa-solid fa-building-columns"></i>
              </div>
              <div className="edu-status-badge">
                <span className="pulse-dot"></span> In Progress
              </div>
            </div>

            <div className="edu-card-right">
              <div className="edu-header-wrap">
                <div>
                  <h3 className="college-name">SNS College of Technology</h3>
                  <div className="degree-title">Bachelor of Technology (B.Tech)</div>
                  <div className="department-title">
                    <i className="fa-solid fa-microchip text-accent"></i>
                    <span>Department of Artificial Intelligence and Machine Learning</span>
                  </div>
                </div>
                <div className="grad-tag">
                  <span className="grad-label">Expected Graduation</span>
                  <span className="grad-year-val">2029</span>
                </div>
              </div>

              <div className="edu-body">
                <p className="edu-text">
                  Pursuing foundational and applied coursework in Artificial Intelligence, Machine Learning algorithms,
                  Data Structures, Relational Database Management Systems (SQL), and Modern Software Engineering
                  methodologies.
                </p>

                <div className="edu-pills">
                  <span className="edu-pill">
                    <i className="fa-solid fa-check"></i> Artificial Intelligence Fundamentals
                  </span>
                  <span className="edu-pill">
                    <i className="fa-solid fa-check"></i> Machine Learning Concepts
                  </span>
                  <span className="edu-pill">
                    <i className="fa-solid fa-check"></i> Python & Logic Building
                  </span>
                  <span className="edu-pill">
                    <i className="fa-solid fa-check"></i> Database Systems (SQL)
                  </span>
                  <span className="edu-pill">
                    <i className="fa-solid fa-check"></i> UI/UX & Web Foundations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
