import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import BookFreeCallBanner from '../components/Home-Page/BookFreeCallBanner';

const HERO_BG = '/images/ptj-hero-bg.png';
const IMG_JOB   = '/images/ptj-job.png';
const IMG_STORY_1 = '/images/ptj-story1.png';
const IMG_STORY_2 = '/images/ptj-story2.png';

// Figma layout_3KT75M: 467×484 — job photo dimensions
const PHOTO_W = 370;
const PHOTO_H = 440;

// Figma layout_V77CVS: 812×557 — dark-green carousel card
const CARD_W = 812;
const CARD_H = 557;

const JOB_SLIDES = [
  {
    category: 'Cafés & Coffee Shops',
    titleLine1: 'Working in',
    titleLine2: 'Cafés',
    rate: 'AU$28–40/hour',
    details: ['Barista, cashier & service roles', 'Flexible shifts around classes', 'Tips + weekend penalty rates'],
    img: IMG_JOB,
  },
  {
    category: 'Retail & Supermarkets',
    titleLine1: 'Retail &',
    titleLine2: 'Grocery',
    rate: 'AU$25–38/hour',
    details: ['Checkout, stocking & customer service', 'Stable hours & employee discounts', 'Weekend penalty rates'],
    img: IMG_JOB,
  },
  {
    category: 'Hospitality & Restaurants',
    titleLine1: 'Hospitality',
    titleLine2: 'Roles',
    rate: 'AU$28–42/hour',
    details: ['Waiter, kitchen hand & front-of-house', 'Evening & weekend shifts', 'Tips + award wages'],
    img: IMG_JOB,
  },
  {
    category: 'Petrol & Service Stations',
    titleLine1: 'Service Station',
    titleLine2: 'Work',
    rate: 'AU$26–36/hour',
    details: ['Attendant, console & retail', '24/7 shift flexibility', 'Often close to campus'],
    img: IMG_JOB,
  },
];

