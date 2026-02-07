import React from 'react';
import './FindYourPlace.css';

const FindYourPlace = () => {
  return (
    <section className="find-your-place-section">
      <div className="container">
        <div className="section-header">
          <h2 className="find-place-title">
            Find Your Place in <span className="find-place-title-accent">Australia</span>
          </h2>
          <p className="find-place-subtitle">
            Explore major hubs for education and employment.
          </p>
        </div>

        <div className="find-place-single-card">
          <img
            src="/images/find-place.png"
            alt="Find your place in Australia - university hubs and education"
            className="find-place-card-image-full"
          />
        </div>
      </div>
    </section>
  );
};

export default FindYourPlace;
