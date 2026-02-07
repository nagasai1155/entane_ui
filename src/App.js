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

const HIDE_THRESHOLD = 80;   // scroll down past this → hide hero/header
const SHOW_THRESHOLD = 200;  // only show hero/header when scroll back up to near top

function App() {
  const [hideAboveFold, setHideAboveFold] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const scrollingDown = y > lastScrollY.current;
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

  return (
    <div className="App">
      <div className={`above-fold ${hideAboveFold ? 'above-fold--hidden' : ''}`}>
        <Header />
        <Hero />
      </div>
      <main className="main-content">
        <DreamSection />
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