function PartTimeJobSupportPage() {
  const openConsultation = () => window.dispatchEvent(new CustomEvent('openConsultationPopup'));
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevSlide = () => setCurrentSlide((p) => (p === 0 ? JOB_SLIDES.length - 1 : p - 1));
  const goToNextSlide = () => setCurrentSlide((p) => (p === JOB_SLIDES.length - 1 ? 0 : p + 1));

  return (
    <div className="flex flex-col w-full bg-white items-start">
      <Header />

      <div className="flex flex-col w-full max-w-[1440px] mx-auto">

        {/* ── Hero text block ── */}
        <div className="flex flex-col items-center self-stretch bg-white pt-[186px] pb-[67px]">
          {/* Page label — style_NQYYRJ: Poppins 500/28px underlined #00352B */}
          <span className="font-poppins font-medium text-[28px] leading-[1.4] tracking-[-0.02em] text-[#00352B] mb-4 text-center underline decoration-[#00352B] underline-offset-2">
            Part-Time Job Support in Australia
          </span>
          {/* style_XD2OHI: Poppins 600/48px CENTER — tight multi-line heading */}
          <h1 className="font-poppins font-semibold italic text-[48px] leading-[1.25] tracking-[-0.02em] text-center text-[#FF3300] mb-2">
            Earn While You Study
          </h1>
          <p className="font-poppins font-semibold text-[48px] leading-[1.25] tracking-[-0.02em] text-center text-[#00352B] mb-8">
            Live Stress-Free.
          </p>
          {/* style_CK69WR: Poppins 500/14px — fill_P7T27W bg, Light Background text */}
          <button
            type="button"
            onClick={openConsultation}
            className="inline-flex py-[4px] px-[12px] justify-center items-center rounded-[16px] border-0 cursor-pointer"
            style={{ background: '#FF3300' }}
          >
            <span className="font-poppins text-center font-medium" style={{ color: '#FFFBE9', fontSize: 14, fontWeight: 500, lineHeight: '20px' }}>
              Get Free Guidance from Esante
            </span>
          </button>
        </div>

        {/* ── Hero carousel ── */}
        {/* Figma: 1383×672 section, fill_P7T27W red bg + image 69 overlay, borderRadius 49px */}
        <div className="w-full -mx-[0px] flex justify-center mb-[102px] px-[28px]">
          <section className="relative w-[1383px] max-w-[100%] h-[672px] rounded-[49px] overflow-hidden">
            {/* Red background */}
            <div className="absolute inset-0 bg-[#FF3300]" aria-hidden />
            {/* Background image overlay */}
            <div
              className="absolute inset-0"
              style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: '100% 100%', backgroundPosition: 'center', opacity: 0.55 }}
              aria-hidden
            />

            {/* Left arrow */}
            <button
              type="button"
              onClick={goToPrevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 border border-white/50 cursor-pointer transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {/* Right arrow */}
            <button
              type="button"
              onClick={goToNextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 border border-white/50 cursor-pointer transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Sliding carousel — Figma card: 812×557, dark green */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden" style={{ width: CARD_W, height: CARD_H }}>
              <div
                className="flex h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * CARD_W}px)` }}
              >
                {JOB_SLIDES.map((slide, index) => (
                  <div key={index} className="relative flex-shrink-0" style={{ width: CARD_W, height: CARD_H }}>
                    {/* Dark green card — Figma: fill_WX4E6V #00352B, borderRadius 41px */}
                    <div
                      className="absolute inset-0 rounded-[41px] pt-[28px] pl-[28px] pb-[28px] box-border"
                      style={{ background: '#00352B' }}
                    >
                      {/* Text content — maxWidth keeps text clear of the job photo */}
                      <div
                        className={`transition-opacity duration-300 ease-out`}
                        style={{ maxWidth: CARD_W - PHOTO_W + 58, position: 'relative', zIndex: 2, opacity: index === currentSlide ? 1 : 0 }}
                      >
                        {/* Category — style_ZE1TO4: Poppins 400/22px/1.5em fill_P7T27W #FF3300 */}
                        <span className="font-poppins font-normal text-[22px] leading-[1.5] tracking-[-0.00682em] text-[#FF3300] mb-0 block">
                          {slide.category}
                        </span>
                        {/* Title — style_PQ1CFX: Poppins 700/54px/1.207em fill_O6FRQN white */}
                        <h2 className="font-poppins font-bold text-[54px] leading-[1.207] tracking-[-0.00278em] text-white mb-[10px]">
                          <span className="block">{slide.titleLine1}</span>
                          <span className="block">{slide.titleLine2}</span>
                        </h2>
                        {/* Rate — style_PIAHLU: Poppins 400/32px/1.5em, white text */}
                        {/* Figma Rectangle 25: layout_9GUJMG (207×53) fill_WX4E6V — same green as card bg; rendered as badge outline */}
                        <div className="inline-flex items-center justify-center h-[53px] px-[14px] rounded-[15px] mb-[12px] border border-white/30">
                          <span className="font-poppins font-normal text-[32px] leading-[1.5] text-white">
                            {slide.rate}
                          </span>
                        </div>
                        {/* Features — style_5DOK5W: Poppins 400/15px/1.867em/-1% white */}
                        <ul className="list-disc list-inside font-poppins font-normal text-[15px] leading-[1.867em] tracking-[-0.01em] text-white max-w-[280px] mb-3 [&_li]:marker:text-white">
                          {slide.details.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                        {/* CTA — style_DCVY8L: Poppins 500/16px/1.25em, fill_P7T27W #FF3300 bg, white text */}
                        <button
                          type="button"
                          onClick={openConsultation}
                          className="inline-flex py-[4px] px-[12px] justify-center items-center rounded-[16px] border-0 cursor-pointer hover:opacity-90 transition-opacity"
                          style={{ background: '#FF3300' }}
                        >
                          <span className="font-poppins font-medium text-[16px] leading-[1.25em] text-white">
                            Get Part-Time Job Guidance from Esante
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Job photo — sibling on top, flush right, no cropping */}
                    <img
                      src={slide.img}
                      alt={`${slide.titleLine1} ${slide.titleLine2}`}
                      style={{
                        position: 'absolute',
                        right: 0,
                        top: 58,
                        width: PHOTO_W,
                        height: PHOTO_H,
                        objectFit: 'cover',
                        objectPosition: 'center',
                        borderRadius: 38,
                        boxShadow: '-10px 0 28px rgba(0,0,0,0.32)',
                        zIndex: 3,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Slide counter — style_TR1P1I: Poppins 400/32px white */}
            <span className="absolute top-6 right-6 z-10 font-poppins font-normal text-[32px] leading-[1.5] tracking-[-0.00469em] text-white">
              {String(currentSlide + 1).padStart(2, '0')}/{String(JOB_SLIDES.length).padStart(2, '0')}
            </span>
          </section>
        </div>

        {/* ── Description — layout_XHENBJ: 1141×312, style_RXZ4HY: Poppins 400/23px/1.5em ── */}
        <section className="w-full max-w-[1141px] mx-auto px-6 mb-[76px] text-center">
          <p className="font-poppins font-normal italic text-[23px] leading-[1.5] tracking-[-0.00652em] text-[#FF3300] mb-6">
            From arrival to your first paycheck—we connect you with trusted employers so you can earn $3,000+ AUD per month.
          </p>
          <p className="font-poppins font-normal text-[23px] leading-[1.5] tracking-[-0.00652em] text-[#000000] mb-4">
            For international students, finding a part-time job in Australia is not optional — it&apos;s essential. Rent, groceries, transport, and daily expenses depend on it. At Esanté, we understand this reality because we are on the ground in Australia.
          </p>
          <p className="font-poppins font-normal text-[23px] leading-[1.5] tracking-[-0.00652em] text-[#000000]">
            That&apos;s why part-time job support is a core part of our end-to-end student services, not an add-on.
          </p>
        </section>

        {/* ── How Esante Helps — layout_69CSFP: 1213×320, borderRadius 45px, stroke #FF3300 2px ── */}
        <div className="flex flex-row items-start w-full max-w-[1213px] mx-auto mb-[122px] pl-[80px] pr-[40px] py-[40px] rounded-[45px] border-2 border-[#FF3300] bg-white" style={{ gap: 109 }}>
          {/* Left column — layout_DWQTMD: 532×277 */}
          <div className="flex flex-col items-start shrink-0" style={{ width: 532 }}>
            {/* style_TQYM0C: Poppins 400/45px/1.2em #00352B */}
            <p className="font-poppins font-normal text-[45px] leading-[1.2] tracking-[-0.00333em] text-[#00352B] mb-0">
              How Esante Helps You
            </p>
            <p className="font-poppins font-normal text-[45px] leading-[1.2] tracking-[-0.00333em] text-[#FF3300] mb-4">
              Get Part-Time Work Faster
            </p>
            <p className="font-poppins font-normal text-[20px] leading-[1.5] text-[#1a1a1a]">
              Esante works closely with multiple verified part-time job partners across Australia, including:
            </p>
          </div>
          {/* Bullet list — layout_D05DR9: 452×210, style_A3QO2X: Poppins 400/24px/1.2em/-0.625% */}
          <ul className="flex flex-col items-start list-none pl-0 m-0 pt-2 shrink-0" style={{ gap: 14, width: 452 }}>
            {['Cafés & restaurants', 'Petrol stations', 'Grocery stores & supermarkets', 'Shopping malls & retail outlets', 'Hospitality & customer service roles'].map((item) => (
              <li key={item} className="font-poppins font-normal text-[24px] leading-[1.2] tracking-[-0.00625em] text-[#1a1a1a]">
                ✅ {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Student story — layout_3TWTUV: 365.8×446 + layout_XXXQH2: 264.55×327, stroke_QDP66V: 11px white ── */}
        {/* Container: photo composite (444px) + gap + text (749px) = 1214px */}
        <div className="flex flex-row items-center w-full max-w-[1214px] mx-auto mb-[136px]" style={{ gap: 21 }}>
          {/* Photo composite — outer wrapper is 444×454 to hold both photos without overflow into text */}
          {/* Photo 1: 366×446 anchored left; Photo 2: 265×327 anchored bottom-right within 444px */}
          <div className="relative shrink-0" style={{ width: 444, height: 454 }}>
            <img
              src={IMG_STORY_1}
              alt="Diya and Khushi"
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: 366,
                height: 446,
                objectFit: 'cover',
                borderRadius: 20,
              }}
            />
            <img
              src={IMG_STORY_2}
              alt="Student story"
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 265,
                height: 327,
                objectFit: 'cover',
                borderRadius: 20,
                zIndex: 10,
                border: '11px solid #FFFFFF',
              }}
            />
          </div>

          {/* Story text — style_H40UTN: Poppins 600/23px/1.652em/-0.652% */}
          <div className="flex flex-col gap-6 text-left" style={{ maxWidth: 749, flex: 1, minWidth: 0 }}>
            <div>
              <h3 className="font-poppins font-semibold text-[23px] leading-[1.652em] tracking-[-0.00652em] text-[#FF3300] mb-1">
                Meet Diya &amp; Khushi:
              </h3>
              <p className="font-poppins font-semibold text-[23px] leading-[1.652em] tracking-[-0.00652em] text-black">
                When Diya and Khushi landed in Brisbane, they were worried about managing high living costs. Through Esante&apos;s local job network, they were interviewed and hired within their first week.{' '}
                <span className="text-[#FF3300]">The Result: Both are now earning between $3,000 – $4,000 AUD per month.</span>
                {' '}They pay their own rent, cover all groceries, and still save money—living financially independent from day one.
              </p>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-[23px] leading-[1.652em] tracking-[-0.00652em] text-[#FF3300] mb-1">
                The &quot;Brisbane HQ&quot; Advantage:
              </h3>
              <p className="font-poppins font-semibold text-[23px] leading-[1.652em] tracking-[-0.00652em] text-black">
                Because our headquarters are on the ground in Australia, we understand the local labour market better than any offshore agent. We guide you toward roles with the{' '}
                <span className="text-[#FF3300]">best hourly rates</span>
                , ensuring you aren&apos;t stuck with minimum wage.
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="w-full">
        <BookFreeCallBanner />
      </div>
      <Footer />
    </div>
  );
}

export default PartTimeJobSupportPage;
