import React, { useEffect, useRef, useState } from 'react';
import './DreamSection.css';

const GALLERY_IMAGES = [
  '/images/gallery-1.png',
  '/images/gallery-2.png',
  '/images/gallery-3.png',
  '/images/gallery-4.png',
  '/images/gallery-5.png',
  '/images/gallery-6.png',
  '/images/gallery-7.png',
  '/images/gallery-8.png',
  '/images/gallery-9.png',
  '/images/students.png',
  '/images/professionals.png',
  '/images/migration.png',
  '/images/australia-map.png',
  '/images/placeholder-1.png',
  '/images/placeholder-2.png',
  '/images/placeholder-3.png',
  '/images/placeholder-4.png',
  '/images/placeholder-5.png',
];

const DreamSection = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const getRootMargin = () => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      // On mobile: only trigger when first row is in view (require ~200px of section above viewport top)
      if (isMobile) return '-200px 0px -40px 0px';
      return '0px 0px -40px 0px';
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.12, rootMargin: getRootMargin() }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`dream-section ${isInView ? 'dream-section--in-view' : ''}`}
    >
      <div className="dream-container">
        <div className="dream-row">
          {GALLERY_IMAGES.slice(0, 4).map((src, i) => (
            <div key={`r1-${i}`} className="dream-image-wrap">
              <img src={src} alt="" className="dream-image" />
            </div>
          ))}
        </div>
        <div className="dream-row">
          {GALLERY_IMAGES.slice(4, 9).map((src, i) => (
            <div key={`r2-${i}`} className="dream-image-wrap">
              <img src={src} alt="" className="dream-image" />
            </div>
          ))}
        </div>
        <div className="dream-row dream-row-text">
          <div className="dream-text-block">
            <p className="dream-text">
              <span className="dream-text-line1">From dreaming in your room to</span>
              <span className="dream-text-line2">living in another country.</span>
            </p>
          </div>
        </div>
        <div className="dream-row">
          {GALLERY_IMAGES.slice(9, 14).map((src, i) => (
            <div key={`r4-${i}`} className="dream-image-wrap">
              <img src={src} alt="" className="dream-image" />
            </div>
          ))}
        </div>
        <div className="dream-row">
          {GALLERY_IMAGES.slice(14, 18).map((src, i) => (
            <div key={`r5-${i}`} className="dream-image-wrap">
              <img src={src} alt="" className="dream-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DreamSection;
