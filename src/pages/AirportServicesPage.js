import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

// Figma assets (valid for 7 days from generation)
const HERO_BG     = 'https://www.figma.com/api/mcp/asset/a5747409-c0b2-41cb-97c0-b97df834f0e8';
const AIRPLANE    = 'https://www.figma.com/api/mcp/asset/16353a13-82cf-436b-9018-f9daafcca8ba';
const WHAT_WE_DO_IMG = 'https://www.figma.com/api/mcp/asset/48cd3f5a-3bb7-4178-b5b3-3621d7e40365';
const CTA_BG      = 'https://www.figma.com/api/mcp/asset/af4953f8-9768-4c80-9808-4be665a20315';

function AirportServicesPage() {
  return (
    <div className="flex flex-col items-start w-full bg-white">
      <Header />

      <div className="flex flex-col items-center self-stretch w-full max-w-[1440px] mx-auto bg-white pt-[94px]">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        {/* Outer wrapper is 673 px; airplane absolute at bottom-[-80px] overflows
            80 px. mb-[104px] = airplane overflow (80) + gap to body copy (24).   */}
        <div className="relative w-full mb-[104px]">

          {/* Hero photo container — exact Figma size */}
          <div className="relative w-full h-[673px] overflow-hidden">

            {/* Background image: Figma positions it left-anchored, shifted up 32.35 %
                w-[131.18%] h-[186.73%] left-0 top-[-32.35%]                        */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                src={HERO_BG}
                style={{
                  position: 'absolute',
                  width: '131.18%',
                  height: '186.73%',
                  left: 0,
                  top: '-32.35%',
                  maxWidth: 'none',
                }}
              />
            </div>

            {/* ── Text block ───────────────────────────────────────────────────
                Label   (300:1740): y = 437-261 = 176 px from hero top
                Heading (300:1739): y = 454-261 = 193 px — visually the first
                  paragraph ("Welcome Home") renders at the very top of the node
                  (blank spacer has near-zero height in Figma's engine).
                  Net: label + heading are tight-stacked with ~4 px natural gap.
                Badge   (300:1741): y = 634-261 = 373 px — independent absolute. */}
            {/*
              Figma absolute positions (from hero top):
                Label         y = 176 px  (height 21 px  → bottom 197 px)
                Heading node  y = 193 px  (4 px before label bottom — tight overlap)
                Badge         y = 373 px  (independent absolute)

              gap-[16px] between flex children gives:
              label → "Welcome Home"             ≈  16 px visible gap
              "Welcome Home" → "Your Personal…"  ≈ 16 px visible gap
            */}
            <div
              className="absolute flex flex-col items-start gap-[16px]"
              style={{ top: 176, left: 96 }}
            >
              {/* Eyebrow label */}
              <p
                className="font-poppins text-[28px] font-medium tracking-[-0.56px] text-[#00352B] underline decoration-solid"
                style={{ lineHeight: '21px', marginBottom: 0 }}
              >
                Free Airport Pickup in Australia
              </p>

              {/* "Welcome Home" */}
              <p
                className="font-poppins text-[56px] font-semibold italic text-accent"
                style={{ lineHeight: '1.1', margin: 0 }}
              >
                Welcome Home
              </p>

              {/* "Your Personal Chauffeur Awaits." */}
              <p
                className="font-poppins text-[48px] font-normal text-primary"
                style={{ lineHeight: '1.1', margin: 0 }}
              >
                Your Personal Chauffeur Awaits.
              </p>

              {/* ── CTA Badge ── inside flex column, shares the same gap-[16px] */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-[12px] py-[4px] bg-accent rounded-[16px] cursor-pointer"
              >
                <span className="font-poppins text-[14px] font-medium leading-[20px] text-cream text-center">
                  Get Free Guidance from Esante
                </span>
              </a>
            </div>
          </div>

          {/* ── Airplane ─────────────────────────────────────────────────────
              Container: 669×314px, bottom-[-80px] left-[4px] (Figma: x=90-86=4px
              from content left, extends 80px below hero).
              Img crop: w-[235.94%] h-[335.56%] left-[-65.54%] top-[-101.68%]     */}
          <div
            className="absolute pointer-events-none overflow-hidden"
            style={{ bottom: -80, left: 4, width: 669, height: 314 }}
          >
            <img
              alt=""
              src={AIRPLANE}
              style={{
                position: 'absolute',
                width: '235.94%',
                height: '335.56%',
                left: '-65.54%',
                top: '-101.68%',
                maxWidth: 'none',
              }}
            />
          </div>
        </div>

        {/* ── BODY COPY ────────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center w-full max-w-[1007px] mx-auto px-6 mb-[40px] gap-0">
          {/* Red italic lead */}
          <p className="font-poppins text-[30px] font-semibold italic leading-[1.504] text-accent text-center tracking-[-0.15px]">
            Zero Stress. Zero Confusion. We greet you at the gate and drive you safely to your doorstep.
          </p>

          {/* Body paragraph */}
          <p className="font-poppins text-[23px] font-normal leading-[36px] text-black text-center tracking-[-0.15px] mt-[36px]">
            Landing in a new country can feel overwhelming — new airport, new city, new systems.{' '}
            That's why Esante offers FREE airport pickup support across Australia, so you never feel alone on your first day.
          </p>

          {/* Bold italic closer */}
          <p className="font-poppins text-[23px] font-semibold italic leading-[36px] text-black text-center tracking-[-0.15px]">
            From the moment you land, we've got you covered.
          </p>
        </div>

        {/* ── WHAT WE DO CARD ──────────────────────────────────────────────── */}
        {/* Figma: card x=137 (51 px from content left), right edge = 137+1325=1462,
            content right = 86+1440=1526 → right margin = 64 px                */}
        <div
          className="flex flex-row items-center justify-between bg-accent rounded-[39px] mb-[84px]"
          style={{ marginLeft: 51, marginRight: 64, width: 'calc(100% - 115px)' }}
        >
          {/* Left: text content */}
          <div className="flex flex-col items-start pl-[82px] pt-[67px] pb-[67px] gap-[12px]">

            {/* "What We Do:" — regular + medium-italic blend */}
            <p className="font-poppins text-[60px] font-normal leading-[1.2] text-white tracking-[-0.15px]">
              What{' '}
              <span className="font-medium italic">We Do:</span>
            </p>

            {/* Bullet list */}
            <p className="font-poppins text-[24px] font-normal leading-[1.2] text-white tracking-[-0.15px]">
              ✅&nbsp; Pick you up directly from the airport
            </p>
            <p className="font-poppins text-[24px] font-normal leading-[1.36] text-white tracking-[-0.15px]">
              ✅&nbsp; Help with luggage and first-day guidance
            </p>
            <p className="font-poppins text-[24px] font-normal leading-[1.35] text-white tracking-[-0.15px] max-w-[464px]">
              ✅ Drop you safely to your temporary or permanent accommodation
            </p>
            <p className="font-poppins text-[24px] font-normal leading-[1.35] text-white tracking-[-0.15px]">
              ✅ Ensure a stress-free, comfortable arrival
            </p>

            {/* Bold tagline */}
            <p className="font-poppins text-[26px] font-bold leading-[1.35] text-white tracking-[-0.15px] mt-[4px]">
              No taxis. No confusion. No overpaying.
            </p>
          </div>

          {/* Right: photo — 22 px top/bottom, 47 px right margin */}
          <div className="w-[570px] h-[414px] my-[22px] mr-[47px] rounded-[37px] overflow-hidden shrink-0">
            <img
              src={WHAT_WE_DO_IMG}
              alt="Airport pickup service"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ── CLOSING QUOTE ────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center mb-[58px] px-4">
          <p className="font-poppins text-[45px] font-normal leading-[1.2] text-primary text-center tracking-[-0.15px]">
            This is not just a pickup
          </p>
          <p className="font-poppins text-[45px] font-semibold italic leading-[1.2] text-accent text-center tracking-[-0.15px]">
            it's your first step into Australia with confidence.
          </p>
        </div>

        {/* ── CTA BANNER (Group 98) ─────────────────────────────────────────
            Outer group: 1259 px wide. Image (Frame 94): 1047 px wide, centered
            (106 px each side). All text overlays the image.
            Heading starts 59 px from top; subtext at 214 px; button at 283 px. */}
        <div className="relative w-full max-w-[1259px] mx-auto h-[367px] mb-[84px]">

          {/* Orange background image — centered, 1047 × 367, rounded corners */}
          <div className="absolute top-0 left-[106px] w-[1047px] h-[367px] rounded-[37px] overflow-hidden">
            <img
              src={CTA_BG}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Heading overlay — full 1259 px width, starts at top-[59px] */}
          <div className="absolute top-[59px] left-0 w-full flex flex-col items-center text-center px-4">
            <p className="font-poppins text-[42px] font-normal leading-[1.15] text-white tracking-[-0.96px]">
              Think of
            </p>
            <p className="font-poppins text-[48px] font-semibold italic leading-[1.15] text-white tracking-[-0.96px]">
              Esante as your Australia-study partner
            </p>
            <p className="font-poppins text-[42px] font-normal leading-[1.15] text-white tracking-[-0.96px]">
              not just an agent.
            </p>
          </div>

          {/* Subtext + button — positioned within image frame (top-[214px] / top-[283px]) */}
          <p
            className="absolute w-[708px] font-poppins text-[23px] font-normal leading-normal text-[rgba(255,255,255,0.9)] text-center capitalize tracking-[-0.15px]"
            style={{ top: 214, left: '50%', transform: 'translateX(-50%)' }}
          >
            Let our experts in Brisbane guide you every step of the way.
          </p>

          <a
            href="/#book-free-call"
            className="absolute flex items-center justify-center bg-white rounded-[16px] h-[36px] w-[181px] overflow-hidden"
            style={{ top: 283, left: '50%', transform: 'translateX(-50%)' }}
          >
            <span className="font-['Inter',sans-serif] text-[19px] font-normal leading-normal text-primary tracking-[-0.15px]">
              Book Free Call
            </span>
          </a>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default AirportServicesPage;
