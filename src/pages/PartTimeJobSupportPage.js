import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

const IMG_CAFE =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/l2ar2hox_expires_30_days.png';
const IMG_STORY_1 =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/y4tbetfz_expires_30_days.png';
const IMG_STORY_2 =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/85xfs4v3_expires_30_days.png';

const JOB_SLIDES = [
  {
    category: 'Cafés & Coffee Shops',
    titleLine1: 'Working in',
    titleLine2: 'Cafés',
    rate: 'AU$28–40/hour',
    details: 'Barista, cashier & service roles\nFlexible shifts around classes\nTips + weekend penalty rates',
    img: IMG_CAFE,
  },
  {
    category: 'Retail & Supermarkets',
    titleLine1: 'Retail &',
    titleLine2: 'Grocery',
    rate: 'AU$25–38/hour',
    details: 'Checkout, stocking & customer service\nStable hours & employee discounts\nWeekend penalty rates',
    img: IMG_CAFE,
  },
  {
    category: 'Hospitality & Restaurants',
    titleLine1: 'Hospitality',
    titleLine2: 'Roles',
    rate: 'AU$28–42/hour',
    details: 'Waiter, kitchen hand & front-of-house\nEvening & weekend shifts\nTips + award wages',
    img: IMG_CAFE,
  },
  {
    category: 'Petrol & Service Stations',
    titleLine1: 'Service Station',
    titleLine2: 'Work',
    rate: 'AU$26–36/hour',
    details: 'Attendant, console & retail\n24/7 shift flexibility\nOften close to campus',
    img: IMG_CAFE,
  },
];

const SLIDE_WIDTH = 640;

