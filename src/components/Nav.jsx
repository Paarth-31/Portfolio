import React, { useState, useEffect } from 'react';
import './Nav.css';

const NAV_LINKS = [
  { label: 'Home',         href: '#home'         },
  { label: 'About',        href: '#about'         },
  { label: 'Projects',     href: '#projects'      },
  { label: 'Achievements', href: '#achievements'  },
  { label: 'Experience',   href: '#experience'    },
  { label: 'Contact',      href: '#contact'       },
];

export default function Nav({ resumeLink }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner">
        {/* Logo */}
        <a href="#home" className="nav__logo">
          paarth<span className="nav__logo-dot" aria-hidden="true" />
        </a>

        {/* Desktop links */}
        <ul className="nav__links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`nav__link${active === href.slice(1) ? ' nav__link--active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume CTA */}
        <a
          href={resumeLink}
          className="nav__resume btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume ↓
        </a>

        {/* Mobile hamburger */}
        <button
          className={`nav__hamburger${menuOpen ? ' nav__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`nav__mobile${menuOpen ? ' nav__mobile--open' : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="nav__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <a href={resumeLink} className="nav__mobile-resume btn-primary" target="_blank" rel="noopener noreferrer">
          Resume ↓
        </a>
      </div>
    </nav>
  );
}
