import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import BookFreeCallBanner from '../components/Home-Page/BookFreeCallBanner';

// Each card has explicit x (left offset from center), y (vertical offset),
// rotate and scale — no overflow-busting pivot trick needed.
// x/y keep cards inside the viewport; rotate gives the fan tilt.
const CARD_W = 220;
const CARD_H = 330;

const CARDS = [
  {
    img: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/1jb651bq_expires_30_days.png',
    alt: 'Airport pickup',
    x: -420, y: 90, rotate: -36, z: 1, grayscale: true, opacity: 0.75, scale: 0.9,
  },
  {
    img: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/1jb651bq_expires_30_days.png',
    alt: 'Part-time job support',
    x: -210, y: 32, rotate: -18, z: 2, grayscale: true, opacity: 0.88, scale: 0.95,
  },
  {
    img: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/yma2akls_expires_30_days.png',
    alt: 'Accommodation',
    label: 'Accommodation',
    x: 0, y: 0, rotate: 0, z: 5, grayscale: false, opacity: 1, scale: 1.05,
  },
  {
    img: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/vl3js3xg_expires_30_days.png',
    alt: 'IELTS / PTE coaching',
    x: 210, y: 32, rotate: 18, z: 2, grayscale: true, opacity: 0.88, scale: 0.95,
  },
  {
    img: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/vl3js3xg_expires_30_days.png',
    alt: 'Post-arrival support',
    x: 420, y: 90, rotate: 36, z: 1, grayscale: true, opacity: 0.75, scale: 0.9,
  },
];

export default function AncillaryServicesPage() {
  const openConsultation = () => window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Header />

      <main className="flex flex-col w-full bg-white" style={{ overflow: 'visible' }}>
        <div className="flex flex-col items-center w-full pt-[150px] pb-16" style={{ overflow: 'visible' }}>

          {/* ── Hero Text ── */}
          <section className="flex flex-col items-center w-full max-w-[760px] mb-[60px]">
            <h1 className="font-poppins text-center self-stretch">
              <span className="block font-normal text-[48px] leading-[58px] tracking-[-0.96px] text-[#00352B] mb-2">
                Ancillary Services
              </span>
              <span className="block font-semibold italic text-[56px] leading-[62px] tracking-[-1.12px] text-[#F30]">
                That Actually Matter
              </span>
            </h1>

            <p className="font-poppins font-normal text-[20px] leading-[30px] text-[#000] text-center w-full max-w-[867px] mt-[20px] mb-[6px]">
              Studying in Australia isn't just about getting an offer letter — it's about surviving,
              settling, earning, and succeeding once you land.
            </p>
            <p className="font-poppins font-normal text-[20px] leading-[30px] text-[#000] text-center w-full max-w-[867px] mb-[24px]">
              That's where Esante 's end-to-end ancillary services come in.
            </p>

            <button
              type="button"
              onClick={openConsultation}
              className="inline-flex py-1 px-3 justify-center items-center rounded-[16px] border-0 cursor-pointer"
              style={{ background: '#F30' }}
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

          {/* ── Fan Cards ── */}
          <section
            className="relative w-full flex justify-center"
            style={{ height: CARD_H + 100, overflow: 'visible' }}
          >
            {CARDS.map((card, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  width: CARD_W,
                  height: CARD_H,
                  left: `calc(50% + ${card.x}px - ${CARD_W / 2}px)`,
                  top: card.y,
                  background: 'none',
                  transform: `rotate(${card.rotate}deg) scale(${card.scale ?? 1})`,
                  transformOrigin: 'center bottom',
                  zIndex: card.z,
                  filter: card.grayscale ? 'grayscale(100%)' : 'none',
                  opacity: card.opacity,
                  borderRadius: 0,
                  overflow: 'visible',
                }}
              >
                <img
                  src={card.img}
                  alt={card.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    borderRadius: 22,
                    boxShadow: card.grayscale
                      ? '0 8px 40px rgba(0,0,0,0.20)'
                      : '0 24px 72px rgba(0,0,0,0.28)',
                  }}
                />
                {/* Bottom gradient for depth */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 22,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.30) 0%, transparent 55%)',
                    pointerEvents: 'none',
                  }}
                />
                {card.label && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 18,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'rgba(255,255,255,0.96)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: 999,
                      padding: '8px 24px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                      border: '1px solid rgba(0,0,0,0.07)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600,
                        fontSize: 14,
                        color: '#111',
                        letterSpacing: '-0.2px',
                      }}
                    >
                      {card.label}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </section>

          {/* ── Services Description Text ── */}
          <section className="flex flex-col items-center w-full mt-[32px] mb-[80px]">
            <p className="font-poppins font-semibold italic text-[26px] leading-[41px] tracking-[-0.52px] text-[#F30] text-center max-w-[850px]">
              From SOP &amp; GS-compliant documentation, scholarship optimisation, free IELTS &amp;
              communication training, accommodation support, part-time job assistance, to complete
              post-arrival hand-holding, we cover everything students usually struggle with —
              at no extra cost.
            </p>
          </section>

          {/* ── Detailed Description ── */}
          <section className="flex flex-col items-center w-full mb-[32px]">
            <p className="font-poppins font-normal text-[26px] leading-[41px] tracking-[-0.52px] text-[#000] text-center max-w-[850px]">
              Unlike traditional consultancies that stop at offer letters,{' '}
              Esante works as your
              on-ground support system in Australia, ensuring you save money, avoid mistakes,
              and build a future-ready pathway aligned with Australia's education and migration
              framework.
            </p>
          </section>

        </div>
      </main>

      <BookFreeCallBanner />
      <Footer />
    </div>
  );
}
