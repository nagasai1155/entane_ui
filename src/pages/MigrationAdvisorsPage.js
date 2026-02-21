import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
// Hero – Figma: left image | middle (image + green block) | right image. Use existing assets.
const HERO_LEFT = '/images/sop-img-78.png';
const HERO_RIGHT = '/images/ptj-story1.png';

const STATS = [
  { value: '140,000 +', label: 'skilled and family visas granted' },
  { value: '13,000 +', label: 'humanitarian visas granted' },
  { value: '1.9m +', label: 'temporary visas granted' },
];

const EXPERTS = [
  { name: 'Michael Sterling', role: 'CEO - Founder' },
  { name: 'Henry Dawson', role: 'Legal Consultant' },
  { name: 'Emily Carter', role: 'Client Relations Manager' },
];

export default function MigrationAdvisorsPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    currentRole: '',
    date: '',
    time: '',
  });

  const openConsultation = () => window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="migration-advisors-page flex flex-col w-full bg-white">
      <Header />

      <main style={{ paddingTop: '120px' }}>
        {/* ── Hero: white card, no gap below nav. Figma: badge → title → subtitle → 3-col visual ── */}
        <section className="w-full max-w-[1280px] mx-auto px-6 pt-6 pb-12">
          <div className="w-full rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden">
            {/* Top: CUSTOMER STORIES badge (blue) + title + subtitle */}
            <div className="text-center pt-8 pb-6 px-6">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6" style={{ backgroundColor: '#2563EB' }}>
                <span className="text-white text-xs font-semibold tracking-wider">CUSTOMER STORIES</span>
              </div>
              <h1 className="font-poppins font-bold text-[#00352B] text-3xl md:text-[42px] leading-tight mb-4 max-w-3xl mx-auto">
                Trusted by top <span style={{ color: '#EAB308', backgroundColor: 'rgba(234,179,8,0.15)' }} className="px-1">companies</span> to reimagine recognition
              </h1>
              <p className="font-poppins text-[#64748B] text-base md:text-lg max-w-2xl mx-auto">
                Explore customer insights and share your rewards and recognition journey.
              </p>
            </div>

            {/* Col 1,2,4: images. Col 3: green block with image on top, text below (like reference) */}
            <div className="flex flex-col md:flex-row items-stretch gap-2.5 md:gap-[10px] w-full max-w-[960px] mx-auto">
              <div className="relative w-full md:min-w-0 h-[320px] md:h-[420px] overflow-hidden rounded-t-2xl" style={{ flex: '160 160 0' }}>
                <img src={HERO_LEFT} alt="" className="w-full h-full object-cover" width={160} height={420} />
              </div>
              <div className="flex flex-col md:flex-row w-full md:min-w-0 gap-0 md:gap-[10px]" style={{ flex: '720 720 0' }}>
                <div className="relative w-full md:min-w-0 h-[320px] md:h-[420px] overflow-hidden rounded-t-2xl" style={{ flex: '160 160 0' }}>
                  <img src={HERO_RIGHT} alt="" className="w-full h-full object-cover" width={160} height={420} />
                </div>
                <div
                  className="relative w-full min-h-[320px] md:h-[420px] flex flex-row font-poppins text-white md:min-w-0 overflow-hidden rounded-t-2xl"
                  style={{ flex: '560 560 0' }}
                >
                  <div className="relative w-[130px] md:w-[140px] shrink-0 h-full flex items-center justify-center p-2 md:p-3" style={{ backgroundColor: '#00352B' }}>
                    <img src={HERO_LEFT} alt="" className="w-full h-full object-cover rounded-2xl" width={140} height={420} />
                  </div>
                  <div className="flex-1 flex flex-col justify-center p-5 md:p-6 min-w-0 text-left" style={{ backgroundColor: '#00352B' }}>
                    <p className="text-4xl md:text-5xl font-bold leading-tight">12,000+</p>
                    <p className="text-sm md:text-base font-medium text-white/95 mb-14 md:mb-16">programme recognitions</p>
                    <p className="text-sm text-white/85 leading-relaxed">
                      &ldquo;Southwest Gas partnered with Cheersly to design a highly effective, incentive-driven safety recognition program, complete with courses and training opportunities tailored to their employees&rsquo; needs and culture.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-full md:min-w-0 h-[320px] md:h-[420px] overflow-hidden rounded-t-2xl" style={{ flex: '160 160 0' }}>
                <img src={HERO_RIGHT} alt="" className="w-full h-full object-cover" width={160} height={420} />
              </div>
            </div>
          </div>
        </section>

        {/* Stats – 3 cream cards, Figma spacing */}
        <section className="w-full max-w-[1280px] mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 text-center font-poppins border border-[#E5E7EB] shadow-sm"
                style={{ backgroundColor: '#FFFBE9' }}
              >
                <p className="text-2xl md:text-3xl font-bold text-[#00352B] mb-2">{stat.value}</p>
                <p className="text-[#64748B] text-sm md:text-base lowercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet the experts – title + 3 cards */}
        <section className="w-full max-w-[1280px] mx-auto px-6 mb-20">
          <h2 className="font-poppins font-semibold text-[#00352B] text-3xl md:text-4xl text-center mb-10">
            Meet the experts in the <span className="text-[#FF3300]">field</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EXPERTS.map((expert, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-gray-200 shadow-md overflow-hidden"
                style={{ minHeight: '300px' }}
              >
                <div className="h-48 bg-gray-100" />
                <div className="p-5">
                  <p className="font-poppins font-semibold text-[#00352B]">{expert.name}</p>
                  <p className="font-poppins text-sm text-[#64748B]">{expert.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Study + Form – left green card (with bg image), right form. Figma copy. */}
        <section className="w-full max-w-[1280px] mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              className="rounded-2xl p-10 text-white font-poppins relative overflow-hidden min-h-[380px] flex flex-col justify-between"
              style={{ backgroundColor: '#00352B' }}
            >
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/images/sop-hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden />
              <div className="relative z-10">
                <span className="text-xs font-semibold tracking-widest text-[#FF3300] uppercase">GLOBAL EDUCATION</span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2">Study in 10+ countries.</h3>
                <p className="text-[#FF3300] text-2xl md:text-3xl font-bold mt-1">Dream big.</p>
                <p className="text-white/90 text-base mt-4 leading-relaxed">
                  Get expert guidance for your international education journey. Book a 1:1 session with our top counsellors today.
                </p>
              </div>
              <div className="relative z-10 flex gap-8 mt-8">
                <div>
                  <p className="text-2xl font-bold">5k+</p>
                  <p className="text-sm text-white/80">Students Placed</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">98%</p>
                  <p className="text-sm text-white/80">Success Rate</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 shadow-lg p-8">
              <h3 className="font-poppins font-semibold text-[#00352B] text-xl mb-6">Book 1:1 Consulting</h3>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm focus:ring-2 focus:ring-[#00352B] focus:border-transparent outline-none"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm focus:ring-2 focus:ring-[#00352B] focus:border-transparent outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm focus:ring-2 focus:ring-[#00352B] focus:border-transparent outline-none"
                  />
                </div>
                <select
                  name="currentRole"
                  value={formData.currentRole}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm focus:ring-2 focus:ring-[#00352B] focus:border-transparent outline-none bg-white"
                >
                  <option value="">Select your current role</option>
                  <option value="student">Student</option>
                  <option value="professional">Professional</option>
                  <option value="employer">Employer</option>
                </select>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="date"
                    placeholder="27/11/2025"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm focus:ring-2 focus:ring-[#00352B] focus:border-transparent outline-none"
                  />
                  <input
                    type="text"
                    name="time"
                    placeholder="--:--"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm focus:ring-2 focus:ring-[#00352B] focus:border-transparent outline-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={openConsultation}
                  className="w-full font-poppins font-semibold text-white bg-[#FF3300] rounded-lg py-3.5 mt-2 hover:opacity-90 transition-opacity uppercase tracking-wide"
                >
                  BOOK 1:1 CONSULTING +
                </button>
                <p className="text-gray-500 text-xs text-center mt-2">
                  By submitting, you agree to our Terms & Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* CTA strip – Figma: dark green, white text, orange button */}
        <section className="w-full py-16 px-6" style={{ backgroundColor: '#00352B' }}>
          <div className="max-w-[900px] mx-auto text-center">
            <p className="font-poppins text-white text-xl md:text-2xl leading-relaxed mb-8">
              Ready To Start Your Australian Journey? Let Our Experts In Mumbai And Brisbane Guide You Every Step Of The Way.
            </p>
            <a
              href="/#book-free-call"
              className="inline-block font-poppins font-medium text-white rounded-lg px-8 py-3 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#FF3300' }}
            >
              Book Free Call
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
