import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src="/images/hero.jpg" alt="Background" className="hero-bg-img" />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
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
