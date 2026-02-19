import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import BookFreeCallBanner from '../components/Home-Page/BookFreeCallBanner';
import ConsultationPopup from '../components/Reusable/ConsultationPopup';

const MELBOURNE_IMG =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/4o8acy0c_expires_30_days.png';
const WHY_IMG =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/eet9h6uz_expires_30_days.png';
const STORY_IMG =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/7m4gxaj3_expires_30_days.png';

const STUDENT_STORIES = [
  {
    title: 'Khushi in Brisbane 🇦🇺',
    text: "Through Esante's partner network, Khushi Ajmani secured a single private room with an attached washroom in Brisbane for just AUD 190 per week — a deal that's hard to find independently.\n\nBecause her accommodation was sorted early and at the right price, she was able to focus on her studies and part-time work without financial stress.",
    img: STORY_IMG,
  },
  {
    title: 'Priya in Melbourne 🇦🇺',
    text: "Priya found her perfect student accommodation through Esante's verified partners. A private room in a shared apartment, just 15 minutes from her university, for AUD 220 per week.\n\nWith everything sorted before she arrived, she could hit the ground running and focus on making the most of her Australian experience.",
    img: STORY_IMG,
  },
];

const ACCOMMODATION_SLIDES = [
  {
    intro: 'Dreaming for',
    city: 'Melbourne',
    price: 'AU$220/week',
    features: [
      'Fully-equipped gym',
      'Social lounges & study zones',
      '24/7 secure access',
      'Minutes from campus & transport',
    ],
  },
  {
    intro: 'Looking for',
    city: 'Sydney',
    price: 'AU$250/week',
    features: [
      'Ocean views & central location',
      'Modern shared kitchens',
      'Bike storage & laundry',
      'Close to major universities',
    ],
  },
  {
    intro: 'Hoping for',
    city: 'Brisbane',
    price: 'AU$190/week',
    features: [
      'Pool & outdoor BBQ area',
      'Quiet study rooms',
      'All bills included',
      'Walking distance to CBD',
    ],
  },
  {
    intro: 'Ready for',
    city: 'Perth',
    price: 'AU$200/week',
    features: [
      'Beach nearby',
      'Air-conditioned rooms',
      'Secure parking',
      'Vibrant student community',
    ],
  },
];

