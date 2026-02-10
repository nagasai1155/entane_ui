import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section 
        className="about-hero"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL || ''}/images/about-us/hero-bg.png)`
        }}
      >
        <div className="about-hero-content">
          <p className="about-hero-breadcrumb">About Us</p>
          <h2 className="about-hero-subtitle">
            <span className="about-hero-subtitle-main">More Than Migration</span><br />
            <span className="about-hero-subtitle-highlight">A Life Philosophy</span>
          </h2>
          <p className="about-hero-description">
            Esante was founded on a simple belief — migration is not a transaction, it's a transformation.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="about-container">
          <div className="about-mission-content">
            <div className="about-mission-text">
              <p className="about-tagline">
                If you're dreaming of a new life in Australia but don't know where to start, we have good news:<br />
                <span className="about-tagline-highlight">it's called Esante</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description with Image */}
      <section className="about-description">
        <div className="about-container">
          <div className="about-description-grid">
            <div className="about-description-image">
              <img src="/images/about-us/team-image.png" alt="About Esante" />
            </div>
            <div className="about-description-text">
              <p>
                We exist to connect people with opportunity, purpose, and possibility in Australia through education, skilled migration, and employment pathways that are ethical, transparent, and future‑focused.
              </p>
              <p>
                Every student, professional, and family we work with carries a dream. Our role is to turn that dream into a structured, compliant, and achievable journey — before arrival, on arrival, and long after settlement.
              </p>
              <p>
                From course and university selection to visa strategy, accommodation, part-time work, and post-arrival support, Esante offers an end-to-end ecosystem designed for one goal: helping people not just reach Australia — but build a future there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="about-partners">
        <div className="about-container">
          <h3 className="about-partners-title">
            We <span className="about-partners-title-highlight">work closely</span> with:
          </h3>
          <div className="about-partners-grid">
            <div className="about-partner-card about-partner-card-1">
              <svg className="about-partner-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#FF3300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="about-partner-text">Australian universities & institutions</p>
            </div>
            <div className="about-partner-card about-partner-card-2">
              <svg className="about-partner-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#FF3300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="about-partner-text">Registered migration and recruitment partners</p>
            </div>
            <div className="about-partner-card about-partner-card-3">
              <svg className="about-partner-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#FF3300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="about-partner-text">Employers across healthcare, hospitality, trades & professional services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="about-philosophy">
        <div className="about-container">
          <div className="about-philosophy-card">
            <div className="about-philosophy-content">
              <h3 className="about-philosophy-title">
                Esante <span className="about-philosophy-title-highlight">Philosophy</span>
              </h3>
              <ul className="about-philosophy-list">
                <li>
                  <span className="about-philosophy-item-title">Expertise</span>
                  <p>Migration, education, and recruitment — viewed through one integrated lens.</p>
                </li>
                <li>
                  <span className="about-philosophy-item-title">Integrity</span>
                  <p>No shortcuts. No false promises. Only compliant, transparent pathways.</p>
                </li>
                <li>
                  <span className="about-philosophy-item-title">Community</span>
                  <p>We don't disappear after visa grant. We stay until you settle.</p>
                </li>
                <li>
                  <span className="about-philosophy-item-title">Collaboration</span>
                  <p>Strong partnerships with universities, employers, and service providers across Australia.</p>
                </li>
                <li>
                  <span className="about-philosophy-item-title">Adventure</span>
                  <p>Migration is a leap — we make sure you land safely.</p>
                </li>
              </ul>
            </div>
            <div className="about-philosophy-image">
              <img src="/images/about-us/philosophy-image.png" alt="Esante Philosophy Student" />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="about-founder">
        <div className="about-container">
          <div className="about-founder-card">
            <div className="about-founder-image-wrapper">
              <div className="about-founder-image">
                <img src="/images/about-us/founder-image.png" alt="Deepen Khagram" />
              </div>
            </div>
            <div className="about-founder-content">
              <h3 className="about-founder-subtitle">Our <span className="about-founder-subtitle-highlight">Founder</span></h3>
              <h4 className="about-founder-name">Deepen<br />Khagram</h4>
              <p className="about-founder-role">Founder & Managing Director</p>
              <div className="about-founder-bio">
                <p>
                  Born in Nairobi, Kenya, Deepen's own migration journey to Australia began in 1985 — shaping the values that Esante stands on today. With a background in accounting, business, and entrepreneurship, Deepen has built and led ventures across services, property, and international trade.
                </p>
                <p>
                  His lived experience as a migrant informs Esanté's people‑first approach — ensuring every decision balances opportunity with responsibility, ambition with ethics.
                </p>
                <p className="about-founder-quote">
                  <em>"Australia gave me opportunity. Esante exists to help others earn it the right way."</em> - Deepen Khagram.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="about-container">
          <h3 className="about-section-title">Meet Our Team</h3>
          <p className="about-team-subtitle">
            The team that supports you beyond admissions — all the way to life in Australia.
          </p>
          <div className="about-team-grid">
            <div className="about-team-card">
              <div className="about-team-image">
                <img src="/images/about-us/soni-image.png" alt="Aashul Soni" />
              </div>
              <div className="about-team-info">
                <h5 className="about-team-name">Aashul Soni</h5>
                <p className="about-team-role">Regional Director Of MP, India</p>
              </div>
            </div>
            <div className="about-team-card">
              <div className="about-team-image">
                <img src="/images/about-us/joush-image.png" alt="Joshua Michael" />
              </div>
              <div className="about-team-info">
                <h5 className="about-team-name">Joshua Michael</h5>
                <p className="about-team-role">Australian Communication & IELTS Coach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="about-cta">
        <div className="about-cta-content">
          <h3 className="about-cta-text">
            Think of<br />
            Esante as your Australia-study partner<br />
            not just an agent.
          </h3>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
