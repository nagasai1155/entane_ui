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
import EsanteBanner from '../components/Reusable/EsanteBanner';
import Footer from '../components/Reusable/Footer';
import '../App.css';

const MORPH_END    = 800;  // scroll px that span the full morph animation
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
    let cachedHeaderH    = 0;
    let cachedTargetRect = null;
    let rafId;

    // Bust the cached rect on resize or any layout-changing event
    const onResize = () => { cachedTargetRect = null; cachedHeaderH = 0; };
    window.addEventListener('resize', onResize);

    const tick = () => {
      const y = window.scrollY || document.documentElement.scrollTop;

      // ── READ PHASE (before any write) ──
      // Re-cache target rect from a fresh read each frame while the morph is
      // happening (raw > 0 && raw < 1) so the translation/scale stays accurate
      // even if layout reflows (font load, image load, etc.) shift things.
      if (morphTargetRef.current) {
        const r = morphTargetRef.current.getBoundingClientRect();
        if (r.width > 0) cachedTargetRect = r;
      }
      if (cachedHeaderH === 0 && headerWrapRef.current) {
        cachedHeaderH = headerWrapRef.current.offsetHeight || 120;
      }

      const raw = Math.max(0, Math.min(1, y / MORPH_END));
      const pin = Math.min(y, MORPH_END);
      const vw  = window.innerWidth;
      const vh  = window.innerHeight;

      // ── WRITE PHASE ──

      // 1. Header: slide up + fade out over first HEADER_FADE px
      if (headerWrapRef.current) {
        const ht     = Math.min(1, y / HEADER_FADE);
        const heased = easeInOutCubic(ht);
        headerWrapRef.current.style.opacity       = (1 - heased).toFixed(4);
        headerWrapRef.current.style.transform     = `translate3d(0,${-(heased * cachedHeaderH).toFixed(2)}px,0)`;
        headerWrapRef.current.style.pointerEvents = heased > 0.95 ? 'none' : 'auto';
      }

      // 2. Dream section: sub-pixel-accurate pin (no Math.round → no jitter)
      if (dreamStickyRef.current) {
        dreamStickyRef.current.style.transform = `translate3d(0,${pin}px,0)`;
      }

      // 3. Morph target card: crossfade reveal in the final 20 % of the animation
      //    Starts appearing at 80 %, fully opaque at 97 %
      if (morphTargetRef.current) {
        const revealP = Math.max(0, Math.min(1, (raw - 0.80) / 0.17));
        morphTargetRef.current.style.opacity = easeOutCubic(revealP).toFixed(4);
      }

      // 4. Hero morph box — the main act
      const box = morphBoxRef.current;
      if (box) {
        if (raw <= 0) {
          // ── Resting state (top of page) ──
          box.style.transform     = 'translate3d(0,0,0) scale(1,1)';
          box.style.borderRadius  = '0px';
          box.style.opacity       = '1';
          box.style.visibility    = 'visible';
          box.style.boxShadow     = 'none';
          box.style.pointerEvents = 'none';
        } else if (raw >= 1) {
          // ── Fully morphed — hide the box so the card shows through ──
          box.style.opacity       = '0';
          box.style.visibility    = 'hidden';
          box.style.pointerEvents = 'none';
        } else {
          // ── Active morph ──
          // easeInOutCubic: box stays proportional to its position throughout —
          // large while far from card, card-sized when it arrives.
          // This gives the "entering / exiting exactly through the slot" effect.
          const t = easeInOutCubic(raw);

          let tx = 0, ty = 0, sx = 1, sy = 1;

          if (cachedTargetRect && cachedTargetRect.width > 0) {
            // Card centre in the viewport
            const cardCx = cachedTargetRect.left + cachedTargetRect.width  / 2;
            const cardCy = cachedTargetRect.top  + cachedTargetRect.height / 2;
            // Morph-box centre is always the viewport centre (position:fixed)
            const boxCx  = vw / 2;
            const boxCy  = vh / 2;

            // Translate the box centre to meet the card centre
            tx = (cardCx - boxCx) * t;
            ty = (cardCy - boxCy) * t;
            // Scale the box to exactly match the card's dimensions
            sx = 1 + (cachedTargetRect.width  / vw - 1) * t;
            sy = 1 + (cachedTargetRect.height / vh - 1) * t;
          } else {
            sx = sy = 1 - t * 0.5; // fallback: plain shrink
          }

          // Border-radius: 0 → 15 px (matches the updated dream card)
          const radius = t * 15;

          // Fade: video stays crystal-clear until 80 %, then crossfades
          // out cleanly as the card fades in (both driven by the same progress)
          const fadeP   = Math.max(0, (raw - 0.80) / 0.20);
          const opacity = Math.max(0, 1 - easeOutCubic(fadeP));

          // Cinematic lift-shadow: peaks at ~40 % of the animation,
          // clears well before the fade so there's no halo during the crossfade
          const shadowEnvelope = Math.max(0, 1 - Math.max(0, (raw - 0.60) / 0.25));
          const shadowPeak     = Math.sin(Math.PI * Math.min(raw / 0.60, 1)) * shadowEnvelope;

          box.style.transform     = `translate3d(${tx.toFixed(2)}px,${ty.toFixed(2)}px,0) scale(${sx.toFixed(5)},${sy.toFixed(5)})`;
          box.style.borderRadius  = `${radius.toFixed(2)}px`;
          box.style.opacity       = opacity.toFixed(4);
          box.style.visibility    = 'visible';
          box.style.boxShadow     = `0 ${(28 * shadowPeak).toFixed(1)}px ${(64 * shadowPeak).toFixed(1)}px rgba(0,0,0,${(0.30 * shadowPeak).toFixed(3)})`;
          box.style.pointerEvents = 'none';
        }
      }

      // 5. Dark overlay: disappear by 50 % of scroll — with the slower
      //    easeInOutCubic easing the box is still half-screen at that point,
      //    so the dream section reveals while the video is visibly large
      if (morphOverlayRef.current) {
        morphOverlayRef.current.style.opacity =
          Math.max(0, 1 - easeOutCubic(Math.min(1, raw * 2.0))).toFixed(4);
      }

      // 6. Hero title + CTA: exit fast (first 25 % of scroll)
      if (morphContentRef.current) {
        morphContentRef.current.style.opacity = Math.max(0, 1 - raw * 4).toFixed(4);
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
    };
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
          <div className="hero-cta-wrap">
            <button
              type="button"
              className="hero-cta"
              onClick={() => window.dispatchEvent(new CustomEvent('openConsultationPopup'))}
            >
              Book Free Call
            </button>
          </div>
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
        <EsanteBanner />
        <Footer />
      </main>
    </div>
  );
}

export default HomePage;
