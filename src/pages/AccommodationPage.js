import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import ConsultationPopup from '../components/Reusable/ConsultationPopup';

const MELBOURNE_IMG =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/4o8acy0c_expires_30_days.png';
const WHY_IMG =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/eet9h6uz_expires_30_days.png';
const STORY_IMG =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/7m4gxaj3_expires_30_days.png';

export default function AccommodationPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Header />

      <main className="flex flex-col w-full max-w-[1440px] mx-auto bg-[#FFFDF6]">
        <div className="flex flex-col items-center w-full pt-[130px] pb-16 px-[100px]">
          {/* Hero: text block — clear hierarchy, Figma-aligned spacing */}
          <section className="flex flex-col items-center w-full max-w-[1192px] mb-[64px] gap-0">
            {/* Page label — small, subtle */}
            <span className="font-poppins font-medium text-[22px] leading-[1.4] tracking-[-0.02em] text-[#00352B] mb-[16px]">
              Accommodation
            </span>
            {/* Main heading — dominant */}
            <h1 className="font-poppins font-semibold text-[48px] leading-[1.25] tracking-[-0.02em] text-center text-[#00352B] max-w-[800px] mb-[12px]">
              Student Accommodation in Australia
            </h1>
            {/* Supporting line — secondary */}
            <p className="font-poppins font-semibold text-[48px] leading-[1.25] tracking-[-0.02em] text-center text-[#00352B] max-w-[800px] mb-[32px]">
              Sorted With Esante.
            </p>
            {/* CTA — clearly separated */}
            <button
              type="button"
              className="flex items-center justify-center min-h-[44px] px-[24px] bg-[#FF3300] rounded-[16px] border-0 cursor-pointer font-poppins font-medium text-[14px] leading-[1.43] tracking-[-0.01em] text-[#FFFBE9] transition-opacity hover:opacity-90"
              onClick={() => setConsultationOpen(true)}
            >
              Get Free Guidance from Esante
            </button>
          </section>

          {/* Section: Hero - reference image match: layered absolute, fixed card sizes */}
          <section className="relative w-[1383px] max-w-[100%] h-[520px] mx-auto mb-[105px] rounded-[49px] overflow-hidden">
            {/* Background - sharp contrast, no blur */}
            <div
              className="absolute inset-0 rounded-[49px] bg-[#d3d3d3] bg-no-repeat bg-[url('https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/n2i4a7pn_expires_30_days.png')] [background-size:100%_248.977%] [background-position:0_-740.061px] contrast-125"
              aria-hidden
            />
            {/* Green top layer */}
            <div className="absolute inset-0 rounded-[49px] bg-[#00352B]/30 pointer-events-none" aria-hidden />

            {/* Left arrow - on background */}
            <button
              type="button"
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
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 border border-white/50 cursor-pointer transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Centered group: orange box + room image */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[812px] h-[420px]">
              {/* Orange card */}
              <div className="absolute left-0 top-0 w-[812px] h-[420px] flex flex-col bg-[#FF3300] rounded-[41px] pt-[44px] pl-[37px] pr-[280px] pb-[44px] box-border overflow-hidden">
                <p className="font-poppins font-normal text-[40px] leading-[1.5] tracking-[-0.00375em] text-white mb-2">
                  Dreaming for
                </p>
                <h2 className="font-poppins font-bold text-[64px] leading-[1.5] tracking-[-0.00234em] text-white mb-[20px]">
                  Melbourne
                </h2>
                <p className="font-poppins font-normal text-[28px] leading-[1.5] tracking-[-0.00536em] text-white mb-2">
                  Starting at Just
                </p>
                <div className="w-[207px] h-[53px] flex items-center justify-center bg-[#00352B] rounded-[15px] mb-[18px] shrink-0">
                  <span className="font-poppins font-normal text-[29px] leading-[1.5] tracking-[-0.00517em] text-white">
                    AU$220/week
                  </span>
                </div>
                <p className="font-poppins font-normal text-[15px] leading-[0.87] tracking-[-0.01em] text-white max-w-[326px] mb-4 whitespace-pre-line">
                  Fully-equipped gym{'\n\n'}Social lounges & study zones{'\n\n'}24/7 secure
                  access{'\n\n'}Minutes from campus & transport
                </p>
                <button
                  type="button"
                  className="flex items-center justify-center h-9 px-3 w-fit min-w-0 bg-white rounded-[16px] border-0 cursor-pointer font-poppins font-medium text-[14px] text-[#00352B] transition-opacity hover:opacity-95 shrink-0"
                  onClick={() => setConsultationOpen(true)}
                >
                  Get Free Guidance from Esante
                </button>
              </div>

              {/* Room image card - overlaps orange */}
              <img
                src={MELBOURNE_IMG}
                alt="Melbourne accommodation"
                className="absolute left-[432px] top-1/2 -translate-y-1/2 w-[380px] h-[395px] object-cover object-center rounded-[41px] shadow-[10px_10px_6px_rgba(0,0,0,0.3)] z-[1]"
              />
            </div>
            <span className="absolute top-6 right-6 z-10 font-poppins font-normal text-[32px] leading-[1.5] tracking-[-0.00469em] text-white">
              01/04
            </span>
          </section>

          {/* Section: Long copy */}
          <section className="flex flex-col items-center w-full max-w-[1117px] mx-auto mb-[100px]">
            <p className="font-poppins font-normal text-[23px] leading-[1.5] tracking-[-0.00652em] text-black text-center whitespace-pre-line">
              Finding cheap student accommodation in Australia is one of the biggest challenges for
              international students — inflated prices, unreliable listings, and hidden fees make it
              harder than it should be.{'\n\n'}At Esante, we do it differently. We don't list
              properties.{'\n\n'}We partner, negotiate, verify, and support — like a local Australian
              team.{'\n\n'}We have direct B2B partnerships with multiple trusted accommodation
              providers across Australia, which allows us to access exclusive student rates that are
              lower than standard market prices. These benefits are passed directly to our students,
              with no extra charges.
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
                <ul className="flex flex-col gap-[18px] list-none p-0 m-0">
                  <li className="font-poppins font-normal text-[22px] leading-[1.2] tracking-[-0.00682em] text-black">
                    ✅ B2B partner rates with verified accommodation providers
                  </li>
                  <li className="font-poppins font-normal text-[22px] leading-[1.2] tracking-[-0.00682em] text-black">
                    ✅ Lower weekly rents compared to public listings
                  </li>
                  <li className="font-poppins font-normal text-[22px] leading-[1.2] tracking-[-0.00682em] text-black">
                    ✅ Private rooms, shared apartments & student residences
                  </li>
                  <li className="font-poppins font-normal text-[22px] leading-[1.2] tracking-[-0.00682em] text-black">
                    ✅ Support before arrival and after moving in
                  </li>
                  <li className="font-poppins font-normal text-[21px] leading-[1.2] tracking-[-0.007em] text-black">
                    ✅ Lease & rental guidance by an Australia-based team
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Real Student Story */}
          <section className="flex flex-col w-full max-w-[1230px] mx-auto mb-[65px]">
            <div className="flex flex-row items-center w-full min-h-[500px] py-[51px] px-[57px] bg-[#00352B] rounded-[51px] border-2 border-[#FF3300] gap-[40px] box-border">
              <button
                type="button"
                className="w-[30px] h-[46px] shrink-0 flex flex-col items-center justify-center cursor-pointer border-0 bg-transparent"
                aria-label="Previous"
              >
                <span className="w-[30px] h-[23px] border-[3px] border-white rounded block" />
                <span className="w-[30px] h-[23px] border-[3px] border-white rounded block mt-0.5" />
              </button>
              <div className="flex flex-col items-start flex-1 min-w-0 max-w-[465px]">
                <h3 className="font-poppins font-normal text-[45px] leading-[1.2] tracking-[-0.00333em] text-[#FF3300] mb-6">
                  Real Student Story: Khushi in Brisbane 🇦🇺
                </h3>
                <p className="font-poppins font-normal text-[23px] leading-[1.39] tracking-[-0.0065em] text-white whitespace-pre-line">
                  Through Esante's partner network, Khushi Ajmani secured a single private room with
                  an attached washroom in Brisbane for just AUD 190 per week — a deal that's hard to
                  find independently.{'\n\n'}Because her accommodation was sorted early and at the
                  right price, she was able to focus on her studies and part-time work without
                  financial stress.
                </p>
              </div>
              <img
                src={STORY_IMG}
                alt="Khushi student story"
                className="w-[418px] h-[502px] shrink-0 object-cover rounded-[41px]"
              />
              <button
                type="button"
                className="w-[30px] h-[46px] shrink-0 flex flex-col items-center justify-center cursor-pointer border-0 bg-transparent"
                aria-label="Next"
              >
                <span className="w-[30px] h-[23px] border-[3px] border-white rounded block" />
                <span className="w-[30px] h-[23px] border-[3px] border-white rounded block mt-0.5" />
              </button>
            </div>
          </section>

          {/* Section: Think of Esante banner */}
          <section className="flex flex-col w-full max-w-[1259px] mx-auto mb-0">
            <div className="flex flex-col items-center justify-center w-full min-h-[367px] py-[59px] px-[106px] rounded-[37px] bg-cover bg-center bg-no-repeat bg-[url('https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/d2p06gj0_expires_30_days.png')]">
              <h2 className="font-poppins font-semibold text-[48px] leading-[1.08] tracking-[-0.02em] text-center text-[#00352B] mb-12 whitespace-pre-line max-w-[800px]">
                Think of{'\n'}Esante as your Australia-study partner{'\n'}not just an agent.
              </h2>
              <div className="flex flex-col items-center bg-white/95 backdrop-blur-sm py-6 px-16 rounded-[37px]">
                <p className="font-poppins font-normal text-[23px] leading-[1.5] tracking-[-0.0065em] text-[#00352B] text-center max-w-[708px] mb-4">
                  Let our experts in Brisbane guide you every step of the way.
                </p>
                <button
                  type="button"
                  className="flex items-center justify-center h-10 px-[63px] bg-white rounded-[16px] border-0 cursor-pointer font-poppins font-normal text-[19px] leading-[1.21] text-[#00352B] transition-opacity hover:opacity-90"
                  onClick={() => setConsultationOpen(true)}
                >
                  Book Free Call
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      <ConsultationPopup
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
