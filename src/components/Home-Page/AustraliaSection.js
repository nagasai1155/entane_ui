import React, { useEffect, useRef, useState } from 'react';
import './AustraliaSection.css';

const STATS = [
  { end: 140000, suffix: ' +', format: 'int' },
  { end: 1.9, suffix: 'm +', format: 'decimal' },
  { end: 13000, suffix: ' +', format: 'int' },
];

const DURATION_MS = 5200;
const easeOutQuart = (t) => 1 - (1 - t) ** 4;

function useCountUp(isInView, config) {
  const [display, setDisplay] = useState(config.format === 'int' ? '0' : '0.0');
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;
    const start = performance.now();
    const { end, format } = config;

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const eased = easeOutQuart(progress);
      const current = eased * end;

      if (format === 'int') {
        setDisplay(Math.round(current).toLocaleString());
      } else {
        setDisplay(current.toFixed(1));
      }

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, config]);

  return display;
}

const AustraliaSection = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stat1 = useCountUp(isInView, STATS[0]);
  const stat2 = useCountUp(isInView, STATS[1]);
  const stat3 = useCountUp(isInView, STATS[2]);

  return (
    <section
      ref={sectionRef}
      className={`australia-section ${isInView ? 'australia-section--in-view' : ''}`}
    >
      <div className="australia-wrapper">
        {/* Left: cream background - text + L-shaped stats (Figma) */}
        <div className="australia-left">
          <h2 className="australia-title">
            Why <span className="australia-title-accent">Australia</span> is the Global Destination of Choice
          </h2>
          <p className="australia-description">
            With 42 top universities, studying in Australia offers high-quality
            education, career opportunities, and cultural experience. It is known
            for its globally recognized degrees, research facilities, and strong
            industry connections, making it one of the top destinations for
            international students.
          </p>
          <div className="australia-stats">
            <div className="stat-item">
              <h3 className="stat-number">{stat1}{STATS[0].suffix}</h3>
              <p className="stat-label">skilled and family visas granted</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">{stat2}{STATS[1].suffix}</h3>
              <p className="stat-label">temporary visas granted</p>
            </div>
            <div className="stat-item stat-item-full">
              <h3 className="stat-number">{stat3}{STATS[2].suffix}</h3>
              <p className="stat-label">humanitarian visas granted</p>
            </div>
          </div>
        </div>

        {/* Right: australia.png as background + overlay-image.png on top */}
        <div className="australia-right">
          <div className="australia-bg" style={{ backgroundImage: 'url(/images/home-page/australia.png)' }} />
          <div className="australia-overlay">
            <img src="/images/home-page/overlay-image.png" alt="" className="australia-overlay-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AustraliaSection;
