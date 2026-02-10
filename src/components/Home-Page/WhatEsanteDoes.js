import React from 'react';
import './WhatEsanteDoes.css';

const WhatEsanteDoes = () => {
  return (
    <section className="what-esante-section">
      <div className="what-esante-container">
        {/* Title: "Esante" in #FF3300, rest dark */}
        <h2 className="what-esante-title">
          What <span className="what-esante-title-accent">Esante</span> Does For You?
        </h2>
        <p className="what-esante-subtitle">
          A thriving economy, top-tier education, and an unmatched lifestyle await.
        </p>

        {/* Card 1: content left, image right — bg #00352B, gap 10px (Figma layout_5M8C79) */}
        <div className="what-esante-card what-esante-card-1">
          <div className="what-esante-card-content">
            <h3 className="what-esante-card-title">Migration Advisors</h3>
            <p className="what-esante-card-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut
            </p>
            <ul className="what-esante-card-list">
              <li>We help recruit students from all over the world.</li>
              <li>We help recruit students from all over the world.</li>
              <li>We help recruit students from all over the world.</li>
              <li>We help recruit students from all over the world.</li>
            </ul>
            <button className="what-esante-btn">Learn More</button>
          </div>
          <div className="what-esante-card-image">
            <img src="/images/home-page/Frame 106.png" alt="Migration" />
          </div>
        </div>

        {/* Card 2: image left, content right — bg #FF3300, gap 41px (Figma layout_53MYCK) */}
        <div className="what-esante-card what-esante-card-2">
          <div className="what-esante-card-image">
            <img src="/images/home-page/Frame 106 (1).png" alt="Education" />
          </div>
          <div className="what-esante-card-content">
            <h3 className="what-esante-card-title">Education & Training</h3>
            <p className="what-esante-card-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut
            </p>
            <ul className="what-esante-card-list">
              <li>We help recruit students from all over the world.</li>
              <li>We help recruit students from all over the world.</li>
              <li>We help recruit students from all over the world.</li>
              <li>We help recruit students from all over the world.</li>
            </ul>
            <button className="what-esante-btn what-esante-btn-light">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatEsanteDoes;
