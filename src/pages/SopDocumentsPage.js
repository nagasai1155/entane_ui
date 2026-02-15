import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import ConsultationPopup from '../components/Reusable/ConsultationPopup';

const IMG_FIRST =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/9brs90j4_expires_30_days.png';
const IMG_SECOND =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/52qja4k5_expires_30_days.png';
const IMG_DOCS =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/jla5w6q2_expires_30_days.png';
const IMG_ICON_X1 =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/0anqmfob_expires_30_days.png';
const IMG_ICON_X2 =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/yx3dczco_expires_30_days.png';
const IMG_ICON_X3 =
  'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/rwhnjewe_expires_30_days.png';

export default function SopDocumentsPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const openConsultation = () => setConsultationOpen(true);

  return (
    <div className="flex flex-col w-full bg-white">
      <Header />

      <div className="flex flex-col w-[1440px] box-border">
        <div className="flex flex-col items-center w-full bg-white pb-[67px] pt-[172px]">
          <section
            className="flex flex-col items-center justify-center w-[1192px] min-h-[240px] mb-[41px] gap-4"
            style={{ maxWidth: '100%' }}
          >
            <h1
              className="font-poppins text-center font-normal text-[32px] leading-[60px] underline text-[var(--Primary-Color,#00352B)]"
            >
              SOP & Other Documents
            </h1>
            <p className="font-poppins text-center text-[48px] font-normal leading-[60px] text-[var(--Primary-Color,#00352B)]">
              <span className="text-[#F30] text-[56px] font-semibold italic leading-[60px] block">
                We don't change your story
              </span>
              <span className="block">we help you tell it better</span>
            </p>
            <button
              type="button"
              className="flex flex-col items-center justify-center w-[299px] h-[28px] bg-[#FF3300] rounded-[16px] border-0 cursor-pointer"
              onClick={openConsultation}
            >
              <span className="font-poppins font-medium text-[18px] leading-[0.909] tracking-[0] text-center text-[#FFFBE9]">
                Get free SOP with Esante
              </span>
            </button>
          </section>

          <section className="flex flex-col items-center w-full h-[747px] mb-[52px] bg-cover bg-center bg-no-repeat bg-[url('https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/fpvia2u3_expires_30_days.png')]">
            <div className="flex flex-col items-center justify-end w-full h-full pb-[50px]">
              <button
                type="button"
                className="flex flex-col items-center justify-center w-[730px] h-[123px] bg-[#00352BED] rounded-[48px] border-0 cursor-pointer"
                onClick={openConsultation}
              >
                <span className="max-w-[780px] font-poppins font-semibold text-[35px] leading-none text-center text-white whitespace-pre-line">
                  GTE-Compliant. Scholarship-Focused.{'\n'}
                  <span className="text-[#FF3300]">100% Free with Esante.</span>
                </span>
              </button>
            </div>
          </section>

          {/* Two-row alternating layout: row1 = text left, image right; row2 = image left, text right */}
          <section className="flex flex-col w-full max-w-[1224px] mx-auto px-[100px] mb-[166px] box-border">
            {/* Row 1: Left text, Right image */}
            <div className="flex flex-row items-center gap-8 w-full mb-12 flex-wrap md:flex-nowrap">
              <div className="flex-1 min-w-0 max-w-[55%]">
                <p className="font-poppins font-normal text-[23px] leading-[1.5] tracking-[-0.00652em] text-black">
                  Every university in Australia evaluates more than just your grades — they evaluate
                  your purpose, your clarity, your readiness, and your authenticity. That's why a
                  strong <strong>Statement of Purpose (SOP)</strong> becomes one of the{' '}
                  <strong>most important documents</strong> in your entire application.{' '}
                  It is not just an academic essay — it is a deciding factor for your{' '}
                  <strong>offer letter, visa approval, and scholarship eligibility</strong>.
                </p>
              </div>
              <div className="flex-shrink-0">
                <img
                  src={IMG_FIRST}
                  alt="University application form accepted"
                  className="w-[380px] h-[240px] object-cover rounded-[20px]"
                />
              </div>
            </div>
            {/* Row 2: Left image, Right text */}
            <div className="flex flex-row items-center gap-8 w-full flex-wrap md:flex-nowrap">
              <div className="flex-shrink-0">
                <img
                  src={IMG_SECOND}
                  alt="Graduation celebration"
                  className="w-[380px] h-[240px] object-cover rounded-[20px]"
                />
              </div>
              <div className="flex-1 min-w-0 max-w-[55%]">
                <p className="font-poppins font-normal text-[23px] leading-[1.5] tracking-[-0.00652em] text-black">
                  <strong>At Esante</strong>, we don't treat SOPs as templates or formalities. We treat them as{' '}
                  <strong>strategic documents</strong> that clearly explain who you are, why Australia, why this
                  course, and how it fits your future — exactly what{' '}
                  <strong>Australian universities and visa officers expect</strong>.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center w-full max-w-[1065px] mx-auto px-[100px] mb-[106px] box-border">
            <div className="flex flex-col items-center w-full gap-[26px]">
              <div
                className="w-[1065px] font-poppins text-center text-[#000] text-[23px] font-normal leading-[36px]"
                style={{ maxWidth: '100%' }}
              >
                While other agencies charge{' '}
                <span className="font-semibold">₹3,000 - ₹5,000 ($75 AUD)</span>
                {' '}for "copy-paste" services,<br />
                Esante invests in your future.<br /><br />
                <span
                  className="font-semibold italic text-[#00352B] text-[30px] leading-[111%] tracking-[-0.15px]"
                >
                  We provide a
                </span>
                <br />
                <span
                  className="font-semibold italic text-[#F30] text-[69px] leading-[111%] tracking-[-0.15px] block"
                >
                  100% FREE
                </span>
                <span
                  className="font-semibold italic text-[#00352B] text-[30px] leading-[150.37%] tracking-[-0.15px]"
                >
                  custom-written SOP service that aligns your career goals with the Department of Home Affairs' strict "Genuine Student" requirements.<br />
                  We don't just write to get you admitted; we write to get you funding.
                </span>
              </div>
              <button
                type="button"
                className="flex flex-col items-center justify-center w-[299px] h-[28px] bg-[#FF3300] rounded-[16px] border-0 cursor-pointer"
                onClick={openConsultation}
              >
                <span className="font-poppins font-medium text-[22px] leading-[0.909] text-center text-[#FFFBE9]">
                  Get free SOP with Esante
                </span>
              </button>
            </div>
          </section>

          <section className="flex flex-col items-center w-full max-w-[1158px] mx-auto px-[100px] mb-[118px] box-border">
            <div className="flex flex-col w-[1158px] h-[415px] bg-[#F7F7F7] rounded-[39px] border border-solid border-[#FF3300] py-[58px] px-[54px] box-border">
              <h2 className="w-[874px] font-poppins font-normal text-[45px] leading-[1.2] tracking-[-0.00333em] text-left text-[#00352B] mb-[21px]">
                Why SOP Matters More Than You Think
              </h2>
              <div className="flex flex-row items-start w-full gap-[50px] mb-[13px]">
                <div className="flex flex-col items-start flex-1 gap-[12px]">
                  <h3 className="w-[289px] font-poppins font-normal text-[25px] leading-[1.2] tracking-[-0.006em] text-left text-black">
                    A strong SOP helps you:
                  </h3>
                  <ul className="flex flex-col gap-[12px] list-none p-0 m-0">
                    <li className="w-[566px] font-poppins font-normal text-[20px] leading-[1.2] tracking-[-0.00682em] text-left text-black">
                      ✅ Meet Genuine Student (GS) / GTE requirements
                    </li>
                    <li className="w-[535px] font-poppins font-normal text-[20px] leading-[1.2] tracking-[-0.00682em] text-left text-black">
                      ✅ Increase chances of merit-based scholarships
                    </li>
                    <li className="w-[566px] font-poppins font-normal text-[20px] leading-[1.2] tracking-[-0.00682em] text-left text-black">
                      ✅ Avoid visa delays or refusals due to unclear intent
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-start flex-1 gap-[12px]">
                  <h3 className="w-[335px] font-poppins font-normal text-[22px] leading-[1.2] tracking-[-0.00682em] text-left text-black">
                    A weak or generic SOP can:
                  </h3>
                  <ul className="flex flex-col gap-[12px] list-none p-0 m-0">
                    <li className="flex flex-row items-center gap-[5px]">
                      <img src={IMG_ICON_X1} alt="" className="w-[28px] h-[28px] object-fill shrink-0" />
                      <span className="font-poppins font-normal text-[20px] leading-[1.2] tracking-[-0.00682em] text-left text-black">
                        Raise red flags during visa assessment
                      </span>
                    </li>
                    <li className="flex flex-row items-center gap-[5px]">
                      <img src={IMG_ICON_X2} alt="" className="w-[28px] h-[28px] object-fill shrink-0" />
                      <span className="font-poppins font-normal text-[20px] leading-[1.2] tracking-[-0.00682em] text-left text-black">
                        Lead to unnecessary rejections
                      </span>
                    </li>
                    <li className="flex flex-row items-center gap-[5px]">
                      <img src={IMG_ICON_X3} alt="" className="w-[28px] h-[28px] object-fill shrink-0" />
                      <span className="font-poppins font-normal text-[20px] leading-[1.2] tracking-[-0.00682em] text-left text-black">
                        Reduce scholarship chances
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center w-full">
                <button
                  type="button"
                  className="flex flex-col items-center justify-center w-[299px] h-[28px] bg-[#FF3300] rounded-[16px] border-0 cursor-pointer"
                  onClick={openConsultation}
                >
                  <span className="font-poppins font-medium text-[22px] leading-[0.909] text-center text-[#FFFBE9]">
                    Get free SOP with Esante
                  </span>
                </button>
              </div>
            </div>
          </section>

          <section className="flex flex-row items-start w-full max-w-[1224px] mx-auto px-[100px] mb-[118px] gap-[35px] box-border">
            <img
              src={IMG_DOCS}
              alt=""
              className="w-[443px] h-[433px] object-fill shrink-0 rounded-[43px]"
            />
            <div className="flex flex-col items-start shrink-0 gap-[26px] pt-[11px]">
              <h2 className="w-[650px] font-poppins font-medium text-[45px] leading-[1.2] tracking-[-0.00333em] text-left text-[#00352B] whitespace-pre-line">
                Documents{'\n'}<span className="text-[#FF3300]">We Help You With</span>
              </h2>
              <ul className="w-[575px] font-poppins font-semibold text-[15px] leading-[1.79] tracking-[-0.0075em] text-left text-black list-disc pl-6 space-y-2">
                <li>Statement of Purpose (SOP / GS Statement)</li>
                <li>Scholarship SOP (where required)</li>
                <li>Letter of Recommendation (LOR) guidance</li>
                <li>Academic & career justification</li>
                <li>Gap explanation (if applicable)</li>
                <li>Resume (Australian format)</li>
                <li>Cover letter (Australian format)</li>
                <li>University-specific SOP customisation</li>
              </ul>
            </div>
          </section>

          <section className="flex flex-col items-center w-full max-w-[1280px] mx-auto px-[100px] mb-[40px] box-border">
            <div
              className="flex flex-col items-center justify-center w-full min-h-[260px] rounded-[37px] py-10 px-14"
              style={{
                background: 'linear-gradient(180deg, #E85C00 0%, #FF9933 50%, #FFB366 100%)',
              }}
            >
              <p className="font-poppins text-white text-center mb-6">
                <span className="text-[22px] font-normal leading-tight block">Think of</span>
                <span className="text-[32px] md:text-[38px] font-bold leading-tight block my-1">
                  Esante as your Australia-study partner
                </span>
                <span className="text-[22px] font-normal leading-tight block">not just an agent.</span>
              </p>
              <p className="font-poppins text-white text-center text-[18px] font-normal mb-8 max-w-[600px]">
                Let Our Experts In Brisbane Guide You Every Step Of The Way.
              </p>
              <button
                type="button"
                className="font-poppins font-medium text-[16px] text-[#333] bg-white border-2 border-[#FF3300] rounded-[12px] px-8 py-3 cursor-pointer hover:bg-[#FFF5F2] transition-colors"
                onClick={openConsultation}
              >
                Book Free Call
              </button>
            </div>
          </section>
        </div>
      </div>

      <Footer />

      <ConsultationPopup
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
