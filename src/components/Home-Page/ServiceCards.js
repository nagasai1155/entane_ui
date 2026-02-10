import React from 'react';
import './ServiceCards.css';

const CARDS = [
  {
    image: '/images/home-page/image 52.png',
    badge: 'For Students',
    subtitle: 'World-Class Education',
    cta: 'Book 1:1 Counselling',
  },
  {
    image: '/images/home-page/image 53.png',
    badge: 'For Professionals',
    subtitle: 'Advance Your Career',
    cta: 'Book 1:1 Counselling',
  },
  {
    image: '/images/home-page/image 54.png',
    badge: 'For Migration',
    subtitle: 'Advance Your Career',
    cta: 'Book 1:1 Counselling',
  },
];

const ServiceCards = () => {
  return (
    <section className="service-cards-section">
      <div className="service-cards-container">
        {/* Figma: title left, description right */}
        <div className="service-cards-header">
          <h2 className="service-cards-title">
            Everything You Need for Your <span className="service-cards-title-accent">Australia Dream</span>
          </h2>
          <p className="service-cards-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut
          </p>
        </div>

        {/* Figma: three cards, minimal gap, content overlaid on image */}
        <div className="service-cards-strip">
          {CARDS.map((card, i) => (
            <div key={i} className="service-card">
              <div className="service-card-image">
                <img src={card.image} alt={card.badge} />
                <div className="service-card-gradient" />
                <div className="service-card-play" aria-hidden="true">
                  <span className="service-card-play-icon" />
                </div>
                <div className="service-card-content">
                  <div className="service-card-badge">
                    {card.badge}
                    <span className="service-card-arrow">→</span>
                  </div>
                  <div className="service-card-bottom-row">
                    <h3 className="service-card-subtitle">{card.subtitle}</h3>
                    <p className="service-card-cta">{card.cta}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
