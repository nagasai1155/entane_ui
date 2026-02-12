import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import BookFreeCallBanner from '../components/Home-Page/BookFreeCallBanner';

function NewsBlogsPage(props) {
  const [input1, onChangeInput1] = useState('');
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="news-blogs-page">
      <Header />
      <main
        className="news-blogs-main"
        style={{
          marginTop: '40px',
        }}
      >
        <div className="flex flex-col bg-white">
          <div
            className="self-stretch bg-white pb-[984px]"
            style={{ paddingBottom: 0 }}
          >
            <div className="self-stretch bg-white pt-24 px-28 mb-[65px]">
              <div className="flex flex-col items-center self-stretch gap-10">
                <div className="flex flex-col items-center self-stretch mx-24 gap-6">
                  <div className="flex flex-col items-center self-stretch gap-4">
                    <button
                      className="flex flex-col items-start bg-[#FF3300] text-left py-1 px-[11px] rounded-2xl border-0"
                      onClick={() => alert('Pressed!')}
                    >
                      <span className="text-[#FFFBE9] text-sm">
                        {'Our blog'}
                      </span>
                    </button>
                    <span className="text-[#00352B] text-5xl font-bold">
                      {'Resources and insights'}
                    </span>
                  </div>
                  <span className="text-[#FF3300] text-xl">
                    {
                      'The latest industry news, interviews, technologies, and resources.'
                    }
                  </span>
                </div>
                <div
                  className="flex items-center bg-white px-4 rounded-lg border border-solid border-[#CFD4DC]"
                  style={{
                    boxShadow: '0px 1px 2px #1018280D',
                  }}
                >
                  <img
                    src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/jd4fa2go_expires_30_days.png"
                    className="w-5 h-5 mr-2 object-fill"
                    alt="Search icon"
                  />
                  <input
                    placeholder="Search"
                    value={input1}
                    onChange={(event) => onChangeInput1(event.target.value)}
                    className="text-[#667084] bg-transparent text-base w-[260px] py-3 mr-1 border-0"
                  />
                </div>
              </div>
            </div>
            <div
              className="flex flex-col self-stretch pb-[25px] px-28 gap-16"
              style={{ paddingBottom: 0, marginBottom: 0 }}
            >
              <div className="flex flex-col self-stretch gap-12">
                <div className="flex items-center self-stretch gap-8">
                  <div
                    className="flex flex-1 flex-col items-center bg-white py-7 gap-8"
                    style={{
                      boxShadow: '0px 4px 6px #10182805',
                    }}
                  >
                    <img
                      src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/a10seu3z_expires_30_days.png"
                      className="w-[336px] h-60 object-fill"
                      alt="Blog cover 1"
                    />
                    <div className="flex flex-col items-start self-stretch mx-6 gap-16">
                      <div className="flex flex-col items-start self-stretch gap-3">
                        <span className="text-[#FF3300] text-sm font-bold">
                          {'Design'}
                        </span>
                        <div className="flex flex-col items-start self-stretch gap-3">
                          <div className="flex items-center self-stretch gap-5">
                            <span className="text-[#00352B] text-2xl font-bold">
                              {'UX review presentations'}
                            </span>
                            <img
                              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/kuwgej57_expires_30_days.png"
                              className="w-6 h-7 object-fill"
                              alt="Arrow"
                            />
                          </div>
                          <span className="text-[#667084] text-base w-[318px]">
                            {
                              'How do you create compelling presentations that wow your colleagues and impress your managers?'
                            }
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <img
                          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/m689avim_expires_30_days.png"
                          className="w-10 h-10 object-fill"
                          alt="Author avatar"
                        />
                        <div className="flex flex-col shrink-0 items-start">
                          <span className="text-[#00352B] text-sm mr-[11px]">
                            {'Olivia Rhye'}
                          </span>
                          <span className="text-[#667084] text-sm">
                            {'20 Jan 2022'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-1 flex-col items-center bg-white py-7 gap-8"
                    style={{
                      boxShadow: '0px 4px 6px #10182805',
                    }}
                  >
                    <img
                      src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/bkx2w0lg_expires_30_days.png"
                      className="w-[336px] h-60 object-fill"
                      alt="Blog cover 2"
                    />
                    <div className="flex flex-col items-start self-stretch mx-6 gap-16">
                      <div className="flex flex-col items-start self-stretch gap-3">
                        <span className="text-[#FF3300] text-sm font-bold">
                          {'Product'}
                        </span>
                        <div className="flex flex-col self-stretch gap-3">
                          <div className="flex justify-between items-center self-stretch">
                            <span className="text-[#00352B] text-2xl font-bold">
                              {'Migrating to Linear 101'}
                            </span>
                            <img
                              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/avd99kvx_expires_30_days.png"
                              className="w-6 h-7 object-fill"
                              alt="Arrow"
                            />
                          </div>
                          <span className="text-[#667084] text-base">
                            {
                              'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.'
                            }
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <img
                          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/0c27sxkj_expires_30_days.png"
                          className="w-10 h-10 object-fill"
                          alt="Author avatar"
                        />
                        <div className="flex flex-col shrink-0 items-start">
                          <span className="text-[#00352B] text-sm">
                            {'Phoenix Baker'}
                          </span>
                          <span className="text-[#667084] text-sm mr-[17px]">
                            {'19 Jan 2022'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-1 flex-col items-center bg-white py-7 gap-8"
                    style={{
                      boxShadow: '0px 4px 6px #10182805',
                    }}
                  >
                    <img
                      src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/tu7rflt2_expires_30_days.png"
                      className="w-[336px] h-60 object-fill"
                      alt="Blog cover 3"
                    />
                    <div className="flex flex-col items-start self-stretch mx-6 gap-16">
                      <div className="flex flex-col items-start self-stretch gap-3">
                        <span className="text-[#FF3300] text-sm font-bold">
                          {'Software Engineering'}
                        </span>
                        <div className="flex flex-col self-stretch gap-3">
                          <div className="flex justify-between items-center self-stretch">
                            <span className="text-[#00352B] text-2xl font-bold">
                              {'Building your API Stack'}
                            </span>
                            <img
                              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/0khohsr5_expires_30_days.png"
                              className="w-6 h-7 object-fill"
                              alt="Arrow"
                            />
                          </div>
                          <span className="text-[#667084] text-base">
                            {
                              'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.'
                            }
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <img
                          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/pjbhqecc_expires_30_days.png"
                          className="w-10 h-10 object-fill"
                          alt="Author avatar"
                        />
                        <div className="flex flex-col shrink-0 items-start">
                          <span className="text-[#00352B] text-sm">
                            {'Lana Steiner'}
                          </span>
                          <span className="text-[#667084] text-sm">
                            {'18 Jan 2022'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center self-stretch gap-8">
                  <div
                    className="flex flex-1 flex-col items-center bg-white py-7 gap-8"
                    style={{
                      boxShadow: '0px 4px 6px #10182805',
                    }}
                  >
                    <img
                      src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/35uqro0k_expires_30_days.png"
                      className="w-[336px] h-60 object-fill"
                      alt="Blog cover 4"
                    />
                    <div className="flex flex-col items-start self-stretch mx-6 gap-8">
                      <div className="flex flex-col items-start self-stretch gap-3">
                        <span className="text-[#FF3300] text-sm font-bold">
                          {'Management'}
                        </span>
                        <div className="flex flex-col self-stretch gap-3">
                          <div className="flex justify-between items-start self-stretch">
                            <span className="text-[#00352B] text-2xl font-bold w-[251px]">
                              {'Bill Walsh leadership lessons'}
                            </span>
                            <img
                              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/2p6489ah_expires_30_days.png"
                              className="w-6 h-7 object-fill"
                              alt="Arrow"
                            />
                          </div>
                          <span className="text-[#667084] text-base">
                            {
                              'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?'
                            }
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <img
                          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/843pzck7_expires_30_days.png"
                          className="w-10 h-10 object-fill"
                          alt="Author avatar"
                        />
                        <div className="flex flex-col shrink-0 items-start">
                          <span className="text-[#00352B] text-sm">
                            {'Alec Whitten'}
                          </span>
                          <span className="text-[#667084] text-sm">
                            {'17 Jan 2022'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-1 flex-col items-center bg-white py-7 gap-8"
                    style={{
                      boxShadow: '0px 4px 6px #10182805',
                    }}
                  >
                    <img
                      src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/6heiy6kt_expires_30_days.png"
                      className="w-[336px] h-60 object-fill"
                      alt="Blog cover 5"
                    />
                    <div className="flex flex-col items-start self-stretch mx-6">
                      <div className="flex flex-col items-start self-stretch mb-[88px] gap-3">
                        <span className="text-[#FF3300] text-sm font-bold">
                          {'Product'}
                        </span>
                        <div className="flex flex-col items-start self-stretch gap-3">
                          <div className="flex justify-between items-center self-stretch">
                            <span className="text-[#00352B] text-2xl font-bold">
                              {'PM mental models'}
                            </span>
                            <img
                              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/mqxu43cj_expires_30_days.png"
                              className="w-6 h-7 object-fill"
                              alt="Arrow"
                            />
                          </div>
                          <span className="text-[#667084] text-base w-[323px]">
                            {
                              'Mental models are simple expressions of complex processes or relationships.'
                            }
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <img
                          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/g48yojic_expires_30_days.png"
                          className="w-10 h-10 object-fill"
                          alt="Author avatar"
                        />
                        <div className="flex flex-col shrink-0 items-start">
                          <span className="text-[#00352B] text-sm">
                            {'Demi WIlkinson'}
                          </span>
                          <span className="text-[#667084] text-sm mr-6">
                            {'16 Jan 2022'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-1 flex-col items-center bg-white py-7 gap-8"
                    style={{
                      boxShadow: '0px 4px 6px #10182805',
                    }}
                  >
                    <img
                      src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/84mxzw56_expires_30_days.png"
                      className="w-[336px] h-60 object-fill"
                      alt="Blog cover 6"
                    />
                    <div className="flex flex-col items-start self-stretch mx-6 gap-16">
                      <div className="flex flex-col items-start self-stretch gap-3">
                        <span className="text-[#FF3300] text-sm font-bold">
                          {'Design'}
                        </span>
                        <div className="flex flex-col items-start self-stretch gap-3">
                          <div className="flex justify-between items-center self-stretch">
                            <span className="text-[#00352B] text-2xl font-bold">
                              {'What is Wireframing?'}
                            </span>
                            <img
                              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/dzg4lnmj_expires_30_days.png"
                              className="w-6 h-7 object-fill"
                              alt="Arrow"
                            />
                          </div>
                          <span className="text-[#667084] text-base w-[286px]">
                            {
                              'Introduction to Wireframing and its Principles. Learn from the best in the industry.'
                            }
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <img
                          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/vbrizb6f_expires_30_days.png"
                          className="w-10 h-10 object-fill"
                          alt="Author avatar"
                        />
                        <div className="flex flex-col shrink-0 items-start">
                          <span className="text-[#00352B] text-sm">
                            {'Candice Wu'}
                          </span>
                          <span className="text-[#667084] text-sm">
                            {'15 Jan 2022'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {showMore && (
                  <div className="flex items-center self-stretch gap-8">
                    <div
                      className="flex flex-1 flex-col items-center bg-white py-7 gap-8"
                      style={{
                        boxShadow: '0px 4px 6px #10182805',
                      }}
                    >
                      <img
                        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/5l9aklrq_expires_30_days.png"
                        className="w-[336px] h-60 object-fill"
                        alt="Blog cover 7"
                      />
                      <div className="flex flex-col items-start self-stretch mx-6 gap-6">
                        <div className="flex flex-col items-start self-stretch gap-3">
                          <span className="text-[#FF3300] text-sm font-bold">
                            {'Design'}
                          </span>
                          <div className="flex flex-col self-stretch gap-3">
                            <div className="flex justify-between items-start self-stretch">
                              <span className="text-[#00352B] text-2xl font-bold w-[220px]">
                                {'How collaboration makes us better designers'}
                              </span>
                              <img
                                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/yhdwm77l_expires_30_days.png"
                                className="w-6 h-7 object-fill"
                                alt="Arrow"
                              />
                            </div>
                            <span className="text-[#667084] text-base">
                              {
                                'Collaboration can make our teams stronger, and our individual designs better.'
                              }
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <img
                            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/jjbvft3t_expires_30_days.png"
                            className="w-10 h-10 object-fill"
                            alt="Author avatar"
                          />
                          <div className="flex flex-col shrink-0 items-start">
                            <span className="text-[#00352B] text-sm">
                              {'Natali Craig'}
                            </span>
                            <span className="text-[#667084] text-sm">
                              {'14 Jan 2022'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex flex-1 flex-col items-center bg-white py-7 gap-8"
                      style={{
                        boxShadow: '0px 4px 6px #10182805',
                      }}
                    >
                      <img
                        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/bf56wprm_expires_30_days.png"
                        className="w-[336px] h-60 object-fill"
                        alt="Blog cover 8"
                      />
                      <div className="flex flex-col items-start self-stretch mx-6 gap-8">
                        <div className="flex flex-col items-start self-stretch gap-3">
                          <span className="text-[#FF3300] text-sm font-bold">
                            {'Product'}
                          </span>
                          <div className="flex flex-col items-start self-stretch gap-3">
                            <div className="flex justify-between items-start self-stretch">
                              <span className="text-[#00352B] text-2xl font-bold w-[255px]">
                                {'Our top 10 Javascript frameworks to use'}
                              </span>
                              <img
                                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/naryy2i7_expires_30_days.png"
                                className="w-6 h-7 object-fill"
                                alt="Arrow"
                              />
                            </div>
                            <span className="text-[#667084] text-base w-80">
                              {
                                'JavaScript frameworks make development easy with extensive features and functionalities.'
                              }
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <img
                            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/tq1rm2qy_expires_30_days.png"
                            className="w-10 h-10 object-fill"
                            alt="Author avatar"
                          />
                          <div className="flex flex-col shrink-0 items-start">
                            <span className="text-[#00352B] text-sm mr-[11px]">
                              {'Drew Cano'}
                            </span>
                            <span className="text-[#667084] text-sm">
                              {'13 Jan 2022'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex flex-1 flex-col items-center bg-white py-7 gap-8"
                      style={{
                        boxShadow: '0px 4px 6px #10182805',
                      }}
                    >
                      <img
                        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/msc6lty8_expires_30_days.png"
                        className="w-[336px] h-60 object-fill"
                        alt="Blog cover 9"
                      />
                      <div className="flex flex-col items-start self-stretch mx-6 gap-14">
                        <div className="flex flex-col items-start self-stretch gap-3">
                          <span className="text-[#FF3300] text-sm font-bold">
                            {'Customer Success'}
                          </span>
                          <div className="flex flex-col self-stretch gap-3">
                            <div className="flex justify-between items-start self-stretch">
                              <span className="text-[#00352B] text-2xl font-bold w-[248px]">
                                {'Podcast: Creating a better CX Community'}
                              </span>
                              <img
                                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/bn5uoqui_expires_30_days.png"
                                className="w-6 h-7 object-fill"
                                alt="Arrow"
                              />
                            </div>
                            <span className="text-[#667084] text-base">
                              {
                                'Starting a community doesn’t need to be complicated, but how do you get started?'
                              }
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <img
                            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/vkh218qx_expires_30_days.png"
                            className="w-10 h-10 object-fill"
                            alt="Author avatar"
                          />
                          <div className="flex flex-col shrink-0 items-start">
                            <span className="text-[#00352B] text-sm">
                              {'Orlando Diggs'}
                            </span>
                            <span className="text-[#667084] text-sm mr-[18px]">
                              {'12 Jan 2022'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {!showMore && (
                <div className="flex flex-col items-center self-stretch">
                  <button
                    className="flex items-center bg-[#F9F5FF] text-left py-3 px-5 gap-2 rounded-lg border border-solid border-[#F9F5FF]"
                    style={{
                      boxShadow: '0px 1px 2px #1018280D',
                    }}
                    onClick={() => setShowMore(true)}
                  >
                    <img
                      src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/to8rembx_expires_30_days.png"
                      className="w-5 h-5 rounded-lg object-fill"
                      alt="Load more"
                    />
                    <span className="text-[#FF3300] text-base">
                      {'Load more'}
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <BookFreeCallBanner />
      </main>
      <Footer />
    </div>
  );
}

export default NewsBlogsPage;
