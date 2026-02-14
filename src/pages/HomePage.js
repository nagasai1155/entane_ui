import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Reusable/Header';
import Hero from '../components/Home-Page/Hero';
import DreamSection from '../components/Home-Page/DreamSection';
import AustraliaSection from '../components/Home-Page/AustraliaSection';
import ServiceCards from '../components/Home-Page/ServiceCards';
import WhatEsanteDoes from '../components/Home-Page/WhatEsanteDoes';
import FastTrackDegree from '../components/Home-Page/FastTrackDegree';
import SkillsShortage from '../components/Home-Page/SkillsShortage';
import FindYourPlace from '../components/Home-Page/FindYourPlace';
import RealStories from '../components/Home-Page/RealStories';
import LatestNews from '../components/Home-Page/LatestNews';
import BookFreeCallBanner from '../components/Home-Page/BookFreeCallBanner';
import Footer from '../components/Reusable/Footer';
import '../App.css';

const HIDE_THRESHOLD = 100;
const SHOW_THRESHOLD = 160;
const MORPH_START = 0;
const MORPH_END = 380;
const HERO_VIDEO_URL = 'https://cdn.jsdelivr.net/npm/video-media-samples@1.0.0/big-buck-bunny-480p-30sec.mp4';

const easeOutExpo = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));
const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

function HomePage() {
  const [hideAboveFold, setHideAboveFold] = useState(false);
  const [morphProgress, setMorphProgress] = useState(0);
  const morphTargetRef = useRef(null);
  const rafId = useRef(null);
  const targetRectRef = useRef(null);
  const morphVideoRef = useRef(null);

  useEffect(() => {
    let lastY = window.scrollY || 0;

    const tick = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      const scrollingDown = y > lastY;

      targetRectRef.current = morphTargetRef.current
        ? morphTargetRef.current.getBoundingClientRect()
        : null;

      const raw = Math.max(0, Math.min(1, (y - MORPH_START) / (MORPH_END - MORPH_START)));
      setMorphProgress(raw);

      if (y <= SHOW_THRESHOLD) setHideAboveFold(false);
      else if (scrollingDown && y > HIDE_THRESHOLD) setHideAboveFold(true);

      lastY = y;
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  useEffect(() => {
    const video = morphVideoRef.current;
    if (!video || !HERO_VIDEO_URL) return;
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
  }, []);

  const getMorphStyle = () => {
    const rect = targetRectRef.current;
    const eased = easeOutQuart(morphProgress);
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    if (morphProgress <= 0) {
      return {
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        transform: 'none',
        borderRadius: 0,
        opacity: 1,
        visibility: 'visible',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      };
    }

    if (morphProgress >= 0.998) {
      return {
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        transform: 'none',
        borderRadius: 0,
        opacity: 0,
        visibility: 'hidden',
        pointerEvents: 'none',
        boxShadow: 'none',
      };
    }

    if (rect && rect.width > 0) {
      const reveal = Math.pow(eased, 0.58);
      const top = rect.top * reveal;
      const left = rect.left * eased;
      const width = vw + (rect.width - vw) * eased;
      const height = vh + (rect.height - vh) * eased;
      const borderRadius = 12 * eased;

      const handoffStart = 0.82;
      const morphOpacity = morphProgress >= handoffStart
        ? Math.max(0, 1 - (morphProgress - handoffStart) / (1 - handoffStart))
        : 1;

      const shadow = 4 + 12 * (1 - eased);
      return {
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`,
        height: `${height}px`,
        transform: 'none',
        borderRadius: `${borderRadius}px`,
        opacity: morphOpacity,
        visibility: 'visible',
        boxShadow: `0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.12)`,
      };
    }

    const fallbackY = vh * 0.45 * eased;
    const fallbackScale = 1 - 0.88 * eased;
    return {
      left: 0,
      top: 0,
      width: '100vw',
      height: '100vh',
      transform: `translateY(${fallbackY}px) scale(${fallbackScale})`,
      borderRadius: `${12 * eased}px`,
      opacity: 1,
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
    };
  };

  const overlayOpacity = Math.max(0, 1 - easeOutExpo(morphProgress) * 1.6);

  return (
    <div className="App">
      <div 
        className="hero-morph-image" 
        style={{
          ...getMorphStyle(),
          '--overlay-opacity': overlayOpacity,
          backgroundImage: HERO_VIDEO_URL ? 'none' : `url(${process.env.PUBLIC_URL || ''}/images/home-page/hero.jpg)`,
        }}
        aria-hidden="true"
      >
        {HERO_VIDEO_URL && (
          <video
            ref={morphVideoRef}
            className="hero-morph-video"
            src={HERO_VIDEO_URL}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        )}
      </div>

      <div className={`above-fold ${hideAboveFold ? 'above-fold--hidden' : ''}`}>
        <Header />
        <Hero morphProgress={morphProgress} heroVideoUrl={HERO_VIDEO_URL} />
      </div>
      <main className="main-content">
        <DreamSection morphProgress={morphProgress} morphTargetRef={morphTargetRef} heroVideoUrl={HERO_VIDEO_URL} />
        <AustraliaSection />
        <ServiceCards />
        <WhatEsanteDoes />
        <FastTrackDegree />
        <SkillsShortage />
        <FindYourPlace />
        <RealStories />
        <LatestNews />
        <BookFreeCallBanner />
        <Footer />
      </main>
    </div>
  );
}

export default HomePage;
