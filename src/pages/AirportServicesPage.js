import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import BookFreeCallBanner from '../components/Home-Page/BookFreeCallBanner';

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
            className="flex flex-col items-start self-stretch bg-no-repeat pt-[120px] pb-[280px] pl-24 w-full min-h-[565px] mt-0"
            style={{
              backgroundImage: 'url("https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/gz4nyey7_expires_30_days.png")',
              backgroundPosition: 'center top',
              backgroundSize: 'cover',
            }}
          >
            <div className="flex flex-col items-start gap-2">
              <span className="text-[#00352B] text-[28px] block underline">
                Free Airport Pickup in Australia
              </span>
              <span className="text-[#FF3300] text-5xl md:text-6xl font-bold italic leading-tight block">
                Welcome Home
              </span>
              <span className="text-[#00352B] text-[38px] leading-tight block">
                Your Personal Chauffeur Awaits.
              </span>
              <a
                href="#contact"
                className="inline-flex py-1 px-3 justify-center items-center rounded-[16px] border-0 cursor-pointer mt-4"
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
              </a>
            </div>
          </div>
          <img
            src={HERO_CAR}
            alt=""
            className="w-[669px] h-[314px] absolute bottom-[-80px] left-1 object-fill pointer-events-none"
          />
        </div>

        {/* Intro copy — three blocks, centered */}
        <div className="flex flex-col items-center text-center w-full max-w-[800px] mx-auto px-6 mt-8 mb-12 gap-8">
          <p className="text-[#FF3300] text-xl md:text-2xl font-bold leading-snug italic">
            Zero Stress. Zero Confusion.{' '}
            <br />
            We greet you at the gate and drive you safely to your doorstep.
          </p>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            Landing in a new country can feel overwhelming — new airport, new city, new systems. That's why Esante offers FREE airport pickup support across Australia, so you never feel alone on your first day.
          </p>
          <p className="text-gray-800 text-base md:text-lg font-bold">
            From the moment you land, we've got you covered.
          </p>
        </div>

        {/* What We Do — red card with list + image */}
        <div className="flex justify-between items-start self-stretch bg-[#FF3300] mb-[84px] mx-[51px] rounded-[39px] w-[calc(100%-102px)] max-w-[1338px]">
          <div className="flex flex-col shrink-0 items-start mt-[67px] ml-[82px] gap-4">
            <span className="text-white text-6xl mb-2 mr-[126px] block">
              What We Do:
            </span>
            <span className="text-white text-xl block">
              ✅  Pick you up directly from the airport
            </span>
            <span className="text-white text-xl block">
              ✅  Help with luggage and first-day guidance
            </span>
            <span className="text-white text-xl block max-w-[464px]">
              ✅ Drop you safely to your temporary or permanent accommodation
            </span>
            <span className="text-white text-xl block">
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
        <div className="flex flex-col items-center text-center gap-3 mb-[58px] mx-auto max-w-[900px] px-4">
          <span className="text-[#00352B] text-3xl md:text-4xl leading-tight">
            This is not just a pickup
          </span>
          <span className="text-[#FF3300] text-3xl md:text-4xl font-bold italic leading-tight whitespace-nowrap">
            it's your first step into Australia with confidence.
          </span>
        </div>
      </div>

      <div className="w-full">
        <BookFreeCallBanner />
      </div>
      <Footer />
    </div>
  );
}

export default AirportServicesPage;
