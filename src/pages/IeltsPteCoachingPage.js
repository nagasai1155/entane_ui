import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import BookFreeCallBanner from '../components/Home-Page/BookFreeCallBanner';

const ICON_EMAIL =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/vuqm314h_expires_30_days.png';
const ICON_PHONE =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/yuwhvflm_expires_30_days.png';
const HERO_IMG =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/p1d932x7_expires_30_days.png';
const COACH_IMG =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/p37eryxm_expires_30_days.png';
const GALLERY_1 =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/enukerkg_expires_30_days.png';
const GALLERY_2 =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/budwganb_expires_30_days.png';
const GALLERY_3 =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/r8wwm2en_expires_30_days.png';
const GALLERY_4 =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/u8tgirky_expires_30_days.png';

function IeltsPteCoachingPage() {
  const openConsultation = () =>
    window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  return (
    <div className="flex flex-col items-start w-full bg-white">
      <Header />

      <div className="w-full max-w-[1440px] mx-auto">
        {/* Hero: Figma-exact — thin green strip, red contact bar, composite (building left / green + character right) */}
        <section className="w-full">
          <div className="h-1 w-full bg-[#00352B]" aria-hidden />
          <div className="flex items-center self-stretch bg-[#FF3300] py-2.5 px-[100px]">
            <img
              src={ICON_EMAIL}
              alt=""
              className="w-[15px] h-4 mr-[5px] object-fill"
            />
            <span className="text-white text-sm font-poppins">
              info@esante.com.au
            </span>
            <div className="flex-1 self-stretch" />
            <img
              src={ICON_PHONE}
              alt=""
              className="w-5 h-5 object-fill"
            />
            <span className="text-white text-sm font-poppins">
              +44 1234 5678 90
            </span>
          </div>

          {/* Hero: background image full width left to right, text + character overlay */}
          <div className="relative w-full min-h-[634px]" style={{ height: 634 }}>
            {/* Background image — covers entire hero left to right */}
            <div
              className="absolute inset-0 bg-no-repeat bg-cover"
              style={{
                backgroundImage: 'url("https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/61ys4238_expires_30_days.png")',
                backgroundPosition: 'center 100%',
              }}
            />
            {/* Content overlay: text and character both top; text shifted right, image shifted left */}
            <div className="relative z-10 flex w-full h-full items-start justify-between pt-12">
              <div className="flex flex-col items-start pl-[420px] pr-12 pt-16">
                <span className="font-poppins text-[#00352B] text-[18px] mb-[38px]">
                  IELTS & PTE Training
                </span>
                <span className="font-poppins text-[#FF3300] text-[28px] font-bold leading-tight mb-[15px] ml-[1px] whitespace-pre-line">
                  Free IELTS &{'\n'}PTE Training
                </span>
                <p className="font-poppins text-[22px] font-bold leading-tight mb-7">
                  <span className="text-[#00352B]">By a Native </span>
                  <span className="text-[#FF3300]">Australian Coach</span>
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
              </div>
              <div className="flex items-start justify-center pl-8 pr-0">
                <img
                  src={HERO_IMG}
                  alt="Australian coach with flag"
                  className="h-[585px] w-auto object-contain object-top"
                />
              </div>
            </div>
          </div>
        </section>

        <main className="flex flex-col self-stretch bg-white pt-[86px]">

          {/* Section: Meet Joshua - video left, text right (match design) */}
          <section className="flex items-start self-stretch max-w-[1241px] mb-[186px] ml-[84px] mr-[115px] gap-10">
            {/* Video player: 16:9 with play overlay */}
            <div className="relative w-[45%] max-w-[560px] shrink-0 h-[420px] overflow-hidden rounded-sm bg-black">
              <img
                src={COACH_IMG}
                alt="Joshua Michael William G."
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-black/50">
                  <svg className="w-8 h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Text column */}
            <div className="flex flex-1 flex-col items-start min-w-0">
              <h2 className="font-poppins text-black font-normal text-base mb-1">
                Meet <span className="text-[#FF3300] font-bold text-[28px]">Joshua Michael William G.</span>
              </h2>
              <p className="font-poppins text-black text-lg mb-6">
                Your Communication & IELTS Coach
              </p>
              <p className="font-poppins text-black text-base leading-relaxed mb-5">
                Josh is a <span className="font-bold text-[#FF3300]">CELTA & TEFL-certified</span> <span className="font-bold text-[#FF3300]">English communication coach</span> with over <span className="font-bold text-[#FF3300]">5+ years of teaching experience</span>, working with students from all over the world.
              </p>
              <p className="font-poppins text-black text-base leading-relaxed mb-4">
                He is the founder of <span className="font-bold text-[#FF3300]">Communication Mastery</span>, a global learning community with <span className="font-bold text-[#FF3300]">1,700+ members</span>, where he helps learners:
              </p>
              <ul className="font-poppins text-black text-base list-disc list-outside pl-5 space-y-2">
                <li>Speak English fluently and naturally</li>
                <li>Improve IELTS & PTE speaking performance</li>
                <li>Build confidence for interviews and real conversations</li>
                <li>Communicate clearly in professional and social settings</li>
              </ul>
            </div>
          </section>

          {/* Section: Four gallery images */}
          <section className="flex items-center self-stretch max-w-[1240px] mb-[35px] ml-[84px] mr-[116px] gap-[26px]">
            <img
              src={GALLERY_1}
              alt=""
              className="flex-1 h-[400px] object-fill"
            />
            <img
              src={GALLERY_2}
              alt=""
              className="flex-1 h-[400px] object-fill"
            />
            <img
              src={GALLERY_3}
              alt=""
              className="flex-1 h-[400px] object-fill"
            />
            <img
              src={GALLERY_4}
              alt=""
              className="flex-1 h-[400px] object-fill"
            />
          </section>

          {/* Quote block */}
          <p className="font-poppins text-black text-2xl font-normal mb-[114px] ml-[92px] mr-[123px] max-w-[1220px] leading-relaxed">
            At Esante, <span className="text-[#FF3300]">Josh</span> plays a critical role – not just in helping students <span className="text-[#FF3300]">achieve their target IELTS/PTE scores,</span> but in preparing them for <span className="text-[#FF3300]">real Australian life.</span>
          </p>

          {/* Section: Why Our Coaching is Unmatched */}
          <section className="flex items-start self-stretch max-w-[1222px] mb-[66px] ml-[92px] mr-[126px] gap-16">
            <span className="font-poppins text-[45px] w-[276px] shrink-0 whitespace-pre-line">
              <span className="text-[#00352B]">Why Our</span>{'\n'}<span className="text-[#FF3300]">Coaching is</span>{'\n'}<span className="text-[#FF3300]">Unmatched</span>:
            </span>
            <div className="flex flex-1 flex-col items-start pr-[55px]">
              <span className="font-poppins text-black text-[21px] mb-[13px]">
                ✅ $0 Cost: Professional coaching usually costs $50/hour. You get it FREE.
              </span>
              <span className="font-poppins text-black text-[21px] mb-2 whitespace-pre-line">
                ✅ Real-Time Feedback: Live sessions focusing on pronunciation, vocabulary,{'\n'}and "Band 8" sentence structures.
              </span>
              <span className="font-poppins text-black text-[21px] w-[882px] max-w-full whitespace-pre-line">
                ✅ Beyond the Test: Josh prepares you for life in Australia—teaching you the slang,{'\n'}etiquette, and confidence needed to ace job interviews after you land.
              </span>
            </div>
          </section>
        </main>
      </div>

      <div className="w-full" style={{ paddingLeft: '2%' }}>
        <BookFreeCallBanner />
      </div>
      <Footer />
    </div>
  );
}

export default IeltsPteCoachingPage;
