import React, { useState } from 'react';

const Contact = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email format.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please provide a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setStatus({
      type: 'success',
      message: 'Preparing message dispatch...'
    });

    setTimeout(() => {
      const senderName = encodeURIComponent(formData.name.trim());
      const senderEmail = encodeURIComponent(formData.email.trim());
      const subject = encodeURIComponent(formData.subject.trim());
      const body = encodeURIComponent(
        `From: ${formData.name.trim()} (${formData.email.trim()})\n\nMessage:\n${formData.message.trim()}`
      );

      setStatus({
        type: 'success',
        message: `Thank you, ${formData.name.trim()}! Opening mail client to send your inquiry.`
      });

      onShowToast('Opening default email client...', 'success');

      // Dispatch mailto
      window.location.href = `mailto:KARTHICKD509@GMAIL.COM?subject=${subject}&body=${body}`;

      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 700);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-tag">
            <i className="fa-solid fa-comments"></i> Initiate Communication
          </div>
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a question, collaborative idea, or tech inquiry? Feel free to reach out directly.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left: Contact Details Cards */}
          <div className="contact-info-panel">
            <div className="contact-info-card glass-panel">
              <div className="contact-icon-bubble">
                <i className="fa-solid fa-envelope-open-text"></i>
              </div>
              <div className="contact-info-content">
                <span className="c-label">Direct Email</span>
                <a href="mailto:KARTHICKD509@GMAIL.COM" className="c-value text-accent-hover" id="contactEmailLink">
                  KARTHICKD509@GMAIL.COM
                </a>
                <span className="c-sub">Typically responds within 24 hours</span>
              </div>
            </div>

            <div className="contact-info-card glass-panel">
              <div className="contact-icon-bubble">
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <div className="contact-info-content">
                <span className="c-label">Phone / WhatsApp</span>
                <a href="tel:9025898316" className="c-value text-accent-hover" id="contactPhoneLink">
                  +91 9025898316
                </a>
                <span className="c-sub">Available for professional calls</span>
              </div>
            </div>

            <div className="contact-info-card glass-panel">
              <div className="contact-icon-bubble">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="contact-info-content">
                <span className="c-label">Location & Institution</span>
                <span className="c-value">Tamil Nadu, India</span>
                <span className="c-sub">SNS College of Technology</span>
              </div>
            </div>

            {/* Social Links Strip */}
            <div className="contact-social-box glass-panel">
              <span className="social-box-title">Connect with me online</span>
              <div className="social-box-links">
                <a href="mailto:KARTHICKD509@GMAIL.COM" className="social-btn-round" title="Email" aria-label="Email Dinesh">
                  <i className="fa-solid fa-envelope"></i>
                </a>
                <a href="tel:9025898316" className="social-btn-round" title="Phone" aria-label="Call Dinesh">
                  <i className="fa-solid fa-phone"></i>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn-round"
                  title="GitHub"
                  aria-label="GitHub Profile"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn-round"
                  title="LinkedIn"
                  aria-label="LinkedIn Profile"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-panel glass-panel">
            <h3 className="form-title">
              <i className="fa-solid fa-paper-plane text-accent"></i> Send a Direct Message
            </h3>
            <p className="form-desc">Fill out the quick form below to send an email inquiry directly to Dinesh.</p>

            <form id="contactForm" className="custom-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="userName" className="form-label">
                    Your Name <span className="required">*</span>
                  </label>
                  <div className="input-wrap">
                    <i className="fa-regular fa-user input-icon"></i>
                    <input
                      type="text"
                      id="userName"
                      name="name"
                      className="form-input"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <span className="field-error" id="nameError">
                    {errors.name}
                  </span>
                </div>

                <div className="form-group">
                  <label htmlFor="userEmail" className="form-label">
                    Your Email <span className="required">*</span>
                  </label>
                  <div className="input-wrap">
                    <i className="fa-regular fa-envelope input-icon"></i>
                    <input
                      type="email"
                      id="userEmail"
                      name="email"
                      className="form-input"
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <span className="field-error" id="emailError">
                    {errors.email}
                  </span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="userSubject" className="form-label">
                  Subject <span className="required">*</span>
                </label>
                <div className="input-wrap">
                  <i className="fa-regular fa-bookmark input-icon"></i>
                  <input
                    type="text"
                    id="userSubject"
                    name="subject"
                    className="form-input"
                    placeholder="e.g. Project Collaboration / Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <span className="field-error" id="subjectError">
                  {errors.subject}
                </span>
              </div>

              <div className="form-group">
                <label htmlFor="userMessage" className="form-label">
                  Message <span className="required">*</span>
                </label>
                <div className="input-wrap textarea-wrap">
                  <i className="fa-regular fa-message input-icon"></i>
                  <textarea
                    id="userMessage"
                    name="message"
                    rows="5"
                    className="form-input form-textarea"
                    placeholder="Write your message or inquiry here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <span className="field-error" id="messageError">
                  {errors.message}
                </span>
              </div>

              <button type="submit" className="btn btn-primary btn-block" id="submitFormBtn" disabled={isSubmitting}>
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <i className={`fa-solid ${isSubmitting ? 'fa-circle-notch fa-spin' : 'fa-paper-plane'}`}></i>
              </button>

              {status.message && (
                <div className={`form-status-msg ${status.type === 'success' ? 'status-success' : 'status-error'}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
