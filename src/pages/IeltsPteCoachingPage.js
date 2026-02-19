import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import BookFreeCallBanner from '../components/Home-Page/BookFreeCallBanner';

// ── Images ───────────────────────────────────────────────────────────────────
const HERO_BG    = '/images/ielts-hero-bg.png';    // fill_FZBA40  1440×982 hero background
const HERO_COACH = '/images/ielts-coach.png';      // fill_PKUGW0  644×882  standing character
const JOSH_PHOTO = '/images/ielts-josh-photo.png'; // fill_DA9MSR  504×570  Josh headshot

// Testimonial card backgrounds — 7 cards (290×400, borderRadius 15px), gap 26px
// Figma: 259:1529 carousel container 1240×400 | cards at x=0,316,632,948,1264,1580,1896
const TESTI_IMGS = [
  { img: '/images/ielts-testi-1.png', city: 'Melbourne (State of Victoria)', quote: '"Changed how I study for IELTS entirely."',            uni: 'The University of Melbourne'         },
  { img: '/images/ielts-testi-2.png', city: 'Sydney (New South Wales)',       quote: '"My PTE score went from 58 to 79 in 6 weeks."',       uni: 'University of Sydney'                },
  { img: '/images/ielts-testi-3.png', city: 'Brisbane (Queensland)',          quote: '"Genuine coaching, real confidence builder."',         uni: 'Queensland University of Technology' },
  { img: '/images/ielts-testi-4.png', city: 'Perth (Western Australia)',      quote: '"Josh made the difference in my speaking band."',     uni: 'Curtin University'                   },
  { img: '/images/ielts-testi-5.png', city: 'Adelaide (South Australia)',     quote: '"From Band 6 to Band 8 — Josh\'s methods work."',      uni: 'University of Adelaide'              },
  { img: '/images/ielts-testi-5.png', city: 'Melbourne (State of Victoria)', quote: '"Incredible support throughout my IELTS journey."',    uni: 'The University of Melbourne'         },
  { img: '/images/ielts-testi-5.png', city: 'Melbourne (State of Victoria)', quote: '"Best decision I made before coming to Australia."',   uni: 'The University of Melbourne'         },
];

const CARD_W   = 290;
const CARD_GAP = 26;
const VISIBLE  = 4;

