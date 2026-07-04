import React from 'react';
import './Achievements.css';

export default function Achievements({ achievements, codingProfiles }) {
  return (
    <section id="achievements" className="achievements section-padding">
      <div className="container">
        <div className="achievements__header fade-up">
          <p className="section-label">Recognition</p>
          <h2 className="section-title">Achievements</h2>
          <div className="section-divider" />
        </div>

        <div className="achievements__layout">
          {/* Achievement cards */}
          <div className="achievements__list">
            {achievements.map((ach, i) => (
              <div key={ach.title} className={`ach-card fade-up delay-${i + 1}`}>
                <div className="ach-card__icon">{ach.icon}</div>
                <div className="ach-card__content">
                  <h3 className="ach-card__title">{ach.title}</h3>
                  <p className="ach-card__desc">{ach.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Coding profiles panel */}
          <div className="coding-profiles fade-up delay-2">
            <p className="coding-profiles__title">Coding Profiles</p>
            {codingProfiles.map((profile) => (
              <a
                key={profile.platform}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="coding-profile-card"
              >
                <div className="coding-profile-card__top">
                  <span className="coding-profile-card__platform">{profile.platform}</span>
                  <span className="coding-profile-card__handle">@{profile.handle}</span>
                </div>
                <div className="coding-profile-card__stats">
                  <div className="coding-profile-stat">
                    <span className="coding-profile-stat__val gradient-text">{profile.problems}</span>
                    <span className="coding-profile-stat__label">Problems</span>
                  </div>
                  <div className="coding-profile-stat">
                    <span className="coding-profile-stat__val gradient-text">{profile.rating}</span>
                    <span className="coding-profile-stat__label">Max Rating</span>
                  </div>
                  <div className="coding-profile-stat">
                    <span className="coding-profile-stat__val">{profile.stars}</span>
                    <span className="coding-profile-stat__label">Rank</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
