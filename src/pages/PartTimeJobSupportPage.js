import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

const IMG_CAFE =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/l2ar2hox_expires_30_days.png';
const IMG_STORY_1 =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/y4tbetfz_expires_30_days.png';
const IMG_STORY_2 =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/85xfs4v3_expires_30_days.png';

function PartTimeJobSupportPage() {
  const openConsultation = () => window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  return (
    <div className="flex flex-col w-full bg-white items-start">
      <Header />

      <div className="flex flex-col w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center self-stretch bg-white pt-[186px] pb-[67px]">
          <span className="font-poppins font-medium text-[28px] leading-[1.2] tracking-[-0.02em] text-[#00352B] mb-[3px]">
            Part-Time Job Support in Australia
          </span>
          <div className="flex flex-col items-center mb-5">
            <span className="font-poppins font-semibold text-[48px] leading-[1.25] text-center text-[#00352B] whitespace-pre-line">
              Earn While You Study{' \n'}Live Stress-Free.
            </span>
            <button
              type="button"
              onClick={openConsultation}
              className="mt-6 flex items-center justify-center bg-[#FF3300] py-2 px-6 rounded-2xl border-0 cursor-pointer"
            >
              <span className="font-poppins font-medium text-sm text-[#FFFBE9]">
                Get Free Guidance from Esante
              </span>
            </button>
          </div>

          <div
            className="flex justify-center items-center self-stretch bg-cover bg-center bg-no-repeat mx-7 mb-[102px] min-h-[600px] rounded-[20px] relative"
            style={{ backgroundImage: 'url("https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/v7izjyga_expires_30_days.png")' }}
          >
            <button
              type="button"
              className="shrink-0 w-[38px] h-[60px] flex items-center justify-center rounded-lg bg-white/90 hover:bg-white cursor-pointer z-10 ml-4"
              aria-label="Previous"
            >
              <svg className="w-5 h-5 text-[#00352B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex flex-col shrink-0 items-start relative mt-[68px] mb-[47px] mx-4">
              <div className="flex flex-col items-start bg-[#00352B] py-[56px] pl-[28px] pr-[320px] rounded-[32px] min-w-[400px]">
                <span className="font-poppins font-normal text-[18px] leading-[1.2] text-[#FF3300] mb-3">
                  Cafés & Coffee Shops
                </span>
                <span className="font-poppins font-bold text-[42px] leading-[1.05] text-white w-[240px] mb-[2px]">
                  Working in Cafés
                </span>
                <div className="flex items-center justify-center w-[168px] h-[44px] bg-[#00352B] rounded-[12px] border border-white/20 mb-5">
                  <span className="font-poppins font-normal text-[15px] text-white">
                    AU$28–40/hour
                  </span>
                </div>
                <span className="font-poppins font-normal text-[13px] leading-[1.4] text-white w-[200px] mb-[24px] whitespace-pre-line">
                  Barista, cashier & service roles{'\n'}Flexible shifts around classes{'\n'}Tips + weekend penalty rates
                </span>
                <button
                  type="button"
                  onClick={openConsultation}
                  className="flex items-center justify-center bg-[#FF3300] py-1.5 px-5 rounded-2xl border-0 cursor-pointer"
                >
                  <span className="font-poppins font-medium text-sm text-white">
                    Get Part-Time Job Guidance from Esante
                  </span>
                </button>
              </div>
              <img
                src={IMG_CAFE}
                alt=""
                className="w-[340px] h-[352px] absolute top-[20px] right-[-56px] object-cover rounded-[16px] z-10 pointer-events-none"
              />
            </div>

            <span className="font-poppins font-normal text-[32px] leading-[1.2] text-white absolute top-8 right-[90px] z-10">
              01/04
            </span>

            <button
              type="button"
              className="shrink-0 w-[38px] h-[60px] flex items-center justify-center rounded-lg bg-white/90 hover:bg-white cursor-pointer z-10 mr-4"
              aria-label="Next"
            >
              <svg className="w-5 h-5 text-[#00352B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <p className="font-poppins font-normal text-[23px] leading-[1.5] tracking-[-0.00652em] text-[#FF3300] max-w-[1214px] mx-auto px-4 mb-[76px] whitespace-pre-line">
            From arrival to your first paycheck—we connect you with trusted employers so you can earn $3,000+ AUD per month.{' \n'}
            For international students, finding a part-time job in Australia is not optional — it's essential. Rent, groceries, transport, and daily expenses depend on it. At Esanté, we understand this reality because we are on the ground in Australia.{'\n'}
            That's why part-time job support is a core part of our end-to-end student services, not an add-on.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-start justify-between self-stretch max-w-[1214px] mx-auto mb-[122px] px-4 py-8 rounded-[45px] border border-solid border-[#FF3300] gap-8">
            <p className="font-poppins font-semibold text-[28px] leading-[1.25] text-[#00352B] whitespace-pre-line mt-[33px] mb-2 ml-[23px] mr-8 min-w-[280px] flex-1">
              How Esante Helps You{'\n'}Get Part-Time Work Faster{'\n'}Esante works closely with multiple verified part-time job partners across Australia, including:
            </p>
            <div className="flex flex-col items-start gap-4 mt-[67px] mr-[30px] mb-4 flex-1 min-w-[280px]">
              <span className="font-poppins font-normal text-2xl leading-[1.3] text-black">✅ Cafés & restaurants</span>
              <span className="font-poppins font-normal text-2xl leading-[1.3] text-black">✅ Petrol stations</span>
              <span className="font-poppins font-normal text-2xl leading-[1.3] text-black">✅ Grocery stores & supermarkets</span>
              <span className="font-poppins font-normal text-2xl leading-[1.3] text-black">✅ Shopping malls & retail outlets</span>
              <span className="font-poppins font-normal text-2xl leading-[1.3] text-black">✅ Hospitality & customer service roles</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 self-stretch mx-[90px] mb-[136px]">
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
            <p className="font-poppins font-normal text-[23px] leading-[1.5] tracking-[-0.00652em] text-[#FF3300] max-w-[520px] flex-1 whitespace-pre-line">
              Meet Diya & Khushi:{'\n'}
              When Diya and Khushi landed in Brisbane, they were worried about managing high living costs. Through Esante's local job network, they were interviewed and hired within their first week. The Result: Both are now earning between $3,000 - $4,000 AUD per month. They pay their own rent, cover all groceries, and still save money—living financially independent from day one.{' \n\n'}
              The "Brisbane HQ" Advantage: Because our headquarters are on the ground in Australia, we understand the local labour market better than any offshore agent. We guide you toward roles with the best hourly rates, ensuring you aren't stuck with minimum wage.
            </p>
          </div>

          <div
            className="flex flex-col items-center justify-center self-stretch max-w-[1044px] mx-auto pt-[43px] px-[63px] pb-[80px] mb-[55px] rounded-[20px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/ouqgxmjg_expires_30_days.png")' }}
          >
            <span className="font-poppins font-semibold text-[40px] leading-[1.2] tracking-[-0.02em] text-center text-[#00352B] whitespace-pre-line">
              Think of{'\n'}Esante as your Australia-study partner{'\n'}not just an agent.
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PartTimeJobSupportPage;
