import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

const IMG_BASE = 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ';

function PostArrivalSupportPage() {
  const openConsultation = () => window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <Header />

      <main className="flex flex-col w-full max-w-[1440px] mx-auto bg-white">
        {/* Hero section */}
        <div className="flex flex-col items-center w-full pt-[130px] md:pt-[174px] pb-[67px] px-6 md:px-[100px]">
          <span className="font-poppins font-medium text-[28px] text-[#00352B] mb-[38px]">
            Post-Arrival Support
          </span>
          <span className="font-poppins text-[#00352B] text-center mb-[22px] max-w-[800px] whitespace-pre-line">
            Because getting admitted is just the beginning{'\n'}living well is what matters.
          </span>
          <button
            type="button"
            onClick={openConsultation}
            className="flex items-center justify-center bg-[#FF3300] py-2 px-6 rounded-2xl border-0 cursor-pointer"
          >
            <span className="font-poppins font-medium text-[22px] text-[#FFFBE9]">
              Get Post Arrival Support
            </span>
          </button>
        </div>

        {/* Intro section: images as base layer, grey text box overlaps on top */}
        <section className="relative w-full max-w-[1289px] mx-auto pt-[80px] md:pt-[100px] pb-[80px] md:pb-[120px] mb-[80px] md:mb-[145px] px-6 md:px-[51px] md:pl-[80px] md:pr-[80px] min-h-[600px] md:min-h-[720px] flex flex-col items-center justify-center">
          {/* Base layer: top row + bottom row with vertical gap */}
          <div className="absolute inset-0 flex flex-col justify-between pt-[80px] md:pt-[100px] pb-[80px] md:pb-[120px] px-6 md:px-[51px]">
            {/* Top row */}
            <div className="relative h-[180px] md:h-[200px] flex-shrink-0">
              <img
                src={`${IMG_BASE}/u5xwleon_expires_30_days.png`}
                alt=""
                className="w-[140px] md:w-[159px] h-[120px] md:h-[143px] absolute top-0 left-2 md:left-8 object-contain pointer-events-none z-10"
              />
              <img
                src={`${IMG_BASE}/q8la459u_expires_30_days.png`}
                alt=""
                className="w-[160px] md:w-[202px] h-[140px] md:h-[181px] absolute top-0 left-[20%] md:left-[22%] object-contain pointer-events-none z-10"
              />
              <img
                src={`${IMG_BASE}/6hwers10_expires_30_days.png`}
                alt=""
                className="w-[140px] md:w-[189px] h-[130px] md:h-[172px] absolute top-2 right-[22%] md:right-[28%] object-contain pointer-events-none z-10 hidden sm:block"
              />
              <img
                src={`${IMG_BASE}/l8px1rkc_expires_30_days.png`}
                alt=""
                className="w-[140px] md:w-[182px] h-[130px] md:h-[164px] absolute top-0 right-2 md:right-8 object-contain pointer-events-none z-10"
              />
            </div>
            {/* Vertical gap between rows */}
            <div className="flex-shrink-0 h-[60px] md:h-[80px]" aria-hidden />
            {/* Bottom row */}
            <div className="relative h-[180px] md:h-[200px] flex-shrink-0">
              <img
                src={`${IMG_BASE}/7cvg4p9p_expires_30_days.png`}
                alt=""
                className="w-[140px] md:w-[181px] h-[120px] md:h-[162px] absolute bottom-0 left-[8%] md:left-[12%] object-contain pointer-events-none z-10 hidden sm:block"
              />
              <img
                src={`${IMG_BASE}/k0we8t2z_expires_30_days.png`}
                alt=""
                className="w-[150px] md:w-[193px] h-[130px] md:h-[173px] absolute bottom-0 left-2 md:left-4 object-contain pointer-events-none z-10"
              />
              <img
                src={`${IMG_BASE}/herthk9n_expires_30_days.png`}
                alt=""
                className="w-[140px] md:w-[189px] h-[130px] md:h-[172px] absolute bottom-0 right-[22%] md:right-[28%] object-contain pointer-events-none z-10 hidden md:block"
              />
              <img
                src={`${IMG_BASE}/9ifzua0v_expires_30_days.png`}
                alt=""
                className="w-[140px] md:w-[181px] h-[120px] md:h-[162px] absolute bottom-0 right-2 md:right-4 object-contain pointer-events-none z-10"
              />
            </div>
          </div>

          {/* Grey text box: lower z-index so images peek over it */}
          <div className="relative z-0 flex items-center justify-center px-4 md:px-12">
            <div className="flex flex-col items-center justify-center w-full max-w-[900px] bg-[#F5F3F3] py-12 md:py-20 px-8 md:px-16 rounded-[40px] md:rounded-[67px] shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
              <span className="font-poppins text-[#FF3300] text-center text-lg md:text-[22px] leading-[1.5] whitespace-pre-line">
                Arriving in Australia is exciting, but it can also be confusing. New systems, new
                rules, new responsibilities — all at once.{'\n\n'}At Esante, we don&apos;t disappear
                after your visa is approved. We stay with you after you land, helping you settle,
                work, study, and live confidently in Australia.
              </span>
            </div>
          </div>
        </section>

        {/* Comprehensive Support heading */}
        <section className="w-full max-w-[1200px] mx-auto px-6 md:px-[92px] mb-[15px]">
          <h2 className="font-poppins font-semibold text-[45px] leading-[1.2] text-[#00352B] mb-[15px]">
            Comprehensive Support, Right Where You Need It
          </h2>
          <p className="font-poppins text-[31px] leading-[1.3] text-black mb-[37px]">
            Everything you need after landing — sorted, step by step.
          </p>
        </section>

        {/* Support cards section */}
        <section className="flex flex-col items-center w-full bg-[#EDEDED] py-[63px] mb-[108px] gap-[41px]">
          <div className="flex items-center justify-center w-full max-w-[1400px] mx-auto px-4 overflow-x-auto">
            <div className="shrink-0 w-[15px] h-4 mb-[1px] mr-[25px] flex flex-col gap-0.5 hidden lg:block">
              <div className="bg-black w-[15px] h-1" />
              <div className="bg-black w-[15px] h-[15px] rounded-sm" />
            </div>

            <div className="flex flex-wrap lg:flex-nowrap items-stretch gap-6 justify-center flex-1">
              {/* Arrival Essentials */}
              <div className="flex flex-1 flex-col min-w-[240px] max-w-[280px] relative">
                <div className="flex flex-col bg-[#00352B] pt-[131px] pb-8 px-6 rounded-[28px] flex-1">
                  <img
                    src={`${IMG_BASE}/8yy30xh5_expires_30_days.png`}
                    alt=""
                    className="w-[149px] h-[149px] absolute -top-2.5 -left-7 object-contain pointer-events-none"
                  />
                  <span className="font-poppins text-[#FF3300] text-base leading-[1.4] whitespace-pre-line">
                    Arrival Essentials{'\n'}SIM • TFN • Bank • Super • OSHC • USI{'\n\n'}Get set up
                    from day one. We help you activate your SIM, open a bank account, apply for TFN,
                    set up superannuation, USI, and health cover — without confusion or delays.
                  </span>
                </div>
              </div>

              {/* University Onboarding */}
              <div className="flex flex-1 flex-col min-w-[240px] max-w-[280px] relative">
                <div className="flex flex-col bg-[#00352B] pt-[35px] px-5 pb-[180px] rounded-[28px] flex-1">
                  <img
                    src={`${IMG_BASE}/muc7dzlr_expires_30_days.png`}
                    alt=""
                    className="w-24 h-24 object-contain pointer-events-none"
                  />
                </div>
                <span className="font-poppins text-[#FF3300] text-base leading-[1.4] -mt-[160px] mx-6 mb-4 whitespace-pre-line">
                  University Onboarding{'\n'}Orientation • Check-in • Timetable • Student
                  Portal{'\n\n'}From university check-in to learning portals like Canvas, Moodle, or
                  Blackboard — we help you understand how everything works so you can focus on your
                  studies.
                </span>
              </div>

              {/* Local Living Support */}
              <div className="flex flex-1 flex-col min-w-[240px] max-w-[280px] relative">
                <div className="flex flex-col bg-[#00352B] pt-[131px] pb-8 px-6 rounded-[28px] flex-1">
                  <img
                    src={`${IMG_BASE}/n9lbkm6m_expires_30_days.png`}
                    alt=""
                    className="w-[113px] h-[113px] absolute top-[26px] left-1 object-contain pointer-events-none"
                  />
                  <span className="font-poppins text-[#FF3300] text-base leading-[1.4] whitespace-pre-line">
                    Local Living Support{'\n'}Metro Card • Groceries • City Navigation{'\n\n'}Public
                    transport cards, best grocery stores, apps you actually need, and how to move
                    around your city like a local — we make daily life easy and affordable.
                  </span>
                </div>
              </div>

              {/* Job-Ready Program */}
              <div className="flex flex-1 flex-col min-w-[240px] max-w-[280px]">
                <div className="flex flex-col bg-[#00352B] pt-[37px] px-6 pb-6 rounded-[28px] flex-1">
                  <img
                    src={`${IMG_BASE}/ht3o7u56_expires_30_days.png`}
                    alt=""
                    className="w-[92px] h-[92px] mb-2 object-contain pointer-events-none"
                  />
                  <span className="font-poppins text-[#FF3300] text-base leading-[1.4] whitespace-pre-line">
                    Job-Ready Program{'\n'}CV • Cover Letter • Job Portals • Interviews{'\n\n'}We
                    prepare you for the Australian job market — CVs, cover letters, SEEK/Indeed
                    profiles, mock interviews, and workplace communication support.
                  </span>
                </div>
              </div>
            </div>

            <div className="shrink-0 w-[15px] h-4 mb-[1px] ml-[25px] flex flex-col gap-0.5 hidden lg:block">
              <div className="bg-black w-[15px] h-1" />
              <div className="bg-black w-[15px] h-[15px] rounded-sm" />
            </div>
          </div>

          <button
            type="button"
            onClick={openConsultation}
            className="flex items-center justify-center bg-[#FF3300] py-3.5 px-6 rounded-[21px] border-0 cursor-pointer"
          >
            <span className="font-poppins font-medium text-[26px] text-[#FFFBE9]">
              Get Post Arrival Support
            </span>
          </button>
        </section>

        {/* Think of Esante banner */}
        <section
          className="flex flex-col items-center justify-center w-full max-w-[1032px] mx-auto pt-[43px] px-[63px] pb-[176px] mb-0 min-h-[280px] bg-cover bg-center bg-no-repeat rounded-[16px]"
          style={{
            backgroundImage: `url('${IMG_BASE}/rq0wlwqy_expires_30_days.png')`,
          }}
        >
          <h2 className="font-poppins font-semibold text-[40px] leading-[1.2] text-center text-[#00352B] whitespace-pre-line">
            Think of{'\n'}Esante as your Australia-study partner{'\n'}not just an agent.
          </h2>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default PostArrivalSupportPage;
