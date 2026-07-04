import React from 'react';
import './About.css';

const CATEGORY_COLORS = {
  Frontend: '#7C3AED',
  Backend:  '#2563EB',
  Language: '#059669',
  Database: '#D97706',
  Tools:    '#DC2626',
  Cloud:    '#0891B2',
  Protocol: '#7C3AED',
};

export default function About({ data }) {
  const { paragraphs, skills, education } = data;

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        {/* Header */}
        <div className="about__header fade-up">
          <p className="section-label">About Me</p>
          <h2 className="section-title">Who I Am</h2>
          <div className="section-divider" />
        </div>

        <div className="about__grid">
          {/* Left: bio */}
          <div className="about__bio">
            {paragraphs.map((p, i) => (
              <p key={i} className={`about__para fade-up delay-${i + 1}`}>{p}</p>
            ))}

            {/* Education card */}
            <div className="about__edu fade-up delay-3">
              <div className="about__edu-icon">🎓</div>
              <div className="about__edu-content">
                <p className="about__edu-inst">{education.institution}</p>
                <p className="about__edu-degree">{education.degree}</p>
                <div className="about__edu-meta">
                  <span>{education.period}</span>
                  <span className="about__edu-sep">·</span>
                  <span className="about__edu-cgpa">CGPA: <strong>{education.cgpa}</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: skills */}
          <div className="about__skills fade-up delay-2">
            <p className="about__skills-title">Tech Stack</p>
            <div className="about__skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="about__skill-pill">
                  <span
                    className="about__skill-indicator"
                    style={{ background: CATEGORY_COLORS[skill.category] || '#7C3AED' }}
                  />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
