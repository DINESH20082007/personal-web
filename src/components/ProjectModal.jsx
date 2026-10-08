import React, { useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className={`modal-overlay ${project ? 'open' : ''}`}
      id="projectModal"
      aria-hidden={!project}
      onClick={(e) => {
        if (e.target.id === 'projectModal') {
          onClose();
        }
      }}
    >
      <div className="modal-dialog glass-panel" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <button className="modal-close-btn" id="modalCloseBtn" aria-label="Close details dialog" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="modal-content" id="modalDynamicContent">
          <div className="modal-header-badge">
            <i className="fa-solid fa-code"></i> {project.category}
          </div>
          <h3 className="modal-project-title" id="modalTitle">
            {project.title}
          </h3>
          <p className="modal-project-desc">{project.summary}</p>

          <div className="modal-meta-grid">
            <div className="modal-meta-item">
              <span className="modal-meta-label">Primary Tech</span>
              <span className="modal-meta-val">{project.techStack.join(' • ')}</span>
            </div>
            <div className="modal-meta-item">
              <span className="modal-meta-label">Lead Developer</span>
              <span className="modal-meta-val">Dinesh Karthick L S</span>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
              Key Architecture & Focus
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
              {project.highlights.map((h, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <i className="fa-solid fa-check text-accent" style={{ marginTop: '0.25rem' }}></i>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-actions">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <i className="fa-brands fa-github"></i> Source Repository (Placeholder)
            </a>
            <button className="btn btn-outline btn-sm" id="modalCloseActionBtn" onClick={onClose}>
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
