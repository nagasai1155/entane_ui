import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

function CaseStudiesPage(props) {
  return (
    <div className="case-studies-page">
      <Header />
      <main
        className="case-studies-main"
        style={{
          marginTop: '20px',
        }}
      >
        <div className="flex flex-col bg-white">
          <div className="flex flex-col self-stretch bg-white pb-0">
            {/* Hero section */}
            <div className="self-stretch bg-white py-[85px] px-[100px]">
              <div className="flex flex-col self-stretch max-w-[1240px] gap-[41px]">
                <div className="flex flex-col items-center self-stretch pb-[26px] gap-[15px]">
                  <div className="flex flex-col items-center gap-4">
                    <button
                      className="flex flex-col items-start bg-[#FF3300] text-left py-1 px-[11px] rounded-2xl border-0"
                      onClick={() => alert('Pressed!')}
                    >
                      <span className="text-[#FFFBE9] text-sm">Case Studies</span>
                    </button>
                    <span className="text-[#00352B] text-5xl font-bold">
                      Real Stories, Real Success in Australia
                    </span>
                  </div>
                  <span className="text-[#FF3300] text-xl">
                    Discover how students and working professionals successfully migrated to
                    australia, and read their success stories.
                  </span>
                </div>
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/8sadqtxv_expires_30_days.png"
                  className="self-stretch h-[360px] object-fill"
                  alt="Case studies hero"
                />
                <div className="flex justify-between items-start self-stretch px-2.5">
                  <span className="text-[#667084] text-base w-[842px] my-2.5">
                    How do you create compelling presentations that wow your colleagues and impress
                    your managers?How do you create compelling presentations that wow your colleagues
                    and impress your managers?How do you create compelling presentations that wow
                    your colleagues and impress your managers?
                  </span>
                  <button
                    className="flex flex-col shrink-0 items-start bg-[#FF3300] text-left py-2.5 px-5 mt-[38px] rounded-[9px] border-0"
                    onClick={() => alert('Pressed!')}
                  >
                    <span className="text-white text-lg">Read Full Case Study</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="flex items-center self-stretch">
              <div className="flex flex-col shrink-0 items-start pb-2.5 ml-[100px] mr-7">
                <span className="text-[#00352B] text-xl">All</span>
              </div>
              <div className="flex flex-col shrink-0 items-start pb-2.5 mr-7">
                <span className="text-[#00352B] text-xl">Student</span>
              </div>
              <div className="flex flex-col shrink-0 items-start pb-2.5">
                <span className="text-[#00352B] text-xl">Skilled Workers</span>
              </div>
            </div>

            {/* Cards grid */}
            <div className="flex flex-col self-stretch pb-[50px] px-8 mx-20 gap-16">
              <div className="flex items-center self-stretch gap-8">
                <div
                  className="flex flex-1 flex-col items-center bg-white py-7 gap-[23px]"
                  style={{
                    boxShadow: '0px 4px 6px #10182805',
                  }}
                >
                  <img
                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/zofdj8tz_expires_30_days.png"
                    className="w-[336px] h-60 object-fill"
                    alt="Case study 1"
                  />
                  <div className="flex flex-col items-start self-stretch mx-6 gap-3">
                    <span className="text-[#FF3300] text-sm font-bold">Design</span>
                    <div className="flex flex-col items-start self-stretch gap-3">
                      <div className="flex items-center self-stretch gap-5">
                        <span className="text-[#00352B] text-2xl font-bold">
                          UX review presentations
                        </span>
                        <img
                          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/pwfe5r7h_expires_30_days.png"
                          className="w-6 h-7 object-fill"
                          alt="Arrow"
                        />
                      </div>
                      <span className="text-[#667084] text-base w-[318px]">
                        How do you create compelling presentations that wow your colleagues and
                        impress your managers?
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="flex flex-1 flex-col items-center bg-white py-7 gap-[23px]"
                  style={{
                    boxShadow: '0px 4px 6px #10182805',
                  }}
                >
                  <img
                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/wto4ty9p_expires_30_days.png"
                    className="w-[336px] h-60 object-fill"
                    alt="Case study 2"
                  />
                  <div className="flex flex-col items-start self-stretch mx-6 gap-3">
                    <span className="text-[#FF3300] text-sm font-bold">Design</span>
                    <div className="flex flex-col items-start self-stretch gap-3">
                      <div className="flex items-center self-stretch gap-5">
                        <span className="text-[#00352B] text-2xl font-bold">
                          UX review presentations
                        </span>
                        <img
                          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/jpn5k77u_expires_30_days.png"
                          className="w-6 h-7 object-fill"
                          alt="Arrow"
                        />
                      </div>
                      <span className="text-[#667084] text-base w-[318px]">
                        How do you create compelling presentations that wow your colleagues and
                        impress your managers?
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="flex flex-1 flex-col items-center bg-white py-7 gap-[23px]"
                  style={{
                    boxShadow: '0px 4px 6px #10182805',
                  }}
                >
                  <img
                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/gihwd79j_expires_30_days.png"
                    className="w-[336px] h-60 object-fill"
                    alt="Case study 3"
                  />
                  <div className="flex flex-col items-start self-stretch mx-6 gap-3">
                    <span className="text-[#FF3300] text-sm font-bold">Design</span>
                    <div className="flex flex-col items-start self-stretch gap-3">
                      <div className="flex items-center self-stretch gap-5">
                        <span className="text-[#00352B] text-2xl font-bold">
                          UX review presentations
                        </span>
                        <img
                          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/yr1dl3q1_expires_30_days.png"
                          className="w-6 h-7 object-fill"
                          alt="Arrow"
                        />
                      </div>
                      <span className="text-[#667084] text-base w-[318px]">
                        How do you create compelling presentations that wow your colleagues and
                        impress your managers?
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center self-stretch gap-8">
                <div
                  className="flex flex-1 flex-col items-center bg-white py-7 gap-[23px]"
                  style={{
                    boxShadow: '0px 4px 6px #10182805',
                  }}
                >
                  <img
                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/j707o9x1_expires_30_days.png"
                    className="w-[336px] h-60 object-fill"
                    alt="Case study 4"
                  />
                  <div className="flex flex-col items-start self-stretch mx-6 gap-3">
                    <span className="text-[#FF3300] text-sm font-bold">Design</span>
                    <div className="flex flex-col items-start self-stretch gap-3">
                      <div className="flex items-center self-stretch gap-5">
                        <span className="text-[#00352B] text-2xl font-bold">
                          UX review presentations
                        </span>
                        <img
                          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/lx70p8ej_expires_30_days.png"
                          className="w-6 h-7 object-fill"
                          alt="Arrow"
                        />
                      </div>
                      <span className="text-[#667084] text-base w-[318px]">
                        How do you create compelling presentations that wow your colleagues and
                        impress your managers?
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="flex flex-1 flex-col items-center bg-white py-7 gap-[23px]"
                  style={{
                    boxShadow: '0px 4px 6px #10182805',
                  }}
                >
                  <img
                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/6ihhysst_expires_30_days.png"
                    className="w-[336px] h-60 object-fill"
                    alt="Case study 5"
                  />
                  <div className="flex flex-col items-start self-stretch mx-6 gap-3">
                    <span className="text-[#FF3300] text-sm font-bold">Design</span>
                    <div className="flex flex-col items-start self-stretch gap-3">
                      <div className="flex items-center self-stretch gap-5">
                        <span className="text-[#00352B] text-2xl font-bold">
                          UX review presentations
                        </span>
                        <img
                          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/jlpodfyc_expires_30_days.png"
                          className="w-6 h-7 object-fill"
                          alt="Arrow"
                        />
                      </div>
                      <span className="text-[#667084] text-base w-[318px]">
                        How do you create compelling presentations that wow your colleagues and
                        impress your managers?
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="flex flex-1 flex-col items-center bg-white py-7 gap-[23px]"
                  style={{
                    boxShadow: '0px 4px 6px #10182805',
                  }}
                >
                  <img
                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/3ehrvc6a_expires_30_days.png"
                    className="w-[336px] h-60 object-fill"
                    alt="Case study 6"
                  />
                  <div className="flex flex-col items-start self-stretch mx-6 gap-3">
                    <span className="text-[#FF3300] text-sm font-bold">Design</span>
                    <div className="flex flex-col items-start self-stretch gap-3">
                      <div className="flex items-center self-stretch gap-5">
                        <span className="text-[#00352B] text-2xl font-bold">
                          UX review presentations
                        </span>
                        <img
                          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/tbzpfkvf_expires_30_days.png"
                          className="w-6 h-7 object-fill"
                          alt="Arrow"
                        />
                      </div>
                      <span className="text-[#667084] text-base w-[318px]">
                        How do you create compelling presentations that wow your colleagues and
                        impress your managers?
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Load more */}
              <div className="flex flex-col items-center self-stretch">
                <button
                  className="flex items-center bg-[#F9F5FF] text-left py-3 px-5 gap-2 rounded-lg border border-solid border-[#F9F5FF]"
                  style={{
                    boxShadow: '0px 1px 2px #1018280D',
                  }}
                  onClick={() => alert('Pressed!')}
                >
                  <img
                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/8bfzyrso_expires_30_days.png"
                    className="w-5 h-5 rounded-lg object-fill"
                    alt="Load more"
                  />
                  <span className="text-[#FF3300] text-base">Load more</span>
                </button>
              </div>
            </div>

            {/* Bottom banner image */}
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/9jsdqdqf_expires_30_days.png"
              className="self-stretch max-w-[1048px] h-[350px] mx-auto object-fill"
              alt="Call to action"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CaseStudiesPage;
