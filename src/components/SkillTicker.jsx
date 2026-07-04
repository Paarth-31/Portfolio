import React from 'react';
import './SkillTicker.css';

export default function SkillTicker({ items }) {
  const doubled = [...items, ...items];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker__item">
            <span className="ticker__dot">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
