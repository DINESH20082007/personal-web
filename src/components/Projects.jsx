import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const projectsData = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    categoryFilter: 'health',
    categoryBadge: 'HealthTech',
    category: 'HealthTech & Medical AI',
    iconClass: 'fa-solid fa-heart-pulse',
    desc: 'An intelligent healthcare solution designed to assist users with medical insights, health monitoring, and accessible digital wellness assistance.',
    techStack: ['Python', 'AI/ML', 'HTML5', 'CSS3'],
    techTags: [
      { icon: 'fa-brands fa-python', label: 'Python' },
      { icon: 'fa-solid fa-brain', label: 'AI/ML' },
      { icon: 'fa-brands fa-html5', label: 'Web UI' }
    ],
    highlights: [
      'Patient-centric interface for easy symptom check and information retrieval.',
      'Engineered with clean Python logic for automated query understanding.',
      'Focuses on accessibility, structured medical data, and user-friendly experience.'
    ]
  },
  {
    id: 'edutrace',
    title: 'EduTrace',
    categoryFilter: 'systems',
    categoryBadge: 'EdTech',
    category: 'EdTech & Analytics',
    iconClass: 'fa-solid fa-chart-line',
    desc: 'An educational tracking platform for monitoring student performance, progress analytics, and academic evaluation with streamlined record keeping.',
    techStack: ['SQL', 'Python', 'UI/UX Design', 'HTML/CSS'],
    techTags: [
      { icon: 'fa-solid fa-database', label: 'SQL' },
      { icon: 'fa-brands fa-python', label: 'Python' },
      { icon: 'fa-brands fa-css3-alt', label: 'UI/UX' }
    ],
    highlights: [
      'Relational database schema for tracking marks, attendance, and learning milestones.',
      'Visual analytics dashboard for students and instructors.',
      'Intuitive navigation for tracking individual subject trends over time.'
    ]
  },
  {
    id: 'treeguard',
    title: 'TreeGuard',
    categoryFilter: 'systems',
    categoryBadge: 'EcoTech',
    category: 'EcoTech & Smart Monitoring',
    iconClass: 'fa-solid fa-tree',
    desc: 'An environmental preservation project focused on monitoring tree health, forest surveillance, and tracking deforestation risks using technology.',
    techStack: ['Python', 'Smart Monitoring', 'HTML5', 'CSS3'],
    techTags: [
      { icon: 'fa-brands fa-python', label: 'Python' },
      { icon: 'fa-solid fa-microchip', label: 'Smart Monitoring' },
      { icon: 'fa-brands fa-html5', label: 'Web App' }
    ],
    highlights: [
      'Automated alerts and health status classification for environmental assets.',
      'Environmental data structuring for green initiative reporting.',
      'Designed to assist conservationists and community eco-groups.'
    ]
  },
  {
    id: 'aipowerlearning',
    title: 'AI Power Learning',
    categoryFilter: 'ai',
    categoryBadge: 'AI / EdTech',
    category: 'Artificial Intelligence / EdTech',
    featured: true,
    topBadge: 'AI Powered',
    topBadgeIcon: 'fa-solid fa-sparkles',
    iconClass: 'fa-solid fa-laptop-code',
    desc: 'A smart adaptive learning platform that utilizes artificial intelligence to personalize study materials, track comprehension, and accelerate learning.',
    techStack: ['AI/ML', 'Python', 'Modern Web', 'UI/UX'],
    techTags: [
      { icon: 'fa-solid fa-brain', label: 'AI/ML' },
      { icon: 'fa-brands fa-python', label: 'Python' },
      { icon: 'fa-brands fa-html5', label: 'HTML/CSS' }
    ],
    highlights: [
      'Adaptive content flow tuned to learner progression and concept mastery.',
      'Intelligent summary generation and interactive concept testing.',
      'Modern dark-mode learning interface with minimal distraction design.'
    ]
  },
  {
    id: 'wastemanagement',
    title: 'Waste Management System',
    categoryFilter: 'systems',
    categoryBadge: 'Smart City',
    category: 'Smart City & Systems',
    iconClass: 'fa-solid fa-recycle',
    desc: 'A streamlined waste management system designed to optimize waste collection schedules, categorize disposal methods, and support cleaner communities.',
    techStack: ['SQL', 'Python', 'Web Architecture', 'UI/UX'],
    techTags: [
      { icon: 'fa-solid fa-database', label: 'SQL' },
      { icon: 'fa-brands fa-python', label: 'Python' },
      { icon: 'fa-brands fa-html5', label: 'Web App' }
    ],
    highlights: [
      'Collection route scheduling and dispatch data management.',
      'Database categorization for recyclable, organic, and hazardous waste.',
      'Real-time status tracking for municipal sanitation coordination.'
    ]
  },
  {
    id: 'medifinds',
    title: 'MediFinds',
    categoryFilter: 'health',
    categoryBadge: 'HealthTech',
    category: 'HealthTech & Pharmacy Locator',
    iconClass: 'fa-solid fa-prescription-bottle-medical',
    desc: 'A digital pharmacy and medicine discovery tool enabling users to locate required medicines, check availability, and access key pharmaceutical information.',
    techStack: ['SQL Database', 'Python', 'HTML5', 'CSS3'],
    techTags: [
      { icon: 'fa-solid fa-database', label: 'SQL' },
      { icon: 'fa-brands fa-html5', label: 'HTML/CSS' },
      { icon: 'fa-brands fa-python', label: 'Python' }
    ],
    highlights: [
      'Fast searchable medicine directory with composition and dosage references.',
      'Inventory lookup across local medical repositories.',
      'Clean, responsive card UI with instant search filters.'
    ]
  },
  {
    id: 'aibusinesscopilot',
    title: 'AI Business Copilot',
    categoryFilter: 'ai',
    categoryBadge: 'Enterprise AI',
    category: 'Enterprise AI & Automation',
    featured: true,
    topBadge: 'Copilot System',
    topBadgeIcon: 'fa-solid fa-robot',
    iconClass: 'fa-solid fa-briefcase',
    desc: 'An intelligent business assistant designed to help teams automate repetitive operations, gain analytical insights, and streamline enterprise workflows.',
    techStack: ['AI/ML Algorithms', 'Python', 'SQL', 'UI/UX Design'],
    techTags: [
      { icon: 'fa-solid fa-brain', label: 'AI/ML' },
      { icon: 'fa-brands fa-python', label: 'Python' },
      { icon: 'fa-solid fa-database', label: 'SQL' }
    ],
    highlights: [
      'Automated operational query resolution and smart report generation.',
      'Data insight extraction to aid everyday managerial decision making.',
      'Seamless conversational interface tailored for productivity.'
    ]
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterOptions = [
    { id: 'all', label: 'All Projects (7)' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'health', label: 'Healthcare & Well-being' },
    { id: 'systems', label: 'Smart Systems & Tools' }
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((project) => project.categoryFilter === activeFilter);

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-tag">
            <i className="fa-solid fa-cubes"></i> Practical Implementations
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world applications across healthcare, education, sustainability, and AI copilots.
          </p>
        </div>

        {/* Project Filter Buttons */}
        <div className="project-filters" id="projectFilters" role="tablist">
          {filterOptions.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              data-filter={filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid" id="projectsGrid">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`project-card glass-panel ${project.featured ? 'featured-project' : ''}`}
              data-category={project.categoryFilter}
            >
              {project.featured && (
                <div className="featured-badge-top">
                  <i className={project.topBadgeIcon}></i> {project.topBadge}
                </div>
              )}

              <div className="project-card-header">
                <div className="project-icon-box">
                  <i className={project.iconClass}></i>
                </div>
                <span className="project-category-badge">{project.categoryBadge}</span>
              </div>

              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tech-tags">
                  {project.techTags.map((tag, i) => (
                    <span key={i} className="p-tag">
                      <i className={tag.icon}></i> {tag.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-card-footer">
                <button
                  className="btn-project-view"
                  data-project={project.id}
                  onClick={() => setSelectedProject(project)}
                >
                  <span>View Details</span>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project-code"
                  title="View Source on GitHub"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;
