import React, { useEffect, useRef, useState } from 'react';
import './DreamSection.css';

const GALLERY_IMAGES = [
  '/images/home-page/gallery-1.png',
  '/images/home-page/gallery-2.png',
  '/images/home-page/gallery-3.png',
  '/images/home-page/gallery-4.png',
  '/images/home-page/gallery-5.png',
  '/images/home-page/gallery-6.png',
  '/images/home-page/gallery-7.png',
  '/images/home-page/gallery-8.png',
  '/images/home-page/gallery-9.png',
  '/images/home-page/students.png',
  '/images/home-page/professionals.png',
  '/images/home-page/migration.png',
  '/images/home-page/australia-map.png',
  '/images/home-page/placeholder-1.png',
  '/images/home-page/placeholder-2.png',
  '/images/home-page/placeholder-3.png',
  '/images/home-page/placeholder-4.png',
  '/images/home-page/placeholder-5.png',
];

const DreamSection = ({ morphProgress = 0, morphTargetRef, heroVideoUrl = null }) => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const getRootMargin = () => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      if (isMobile) return '-200px 0px -40px 0px';
      // Desktop: trigger earlier (200px below viewport) so top 2 rows animate in as morph reveals them
      return '200px 0px -40px 0px';
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

  const showContent = isInView || morphProgress > 0.01;
  return (
    <section
      ref={sectionRef}
      className={`dream-section ${showContent ? 'dream-section--in-view' : ''}`}
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
          {GALLERY_IMAGES.slice(9, 14).map((src, i) => {
            const isMorphTarget = i === 2;
            const cardOpacity = isMorphTarget
              ? (morphProgress >= 0.99 ? 1 : Math.max(0, (morphProgress - 0.82) / 0.18))
              : 1;

            return (
              <div
                key={`r4-${i}`}
                ref={isMorphTarget ? morphTargetRef : undefined}
                className="dream-image-wrap"
                style={isMorphTarget ? {
                  opacity: cardOpacity,
                  transition: 'opacity 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                } : undefined}
              >
                {isMorphTarget && heroVideoUrl ? (
                  <video
                    src={heroVideoUrl}
                    className="dream-image dream-card-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-hidden="true"
                  />
                ) : (
                  <img src={src} alt="" className="dream-image" />
                )}
              </div>
            );
          })}
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
