import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

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
const QUOTE_BG =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/iy96sy8k_expires_30_days.png';

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
          <div className="relative w-full min-h-[660px]" style={{ height: 660 }}>
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
              <div className="flex flex-col items-start pl-[280px] pr-12 pt-16">
                <span className="font-poppins text-[#00352B] text-[28px] mb-[38px]">
                  IELTS & PTE Training
                </span>
                <span className="font-poppins text-[#FF3300] text-[48px] font-bold leading-tight mb-[15px] ml-[1px] whitespace-pre-line">
                  Free IELTS &{'\n'}PTE Training
                </span>
                <p className="font-poppins text-[35px] font-bold leading-tight mb-7">
                  <span className="text-[#00352B]">By a Native </span>
                  <span className="text-[#FF3300]">Australian Coach</span>
                </p>
                <button
                  type="button"
                  onClick={openConsultation}
                  className="flex flex-col items-start bg-[#FF3300] pt-1 pb-[5px] px-3 rounded-2xl cursor-pointer border-0"
                >
                  <span className="font-poppins text-[#FFFBE9] text-sm">
                    Get Free Guidance from Esante
                  </span>
                </button>
              </div>
              <div className="flex items-start justify-center pl-8 pr-12">
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

          {/* Section: Meet Joshua - coach intro with image */}
          <section className="flex items-center self-stretch max-w-[1241px] mb-[186px] ml-[84px] mr-[115px] gap-7">
            <img
              src={COACH_IMG}
              alt="Joshua Michael William G."
              className="w-[504px] h-[570px] object-fill shrink-0"
            />
            <div className="flex flex-1 flex-col items-start gap-[53px]">
              <div className="flex flex-col items-start self-stretch ml-[11px]">
                <span className="font-poppins text-black">
                  Meet Joshua Michael William G.{'\n'}Your Communication & IELTS Coach 🇦
                </span>
                <span className="font-poppins text-black text-[23px] w-[660px] max-w-full mt-2">
                  Josh is a CELTA & TEFL-certified English communication coach with over 5+ years of teaching experience, working with students from all over the world.{'\n\n'}He is the founder of Communication Mastery, a global learning community with 1,700+ members, where he helps learners:
                </span>
              </div>
              <span className="font-poppins text-black text-[23px] w-[657px] max-w-full whitespace-pre-line">
                Speak English fluently and naturally{'\n'}Improve IELTS & PTE speaking performance{'\n'}Build confidence for interviews and real conversations{'\n'}Communicate clearly in professional and social settings
              </span>
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
          <p className="font-poppins text-black text-2xl font-bold mb-[114px] ml-[92px] mr-[123px] max-w-[1220px]">
            At Esante, Josh plays a critical role — not just in helping students achieve their target IELTS/PTE scores, but in preparing them for real Australian life.
          </p>

          {/* Section: Why Our Coaching is Unmatched */}
          <section className="flex items-start self-stretch max-w-[1222px] mb-[66px] ml-[92px] mr-[126px] gap-16">
            <span className="font-poppins text-[#00352B] text-[45px] w-[276px] shrink-0 whitespace-pre-line">
              Why Our{'\n'}Coaching is{'\n'}Unmatched:
            </span>
            <div className="flex flex-1 flex-col items-start pr-[55px]">
              <span className="font-poppins text-black text-[22px] mb-[13px]">
                ✅ $0 Cost: Professional coaching usually costs $50/hour. You get it FREE.
              </span>
              <span className="font-poppins text-black text-[22px] mb-2 whitespace-pre-line">
                ✅ Real-Time Feedback: Live sessions focusing on pronunciation, vocabulary,{'\n'}and "Band 8" sentence structures.
              </span>
              <span className="font-poppins text-black text-[22px] w-[882px] max-w-full whitespace-pre-line">
                ✅ Beyond the Test: Josh prepares you for life in Australia—teaching you the slang,{'\n'}etiquette, and confidence needed to ace job interviews after you land.
              </span>
            </div>
          </section>

          {/* Quote banner: Think of Esante as your Australia-study partner */}
          <section
            className="flex flex-col self-stretch bg-cover bg-center max-w-[1048px] pt-[43px] px-[63px] pb-[43px] mb-[55px] mx-auto min-h-[200px] flex items-center justify-center"
            style={{ backgroundImage: `url('${QUOTE_BG}')` }}
          >
            <span className="font-poppins text-[#00352B] text-center text-[40px] font-semibold leading-[1.2] mb-44 whitespace-pre-line">
              Think of{'\n'}Esante as your Australia-study partner{'\n'}not just an agent.
            </span>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default IeltsPteCoachingPage;
