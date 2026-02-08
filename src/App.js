import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import DreamSection from './components/DreamSection';
import AustraliaSection from './components/AustraliaSection';
import ServiceCards from './components/ServiceCards';
import WhatEsanteDoes from './components/WhatEsanteDoes';
import FastTrackDegree from './components/FastTrackDegree';
import SkillsShortage from './components/SkillsShortage';
import FindYourPlace from './components/FindYourPlace';
import RealStories from './components/RealStories';
import LatestNews from './components/LatestNews';
import BookFreeCallBanner from './components/BookFreeCallBanner';
import Footer from './components/Footer';

const HIDE_THRESHOLD = 120;
const SHOW_THRESHOLD = 180;
const MORPH_START = 0;
const MORPH_END = 900;

function App() {
  const [hideAboveFold, setHideAboveFold] = useState(false);
  const [morphProgress, setMorphProgress] = useState(0);
  const [targetRect, setTargetRect] = useState(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const morphTargetRef = useRef(null);

  useEffect(() => {
    const updateTargetRect = () => {
      if (morphTargetRef.current) {
        setTargetRect(morphTargetRef.current.getBoundingClientRect());
      }
    };
    updateTargetRect();
    window.addEventListener('scroll', updateTargetRect, { passive: true });
    window.addEventListener('resize', updateTargetRect);
    return () => {
      window.removeEventListener('scroll', updateTargetRect);
      window.removeEventListener('resize', updateTargetRect);
    };
  }, [morphProgress]); // Re-measure when section might have animated

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const scrollingDown = y > lastScrollY.current;

        const progress = Math.max(0, Math.min(1, (y - MORPH_START) / (MORPH_END - MORPH_START)));
        setMorphProgress(progress);

        // Show navbar when scroll is near top (so hero morph + navbar appear together on scroll up)
        if (y <= SHOW_THRESHOLD) {
          setHideAboveFold(false);
        } else if (scrollingDown && y > HIDE_THRESHOLD) {
          setHideAboveFold(true);
        }

        lastScrollY.current = y;
        ticking.current = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getMorphStyle = () => {
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    const eased = easeOutCubic(morphProgress);

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
      };
    }

    // End: exact position of target card (row 4 center, under text)
    if (targetRect && targetRect.width > 0) {
      const left = 0 + (targetRect.left - 0) * eased;
      const top = 0 + (targetRect.top - 0) * eased;
      const width = vw + (targetRect.width - vw) * eased;
      const height = vh + (targetRect.height - vh) * eased;

      const borderRadius = 12 * eased;
      const opacity = morphProgress > 0.88 ? Math.max(0, 1 - ((morphProgress - 0.88) / 0.12)) : 1;

      return {
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`,
        height: `${height}px`,
        transform: 'none',
        borderRadius: `${borderRadius}px`,
        opacity,
      };
    }

    // Fallback before we have target rect
    const translateY = vh * 0.5 * eased;
    const scale = 1 - 0.9 * eased;
    return {
      left: 0,
      top: 0,
      width: '100vw',
      height: '100vh',
      transform: `translateY(${translateY}px) scale(${scale})`,
      borderRadius: `${12 * eased}px`,
      opacity: 1,
    };
  };

  const overlayOpacity = Math.max(0, 1 - morphProgress * 1.8);

  return (
    <div className="App">
      {/* Morphing hero image that transitions to Dream section */}
      <div 
        className="hero-morph-image" 
        style={{
          ...getMorphStyle(),
          '--overlay-opacity': overlayOpacity,
          backgroundImage: `url(${process.env.PUBLIC_URL || ''}/images/hero.jpg)`,
        }}
        aria-hidden="true"
      />

      <div className={`above-fold ${hideAboveFold ? 'above-fold--hidden' : ''}`}>
        <Header />
        <Hero morphProgress={morphProgress} />
      </div>
      <main className="main-content">
        <DreamSection morphProgress={morphProgress} morphTargetRef={morphTargetRef} />
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

export default App;
