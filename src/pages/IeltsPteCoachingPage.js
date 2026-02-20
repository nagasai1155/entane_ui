import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

/* ── Figma asset URLs (valid ~7 days) ── */
const imgCoach  = "https://www.figma.com/api/mcp/asset/886fd36e-414d-4af1-b7f9-1e4b576bcbb4";
const imgJosh   = "https://www.figma.com/api/mcp/asset/db5c4bcb-12ed-4fa3-b09b-2172178dfd37";
const imgBanner = "https://www.figma.com/api/mcp/asset/1b51f536-6b4f-4f73-88dc-310523941da2";

/* Hero background is a local asset (1440×982 building photo) */
const HERO_BG = '/images/ielts-hero-bg.png';

/* ── Testimonial data — local images from public/images/ielts ── */
const CARDS = [
  {
    img:  '/images/ielts/testimonial (1).png',
    city: 'Melbourne (State of Victoria)', quote: '"Changed how I study for IELTS entirely."',              uni: 'The University of Melbourne',         hasOverlay: true,
  },
  {
    img:  '/images/ielts/testimonial (2).png',
    city: 'Sydney (New South Wales)',      quote: '"My PTE score went from 58 to 79 in 6 weeks."',         uni: 'University of Sydney',                hasOverlay: true,
  },
  {
    img:  '/images/ielts/testimonial (3).png',
    city: 'Brisbane (Queensland)',         quote: '"Genuine coaching, real confidence builder."',           uni: 'Queensland University of Technology', hasOverlay: true,
  },
  {
    /* Card 4 — plain image, no overlay */
    img:  '/images/ielts/testimonial.png',
    city: '', quote: '', uni: '',                                                                                                                    hasOverlay: false,
  },
  {
    img:  '/images/ielts/testimonial (1).png',
    city: 'Adelaide (South Australia)',    quote: '"From Band 6 to Band 8 \u2014 Josh\'s methods work."',  uni: 'University of Adelaide',              hasOverlay: true,
  },
  {
    img:  '/images/ielts/testimonial (2).png',
    city: 'Melbourne (State of Victoria)', quote: '"Incredible support throughout my IELTS journey."',     uni: 'The University of Melbourne',         hasOverlay: true,
  },
  {
    img:  '/images/ielts/testimonial (3).png',
    city: 'Melbourne (State of Victoria)', quote: '"Best decision I made before coming to Australia."',    uni: 'The University of Melbourne',         hasOverlay: true,
  },
];

const CARD_W   = 290;
const CARD_GAP = 26;
const VISIBLE  = 4;

