import React from 'react';

const Skills = () => {
  const skillsList = [
    {
      id: 'html',
      name: 'HTML',
      badge: 'Markup',
      iconClass: 'fa-brands fa-html5',
      wrapClass: 'icon-html',
      desc: 'Semantic document structuring, accessible web standards (WCAG), modern HTML5 APIs, and SEO optimization.',
      tags: ['Semantic Tags', 'SEO & Meta', 'Accessibility'],
      percentage: '90%'
    },
    {
      id: 'css',
      name: 'CSS',
      badge: 'Styling',
      iconClass: 'fa-brands fa-css3-alt',
      wrapClass: 'icon-css',
      desc: 'Modern responsive styling, Flexbox, CSS Grid layouts, glassmorphic UI effects, transitions, and keyframe animations.',
      tags: ['Flex & Grid', 'Responsive Design', 'Animations'],
      percentage: '88%'
    },
    {
      id: 'python',
      name: 'Python',
      badge: 'Programming',
      iconClass: 'fa-brands fa-python',
      wrapClass: 'icon-python',
      featured: true,
      desc: 'Core programming language for machine learning algorithms, scripting, automated data processing, and AI workflow logic.',
      tags: ['AI/ML Logic', 'Data Processing', 'Automation'],
      percentage: '85%'
    },
    {
      id: 'sql',
      name: 'SQL',
      badge: 'Database',
      iconClass: 'fa-solid fa-database',
      wrapClass: 'icon-sql',
      desc: 'Relational database design, querying, data aggregation, schema normalization, and database optimization.',
      tags: ['Queries & Joins', 'Database Design', 'Data Integrity'],
      percentage: '80%'
    },
    {
      id: 'uiux',
      name: 'UI/UX Design',
      badge: 'Design',
      iconClass: 'fa-solid fa-wand-magic-sparkles',
      wrapClass: 'icon-uiux',
      desc: 'Creating user-centric wireframes, modern dark-mode visual aesthetics, sleek typography hierarchy, and intuitive user journeys.',
      tags: ['Visual Hierarchy', 'Wireframing', 'User Flow'],
      percentage: '82%'
    }
  ];

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-tag">
            <i className="fa-solid fa-layer-group"></i> Technical Arsenal
          </div>
          <h2 className="section-title">
            Core <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle">
            Fundamental technologies and design disciplines I leverage to create digital solutions.
          </p>
        </div>

        <div className="skills-grid">
          {skillsList.map((skill) => (
            <div
              key={skill.id}
              className={`skill-card glass-panel ${skill.featured ? 'featured-skill' : ''}`}
              data-skill={skill.id}
            >
              {skill.featured && (
                <div className="featured-ribbon">
                  <i className="fa-solid fa-star"></i> Core AI
                </div>
              )}
              <div className="skill-card-top">
                <div className={`skill-icon-wrap ${skill.wrapClass}`}>
                  <i className={skill.iconClass}></i>
                </div>
                <span className="skill-level-badge">{skill.badge}</span>
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-desc">{skill.desc}</p>
              <div className="skill-tags">
                {skill.tags.map((tag, i) => (
                  <span key={i} className="skill-pill">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="skill-meter-bar">
                <div className="skill-meter-fill" style={{ width: skill.percentage }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
