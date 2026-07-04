import React, { useEffect } from 'react';
import portfolioData from './data/portfolioData';

import Nav         from './components/Nav';
import Hero        from './components/Hero';
import SkillTicker from './components/SkillTicker';
import About       from './components/About';
import Projects    from './components/Projects';
import Achievements from './components/Achievements';
import Experience  from './components/Experience';
import Contact     from './components/Contact';
import Footer      from './components/Footer';

import './App.css';

export default function App() {
  // Intersection Observer for fade-up animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav resumeLink={portfolioData.hero.resumeLink} />
      <main>
        <Hero data={portfolioData.hero} />
        <SkillTicker items={portfolioData.ticker} />
        <About data={portfolioData.about} />
        <Projects projects={portfolioData.projects} />
        <Achievements achievements={portfolioData.achievements} codingProfiles={portfolioData.codingProfiles} />
        <Experience experience={portfolioData.experience} />
        <Contact contact={portfolioData.contact} />
      </main>
      <Footer contact={portfolioData.contact} />
    </>
  );
}