function IeltsPteCoachingPage() {
  const openConsultation = () =>
    window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  const [tIdx, setTIdx] = useState(0);
  const maxIdx = CARDS.length - VISIBLE;
  const prevT  = () => setTIdx(i => Math.max(0, i - 1));
  const nextT  = () => setTIdx(i => Math.min(maxIdx, i + 1));

  return (
    <div className="flex flex-col w-full bg-white">
      <Header />

      <div className="w-full max-w-[1440px] mx-auto">

        {/* ══════════════════════════════════════════════════════════
            HERO SECTION
            Figma: 258:1509 background 1440×982 | 258:1505 coach 644×882
            Content rect starts at y=167 (14px below frame top y=153)
            Text column: left=298  top=180  (384-86=298, 333-153=180)
            Coach image: left=796  top=100  (882-86=796, 253-153=100)
        ══════════════════════════════════════════════════════════ */}
        <section className="relative w-full overflow-hidden" style={{ height: 982 }}>

          {/* Background building photo */}
          <img
            src={HERO_BG}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
          />

          {/* Coach character — Figma crop: h=119.22% l=0 t=-0.03% w=108.85% */}
          <div
            className="absolute overflow-hidden pointer-events-none"
            style={{ left: 796, top: 100, width: 644, height: 882 }}
          >
            <img
              alt=""
              className="absolute max-w-none"
              style={{ height: '119.22%', left: '0', top: '-0.03%', width: '108.85%' }}
              src={imgCoach}
            />
          </div>

          {/* ── Text column ── */}
          <div
            className="absolute flex flex-col items-start"
            style={{ left: 298, top: 180, zIndex: 5 }}
          >
            {/* Label: Poppins Medium 28px #00352B underline tracking-[-0.56px] lh=21px */}
            <p
              className="font-poppins font-medium text-primary underline decoration-solid tracking-[-0.56px]"
              style={{ fontSize: 28, lineHeight: '21px', marginBottom: 61 }}
            >
              IELTS &amp; PTE Training
            </p>

            {/* Heading: Poppins SemiBold Italic 75px #FF3300 lh=1.05 */}
            <p
              className="font-poppins font-semibold italic text-accent"
              style={{ fontSize: 75, lineHeight: '1.05', margin: '0 0 4px 0' }}
            >
              Free IELTS &amp;
            </p>
            <p
              className="font-poppins font-semibold italic text-accent"
              style={{ fontSize: 75, lineHeight: '1.05', margin: '0 0 38px 0' }}
            >
              PTE Training
            </p>

            {/* Sub-heading: Poppins SemiBold Italic 35px */}
            <p
              className="font-poppins font-semibold italic text-primary"
              style={{ fontSize: 35, lineHeight: '1.286', letterSpacing: '-0.02em', margin: '0 0 28px 0' }}
            >
              By a Native{' '}
              <span className="text-accent">Australian Coach</span>
            </p>

            {/* CTA Badge: Poppins Medium 14px cream on accent, rounded-[16px] */}
            <button
              type="button"
              onClick={openConsultation}
              className="inline-flex items-center justify-center px-[12px] py-[4px] bg-accent rounded-[16px] border-0 cursor-pointer"
            >
              <span
                className="font-poppins font-medium text-cream text-center leading-[20px]"
                style={{ fontSize: 14 }}
              >
                Get Free Guidance from Esante
              </span>
            </button>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            MEET JOSHUA SECTION
            Figma: photo 259:1501 at left=84 top=1118 (504×570)
            Title 258:1521 at left=627 | Gap photo→text = 39px
            Bio 259:1504 | Bullets 259:1506
            mt = 1118 − 968 = 150px (968 = hero bottom from white-rect top)
        ══════════════════════════════════════════════════════════ */}
        <section
          className="flex items-start gap-[39px] mt-[150px] mb-[80px]"
          style={{ marginLeft: 84 }}
        >
          {/* Josh photo — 259:1501 504×570, rounded-20, crop h=207.24% l=-58.12% t=-5% w=219.29% */}
          <div
            className="relative shrink-0 overflow-hidden"
            style={{ width: 504, height: 570, borderRadius: 20 }}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt="Joshua Michael William G."
                className="absolute max-w-none"
                style={{ height: '207.24%', left: '-58.12%', top: '-5%', width: '219.29%' }}
                src={imgJosh}
              />
            </div>
            {/* Play-button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer">
              <div
                className="flex items-center justify-center rounded-full bg-white/90"
                style={{ width: 72, height: 72 }}
              >
                <svg className="ml-1" width="28" height="28" viewBox="0 0 24 24" fill="#222" aria-hidden>
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="flex flex-1 flex-col items-start">

            {/* Title — 258:1521: "Meet <bold-italic-red>Joshua...</red>" 43px / "Your..." 29px */}
            <p
              className="font-poppins font-normal text-black mb-0"
              style={{ fontSize: 43, lineHeight: '1.62' }}
            >
              {'Meet '}
              <span className="font-bold italic text-accent">Joshua Michael William G.</span>
            </p>
            <p
              className="font-poppins font-normal text-black mb-[20px]"
              style={{ fontSize: 29, lineHeight: '1.62' }}
            >
              Your Communication &amp; IELTS Coach 🇦🇺
            </p>

            {/* Bio — 259:1504: 23px / leading-[32px] / tracking-[-0.15px] */}
            <div
              className="font-poppins font-normal text-black"
              style={{ fontSize: 23, lineHeight: '32px', letterSpacing: '-0.15px' }}
            >
              <p className="mb-0">
                {'Josh is a '}
                <span className="font-semibold text-accent">
                  CELTA &amp; TEFL-certified English communication coach
                </span>
                {' with over '}
                <span className="font-semibold text-accent">5+ years of teaching experience</span>
                {', working with students from all over the world.'}
              </p>
              <p className="mb-0" style={{ lineHeight: '32px' }}>&nbsp;</p>
              <p className="mb-[16px]">
                {'He is the founder of '}
                <span className="font-semibold text-accent">Communication Mastery</span>
                {', a global learning community with '}
                <span className="font-semibold text-accent">1,700+ members</span>
                {', where he helps learners:'}
              </p>
            </div>

            {/* Bullet list — 259:1506: 23px list-disc ms-[34.5px] */}
            <ul
              className="font-poppins font-normal text-black list-disc list-outside"
              style={{ fontSize: 23, letterSpacing: '-0.15px', lineHeight: '42px', paddingLeft: '34.5px' }}
            >
              <li>Speak English fluently and naturally</li>
              <li>Improve IELTS &amp; PTE speaking performance</li>
              <li>Build confidence for interviews and real conversations</li>
              <li>Communicate clearly in professional and social settings</li>
            </ul>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            TESTIMONIAL CAROUSEL
            Figma: 259:1529  1240×400  left=84  4 visible cards 290×400 gap=26
            Card: bg image | top row (play 35×35 + city label) | gradient bottom 130px
        ══════════════════════════════════════════════════════════ */}
        <section className="relative mb-[80px]" style={{ marginLeft: 84 }}>

          {/* Left nav arrow */}
          <button
            type="button"
            onClick={prevT}
            disabled={tIdx === 0}
            className="absolute -left-[56px] top-1/2 -translate-y-1/2 z-10 disabled:opacity-25 transition-opacity cursor-pointer"
            aria-label="Previous testimonials"
          >
            <svg width="34" height="44" viewBox="0 0 34 44" fill="none" aria-hidden>
              <polygon points="34,0 34,44 0,22" fill="#FFFFFF" />
            </svg>
          </button>

          {/* Sliding track — exactly 4 cards wide */}
          <div style={{ overflow: 'hidden', width: CARD_W * VISIBLE + CARD_GAP * (VISIBLE - 1) }}>
            <div
              className="flex"
              style={{
                gap: CARD_GAP,
                transform: `translateX(-${tIdx * (CARD_W + CARD_GAP)}px)`,
                transition: 'transform 0.4s ease',
              }}
            >
              {CARDS.map((c, i) => (
                <div
                  key={i}
                  className="relative shrink-0 overflow-hidden"
                  style={{ width: CARD_W, height: 400, borderRadius: 15 }}
                >
                  {/* Card background */}
                  <img
                    src={c.img}
                    alt={c.city}
                    className="absolute inset-0 w-full h-full object-cover rounded-[15px] pointer-events-none"
                  />

                  {c.hasOverlay ? (
                    /* Cards 1–3: city label top-right only */
                    <div className="absolute top-[10px] right-[10px] z-10 bg-black rounded-[5px] p-[5px]">
                      <p className="font-poppins font-normal text-white text-[12px] leading-[1.2] tracking-[-0.15px]">
                        {c.city}
                      </p>
                    </div>
                  ) : (
                    /* Card 4: centered white play button */
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="flex items-center justify-center rounded-full bg-white" style={{ width: 56, height: 56 }}>
                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" aria-hidden>
                          <path d="M2 2L18 11L2 20V2Z" fill="black" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right nav arrow */}
          <button
            type="button"
            onClick={nextT}
            disabled={tIdx >= maxIdx}
            className="absolute -right-[56px] top-1/2 -translate-y-1/2 z-10 disabled:opacity-25 transition-opacity cursor-pointer"
            aria-label="Next testimonials"
          >
            <svg width="34" height="44" viewBox="0 0 34 44" fill="none" aria-hidden>
              <polygon points="0,0 0,44 34,22" fill="rgba(255,255,255,0.64)" />
            </svg>
          </button>
        </section>

        {/* ══════════════════════════════════════════════════════════
            QUOTE BLOCK
            Figma: 259:1594  1232×141  left=92  24px SemiBold leading-[32px]
        ══════════════════════════════════════════════════════════ */}
        <p
          className="font-poppins font-semibold text-black mb-[36px]"
          style={{
            fontSize: 24,
            lineHeight: '32px',
            letterSpacing: '-0.15px',
            marginLeft: 92,
            marginRight: 123,
          }}
        >
          {'At '}
          <span className="italic">Esante</span>
          {', '}
          <span className="text-accent">Josh </span>
          {'plays a critical role \u2014 not just in helping students '}
          <span className="text-accent">achieve their target IELTS/PTE scores, </span>
          {'but in preparing them for '}
          <span className="text-accent">real Australian life.</span>
        </p>

        {/* ══════════════════════════════════════════════════════════
            WHY OUR COACHING IS UNMATCHED
            Figma: 257:1568 heading 322×216 left=92 | 259:1597 bullets 883×167 left=432
            Heading: "Why Our" (Regular) / "Coaching is" (SemiBold Italic #f30) /
                     "Unmatched" (SemiBold Italic #f30) + ":" (Regular)  — 45px
            Bullets: 22px Regular leading-[1.2 / 1.36 / 1.35]
        ══════════════════════════════════════════════════════════ */}
        <section
          className="flex items-start mb-[66px]"
          style={{ marginLeft: 92, marginRight: 126 }}
        >
          {/* Heading column */}
          <div
            className="font-poppins shrink-0"
            style={{ fontSize: 45, letterSpacing: '-0.15px', width: 322, color: '#00352B' }}
          >
            <p className="font-normal mb-0" style={{ lineHeight: '1.2' }}>Why Our</p>
            <p className="font-semibold italic text-accent mb-0" style={{ lineHeight: '1.2' }}>Coaching is</p>
            <p className="mb-0" style={{ lineHeight: '1.2' }}>
              <span className="font-semibold italic text-accent">Unmatched</span>
              <span className="font-normal">:</span>
            </p>
          </div>

          {/* Bullets column */}
          <div
            className="font-poppins font-normal text-black flex flex-col"
            style={{ fontSize: 22, letterSpacing: '-0.15px' }}
          >
            <p className="mb-[13px]" style={{ lineHeight: '1.2' }}>
              ✅ $0 Cost: Professional coaching usually costs $50/hour. You get it FREE.
            </p>
            <p className="mb-[8px]" style={{ lineHeight: '1.36' }}>
              ✅ Real-Time Feedback: Live sessions focusing on pronunciation, vocabulary,<br />
              and &quot;Band 8&quot; sentence structures.
            </p>
            <p style={{ lineHeight: '1.35' }}>
              ✅ Beyond the Test: Josh prepares you for life in Australia\u2014teaching you the slang,<br />
              etiquette, and confidence needed to ace job interviews after you land.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            CLOSING BANNER  (Group 82 — 257:1536)
            1259×367 group: image at left=106, heading overlay centred at top=59
            Sub-text + Book Free Call button inside image
            Same structure as PostArrivalSupportPage closing section
        ══════════════════════════════════════════════════════════ */}
        <section className="w-full flex justify-center mb-[69px]">
          <div className="relative" style={{ width: 1259, height: 367 }}>

            {/* Background image container — left=106 rounded-[37px] */}
            <div
              className="absolute rounded-[37px] overflow-hidden"
              style={{ left: 106, top: 0, width: 1047, height: 367 }}
            >
              <img
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                src={imgBanner}
              />

              {/* Sub-text: centred at x=523 within image, top=214 */}
              <p
                className="absolute font-poppins text-[23px] text-center capitalize tracking-[-0.15px] whitespace-pre-wrap"
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  left: 523 - 354,   /* 523 – 708/2 = 169 */
                  top: 214,
                  width: 708,
                  lineHeight: 'normal',
                }}
              >
                Let our experts in Brisbane guide you every step of the way.
              </p>

              {/* Book Free Call button: left=433 top=283 181×36 */}
              <a
                href="#contact"
                className="absolute bg-white flex items-center justify-center rounded-[16px] overflow-hidden"
                style={{ left: 433, top: 283, width: 181, height: 36 }}
              >
                <span
                  className="font-normal text-[19px] text-primary tracking-[-0.15px]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Book Free Call
                </span>
              </a>
            </div>

            {/* Heading overlay — spans full 1259 px width, top=59 */}
            <div
              className="absolute w-full flex flex-col items-center font-poppins text-center text-white tracking-[-0.96px]"
              style={{ top: 59 }}
            >
              <p className="text-[42px] font-normal mb-0" style={{ lineHeight: 1 }}>
                Think of
              </p>
              <p className="text-[48px] font-semibold italic mb-0" style={{ lineHeight: 1 }}>
                Esante as your Australia-study partner
              </p>
              <p className="text-[42px] font-normal mb-0" style={{ lineHeight: 1 }}>
                not just an agent.
              </p>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}

export default IeltsPteCoachingPage;