export default function AccommodationPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStorySlide, setCurrentStorySlide] = useState(0);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? ACCOMMODATION_SLIDES.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === ACCOMMODATION_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const goToPrevStory = () => {
    setCurrentStorySlide((prev) => (prev === 0 ? STUDENT_STORIES.length - 1 : prev - 1));
  };

  const goToNextStory = () => {
    setCurrentStorySlide((prev) => (prev === STUDENT_STORIES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Header />

      <main className="flex flex-col w-full max-w-[1440px] mx-auto bg-[#FFFDF6]">
        <div className="flex flex-col items-center w-full pt-[130px] pb-16 px-[100px]">
          {/* Hero: text block — matches reference design */}
          <section className="flex flex-col items-center w-full max-w-[1192px] mb-[64px] gap-0">
            {/* Page label — underlined, dark green */}
            <span className="font-poppins font-medium text-[22px] leading-[1.4] tracking-[-0.02em] text-[#00352B] mb-[16px] underline decoration-[#00352B] underline-offset-2">
              Accommodation
            </span>
            {/* Main heading line 1 — bold, italic, orange/red */}
            <h1 className="font-poppins font-bold italic text-[48px] leading-[1.25] tracking-[-0.02em] text-center text-[#FF3300] mb-[4px] whitespace-nowrap">
              Student Accommodation in Australia
            </h1>
            {/* Main heading line 2 — regular weight, dark green */}
            <p className="font-poppins font-normal text-[48px] leading-[1.25] tracking-[-0.02em] text-center text-[#00352B] max-w-[800px] mb-[32px]">
              Sorted With Esante.
            </p>
            {/* CTA — rounded, orange background, white text */}
            <button
              type="button"
              className="inline-flex py-1 px-3 justify-center items-center rounded-[16px] border-0 cursor-pointer"
              style={{ background: '#F30' }}
              onClick={() => setConsultationOpen(true)}
            >
              <span
                className="font-poppins text-center font-medium"
                style={{
                  color: 'var(--Light-Background, #FFFBE9)',
                  fontSize: 22,
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '20px',
                }}
              >
                Get Free Guidance from Esante
              </span>
            </button>
          </section>

          {/* Section: Hero - reference image match: layered absolute, fixed card sizes (width/height like Part-time Job Support page) */}
          <div className="w-full -mx-[72px] min-w-0">
            <section className="relative w-[1383px] max-w-[100%] min-h-[600px] mx-auto mb-[105px] rounded-[40px] overflow-hidden">
            {/* Background - sharp contrast, no blur */}
            <div
              className="absolute inset-0 rounded-[40px] bg-[#d3d3d3] bg-no-repeat bg-[url('https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/n2i4a7pn_expires_30_days.png')] [background-size:100%_248.977%] [background-position:0_-740.061px] contrast-125"
              aria-hidden
            />
            {/* Dark green overlay above bg image */}
            <div className="absolute inset-0 rounded-[40px] bg-[#00352B]/55 pointer-events-none" aria-hidden />

            {/* Left arrow - on background */}
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
            {/* Right arrow - on background */}
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

            {/* Centered group: orange box + room image - sliding carousel */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[400px] overflow-hidden">
              <div
                className="flex h-full transition-transform duration-400 ease-out"
                style={{ transform: `translateX(-${currentSlide * 640}px)` }}
              >
                {ACCOMMODATION_SLIDES.map((slide, index) => (
                  <div
                    key={index}
                    className="relative flex-shrink-0 w-[640px] h-[400px]"
                  >
                    {/* Orange card */}
                    <div className="absolute left-0 top-0 w-[640px] h-[400px] flex flex-col bg-[#FF3300] rounded-[32px] pt-[28px] pl-[28px] pr-[220px] pb-[28px] box-border overflow-hidden">
                      {/* Text content with clear fade-in when slide is active */}
                      <div
                        className={`transition-opacity duration-300 ease-out ${
                          index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <p className="font-poppins font-normal text-[28px] leading-[1.35] tracking-[-0.00375em] text-white mb-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
                          {slide.intro}
                        </p>
                        <h2 className="font-poppins font-bold text-[44px] leading-[1.35] tracking-[-0.00234em] text-white mb-[12px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
                          {slide.city}
                        </h2>
                        <p className="font-poppins font-normal text-[20px] leading-[1.35] tracking-[-0.00536em] text-white mb-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
                          Starting at Just
                        </p>
                        <div className="w-[165px] h-[42px] flex items-center justify-center bg-[#00352B] rounded-[12px] mb-[12px] shrink-0">
                          <span className="font-poppins font-normal text-[22px] leading-[1.35] tracking-[-0.00517em] text-white">
                            {slide.price}
                          </span>
                        </div>
                        <ul className="list-disc list-inside font-poppins font-normal text-[13px] leading-[1.35] tracking-[-0.01em] text-white max-w-[260px] mb-3 space-y-0.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)] [&_li]:marker:text-white">
                          {slide.features.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                        <button
                          type="button"
                          className="flex items-center justify-center h-8 px-3 w-fit min-w-0 bg-white rounded-[12px] border-0 cursor-pointer font-poppins font-semibold text-[13px] text-[#FF3300] transition-opacity hover:opacity-95 shrink-0 shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                          onClick={() => setConsultationOpen(true)}
                        >
                          Get Free Guidance from Esante
                        </button>
                      </div>
                    </div>

                    {/* Room image card - same image for all slides */}
                    <img
                      src={MELBOURNE_IMG}
                      alt={`${slide.city} accommodation`}
                      className="absolute left-[340px] top-1/2 -translate-y-1/2 w-[300px] h-[312px] object-cover object-center rounded-[32px] shadow-[8px_8px_6px_rgba(0,0,0,0.3)] z-[1]"
                    />
                  </div>
                ))}
              </div>
            </div>
            <span className="absolute top-6 right-6 z-10 font-poppins font-normal text-[32px] leading-[1.5] tracking-[-0.00469em] text-white">
              {String(currentSlide + 1).padStart(2, '0')}/{String(ACCOMMODATION_SLIDES.length).padStart(2, '0')}
            </span>
          </section>
          </div>

          {/* Section: Long copy */}
          <section className="flex flex-col items-center w-full max-w-[1117px] mx-auto mb-[100px]">
            <p className="font-poppins font-normal italic text-[23px] leading-[1.5] tracking-[-0.00652em] text-[#FF3300] text-center mb-8">
              Finding cheap student accommodation in Australia is one of the biggest challenges for
              international students — inflated prices, unreliable listings, and hidden fees make it
              harder than it should be.
            </p>
            <p className="font-poppins font-normal text-[23px] leading-[1.5] tracking-[-0.00652em] text-black text-center mb-4">
              At Esante, we do it differently. We don't list properties.
            </p>
            <p className="font-poppins font-normal text-[23px] leading-[1.5] tracking-[-0.00652em] text-[#FF3300] text-center mb-4">
              We partner, negotiate, verify, and support — like a local Australian team.
            </p>
            <p className="font-poppins font-normal text-[23px] leading-[1.5] tracking-[-0.00652em] text-black text-center">
              We have direct B2B partnerships with multiple trusted accommodation providers across Australia, which allows us to access exclusive student rates that are lower than standard market prices. These benefits are passed directly to our students, with no extra charges.
            </p>
          </section>

          {/* Section: Why Esante */}
          <section className="flex flex-col w-full max-w-[1087px] mx-auto mb-[98px]">
            <div className="flex flex-row items-start w-full gap-[50px]">
              <img
                src={WHY_IMG}
                alt="Why Esante accommodation"
                className="w-[379px] h-[379px] shrink-0 object-cover rounded-[50px]"
              />
              <div className="flex flex-col items-start flex-1 min-w-0 pt-0">
                <h2 className="font-poppins font-normal text-[45px] leading-[1.2] tracking-[-0.00333em] text-[#00352B] mb-8 max-w-[603px]">
                  Why Esante Accommodation Support Is Different
                </h2>
                <ul className="flex flex-col gap-[12px] list-none p-0 m-0">
                  <li className="font-poppins font-normal text-[20px] leading-[1.2] tracking-[-0.00682em] text-black">
                    ✅ B2B partner rates with verified accommodation providers
                  </li>
                  <li className="font-poppins font-normal text-[20px] leading-[1.2] tracking-[-0.00682em] text-black">
                    ✅ Lower weekly rents compared to public listings
                  </li>
                  <li className="font-poppins font-normal text-[20px] leading-[1.2] tracking-[-0.00682em] text-black">
                    ✅ Private rooms, shared apartments & student residences
                  </li>
                  <li className="font-poppins font-normal text-[20px] leading-[1.2] tracking-[-0.00682em] text-black">
                    ✅ Support before arrival and after moving in
                  </li>
                  <li className="font-poppins font-normal text-[20px] leading-[1.2] tracking-[-0.007em] text-black">
                    ✅ Lease & rental guidance by an Australia-based team
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Real Student Story */}
          <section className="relative w-full max-w-[1130px] mx-auto mb-[65px] overflow-hidden">
            <div className="relative w-full h-[500px] py-8 px-12 bg-[#00352B] rounded-[24px] border border-[#FF3300]/50">
              {/* Left arrow */}
              <button
                type="button"
                onClick={goToPrevStory}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 border border-white/50 cursor-pointer transition-colors"
                aria-label="Previous story"
              >
                <svg className="w-5 h-5 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              {/* Right arrow */}
              <button
                type="button"
                onClick={goToNextStory}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 border border-white/50 cursor-pointer transition-colors"
                aria-label="Next story"
              >
                <svg className="w-5 h-5 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Sliding carousel */}
              <div className="overflow-hidden h-full">
                <div
                  className="flex h-full transition-transform duration-400 ease-out"
                  style={{ transform: `translateX(-${currentStorySlide * 100}%)` }}
                >
                  {STUDENT_STORIES.map((story, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center justify-center w-full min-w-full h-full gap-10 px-14 shrink-0"
                    >
                      <div className="flex flex-col items-center text-center max-w-[420px]">
                        <h3 className="font-poppins font-semibold text-[28px] leading-[1.2] tracking-[-0.00333em] text-[#FF3300] mb-4">
                          Real Student Story: {story.title}
                        </h3>
                        <p className="font-poppins font-normal text-[18px] leading-[1.45] tracking-[-0.0065em] text-white whitespace-pre-line">
                          {story.text}
                        </p>
                      </div>
                      <img
                        src={story.img}
                        alt={story.title}
                        className="w-[280px] h-[300px] shrink-0 object-cover rounded-[20px]"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Slide indicator */}
              <span className="absolute bottom-4 right-6 z-10 font-poppins font-normal text-[14px] leading-[1.5] text-white/80">
                {currentStorySlide + 1}/{STUDENT_STORIES.length}
              </span>
            </div>
          </section>
        </div>
      </main>

      <BookFreeCallBanner />
      <Footer />

      <ConsultationPopup
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
