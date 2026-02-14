import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

const HERO_CAR =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/d3m99tif_expires_30_days.png';
const WHAT_WE_DO_IMG =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/ohget4he_expires_30_days.png';

function AirportServicesPage() {

  return (
    <div className="flex flex-col items-start w-full bg-white">
      <Header />

      <div className="flex flex-col items-center self-stretch w-full max-w-[1440px] mx-auto bg-white pt-[94px]">
        {/* Hero: bg image + text + floating car image */}
        <div className="flex flex-col items-start self-stretch relative mb-[180px] w-full">
          <div
            className="flex flex-col items-start self-stretch bg-cover bg-center bg-no-repeat py-[200px] pl-24 w-full min-h-[560px]"
            style={{ backgroundImage: 'url("https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/gz4nyey7_expires_30_days.png")' }}
          >
            <div className="flex flex-col items-start gap-2">
              <span className="text-[#00352B] text-[28px] block">
                Free Airport Pickup in Australia
              </span>
              <span className="text-[#00352B] text-[28px] leading-tight whitespace-pre-line block">
                Welcome Home{'\n'}Your Personal Chauffeur Awaits.
              </span>
            </div>
          </div>
          <img
            src={HERO_CAR}
            alt=""
            className="w-[669px] h-[314px] absolute bottom-[-80px] left-1 object-fill pointer-events-none"
          />
        </div>

        {/* Intro copy — red */}
        <span className="text-[#FF3300] mb-1.5 block w-full max-w-[1236px] mx-auto px-[100px] text-left whitespace-pre-line mt-4">
          Zero Stress. Zero Confusion. We greet you at the gate and drive you safely to your doorstep.{' '}
          Landing in a new country can feel overwhelming — new airport, new city, new systems. That's why Esante offers FREE airport pickup support across Australia, so you never feel alone on your first day.{'\n\n'}
          From the moment you land, we've got you covered.
        </span>

        {/* What We Do — red card with list + image */}
        <div className="flex justify-between items-start self-stretch bg-[#FF3300] mb-[84px] mx-[51px] rounded-[39px] w-[calc(100%-102px)] max-w-[1338px]">
          <div className="flex flex-col shrink-0 items-start mt-[67px] ml-[82px] gap-4">
            <span className="text-white text-6xl mb-2 mr-[126px] block">
              What We Do:
            </span>
            <span className="text-white text-2xl block">
              ✅  Pick you up directly from the airport
            </span>
            <span className="text-white text-2xl block">
              ✅  Help with luggage and first-day guidance
            </span>
            <span className="text-white text-2xl block max-w-[464px]">
              ✅ Drop you safely to your temporary or permanent accommodation
            </span>
            <span className="text-white text-2xl block">
              ✅ Ensure a stress-free, comfortable arrival
            </span>
            <span className="text-white text-[26px] font-bold block mt-1">
              No taxis. No confusion. No overpaying.
            </span>
          </div>
          <img
            src={WHAT_WE_DO_IMG}
            alt=""
            className="w-[570px] h-[414px] my-[22px] mr-[47px] object-fill shrink-0"
          />
        </div>

        {/* Quote line */}
        <span className="text-[#00352B] text-[45px] text-center mb-[58px] mx-auto block max-w-[900px] whitespace-pre-line leading-tight px-4">
          This is not just a pickup{'\n'}it's your first step into Australia with confidence.
        </span>

        {/* Partner section — bg image */}
        <div
          className="flex flex-col self-stretch bg-cover bg-center bg-no-repeat max-w-[1060px] pt-[43px] px-[63px] pb-[43px] mb-[82px] mx-auto min-h-[240px] rounded-[16px]"
          style={{ backgroundImage: 'url("https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/2t8tc02n_expires_30_days.png")' }}
        >
          <span className="text-[#00352B] text-center mb-8 block text-[28px] font-semibold whitespace-pre-line">
            Think of{'\n'}Esante as your Australia-study partner{'\n'}not just an agent.
          </span>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AirportServicesPage;