function IeltsPteCoachingPage() {
  const openConsultation = () =>
    window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  const [tIndex, setTIndex] = useState(0);
  const maxIndex = TESTI_IMGS.length - VISIBLE;
  const prevT = () => setTIndex(i => Math.max(0, i - 1));
  const nextT = () => setTIndex(i => Math.min(maxIndex, i + 1));

  return (
    <div className="flex flex-col items-start w-full bg-white">
      <Header />

      <div className="w-full max-w-[1440px] mx-auto">

        {/* ════════════════════════════════════════════════════════
            HERO SECTION
            Figma: section 257:1484 — 1440×982 canvas
            Displayed at 672px height with proportional scaling
            ════════════════════════════════════════════════════════ */}
        <section className="w-full">
          {/*
            Hero container: 840px tall
            Header is position:absolute overlaying from y=0 → y≈98px (41px top-strip + 57px nav)
            Text placed at top:110 → label starts 12px below header bottom, clearly in sky
            Building roofline ≈ y=491px (with object-top) → text ends at ~y=360, all in sky
            Coach image: height=640 (76% of 840px hero) → head at y=200 (24% from top)
          */}
          <div className="relative w-full" style={{ height: 840, overflow: 'hidden' }}>

            {/* Background — object-top shows the sky-heavy upper portion */}
            <img
              src={HERO_BG}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover object-top"
            />

            {/* ── Text column ── */}
            <div
              className="absolute flex flex-col items-start"
              style={{ left: 280, top: 160, zIndex: 5 }}
            >
              {/* Label: Poppins 500 / 28px / -2% / #00352B / underline */}
              <span
                className="font-poppins font-medium text-[#00352B] mb-[18px]"
                style={{
                  fontSize: 28,
                  lineHeight: '1.2em',
                  letterSpacing: '-0.02em',
                  textDecoration: 'underline',
                }}
              >
                IELTS &amp; PTE Training
              </span>

              {/* Heading: Poppins 600 italic / 56px / #FF3300 */}
              <span
                className="font-poppins font-semibold italic text-[#FF3300] mb-[12px]"
                style={{ fontSize: 56, lineHeight: '1.12em' }}
              >
                Free IELTS &amp;<br />PTE Training
              </span>

              {/* Subheading: Poppins 600 italic / 35px / -2% / #00352B */}
              <p
                className="font-poppins font-semibold italic mb-[22px] m-0"
                style={{
                  fontSize: 35,
                  lineHeight: '1.2857em',
                  letterSpacing: '-0.02em',
                  color: '#00352B',
                }}
              >
                By a Native{' '}
                <span style={{ color: '#FF3300' }}>Australian Coach</span>
              </p>

              {/* CTA button: Poppins 500 / 14px / #FFFBE9 on #FF3300 */}
              <button
                type="button"
                onClick={openConsultation}
                className="inline-flex py-[4px] px-[16px] justify-center items-center rounded-[16px] border-0 cursor-pointer"
                style={{
                  background: '#FF3300',
                  boxShadow: '0 4px 14px rgba(255,51,0,0.35)',
                }}
              >
                <span
                  className="font-poppins font-medium text-[#FFFBE9]"
                  style={{ fontSize: 14, lineHeight: '1.4286em' }}
                >
                  Get Free Guidance from Esante
                </span>
              </button>
            </div>

            {/* ── Coach character — height 640px (76% of 840px hero), head at y≈200 ── */}
            <img
              src={HERO_COACH}
              alt="Native Australian IELTS coach"
              className="absolute"
              style={{
                right: 0,
                bottom: 0,
                height: 760,
                width: 'auto',
                objectFit: 'contain',
                objectPosition: 'bottom',
                zIndex: 4,
              }}
            />
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            MEET JOSHUA SECTION
            Figma: layout_UN0MCU 887×172 title | layout_AW84BN 504×570 photo
            style_8RRUCW: Poppins 400/36px/1.62em | fill_ZQTAMV #000000
            style_0F813P: Poppins 400/23px/1.391em/-0.652% (bio)
            style_F0K1WH: Poppins 400/23px/-0.652% (bullets, lineHeight 0.609em → mb-[14px])
            layout: ml=84 mr=115 gap=52
            ════════════════════════════════════════════════════════ */}
        <main className="flex flex-col w-full bg-white pt-[86px]">

          <section className="flex items-start gap-[52px] mb-[80px] ml-[84px] mr-[115px]">

            {/* Josh photo — layout_AW84BN 504×570 | video thumbnail with play button */}
            <div
              className="relative shrink-0 overflow-hidden group cursor-pointer"
              style={{
                width: 504,
                height: 570,
                borderRadius: 20,
                boxShadow: '0 6px 28px rgba(0,0,0,0.13)',
              }}
            >
              <img
                src={JOSH_PHOTO}
                alt="Joshua Michael William G."
                className="w-full h-full object-cover"
              />
              {/* Play button overlay — as seen in Figma video thumbnail */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                <div
                  className="flex items-center justify-center rounded-full bg-white/90"
                  style={{ width: 72, height: 72, boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }}
                >
                  <svg
                    className="ml-1"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="#222222"
                    aria-hidden
                  >
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Text column */}
            <div className="flex flex-1 flex-col items-start">

              {/* Title — layout_UN0MCU 887×172 | style_8RRUCW Poppins 400/36px/1.62em | #000000
                  "Meet <bold-red>Joshua Michael William G.</bold-red>\nYour Communication & IELTS Coach 🇦🇺" */}
              <h2
                className="font-poppins font-normal text-black mb-[20px]"
                style={{ fontSize: 36, lineHeight: '1.62em' }}
              >
                Meet{' '}
                <span className="font-bold italic text-[#FF3300]">Joshua Michael William G.</span>
                <br />
                Your Communication &amp; IELTS Coach
              </h2>

              {/* Bio — style_YYXM8K: Poppins 400/23px/1.391em/-0.652% */}
              <p
                className="font-poppins font-normal text-black mb-[16px]"
                style={{ fontSize: 23, lineHeight: '1.391em', letterSpacing: '-0.00652em' }}
              >
                Josh is a{' '}
                <span className="font-bold text-[#FF3300]">CELTA &amp; TEFL-certified</span>{' '}
                <span className="font-bold text-[#FF3300]">English communication coach</span>{' '}
                with over{' '}
                <span className="font-bold text-[#FF3300]">5+ years of teaching experience</span>,
                working with students from all over the world.
              </p>
              <p
                className="font-poppins font-normal text-black mb-[16px]"
                style={{ fontSize: 23, lineHeight: '1.391em', letterSpacing: '-0.00652em' }}
              >
                He is the founder of{' '}
                <span className="font-bold text-[#FF3300]">Communication Mastery</span>, a global
                learning community with{' '}
                <span className="font-bold text-[#FF3300]">1,700+ members</span>, where he helps
                learners:
              </p>

              {/* Bullet list — style_Y1C8ZD: Poppins 400/23px/-0.652% */}
              <ul
                className="font-poppins font-normal text-black list-disc list-outside pl-5"
                style={{ fontSize: 23, letterSpacing: '-0.00652em', lineHeight: '1.6em' }}
              >
                <li className="mb-[8px] whitespace-nowrap">Speak English fluently and naturally</li>
                <li className="mb-[8px] whitespace-nowrap">Improve IELTS &amp; PTE speaking performance</li>
                <li className="mb-[8px] whitespace-nowrap">Build confidence for interviews and real conversations</li>
                <li className="whitespace-nowrap">Communicate clearly in professional and social settings</li>
              </ul>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════
              TESTIMONIAL CAROUSEL
              Figma: layout_38VRM2 1240×400 | 7 cards × 290×400, gap 26px
              Polygon 4 (white) + Polygon 5 (white/64%) as nav arrows
              ════════════════════════════════════════════════════════ */}
          <section className="relative mb-[80px] ml-[84px]">

            {/* Left nav arrow — Figma: Polygon 4, fill #FFFFFF */}
            <button
              type="button"
              onClick={prevT}
              disabled={tIndex === 0}
              className="absolute -left-[56px] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center disabled:opacity-25 transition-opacity cursor-pointer"
              aria-label="Previous testimonials"
            >
              <svg width="34" height="44" viewBox="0 0 34 44" fill="none" aria-hidden>
                <polygon points="34,0 34,44 0,22" fill="#FFFFFF" />
              </svg>
            </button>

            {/* Sliding track container — overflow hidden, exactly 4 cards wide */}
            <div style={{ overflow: 'hidden', width: CARD_W * VISIBLE + CARD_GAP * (VISIBLE - 1) }}>
              <div
                className="flex"
                style={{
                  gap: CARD_GAP,
                  transform: `translateX(-${tIndex * (CARD_W + CARD_GAP)}px)`,
                  transition: 'transform 0.4s ease',
                }}
              >
                {TESTI_IMGS.map((t, i) => (
                  <div
                    key={i}
                    className="relative shrink-0 overflow-hidden"
                    style={{ width: CARD_W, height: 400, borderRadius: 15 }}
                  >
                    {/* Background image */}
                    <img
                      src={t.img}
                      alt={t.city}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                  </div>
                ))}
              </div>
            </div>

            {/* Right nav arrow — Figma: Polygon 5, fill rgba(255,255,255,0.64) */}
            <button
              type="button"
              onClick={nextT}
              disabled={tIndex >= maxIndex}
              className="absolute -right-[56px] top-1/2 -translate-y-1/2 z-10 flex items-center justify-center disabled:opacity-25 transition-opacity cursor-pointer"
              aria-label="Next testimonials"
            >
              <svg width="34" height="44" viewBox="0 0 34 44" fill="none" aria-hidden>
                <polygon points="0,0 0,44 34,22" fill="rgba(255,255,255,0.64)" />
              </svg>
            </button>
          </section>

          {/* ════════════════════════════════════════════════════════
              QUOTE BLOCK
              layout_BU9VSD 1232×141 | style_T0G74J Poppins 600/24px/1.333em/-0.625%
              ════════════════════════════════════════════════════════ */}
          <p
            className="font-poppins font-semibold text-black mb-[114px] ml-[92px] mr-[123px] max-w-[1232px]"
            style={{ fontSize: 24, lineHeight: '1.333em', letterSpacing: '-0.00625em' }}
          >
            At Esante,{' '}
            <span className="text-[#FF3300]">Josh</span> plays a critical role – not just in
            helping students{' '}
            <span className="text-[#FF3300]">achieve their target IELTS/PTE scores,</span> but in
            preparing them for{' '}
            <span className="text-[#FF3300]">real Australian life.</span>
          </p>

          {/* ════════════════════════════════════════════════════════
              WHY OUR COACHING IS UNMATCHED
              Figma 257:1568 — fills: Primary Color (#00352B) — entire heading
              style_EBQ3VU: Poppins 400/45px/1.2em/-0.333%
              Bullets: style_1NVSJM / style_DURQ2C / style_0UXZC1 — 22px
              ════════════════════════════════════════════════════════ */}
          <section className="flex items-start self-stretch max-w-[1222px] mb-[66px] ml-[92px] mr-[126px] gap-16">
            <span
              className="font-poppins font-normal shrink-0 whitespace-pre-line"
              style={{ fontSize: 45, lineHeight: '1.2em', letterSpacing: '-0.00333em', width: 322, color: '#00352B' }}
            >
              {'Why Our\nCoaching is\nUnmatched:'}
            </span>

            <div className="flex flex-1 flex-col items-start pr-[55px]">
              {/* style_1NVSJM: single line */}
              <span
                className="font-poppins font-normal text-black mb-[18px] whitespace-nowrap"
                style={{ fontSize: 22, lineHeight: '1.2em', letterSpacing: '-0.00682em' }}
              >
                ✅ $0 Cost: Professional coaching usually costs $50/hour. You get it FREE.
              </span>
              {/* style_DURQ2C: two lines */}
              <span
                className="font-poppins font-normal text-black mb-[18px]"
                style={{ fontSize: 22, lineHeight: '1.36em', letterSpacing: '-0.00682em' }}
              >
                ✅ Real-Time Feedback: Live sessions focusing on pronunciation, vocabulary,<br />
                and &quot;Band 8&quot; sentence structures.
              </span>
              {/* style_0UXZC1: two lines */}
              <span
                className="font-poppins font-normal text-black"
                style={{ fontSize: 22, lineHeight: '1.35em', letterSpacing: '-0.00682em' }}
              >
                ✅ Beyond the Test: Josh prepares you for life in Australia—teaching you the slang,<br />
                etiquette, and confidence needed to ace job interviews after you land.
              </span>
            </div>
          </section>

        </main>
      </div>

      {/* ── BookFreeCallBanner — Group 82 | layout_OGEYP0 1047×367 rounded-37px ── */}
      <div className="w-full">
        <BookFreeCallBanner />
      </div>
      <Footer />
    </div>
  );
}

export default IeltsPteCoachingPage;
