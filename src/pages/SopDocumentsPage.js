import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import BookFreeCallBanner from '../components/Home-Page/BookFreeCallBanner';
import ConsultationPopup from '../components/Reusable/ConsultationPopup';

// Figma images (node IDs: 333:1903, 333:1906, 333:1900, 331:1851)
const IMG_HERO_BG = '/images/sop-hero-bg.png';
const IMG_78 = '/images/sop-img-78.png'; // Row 1 right: 535×340, borderRadius 37px
const IMG_79 = '/images/sop-img-79.png'; // Row 2 left:  503×322, borderRadius 27px
const IMG_77 = '/images/sop-img-77.png'; // Documents left: 443×433, borderRadius 43px

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

          {/* ── Hero Text Section ── layout_0L6JG1: 1192×240 */}
          <section
            className="flex flex-col items-center justify-center mb-[41px] gap-4"
            style={{ width: 1192, maxWidth: '100%', minHeight: 240 }}
          >
            {/* style_NQYYRJ: Poppins 500 / 28px / 0.75em lh / CENTER – fill_WX4E6V #00352B */}
            <h1
              className="font-poppins text-center font-medium text-[28px] underline"
              style={{ color: '#00352B', lineHeight: '0.75em' }}
            >
              SOP & Other Documents
            </h1>

            {/* style_NYTPI7: Poppins 600 / 48px / 1.25em – mixed text runs below */}
            <p
              className="font-poppins text-center italic font-semibold"
              style={{ color: '#FF3300', fontSize: 56, fontWeight: 600, lineHeight: '60px' }}
            >
              We don't change your story
            </p>
            <h1
              className="font-poppins text-center font-semibold"
              style={{ color: '#00352B', fontSize: 48, fontWeight: 600, lineHeight: '60px' }}
            >
              we help you tell it better
            </h1>

            {/* layout_13QFCZ: row / center / pad 4px 12px / hug – style_YUD29G 22px/0.909em */}
            <button
              type="button"
              className="inline-flex py-[4px] px-[12px] justify-center items-center rounded-[16px] border-0 cursor-pointer"
              style={{ background: '#FF3300' }}
              onClick={openConsultation}
            >
              <span
                className="font-poppins text-center font-medium"
                style={{ color: '#FFFBE9', fontSize: 22, fontWeight: 500, lineHeight: '20px' }}
              >
                Get free SOP with Esante
              </span>
            </button>
          </section>

          {/* ── Hero Background Image – layout_DMNQKN: 1440×747 ── */}
          <section
            className="flex flex-col items-center w-full h-[747px] mb-[100px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${IMG_HERO_BG}')` }}
          >
            <div className="flex flex-col items-center justify-end w-full h-full pb-[50px]">
              {/* layout_FIU6WN: 730×123 / borderRadius 48px / fill rgba(0,53,43,0.94) */}
              <button
                type="button"
                className="flex flex-col items-center justify-center w-[730px] h-[123px] rounded-[48px] border-0 cursor-pointer"
                style={{ background: 'rgba(0, 53, 43, 0.94)' }}
                onClick={openConsultation}
              >
                {/* layout_ZPB5NO: 919×44 / style_ZQBVY2: Poppins 600/45px CENTER */}
                <span className="max-w-[919px] w-full font-poppins flex flex-col items-center">
                  <span
                    className="font-poppins text-center block"
                    style={{
                      color: '#FFFFFF',
                      fontSize: 31,
                      fontWeight: 400,
                      lineHeight: 1.25,
                      width: 919,
                      maxWidth: '100%',
                    }}
                  >
                    GTE-Compliant. Scholarship-Focused.
                  </span>
                  <span
                    className="font-poppins italic block"
                    style={{ color: '#FF3300', fontSize: 45, fontWeight: 600, lineHeight: 1.25 }}
                  >
                    100% Free with Esante.
                  </span>
                </span>
              </button>
            </div>
          </section>

          {/* ── Two-row alternating text / image layout ── */}
          {/* Row 1 total: text(658) + gap(~82) + image(535) ≈ 1275px */}
          <section className="flex flex-col w-full max-w-[1360px] mx-auto px-[42px] mb-[166px] box-border gap-[50px]">

            {/* Row 1: Left text (658px), Right image (535×340, r-37) */}
            <div className="flex flex-row items-center gap-[82px] w-full">
              {/* layout_WMH6YX: 658×520 / style_T5GWL5: Poppins 400/23px/1.5em LEFT */}
              <div className="flex-shrink-0 w-[658px]">
                <p
                  className="font-poppins text-[#000000]"
                  style={{ fontSize: 23, fontWeight: 400, lineHeight: '1.5em', letterSpacing: '-0.15px' }}
                >
                  Every university in Australia evaluates more than just your grades — they evaluate
                  your purpose, your clarity, your readiness, and your authenticity. That's why a
                  strong <strong>Statement of Purpose (SOP)</strong> becomes one of the{' '}
                  <strong>most important documents</strong> in your entire application.
                  <br /><br />
                  It is not just an academic essay — it is a deciding factor for your{' '}
                  <strong>offer letter, visa approval, and scholarship eligibility</strong>.
                </p>
              </div>
              {/* layout_G0CQSB: 535×340 / borderRadius 37px */}
              <div className="flex-shrink-0">
                <img
                  src={IMG_78}
                  alt="University application"
                  className="w-[535px] h-[340px] object-cover rounded-[37px]"
                />
              </div>
            </div>

            {/* Row 2: Left image (503×322, r-27), Right text (607px, right-aligned) */}
            <div className="flex flex-row items-center gap-[82px] w-full">
              {/* layout_JRJ5O9: 503×322 / borderRadius 27px */}
              <div className="flex-shrink-0">
                <img
                  src={IMG_79}
                  alt="Graduation"
                  className="w-[503px] h-[322px] object-cover rounded-[27px]"
                />
              </div>
              {/* layout_JDQL7U: 607×212 / style_ZIDLK6: Poppins 400/23px/1.5em RIGHT */}
              <div className="flex-shrink-0 w-[607px]">
                <p
                  className="font-poppins font-normal text-[23px] text-black"
                  style={{ lineHeight: '1.5em', letterSpacing: '-0.15px', textAlign: 'right' }}
                >
                  <strong>At Esante</strong>, we don't treat SOPs as templates or formalities. We treat them as{' '}
                  <strong>strategic documents</strong> that clearly explain who you are, why Australia, why this
                  course, and how it fits your future — exactly what{' '}
                  <strong>Australian universities and visa officers expect</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* ── "While other agencies" section – layout_3JBGI0: 1065×419 ── */}
          {/* style_RXZ4HY: Poppins 400/23px/1.5em CENTER */}
          <section className="flex flex-col items-center w-full max-w-[1065px] mx-auto mb-[106px] box-border">
            <div className="flex flex-col items-center w-full gap-[26px]">
              <div
                className="font-poppins text-center text-[#000000] text-[23px] font-normal"
                style={{ width: 1065, maxWidth: '100%', lineHeight: '1.5em' }}
              >
                While other agencies charge{' '}
                <span className="font-semibold">₹3,000 - ₹5,000 ($75 AUD)</span>
                {' '}for "copy-paste" services,<br />
                Esante invests in your future.<br /><br />
                <span className="font-semibold italic text-[#00352B] text-[30px] leading-[111%] tracking-[-0.15px]">
                  We provide a
                </span>
                <br />
                <span className="font-semibold italic text-[#FF3300] text-[69px] leading-[111%] tracking-[-0.15px] block">
                  100% FREE
                </span>
                <span className="font-semibold italic text-[#00352B] text-[30px] leading-[150%] tracking-[-0.15px]">
                  custom-written SOP service that aligns your career goals with the Department of Home Affairs' strict "Genuine Student" requirements.<br />
                  We don't just write to get you admitted; we write to get you funding.
                </span>
              </div>
              <button
                type="button"
                className="inline-flex py-[4px] px-[12px] justify-center items-center rounded-[16px] border-0 cursor-pointer"
                style={{ background: '#FF3300' }}
                onClick={openConsultation}
              >
                <span
                  className="font-poppins text-center font-medium"
                  style={{ color: '#FFFBE9', fontSize: 22, fontWeight: 500, lineHeight: '20px' }}
                >
                  Get free SOP with Esante
                </span>
              </button>
            </div>
          </section>

          {/* ── "Why SOP Matters" box – layout_WL79BN: 1158×415 ── */}
          {/* fill_TGJT1X: #F7F7F7 / stroke_KI3E6S: #FF3300 / borderRadius 39px */}
          <section className="flex flex-col items-center w-full max-w-[1158px] mx-auto mb-[118px] box-border">
            <div
              className="flex flex-col w-full bg-[#F7F7F7] rounded-[39px] border border-solid border-[#FF3300] py-[58px] px-[54px] box-border"
              style={{ minHeight: 415 }}
            >
              {/* style_TQYM0C: Poppins 400/45px/1.2em LEFT – layout_AEEQBY: 874×54 */}
              <h2
                className="font-poppins font-normal text-[45px] text-left text-[#00352B] mb-[21px]"
                style={{ width: 874, maxWidth: '100%', lineHeight: '1.2em', letterSpacing: '-0.15px' }}
              >
                Why SOP Matters More Than You Think
              </h2>

              <div className="flex flex-row items-start w-full gap-[50px] mb-[13px]">
                {/* Left column – layout_86ZRCV: 566×128 */}
                <div className="flex flex-col items-start flex-1 gap-[12px]">
                  {/* style_ZIGHR4: Poppins 400/25px/1.2em LEFT – layout_LE6UM7: 289×60 */}
                  <h3
                    className="font-poppins font-normal text-[25px] text-left text-black"
                    style={{ width: 289, lineHeight: '1.2em', letterSpacing: '-0.15px' }}
                  >
                    A strong SOP helps you:
                  </h3>
                  {/* style_QBB0DP: Poppins 400/22px/1.2em LEFT */}
                  <ul className="flex flex-col gap-[12px] list-none p-0 m-0">
                    <li
                      className="font-poppins font-normal text-[22px] text-left text-black"
                      style={{ width: 566, maxWidth: '100%', lineHeight: '1.2em', letterSpacing: '-0.15px' }}
                    >
                      ✅ Meet Genuine Student (GS) / GTE requirements
                    </li>
                    <li
                      className="font-poppins font-normal text-[22px] text-left text-black"
                      style={{ width: 535, maxWidth: '100%', lineHeight: '1.2em', letterSpacing: '-0.15px' }}
                    >
                      ✅ Increase chances of merit-based scholarships
                    </li>
                    <li
                      className="font-poppins font-normal text-[22px] text-left text-black"
                      style={{ width: 566, maxWidth: '100%', lineHeight: '1.2em', letterSpacing: '-0.15px' }}
                    >
                      ✅ Avoid visa delays or refusals due to unclear intent
                    </li>
                  </ul>
                </div>

                {/* Right column – layout_3NFGZK: 540×128 */}
                <div className="flex flex-col items-start flex-1 gap-[12px]">
                  {/* style_QBB0DP: Poppins 400/22px/1.2em LEFT – layout_3GQQZZ: 335×86 */}
                  <h3
                    className="font-poppins font-normal text-[22px] text-left text-black"
                    style={{ width: 335, maxWidth: '100%', lineHeight: '1.2em', letterSpacing: '-0.15px' }}
                  >
                    A weak or generic SOP can:
                  </h3>
                  <ul className="flex flex-col gap-[12px] list-none p-0 m-0">
                    <li className="flex flex-row items-center gap-[5px]">
                      <img src={IMG_ICON_X1} alt="" className="w-[28px] h-[28px] object-fill shrink-0" />
                      <span
                        className="font-poppins font-normal text-[22px] text-left text-black"
                        style={{ lineHeight: '1.2em', letterSpacing: '-0.15px' }}
                      >
                        Raise red flags during visa assessment
                      </span>
                    </li>
                    <li className="flex flex-row items-center gap-[5px]">
                      <img src={IMG_ICON_X2} alt="" className="w-[28px] h-[28px] object-fill shrink-0" />
                      <span
                        className="font-poppins font-normal text-[22px] text-left text-black"
                        style={{ lineHeight: '1.2em', letterSpacing: '-0.15px' }}
                      >
                        Lead to unnecessary rejections
                      </span>
                    </li>
                    <li className="flex flex-row items-center gap-[5px]">
                      <img src={IMG_ICON_X3} alt="" className="w-[28px] h-[28px] object-fill shrink-0" />
                      <span
                        className="font-poppins font-normal text-[22px] text-left text-black"
                        style={{ lineHeight: '1.2em', letterSpacing: '-0.15px' }}
                      >
                        Reduce scholarship chances
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-center w-full">
                <button
                  type="button"
                  className="inline-flex py-[4px] px-[12px] justify-center items-center rounded-[16px] border-0 cursor-pointer"
                  style={{ background: '#FF3300' }}
                  onClick={openConsultation}
                >
                  <span
                    className="font-poppins text-center font-medium"
                    style={{ color: '#FFFBE9', fontSize: 22, fontWeight: 500, lineHeight: '20px' }}
                  >
                    Get free SOP with Esante
                  </span>
                </button>
              </div>
            </div>
          </section>

          {/* ── "Documents We Help You With" section ── */}
          {/* image 77: layout_1D8KK0 443×433 / borderRadius 43px */}
          <section className="flex flex-row items-start w-full max-w-[1224px] mx-auto px-[100px] mb-[118px] gap-[35px] box-border">
            <img
              src={IMG_77}
              alt=""
              className="w-[443px] h-[433px] object-fill shrink-0 rounded-[43px]"
            />
            <div className="flex flex-col items-start shrink-0 gap-[26px] pt-[11px]">
              {/* style_96YDHD: Poppins 500/45px/1.2em LEFT – layout_8CJ487: 650×108 */}
              <h2
                className="font-poppins font-medium text-[45px] text-left text-[#00352B] whitespace-pre-line"
                style={{ width: 650, maxWidth: '100%', lineHeight: '1.2em', letterSpacing: '-0.15px' }}
              >
                Documents{'\n'}<span className="text-[#FF3300]">We Help You With</span>
              </h2>
              {/* style_1FJ4I8: Poppins 600/20px/1.79em LEFT – fill_KKQPDP: rgba(0,0,0,0.75) */}
              <ul
                className="font-poppins font-semibold text-[20px] text-left list-disc pl-6 space-y-2"
                style={{ width: 575, maxWidth: '100%', lineHeight: '1.79em', letterSpacing: '-0.15px', color: 'rgba(0, 0, 0, 0.75)' }}
              >
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

        </div>
      </div>

      <BookFreeCallBanner />
      <Footer />

      <ConsultationPopup
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
