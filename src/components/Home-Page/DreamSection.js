import React, { useRef } from 'react';
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

const DreamSection = ({ morphTargetRef, heroVideoUrl = null }) => {
  const dreamCardVideoRef = useRef(null);

  return (
    <section className="dream-section dream-section--in-view dream-section--morph-active">
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
            return (
              <div
                key={`r4-${i}`}
                ref={isMorphTarget ? (el) => {
                  if (morphTargetRef) morphTargetRef.current = el;
                } : undefined}
                className="dream-image-wrap"
                style={isMorphTarget ? { opacity: 0 } : undefined}
              >
                {isMorphTarget && heroVideoUrl ? (
                  <video
                    ref={dreamCardVideoRef}
                    src={heroVideoUrl}
                    className="dream-image dream-card-video"
                    autoPlay muted loop playsInline aria-hidden="true"
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
