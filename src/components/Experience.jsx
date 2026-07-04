import React from 'react';
import './Experience.css';

export default function Experience({ experience }) {
  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        <div className="experience__header fade-up">
          <p className="section-label">Campus Life</p>
          <h2 className="section-title">Positions of Responsibility</h2>
          <div className="section-divider" />
        </div>

        <div className="experience__timeline">
          {experience.map((exp, i) => (
            <div key={i} className={`exp-item fade-up delay-${i + 1}`}>
              <div className="exp-item__line">
                <div className="exp-item__dot" />
                {i < experience.length - 1 && <div className="exp-item__connector" />}
              </div>
              <div className="exp-item__content">
                <div className="exp-item__meta">
                  <span className="exp-item__period">{exp.period}</span>
                </div>
                <h3 className="exp-item__title">{exp.title}</h3>
                <p className="exp-item__org">{exp.org}</p>
                <p className="exp-item__desc">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
