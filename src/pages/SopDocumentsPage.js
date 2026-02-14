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
          <section className="flex flex-col items-center w-full mb-[41px]">
            <h1 className="w-[329px] font-poppins font-medium text-[28px] leading-[0.75] tracking-[-0.02em] text-center text-[#00352B] mb-7">
              SOP & Other Documents
            </h1>
            <p className="w-[1192px] font-poppins font-semibold text-[48px] leading-[1.25] text-center text-[#00352B] mb-6">
              We don't change your story we help you tell it better
            </p>
            <button
              type="button"
              className="flex flex-col items-center justify-center w-[299px] h-[28px] bg-[#FF3300] rounded-[16px] border-0 cursor-pointer"
              onClick={openConsultation}
            >
              <span className="font-poppins font-medium text-[22px] leading-[0.909] tracking-[0] text-center text-[#FFFBE9]">
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
                <span className="max-w-[730px] font-poppins font-semibold text-[45px] leading-none text-center text-white whitespace-pre-line">
                  GTE-Compliant. Scholarship-Focused.{'\n'}100% Free with Esante.
                </span>
              </button>
            </div>
          </section>

          <section className="flex flex-col items-start w-full max-w-[1224px] mx-auto px-[100px] mb-[166px] box-border">
            <div className="flex flex-col items-start w-full">
              <p className="w-[658px] font-poppins font-normal text-[23px] leading-[1.5] tracking-[-0.00652em] text-black mb-[32px]">
                Every university in Australia evaluates more than just your grades — they evaluate
                your purpose, your clarity, your readiness, and your authenticity. That's why a
                strong Statement of Purpose (SOP) becomes one of the most important documents in
                your entire application.{'\n\n'}It is not just an academic essay — it is a deciding
                factor for your offer letter, visa approval, and scholarship eligibility.
              </p>
              <img
                src={IMG_FIRST}
                alt=""
                className="w-[503px] h-[322px] object-fill rounded-[27px] mb-[32px]"
              />
            </div>
            <div className="flex flex-col items-end w-full mb-[146px]">
              <img
                src={IMG_SECOND}
                alt=""
                className="w-[535px] h-[340px] object-fill rounded-[37px]"
              />
            </div>
            <div className="flex flex-col items-end w-full">
              <p className="w-[607px] font-poppins font-normal text-[23px] leading-[1.5] tracking-[-0.00652em] text-right text-black">
                At Esante, we don't treat SOPs as templates or formalities. We treat them as
                strategic documents that clearly explain who you are, why Australia, why this
                course, and how it fits your future — exactly what Australian universities and visa
                officers expect.
              </p>
            </div>
          </section>

          <section className="flex flex-col items-center w-full max-w-[1065px] mx-auto px-[100px] mb-[106px] box-border">
            <div className="flex flex-col items-center w-full gap-[26px]">
              <p className="w-[1065px] font-poppins font-normal text-[23px] leading-[1.5] tracking-[-0.00652em] text-center text-black whitespace-pre-line">
                While other agencies charge ₹3,000 - ₹5,000 ($75 AUD) for "copy-paste" services,{'\n'}
                Esante invests in your future.{'\n\n'}We provide a{'\n'}100% FREE{'\n'}custom-written SOP
                service that aligns your career goals with the Department of Home Affairs' strict
                "Genuine Student" requirements.{'\n'}We don't just write to get you admitted; we write
                to get you funding.
              </p>
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
                    <li className="w-[566px] font-poppins font-normal text-[22px] leading-[1.2] tracking-[-0.00682em] text-left text-black">
                      ✅ Meet Genuine Student (GS) / GTE requirements
                    </li>
                    <li className="w-[535px] font-poppins font-normal text-[22px] leading-[1.2] tracking-[-0.00682em] text-left text-black">
                      ✅ Increase chances of merit-based scholarships
                    </li>
                    <li className="w-[566px] font-poppins font-normal text-[22px] leading-[1.2] tracking-[-0.00682em] text-left text-black">
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
                      <span className="font-poppins font-normal text-[22px] leading-[1.2] tracking-[-0.00682em] text-left text-black">
                        Raise red flags during visa assessment
                      </span>
                    </li>
                    <li className="flex flex-row items-center gap-[5px]">
                      <img src={IMG_ICON_X2} alt="" className="w-[28px] h-[28px] object-fill shrink-0" />
                      <span className="font-poppins font-normal text-[22px] leading-[1.2] tracking-[-0.00682em] text-left text-black">
                        Lead to unnecessary rejections
                      </span>
                    </li>
                    <li className="flex flex-row items-center gap-[5px]">
                      <img src={IMG_ICON_X3} alt="" className="w-[28px] h-[28px] object-fill shrink-0" />
                      <span className="font-poppins font-normal text-[22px] leading-[1.2] tracking-[-0.00682em] text-left text-black">
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
                Documents{'\n'}We Help You With
              </h2>
              <p className="w-[575px] font-poppins font-semibold text-[20px] leading-[1.79] tracking-[-0.0075em] text-left text-black whitespace-pre-line">
                Statement of Purpose (SOP / GS Statement){'\n'}Scholarship SOP (where required){'\n'}
                Letter of Recommendation (LOR) guidance{'\n'}Academic & career justification{'\n'}Gap
                explanation (if applicable){'\n'}Resume (Australian format){'\n'}Cover letter
                (Australian format){'\n'}University-specific SOP customisation
              </p>
            </div>
          </section>

          <section className="flex flex-col items-center w-full max-w-[1048px] mx-auto px-[100px] mb-[46px] box-border">
            <div className="flex flex-col items-center justify-center w-full min-h-[200px] bg-cover bg-center bg-no-repeat rounded-[37px] pt-[43px] px-[63px] pb-[44px] bg-[url('https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/2jckupko_expires_30_days.png')]">
              <p className="font-poppins font-normal text-[#00352B] text-center whitespace-pre-line">
                Think of{'\n'}Esante as your Australia-study partner{'\n'}not just an agent.
              </p>
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
