import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import EsanteBanner from '../components/Reusable/EsanteBanner';

// ─── Figma images (section 239:1666 "Ancillary services") ───────────────────
// Center card  – node 239:1847 / layout_GY3D9A: 309×407, borderRadius 33px
// Side cards   – nodes 239:1853, 239:1858, 239:1840, 239:1850, borderRadius 31px
// Fan geometry: all cards are ~309×407 natural size; bounding boxes in Figma
// are larger for outer cards because they are rotated (36° → BB ≈ 467×505).

// Natural card dimensions
const CARD_W = 282;
const CARD_H = 372;

// Card data — positions scaled proportionally from Figma fan layout
const CARDS = [
  // Left outer
  {
    img: '/images/anc-img-64.png',
    alt: 'Services support',
    x: -380, y: 71, rotate: -36, z: 1, br: 28,
    grayscale: true, opacity: 0.70,
  },
  // Left inner
  {
    img: '/images/anc-rect-22.png',
    alt: 'Accommodation support',
    x: -195, y: 26, rotate: -18, z: 2, br: 28,
    grayscale: true, opacity: 0.85,
  },
  // Center
  {
    img: '/images/anc-img-62.png',
    alt: 'Accommodation',
    label: 'Accommodation',
    x: 0, y: 0, rotate: 0, z: 5, br: 29,
    grayscale: false, opacity: 1,
  },
  // Right inner
  {
    img: '/images/anc-img-63.png',
    alt: 'Part-time job support',
    x: 195, y: 26, rotate: 18, z: 2, br: 28,
    grayscale: true, opacity: 0.85,
  },
  // Right outer
  {
    img: '/images/anc-img-65.png',
    alt: 'Post-arrival hand-holding',
    x: 380, y: 71, rotate: 36, z: 1, br: 28,
    grayscale: true, opacity: 0.70,
  },
];

export default function AncillaryServicesPage() {
  const openConsultation = () => window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Header />

      <main className="flex flex-col w-full bg-white" style={{ overflow: 'visible' }}>
        <div className="flex flex-col items-center w-full pt-[150px] pb-16" style={{ overflow: 'visible' }}>

          {/* ── Heading and Badge ── layout_NN129N: column/center/gap-16/1240×108 ── */}
          <section
            className="flex flex-col items-center gap-[16px] mb-[32px]"
            style={{ width: 1240, maxWidth: '100%' }}
          >
            {/* style_8GUZMK: Poppins 600 / 48px / letterSpacing -2% / CENTER */}
            {/* fills: Primary Color (#00352B) — mixed text runs give line 2 its red/italic */}
            <h1 className="font-poppins text-center" style={{ lineHeight: 1 }}>
              <span
                className="block font-semibold text-[48px] text-[#00352B]"
                style={{ letterSpacing: '-0.96px', lineHeight: '54px' }}
              >
                Ancillary Services
              </span>
              <span
                className="block font-semibold italic text-[48px] text-[#FF3300]"
                style={{ letterSpacing: '-0.96px', lineHeight: '54px' }}
              >
                That Actually Matter
              </span>
            </h1>

            {/* Badge button – layout_MYW2I2: row/center/pad 4px 12px/hug
                fill_P7T27W #FF3300, borderRadius 16px
                style_CK69WR: Poppins 500 / 14px / 1.43em / CENTER
                fills: Light Background #FFFBE9 */}
            <button
              type="button"
              onClick={openConsultation}
              className="inline-flex justify-center items-center rounded-[16px] border-0 cursor-pointer"
              style={{ background: '#FF3300', padding: '4px 12px' }}
            >
              <span
                className="font-poppins text-center font-medium"
                style={{ color: '#FFFBE9', fontSize: 14, lineHeight: '1.43em' }}
              >
                Get Free Guidance from Esante
              </span>
            </button>
          </section>

          {/* ── Supporting text ── layout_PGLZJH: 867×190
              style_29U0JM: Poppins 400 / 20px / 1.5em / CENTER
              fills: fill_6ECEP5 #000000 ── */}
          <section
            className="flex flex-col items-center w-full mb-[48px]"
            style={{ maxWidth: 867 }}
          >
            <p
              className="font-poppins font-normal text-[20px] text-[#000000] text-center"
              style={{ lineHeight: '1.5em', maxWidth: 867 }}
            >
              Studying in Australia isn't just about getting an offer letter — it's about surviving,
              settling, earning, and succeeding once you land.
              <br /><br />
              That's where Esante's end-to-end ancillary services come in.
            </p>
          </section>

          {/* ── Fan Cards ── layout_678G42 center: 310×407 / layout_GY3D9A: 309×407 ── */}
          <section
            className="relative w-full flex justify-center"
            style={{ height: CARD_H + 84, overflow: 'visible' }}
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
                  transform: `rotate(${card.rotate}deg)`,
                  transformOrigin: 'center bottom',
                  zIndex: card.z,
                  filter: card.grayscale ? 'grayscale(100%)' : 'none',
                  opacity: card.opacity,
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
                    borderRadius: card.br,
                    boxShadow: card.grayscale
                      ? '0 8px 40px rgba(0,0,0,0.20)'
                      : '0 24px 72px rgba(0,0,0,0.30)',
                  }}
                />

                {/* Bottom gradient for label readability */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: card.br,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.40) 0%, transparent 55%)',
                    pointerEvents: 'none',
                  }}
                />

                {card.label && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      textAlign: 'center',
                      height: 46,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 500,
                        fontSize: 20,
                        lineHeight: 1,
                        color: '#FFFFFF',
                      }}
                    >
                      {card.label}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </section>

          {/* ── Description text ── layout_QPQ4K1: 850×489
              style_WDUKGC: Poppins 500 / 26px / 1.577em / CENTER / -2% letterSpacing
              fills: fill_6ECEP5 #000000
              Two paragraphs in one TEXT node (separated by \L\L in Figma) ── */}
          <section className="flex flex-col items-center w-full mt-[32px] mb-[40px]">
            {/* First paragraph — italic red (text-run override in Figma) */}
            <p
              className="font-poppins font-semibold italic text-[26px] text-[#FF3300] text-center"
              style={{ maxWidth: 850, lineHeight: '1.577em', letterSpacing: '-0.52px' }}
            >
              From SOP &amp; GS-compliant documentation, scholarship optimisation, free IELTS &amp;
              communication training, accommodation support, part-time job assistance, to complete
              post-arrival hand-holding, we cover everything students usually struggle with —
              at no extra cost.
            </p>
          </section>

          <section className="flex flex-col items-center w-full mb-[32px]">
            {/* Second paragraph — normal black */}
            <p
              className="font-poppins font-medium text-[26px] text-[#000000] text-center"
              style={{ maxWidth: 850, lineHeight: '1.577em', letterSpacing: '-0.52px' }}
            >
              Unlike traditional consultancies that stop at visa filing, Esante works as your
              on-ground support system in Australia, ensuring you save money, avoid mistakes,
              and build a future-ready pathway aligned with Australia's education and migration
              framework.
            </p>
          </section>

        </div>
      </main>

      <EsanteBanner />
      <Footer />
    </div>
  );
}
