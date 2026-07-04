import React, { useState } from 'react';
import './Contact.css';

export default function Contact({ contact }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate send (integrate EmailJS or similar here)
    await new Promise((r) => setTimeout(r, 1000));
    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="contact__header fade-up">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let's Work Together</h2>
          <div className="section-divider" />
          <p className="contact__intro fade-up delay-1">
            I'm actively looking for internship opportunities. Whether you have a project in mind, a question, or just want to say hi — my inbox is always open.
          </p>
        </div>

        <div className="contact__layout">
          {/* Left: links */}
          <div className="contact__info fade-up delay-1">
            <div className="contact__links">
              <a href={`mailto:${contact.email}`} className="contact__link-card">
                <div className="contact__link-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="contact__link-content">
                  <span className="contact__link-label">Email</span>
                  <span className="contact__link-value">{contact.email}</span>
                </div>
                <span className="contact__link-arrow">↗</span>
              </a>

              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact__link-card">
                <div className="contact__link-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <div className="contact__link-content">
                  <span className="contact__link-label">GitHub</span>
                  <span className="contact__link-value">github.com/Paarth-31</span>
                </div>
                <span className="contact__link-arrow">↗</span>
              </a>

              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact__link-card">
                <div className="contact__link-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="contact__link-content">
                  <span className="contact__link-label">LinkedIn</span>
                  <span className="contact__link-value">Connect with me</span>
                </div>
                <span className="contact__link-arrow">↗</span>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <form className="contact__form fade-up delay-2" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-input"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary contact__submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent! ✓' : 'Send Message ↗'}
            </button>

            {status === 'sent' && (
              <p className="contact__success">
                Thanks for reaching out! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
