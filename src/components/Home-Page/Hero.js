import React, { useRef, useEffect } from 'react';
import './Hero.css';

const Hero = ({ morphProgress = 0, heroVideoUrl = null }) => {
  const videoRef = useRef(null);
  const bgOpacity = Math.max(0, 1 - morphProgress * 2.2);
  const contentOpacity = Math.max(0, 1 - morphProgress * 2);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !heroVideoUrl) return;
    video.muted = true;
    const play = () => {
      video.muted = true;
      video.play().catch(() => {});
    };
    play();
    video.addEventListener('loadeddata', play);
    video.addEventListener('canplay', play);
    return () => {
      video.removeEventListener('loadeddata', play);
      video.removeEventListener('canplay', play);
    };
  }, [heroVideoUrl]);

  return (
    <section className="hero">
      <div className="hero-background" style={{ opacity: bgOpacity }}>
        {heroVideoUrl ? (
          <video
            ref={videoRef}
            className="hero-bg-video"
            src={heroVideoUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        ) : (
          <img src="/images/home-page/hero.jpg" alt="Background" className="hero-bg-img" />
        )}
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content" style={{ opacity: contentOpacity }}>
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
