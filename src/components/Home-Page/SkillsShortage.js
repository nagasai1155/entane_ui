import React, { useRef } from 'react';
import './SkillsShortage.css';

const SKILL_IMAGES = ['/images/home-page/skill-1.png', '/images/home-page/skill-2.png', '/images/home-page/skill-3.png'];

const SkillsShortage = () => {
  const scrollRef = useRef(null);

  const jobs = [
    { title: 'Nurses', description: 'Lorem ipsum opms herist Lorem ipsuLorem ipsum opms herist Lorem ipsu Lorem ipsum opms herist Lorem ipsuna...' },
    { title: 'Chefs', description: 'Lorem ipsum opms herist Lorem ipsuLorem ipsum opms herist Lorem ipsu Lorem ipsum opms herist Lorem ipsuna...' },
    { title: 'Information Technology', description: 'Lorem ipsum opms herist Lorem ipsuLorem ipsum opms herist Lorem ipsu Lorem ipsum opms herist Lorem ipsuna...' },
    { title: 'Childcare', description: 'Lorem ipsum opms herist Lorem ipsuLorem ipsum opms herist Lorem ipsu Lorem ipsum opms herist Lorem ipsuna...' },
    { title: 'Construction Workers', description: 'Lorem ipsum opms herist Lorem ipsuLorem ipsum opms herist Lorem ipsu Lorem ipsum opms herist Lorem ipsuna...' }
  ];

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector('.job-card')?.offsetWidth ?? 320;
    const gap = 24;
    const step = cardWidth + gap;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <section className="skills-shortage-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills in Shortage</h2>
          <p className="section-subtitle">
            Sectors actively seeking international talent right now.
          </p>
        </div>

        <div className="skills-carousel-wrap">
          <div className="jobs-scroll" ref={scrollRef}>
            {jobs.map((job, index) => (
              <div key={index} className="job-card">
                <div className="job-image">
                  <img src={SKILL_IMAGES[index % 3]} alt={job.title} />
                </div>
                <div className="job-content">
                  <h3 className="job-title">{job.title}</h3>
                  <p className="job-description">{job.description}</p>
                  <button type="button" className="explore-btn">
                    Explore More
                    <span className="underline"></span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="skills-nav">
            <button type="button" className="nav-arrow nav-arrow-left" onClick={() => scroll('left')} aria-label="Previous">
              ←
            </button>
            <button type="button" className="nav-arrow nav-arrow-right" onClick={() => scroll('right')} aria-label="Next">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsShortage;
