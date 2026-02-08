import React from 'react';
import './Hero.css';

const Hero = ({ morphProgress = 0 }) => {
  // Fade out hero background quickly as morph image takes over
  const bgOpacity = Math.max(0, 1 - morphProgress * 3);
  // Fade out hero content early (title/button disappear quickly)
  const contentOpacity = Math.max(0, 1 - morphProgress * 2.5);

  return (
    <section className="hero">
      <div className="hero-background" style={{ opacity: bgOpacity }}>
        <img src="/images/hero.jpg" alt="Background" className="hero-bg-img" />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content" style={{ opacity: contentOpacity }}>
        <h1 className="hero-title">
          Migration simplified;
          <br />
          Dreams amplified.
        </h1>
        <button type="button" className="hero-cta">Book Free Call</button>
      </div>
    </section>
  );
};

export default Hero;
