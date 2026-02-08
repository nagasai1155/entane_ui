import React from 'react';
import './Hero.css';

const Hero = ({ morphProgress = 0, heroVideoUrl = null }) => {
  const bgOpacity = Math.max(0, 1 - morphProgress * 3);
  const contentOpacity = Math.max(0, 1 - morphProgress * 2.5);

  return (
    <section className="hero">
      <div className="hero-background" style={{ opacity: bgOpacity }}>
        {heroVideoUrl ? (
          <video
            className="hero-bg-video"
            src={heroVideoUrl}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
        ) : (
          <img src="/images/hero.jpg" alt="Background" className="hero-bg-img" />
        )}
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