function PartTimeJobSupportPage() {
  const openConsultation = () => window.dispatchEvent(new CustomEvent('openConsultationPopup'));
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? JOB_SLIDES.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === JOB_SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col w-full bg-white items-start">
      <Header />

      <div className="flex flex-col w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center self-stretch bg-white pt-[186px] pb-[67px]">
          <span className="font-poppins font-medium text-[22px] leading-[1.4] tracking-[-0.02em] text-[#00352B] mb-4 text-center underline decoration-[#00352B] underline-offset-2">
            Part-Time Job Support in Australia
          </span>
          <h1 className="font-poppins font-bold italic text-[48px] leading-[1.25] tracking-[-0.02em] text-center text-[#FF3300] mb-2">
            Earn While You Study
          </h1>
          <p className="font-poppins font-normal text-[28px] leading-[1.25] tracking-[-0.02em] text-center text-[#00352B] mb-8">
            Live Stress-Free.
          </p>
          <button
            type="button"
            onClick={openConsultation}
            className="flex items-center justify-center bg-[#FF3300] min-h-[44px] px-8 py-3 rounded-[16px] border-0 cursor-pointer font-poppins font-medium text-[14px] leading-[1.43] text-white transition-opacity hover:opacity-90"
          >
            Get Free Guidance from Esante
          </button>
        </div>

        <div
          className="flex justify-center items-center self-stretch bg-cover bg-center bg-no-repeat mx-6 mb-[102px] min-h-[600px] rounded-[20px] relative"
          style={{ backgroundImage: 'url("https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/v7izjyga_expires_30_days.png")' }}
        >
            {/* Orange layer on top of background image */}
            <div className="absolute inset-0 rounded-[20px] bg-[#FF3300]/40 pointer-events-none" aria-hidden />
            {/* Left arrow - on background image */}
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
            {/* Right arrow - on background image */}
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

            {/* Sliding carousel - green container centered on bg image */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] min-h-[400px] overflow-hidden">
              <div
                className="flex min-h-[400px] transition-transform duration-400 ease-out"
                style={{ transform: `translateX(-${currentSlide * SLIDE_WIDTH}px)` }}
              >
                {JOB_SLIDES.map((slide, index) => (
                  <div
                    key={index}
                    className="flex shrink-0 items-center justify-center relative w-[640px]"
                    style={{ width: SLIDE_WIDTH }}
                  >
                    <div className="flex flex-col items-start bg-[#00352B] py-[56px] pl-[28px] pr-[320px] rounded-[32px] min-w-[400px] shadow-lg">
                      <div
                        className={`transition-opacity duration-300 ease-out ${
                          index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <span className="font-poppins font-normal text-[18px] leading-[1.2] text-[#FF3300] mb-2 block text-left">
                          {slide.category}
                        </span>
                        <h2 className="font-poppins font-bold text-[42px] leading-[1.1] text-white mb-2 block text-left">
                          <span className="block">{slide.titleLine1}</span>
                          <span className="block">{slide.titleLine2}</span>
                        </h2>
                        <p className="font-poppins font-normal text-[18px] leading-[1.3] text-white mb-4">
                          {slide.rate}
                        </p>
                        <ul className="list-disc list-inside font-poppins font-normal text-[13px] leading-[1.5] text-white max-w-[260px] mb-6 space-y-1 text-left [&_li]:marker:text-white">
                          {slide.details.split('\n').map((line, i) => (
                            <li key={i}>{line}</li>
                          ))}
                        </ul>
                        <button
                          type="button"
                          onClick={openConsultation}
                          className="flex items-center justify-center bg-[#FF3300] py-2.5 px-5 rounded-2xl border-0 cursor-pointer font-poppins font-medium text-sm text-white transition-opacity hover:opacity-95"
                        >
                          Get Part-Time Job Guidance from Esante
                        </button>
                      </div>
                    </div>
                    <img
                      src={slide.img}
                      alt={`${slide.titleLine1} ${slide.titleLine2}`}
                      className="w-[280px] h-[290px] absolute top-[48px] right-[-5px] object-cover rounded-[16px] z-10 pointer-events-none"
                    />
                  </div>
                ))}
              </div>
            </div>

            <span className="font-poppins font-normal text-[32px] leading-[1.2] text-white absolute top-8 right-[90px] z-10">
              {String(currentSlide + 1).padStart(2, '0')}/{String(JOB_SLIDES.length).padStart(2, '0')}
            </span>
        </div>

        {/* Text block: Figma node 259:1600 – style_ALOBV3, fill #000000, layout 1141×312, center-aligned */}
        <section className="w-full max-w-[1141px] mx-auto px-6 sm:px-8 mb-[76px] text-center">
          <p className="font-poppins font-normal text-[23px] leading-[1.5] tracking-[-0.00652em] text-[#000000] whitespace-pre-line">
            <span className="text-[#FF3300] italic">From arrival to your first paycheck—we connect you with trusted employers so you can earn $3,000+ AUD per month.</span>{'\n\n'}
            For international students, finding a part-time job in Australia is not optional — it's essential. Rent, groceries, transport, and daily expenses depend on it. At Esanté, we understand this reality because we are on the ground in Australia.{'\n\n'}
            That's why part-time job support is a core part of our end-to-end student services, not an add-on.
          </p>
        </section>

        <div className="flex flex-col sm:flex-row items-start justify-between w-full max-w-[1214px] mx-auto mb-[122px] pl-[80px] pr-10 sm:pl-[88px] sm:pr-12 py-10 rounded-[45px] border border-solid border-[#FF3300] gap-12 bg-white">
          <div className="flex flex-col items-start flex-1 min-w-0">
            <p className="font-poppins font-normal text-[26px] leading-[1.3] text-[#00352B] mb-4">
              How Esante Helps You
            </p>
            <p className="font-poppins font-bold text-[34px] leading-[1.2] text-[#FF3300] mb-5 whitespace-pre-line">
              Get Part-Time Work{'\n'}Faster
            </p>
            <p className="font-poppins font-normal text-[18px] leading-[1.5] text-[#1a1a1a]">
              Esante works closely with multiple verified part-time job partners across Australia, including:
            </p>
          </div>
          <ul className="flex flex-col items-start gap-3 flex-1 min-w-[260px] list-none pl-0 m-0">
            <li className="font-poppins font-normal text-[18px] leading-[1.5] text-[#1a1a1a] flex items-center gap-2">
              <span className="text-[#00352B]">✅</span> Cafés & restaurants
            </li>
            <li className="font-poppins font-normal text-[18px] leading-[1.5] text-[#1a1a1a] flex items-center gap-2">
              <span className="text-[#00352B]">✅</span> Petrol stations
            </li>
            <li className="font-poppins font-normal text-[18px] leading-[1.5] text-[#1a1a1a] flex items-center gap-2">
              <span className="text-[#00352B]">✅</span> Grocery stores & supermarkets
            </li>
            <li className="font-poppins font-normal text-[18px] leading-[1.5] text-[#1a1a1a] flex items-center gap-2">
              <span className="text-[#00352B]">✅</span> Shopping malls & retail outlets
            </li>
            <li className="font-poppins font-normal text-[18px] leading-[1.5] text-[#1a1a1a] flex items-center gap-2">
              <span className="text-[#00352B]">✅</span> Hospitality & customer service roles
            </li>
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 w-full max-w-[1214px] mx-auto px-6 sm:px-8 mb-[136px]">
          <div className="flex shrink-0 relative w-[365px] h-[446px]">
              <img
                src={IMG_STORY_1}
                alt=""
                className="w-[365px] h-[446px] object-cover rounded-[20px]"
              />
              <img
                src={IMG_STORY_2}
                alt=""
                className="w-[264px] h-[327px] absolute -bottom-2 -right-[78px] object-cover rounded-[20px] z-10"
              />
          </div>
          <div className="flex flex-col gap-6 max-w-[520px] flex-1 text-left">
            <div>
              <h3 className="font-poppins font-bold text-[26px] leading-[1.3] text-[#FF3300] mb-3">
                Meet Diya & Khushi:
              </h3>
              <p className="font-poppins font-normal text-[20px] leading-[1.5] text-black">
                When Diya and Khushi landed in Brisbane, they were worried about managing high living costs. Through Esante's local job network, they were interviewed and hired within their first week.{' '}
                <span className="font-bold text-[#FF3300]">The Result: Both are now earning between $3,000 - $4,000 AUD per month.</span>
                {' '}They pay their own rent, cover all groceries, and still save money—living financially independent from day one.
              </p>
            </div>
            <div>
              <h3 className="font-poppins font-bold text-[26px] leading-[1.3] text-[#FF3300] mb-3">
                The "Brisbane HQ" Advantage:
              </h3>
              <p className="font-poppins font-normal text-[20px] leading-[1.5] text-black">
                Because our headquarters are on the ground in Australia, we understand the local labour market better than any offshore agent. We guide you toward roles with the{' '}
                <span className="font-bold text-[#FF3300]">best hourly rates</span>
                , ensuring you aren't stuck with minimum wage.
              </p>
            </div>
          </div>
        </div>

        <section className="flex flex-col w-full max-w-[1214px] mx-auto px-6 sm:px-8 mb-[55px]">
          <div className="relative flex flex-col items-center justify-center w-full min-h-[340px] py-16 px-8 sm:px-16 rounded-[48px] overflow-hidden bg-gradient-to-b from-[#FF6B35] via-[#FF3300] to-[#E62E00]">
            <h2 className="relative z-10 font-poppins text-center max-w-[800px] mb-6">
              <span className="block font-normal text-[28px] leading-[1.3] tracking-[-0.02em] text-white mb-1">Think of</span>
              <span className="block font-bold text-[42px] leading-[1.2] tracking-[-0.02em] text-white">Esante as your Australia-study partner</span>
              <span className="block font-normal text-[28px] leading-[1.3] tracking-[-0.02em] text-white mt-1">not just an agent.</span>
            </h2>
            <p className="relative z-10 font-poppins font-normal text-[20px] leading-[1.5] text-white text-center max-w-[600px] mb-8">
              Let Our Experts In Brisbane Guide You Every Step Of The Way.
            </p>
            <button
              type="button"
              onClick={openConsultation}
              className="relative z-10 flex items-center justify-center h-12 px-12 bg-white rounded-[16px] border-0 cursor-pointer font-poppins font-semibold text-[18px] text-black transition-opacity hover:opacity-95"
            >
              Book Free Call
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default PartTimeJobSupportPage;
