import React, { useEffect, useRef } from 'react';
import Header from '../components/Reusable/Header';
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

const MORPH_END    = 550;
// Navbar slides up + fades out over first HEADER_FADE px of scroll
const HEADER_FADE  = 120;
const HERO_VIDEO_URL = 'https://cdn.jsdelivr.net/npm/video-media-samples@1.0.0/big-buck-bunny-480p-30sec.mp4';

const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const easeOutCubic   = (t) => 1 - Math.pow(1 - t, 3);

function HomePage() {
  // No React state at all — every animated value goes through refs + direct DOM
  const headerWrapRef   = useRef(null);
  const morphBoxRef     = useRef(null);
  const morphVideoRef   = useRef(null);
  const morphOverlayRef = useRef(null);
  const morphContentRef = useRef(null);
  const dreamStickyRef  = useRef(null);
  const morphTargetRef  = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  // Autoplay hero morph video
  useEffect(() => {
    const video = morphVideoRef.current;
    if (!video || !HERO_VIDEO_URL) return;
    video.muted = true;
    const play = () => { video.muted = true; video.play().catch(() => {}); };
    play();
    video.addEventListener('loadeddata', play);
    video.addEventListener('canplay', play);
    return () => {
      video.removeEventListener('loadeddata', play);
      video.removeEventListener('canplay', play);
    };
  }, []);

  // Single RAF loop — all DOM mutations in one tick, zero React re-renders
  useEffect(() => {
    let lastPin = 0;
    const tick = () => {
      const y   = window.scrollY || document.documentElement.scrollTop;
      const raw = Math.max(0, Math.min(1, y / MORPH_END));
      const pin = Math.min(y, MORPH_END);

      // ── 1. Header: slide up + fade out as scroll starts ──
      if (headerWrapRef.current) {
        const t        = Math.min(1, y / HEADER_FADE);
        const eased    = easeInOutCubic(t);
        const headerOp = 1 - eased;
        const headerH  = headerWrapRef.current.offsetHeight || 120;
        const headerY  = -(eased * headerH); // slide up by exact pixel height
        headerWrapRef.current.style.opacity       = headerOp;
        headerWrapRef.current.style.transform     = `translate3d(0,${headerY}px,0)`;
        headerWrapRef.current.style.pointerEvents = headerOp < 0.05 ? 'none' : 'auto';
      }

      // ── 2. Dream section pin ──
      if (dreamStickyRef.current) {
        // Only update if change is >= 2px to prevent micro-jitter
        const roundedPin = Math.round(pin * 0.5) * 2; // Round to nearest 2px
        if (Math.abs(roundedPin - lastPin) >= 2) {
          dreamStickyRef.current.style.transform = `translate3d(0,${roundedPin}px,0)`;
          lastPin = roundedPin;
        }
      }

      // ── 3. Morph target card: fade in as overlay fades out ──
      if (morphTargetRef.current) {
        const cardOp = raw >= 0.99 ? 1 : Math.max(0, (raw - 0.72) / 0.28);
        morphTargetRef.current.style.opacity = cardOp;
      }

      // ── 4. Hero morph box ──
      const box = morphBoxRef.current;
      if (box) {
        if (raw <= 0) {
          box.style.left         = '0';
          box.style.top          = '0';
          box.style.width        = '100vw';
          box.style.height       = '100vh';
          box.style.borderRadius = '0';
          box.style.opacity      = '1';
          box.style.visibility   = 'visible';
          box.style.transform    = 'translate3d(0,0,0)';
          box.style.boxShadow    = 'none';
          box.style.pointerEvents = 'none';
        } else if (raw >= 1) {
          box.style.opacity      = '0';
          box.style.visibility   = 'hidden';
          box.style.pointerEvents = 'none';
        } else {
          const rect = morphTargetRef.current
            ? morphTargetRef.current.getBoundingClientRect()
            : null;
          const t  = easeInOutCubic(raw);
          const vw = window.innerWidth;
          const vh = window.innerHeight;

          const fadeStart    = 0.75;
          const morphOpacity = raw <= fadeStart
            ? 1
            : 1 - easeOutCubic((raw - fadeStart) / (1 - fadeStart));
          const shadow = Math.sin(raw * Math.PI);

          if (rect && rect.width > 0) {
            const w   = vw + (rect.width  - vw) * t;
            const h   = vh + (rect.height - vh) * t;
            const l   = Math.max(0, Math.min(vw - w, rect.left * t));
            const top = Math.max(0, Math.min(vh - h, rect.top  * t));
            box.style.left         = `${l}px`;
            box.style.top          = `${top}px`;
            box.style.width        = `${w}px`;
            box.style.height       = `${h}px`;
            box.style.borderRadius = `${12 * t}px`;
            box.style.opacity      = morphOpacity;
            box.style.visibility   = 'visible';
            box.style.transform    = 'translate3d(0,0,0)';
            box.style.boxShadow    = `0 ${4 + 16 * shadow}px ${8 + 32 * shadow}px rgba(0,53,43,${(0.06 + 0.14 * shadow).toFixed(3)})`;
            box.style.pointerEvents = 'none';
          } else {
            box.style.left         = '0';
            box.style.top          = '0';
            box.style.width        = '100vw';
            box.style.height       = '100vh';
            box.style.borderRadius = `${12 * t}px`;
            box.style.transform    = `translate3d(0,${vh * 0.4 * t}px,0) scale(${1 - 0.85 * t})`;
            box.style.opacity      = Math.max(0, 1 - t * 1.4);
            box.style.visibility   = 'visible';
            box.style.pointerEvents = 'none';
          }
        }
      }

      // ── 5. Dark overlay inside morph box ──
      if (morphOverlayRef.current) {
        morphOverlayRef.current.style.opacity =
          Math.max(0, 1 - easeOutCubic(Math.min(1, raw * 1.5)));
      }

      // ── 6. Hero title + CTA ──
      if (morphContentRef.current) {
        morphContentRef.current.style.opacity = Math.max(0, 1 - raw * 3);
      }

      requestAnimationFrame(tick);
    };

    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="App">
      <div ref={headerWrapRef} className="homepage-header-wrap">
        <Header />
      </div>

      <div
        ref={morphBoxRef}
        className="hero-morph-image"
        style={{
          left: 0, top: 0,
          width: '100vw', height: '100vh',
          borderRadius: 0, opacity: 1, visibility: 'visible',
          backgroundImage: HERO_VIDEO_URL
            ? 'none'
            : `url(${process.env.PUBLIC_URL || ''}/images/home-page/hero.jpg)`,
        }}
      >
        {HERO_VIDEO_URL && (
          <video
            ref={morphVideoRef}
            className="hero-morph-video"
            src={HERO_VIDEO_URL}
            autoPlay muted loop playsInline preload="auto"
          />
        )}
        <div ref={morphOverlayRef} className="hero-morph-dark-overlay" />
        <div ref={morphContentRef} className="hero-morph-content">
          <h1 className="hero-morph-title">
            Migration simplified;<br />Dreams amplified.
          </h1>
          <button
            type="button"
            className="hero-cta"
            onClick={() => window.dispatchEvent(new CustomEvent('openConsultationPopup'))}
          >
            Book Free Call
          </button>
        </div>
      </div>

      <main className="main-content" style={{ paddingTop: 0 }}>
        <div className="dream-scroll-container" style={{ paddingBottom: MORPH_END }}>
          <div ref={dreamStickyRef} className="dream-sticky-wrap">
            <DreamSection
              morphTargetRef={morphTargetRef}
              heroVideoUrl={HERO_VIDEO_URL}
            />
          </div>
        </div>
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
