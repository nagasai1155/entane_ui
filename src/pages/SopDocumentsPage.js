import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import EsanteBanner from '../components/Reusable/EsanteBanner';
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

      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center w-full bg-white pb-[67px] pt-[172px]">

          {/* ── Hero Text Section ── layout_KB3QL8: 329×21 + layout_PD34US: 1192×240 + layout_AUFVEU: 299×28 */}
          <section
            className="flex flex-col items-center justify-center mb-[41px] gap-[16px]"
            style={{ width: 1192, maxWidth: '100%' }}
          >
            {/* style_K7AKVO: Poppins 500 / 28px / 0.75em / CENTER / letterSpacing -2% – fill_TACDVB #00352B */}
            <h1
              className="font-poppins text-center font-medium text-[28px]"
              style={{ color: '#00352B', lineHeight: '0.75em', letterSpacing: '-0.56px' }}
            >
              SOP & Other Documents
            </h1>

            {/* style_HVCOPT: Poppins 600 / 48px / 1.25em – mixed fills: red first line, green second */}
            <p
              className="font-poppins text-center font-semibold"
              style={{ color: '#FF3300', fontSize: 48, fontWeight: 600, lineHeight: '1.25em' }}
            >
              We don't change your story
            </p>
            <h1
              className="font-poppins text-center font-semibold"
              style={{ color: '#00352B', fontSize: 48, fontWeight: 600, lineHeight: '1.25em' }}
            >
              we help you tell it better
            </h1>

            {/* layout_1U41OA: row / center / pad 4px 12px / hug / 16px radius – fill_WCG1R6 #FF3300 */}
            {/* style_W0KH1E: Poppins 500 / 22px / 0.909em – fills Light Background #FFFBE9 */}
            <button
              type="button"
              className="inline-flex py-[4px] px-[12px] justify-center items-center rounded-[16px] border-0 cursor-pointer"
              style={{ background: '#FF3300' }}
              onClick={openConsultation}
            >
              <span
                className="font-poppins text-center font-medium"
                style={{ color: '#FFFBE9', fontSize: 22, fontWeight: 500, lineHeight: '0.909em' }}
              >
                Get free SOP with Esante
              </span>
            </button>
          </section>

          {/* ── Hero Background Image – layout_B2E8YL: 1440×747 ── */}
          <section
            className="flex flex-col items-center w-full h-[747px] mb-[100px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${IMG_HERO_BG}')` }}
          >
            <div className="flex flex-col items-center justify-end w-full h-full pb-[50px]">
              {/* layout_WUCKEB: 730×123 / borderRadius 48px / fill_TY0IEG rgba(0,53,43,0.94) */}
              <button
                type="button"
                className="flex flex-col items-center justify-center w-[730px] h-[123px] rounded-[48px] border-0 cursor-pointer"
                style={{ background: 'rgba(0, 53, 43, 0.94)' }}
                onClick={openConsultation}
              >
                {/* style_I84XD6: Poppins 600/45px CENTER – layout_0BINCF: 919×44 */}
                <span className="font-poppins flex flex-col items-center w-full">
                  <span
                    className="font-poppins text-center block"
                    style={{
                      color: '#FFFFFF',
                      fontSize: 31,
                      fontWeight: 400,
                      lineHeight: 1.35,
                    }}
                  >
                    GTE-Compliant. Scholarship-Focused.
                  </span>
                  <span
                    className="font-poppins italic text-center block"
                    style={{ color: '#FF3300', fontSize: 45, fontWeight: 600, lineHeight: 1.15 }}
                  >
                    100% Free with Esante.
                  </span>
                </span>
              </button>
            </div>
          </section>

          {/* ── Two-row alternating text / image layout ── */}
          {/* Row 1: layout_JMRVXZ 658×520 text + layout_5IJ57Z 535×340 image */}
          {/* Row 2: layout_UX9PKW 503×322 image + layout_1X0DTB 607×212 text */}
          <section className="flex flex-col w-full max-w-[1360px] mx-auto px-[42px] mb-[166px] box-border gap-[50px]">

            {/* Row 1: Left text (658px), Right image (535×340, r-37) */}
            <div className="flex flex-row items-center gap-[82px] w-full">
              {/* layout_JMRVXZ: 658×520 / style_NJKVD4: Poppins 400/23px/1.5em LEFT / fill_ASM57N #000000 */}
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
              {/* layout_5IJ57Z: 535×340 / borderRadius 37px / fill_5BJ2RN image */}
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
              {/* layout_UX9PKW: 503×322 / borderRadius 27px / fill_O31E53 image */}
              <div className="flex-shrink-0">
                <img
                  src={IMG_79}
                  alt="Graduation"
                  className="w-[503px] h-[322px] object-cover rounded-[27px]"
                />
              </div>
              {/* layout_1X0DTB: 607×212 / style_H18ES3: Poppins 400/23px/1.5em RIGHT / fill_ASM57N #000000 */}
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

          {/* ── "While other agencies" section – layout_OTWOPH: 1065×419 ── */}
          {/* text node layout_Q0E0C8: 1065×365 / style_FYWEEX: Poppins 400/23px/1.5em CENTER */}
          {/* badge layout_LJ786A at y=391 inside group */}
          <section className="flex flex-col items-center w-full max-w-[1065px] mx-auto mb-[106px] box-border">
            <div className="flex flex-col items-center w-full gap-[26px]">
              <div
                className="font-poppins text-center text-[#000000] text-[23px] font-normal"
                style={{ width: 1065, maxWidth: '100%', lineHeight: '1.5em', letterSpacing: '-0.15px' }}
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
              {/* layout_1U41OA: row / center / pad 4px 12px / 16px radius – fill_WCG1R6 #FF3300 */}
              <button
                type="button"
                className="inline-flex py-[4px] px-[12px] justify-center items-center rounded-[16px] border-0 cursor-pointer"
                style={{ background: '#FF3300' }}
                onClick={openConsultation}
              >
                <span
                  className="font-poppins text-center font-medium"
                  style={{ color: '#FFFBE9', fontSize: 22, fontWeight: 500, lineHeight: '0.909em' }}
                >
                  Get free SOP with Esante
                </span>
              </button>
            </div>
          </section>

          {/* ── "Why SOP Matters" box ── */}
          {/* layout_YWF1QV: 1158×415 / fill_3ZPU2N #F7F7F7 / stroke_WCUFRK #FF3300 1px / borderRadius 39px */}
          <section className="flex flex-col items-center w-full max-w-[1158px] mx-auto mb-[118px]">
            <div className="flex flex-col w-full bg-[#F7F7F7] rounded-[39px] border border-solid border-[#FF3300] py-[30px] px-[40px] box-border">

              {/* layout_FSYRKU: 874×54 / style_8BHTE3: Poppins 400/45px/1.2em LEFT / "SOP Matters" = red italic text-run override */}
              <h2
                className="font-poppins font-normal text-[45px] text-left text-[#00352B] mb-[24px]"
                style={{ lineHeight: '1.2em', letterSpacing: '-0.33px' }}
              >
                Why{' '}
                <em style={{ color: '#FF3300', fontStyle: 'italic', fontWeight: 400 }}>SOP Matters</em>
                {' '}More Than You Think
              </h2>

              {/* Two columns — layout_WD99WP 566×128 + layout_R29MUR 540×128
                  Left col fixed w-[566px] (exact Figma width), right col fills remaining space */}
              <div className="flex flex-row items-start w-full gap-[50px] mb-[26px]">

                {/* Left column — layout_WD99WP: 566×128 */}
                <div className="w-[566px] shrink-0 flex flex-col items-start gap-[12px]">
                  {/* layout_MYWQ3U: 289×60 / style_04MCR8: Poppins 400/25px/1.2em / fill_IA4OOR #000000 */}
                  <p className="font-poppins font-normal text-[25px] text-black"
                    style={{ lineHeight: '1.2em', letterSpacing: '-0.15px' }}>
                    A strong SOP helps you:
                  </p>
                  {/* style_3WLT51: Poppins 400/22px/1.2em — reduced to 20px so longest item stays single-line in 566px column */}
                  <ul className="flex flex-col gap-[12px] list-none p-0 m-0">
                    <li className="font-poppins font-normal text-[20px] text-black whitespace-nowrap"
                      style={{ lineHeight: '1.2em', letterSpacing: '-0.15px' }}>
                      ✅ Meet Genuine Student (GS) / GTE requirements
                    </li>
                    <li className="font-poppins font-normal text-[20px] text-black whitespace-nowrap"
                      style={{ lineHeight: '1.2em', letterSpacing: '-0.15px' }}>
                      ✅ Increase chances of merit-based scholarships
                    </li>
                    <li className="font-poppins font-normal text-[20px] text-black whitespace-nowrap"
                      style={{ lineHeight: '1.2em', letterSpacing: '-0.15px' }}>
                      ✅ Avoid visa delays or refusals due to unclear intent
                    </li>
                  </ul>
                </div>

                {/* Right column — layout_R29MUR: 540×128 / order: Reduce → Raise → Lead (Figma) */}
                <div className="flex-1 min-w-0 flex flex-col items-start gap-[12px]">
                  {/* layout_NZ1546: 335×86 / style_XDTO6D: Poppins 400/22px/1.2em / fill_KIR5A4 #000000 */}
                  <p className="font-poppins font-normal text-[22px] text-black"
                    style={{ lineHeight: '1.2em', letterSpacing: '-0.15px' }}>
                    A weak or generic SOP can:
                  </p>
                  {/* layout_BADTS8/PCZSTT/1ZLLNQ: 28×28 X icons / font matched to left column 20px */}
                  <ul className="flex flex-col gap-[12px] list-none p-0 m-0">
                    <li className="flex flex-row items-center gap-[5px]">
                      <img src={IMG_ICON_X3} alt="" className="w-[28px] h-[28px] object-cover shrink-0" />
                      <span className="font-poppins font-normal text-[20px] text-black whitespace-nowrap"
                        style={{ lineHeight: '1.2em', letterSpacing: '-0.15px' }}>
                        Reduce scholarship chances
                      </span>
                    </li>
                    <li className="flex flex-row items-center gap-[5px]">
                      <img src={IMG_ICON_X1} alt="" className="w-[28px] h-[28px] object-cover shrink-0" />
                      <span className="font-poppins font-normal text-[20px] text-black whitespace-nowrap"
                        style={{ lineHeight: '1.2em', letterSpacing: '-0.15px' }}>
                        Raise red flags during visa assessment
                      </span>
                    </li>
                    <li className="flex flex-row items-center gap-[5px]">
                      <img src={IMG_ICON_X2} alt="" className="w-[28px] h-[28px] object-cover shrink-0" />
                      <span className="font-poppins font-normal text-[20px] text-black whitespace-nowrap"
                        style={{ lineHeight: '1.2em', letterSpacing: '-0.15px' }}>
                        Lead to unnecessary rejections
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* layout_1U41OA: row / center / pad 4px 12px / 16px radius / fill_WCG1R6 #FF3300 */}
              {/* style_W0KH1E: Poppins 500/22px/0.909em / fills Light Background #FFFBE9 */}
              <div className="flex justify-center w-full">
                <button
                  type="button"
                  className="inline-flex py-[4px] px-[12px] justify-center items-center rounded-[16px] border-0 cursor-pointer"
                  style={{ background: '#FF3300' }}
                  onClick={openConsultation}
                >
                  <span className="font-poppins text-center font-medium"
                    style={{ color: '#FFFBE9', fontSize: 22, fontWeight: 500, lineHeight: '0.909em' }}>
                    Get free SOP with Esante
                  </span>
                </button>
              </div>

            </div>
          </section>

          {/* ── "Documents We Help You With" section ── */}
          {/* layout_INSY5E: 443×433 borderRadius 43px + layout_W958AF: 650×108 + layout_DPGFHO: 575×288 */}
          <section className="flex flex-row items-start w-full max-w-[1158px] mx-auto px-[54px] mb-[118px] gap-[35px] box-border">
            {/* image 77 – layout_INSY5E: 443×433 / borderRadius 43px / fill_K6ZLYX image */}
            <img
              src={IMG_77}
              alt=""
              className="w-[443px] h-[433px] object-cover shrink-0 rounded-[43px]"
            />
            <div className="flex flex-col items-start shrink-0 gap-[26px] pt-[11px]">
              {/* layout_W958AF: 650×108 / style_ZS1WNF: Poppins 500/45px/1.2em LEFT / Primary Color #00352B */}
              <h2
                className="font-poppins font-medium text-[45px] text-left text-[#00352B] whitespace-pre-line"
                style={{ width: 650, maxWidth: '100%', lineHeight: '1.2em', letterSpacing: '-0.15px' }}
              >
                Documents{'\n'}<span className="text-[#FF3300]">We Help You With</span>
              </h2>
              {/* layout_DPGFHO: 575×288 / style_UM6UZV: Poppins 600/20px/1.79em LEFT / fill_L84D8M rgba(0,0,0,0.75) */}
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

      <EsanteBanner />
      <Footer />

      <ConsultationPopup
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
