import React, { useState } from "react";
import "./WhyAustralia.css";

// ========== Config / Data ==========

const HERO_CONFIG = {
  titleLines: ["Turn Your Ideas into", "Stunning Visuals", "with AI"],
  description:
    "Describe anything you imagine, and let our AI bring it to life in breathtaking, high-quality images.",
  primaryCta: "Start Creating",
  primaryCtaLink: "/#services",
  secondaryCta: "Explore Gallery",
  secondaryCtaLink: "/#services",
  avatarImages: [
    "/images/about-us/soni-image.png",
    "/images/about-us/joush-image.png",
    "/images/about-us/founder-image.png",
  ],
};

// const HERO_GRID_IMAGES = [
//   "/images/about-us/hero-bg.png",
//   "/images/about-us/team-image.png",
//   "/images/about-us/philosophy-image.png",
//   "/images/about-us/founder-image.png",
//   "/images/about-us/employers.png",
//   "/images/about-us/migration-partners.png",
// ];

const STEP_CARDS = [
  {
    number: "01",
    title: "Browse and Choose",
    description:
      "Explore universities and courses that match your academic goals, budget, and preferences.",
    image: "/images/home-page/students.png",
  },
  {
    number: "02",
    title: "Apply with Ease",
    description:
      "Complete applications online, upload documents once, and apply to multiple universities.",
    image: "/images/home-page/professionals.png",
  },
  {
    number: "03",
    title: "Get Expert Support",
    description:
      "Receive guidance from counselors who understand regional requirements and visa processes.",
    image: "/images/home-page/migration.png",
  },
];

const TESTIMONIALS = [
  {
    name: "John Deo",
    university: "ABCD University",
    image: "/images/home-page/australia.png",
  },
  {
    name: "John Deo",
    university: "ABCD University",
    image: "/images/home-page/australia.png",
  },
  {
    name: "John Deo",
    university: "ABCD University",
    image: "/images/home-page/australia.png",
  },
  {
    name: "John Deo",
    university: "ABCD University",
    image: "/images/home-page/australia.png",
  },
  {
    name: "John Deo",
    university: "ABCD University",
    image: "/images/home-page/australia.png",
  },
  {
    name: "John Deo",
    university: "ABCD University",
    image: "/images/home-page/australia.png",
  },
  {
    name: "John Deo",
    university: "ABCD University",
    image: "/images/home-page/australia.png",
  },
];

const LIFESTYLE_TOP_ROW = [
  { className: "bg-[#00352B] w-[129px] h-[154px] mt-[87px] rounded-[11px]" },
  {
    className:
      "shrink-0 bg-[#00352B] pt-[26px] pr-[13px] mt-[87px] rounded-[11px]",
    inner: true,
  },
  { className: "bg-[#00352B] w-[129px] h-[154px] rounded-[11px]" },
  { className: "bg-[#00352B] w-[129px] h-[154px] mt-9 rounded-[11px]" },
];

const LIFESTYLE_BOTTOM_ROW = [
  { className: "bg-[#00352B] w-[129px] h-[154px] mt-[38px] rounded-[11px]" },
  { className: "flex-1 self-stretch", spacer: true },
  {
    className:
      "bg-[#00352B] w-[129px] h-[154px] mt-[38px] mr-[245px] rounded-[11px]",
  },
  { className: "bg-[#00352B] w-[129px] h-[154px] rounded-[11px]" },
];

const CAREER_CATEGORIES = [
  "Counsellors",
  "Working Professionals",
  "College Students",
  "Class 11-12",
  "Class 10",
  "Class 8-9",
  "Study Abroad",
];

const CAREER_SERVICES_BY_CATEGORY = {
  "Working Professionals": [
    {
      image: "/images/home-page/professionals.png",
      title: "Masterclass For Working Professionals",
      features: [
        "13 Short Course Bundle",
        "Gain Insights from Industry Experts",
      ],
      price: "6,500/-",
    },
    {
      image: "/images/home-page/image 52.png",
      title: "Career And Job Switch Guidance",
      features: [
        "Psychometric Test+1-4 Video Sessions",
        "6 Months Support",
      ],
      price: "5,000-10,000/-",
    },
    {
      image: "/images/home-page/image 53.png",
      title: "LinkedIn, Resume Creation & Review",
      features: [
        "Updated LinkedIn & Resume",
        "Unlimited Edits For 4 Weeks",
      ],
      price: "10,000/-",
    },
  ],
  Counsellors: [
    {
      image: "/images/home-page/students.png",
      title: "Counsellor Training Program",
      features: ["Certification Course", "Expert-Led Sessions"],
      price: "8,000/-",
    },
    {
      image: "/images/home-page/image 54.png",
      title: "Career Counselling Workshop",
      features: ["2-Day Intensive", "Hands-On Tools"],
      price: "4,500/-",
    },
    {
      image: "/images/home-page/skill-1.png",
      title: "Student Assessment Toolkit",
      features: ["Psychometric & Aptitude", "1 Month Access"],
      price: "3,000/-",
    },
  ],
  "College Students": [
    {
      image: "/images/home-page/students.png",
      title: "Campus to Career Program",
      features: ["12 Module Course", "Placement Support"],
      price: "7,500/-",
    },
    {
      image: "/images/home-page/course-management-1.jpg",
      title: "Internship Readiness",
      features: ["Resume & Interview Prep", "3 Months Mentorship"],
      price: "5,500/-",
    },
    {
      image: "/images/home-page/skill-2.png",
      title: "Skill Building Bootcamp",
      features: ["Industry-Ready Skills", "Certificate Included"],
      price: "6,000/-",
    },
  ],
};

const FAQ_ITEMS = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes. You can upgrade, downgrade, or switch plans at any time from your account settings. Changes are applied at the start of your next billing cycle so you’re never double-charged.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. Your account will remain active until the end of the current billing period, and you won’t be billed again unless you choose to reactivate.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes. You can add your company name, GST/VAT details, billing address, or purchase order numbers to your invoice from the billing section before the next payment is processed.",
  },
  {
    question: "How does billing work?",
    answer:
      "We bill you automatically at the beginning of each billing cycle using the payment method saved on your account. You can download detailed invoices and payment history at any time from your dashboard.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "Go to your profile settings, update the email field, and confirm the change via the verification link we send to your new email address. Once verified, all notifications and login will use the new email.",
  },
];

// ========== Component ==========

export default function WhyAustralia() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [activeCareerCategoryIndex, setActiveCareerCategoryIndex] =
    useState(1);

  const activeCategoryName = CAREER_CATEGORIES[activeCareerCategoryIndex];
  const currentServices =
    CAREER_SERVICES_BY_CATEGORY[activeCategoryName] ||
    CAREER_SERVICES_BY_CATEGORY["Working Professionals"];

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-col self-stretch bg-white">
        {/* Hero – updated to AI landing layout */}
        <section className="self-stretch bg-white">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Turn Your Ideas into Stunning Visuals with AI
                </h1>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Describe anything you imagine, and let our AI bring it to life in breathtaking,
                  high-quality images.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={HERO_CONFIG.primaryCtaLink}
                    className="bg-black text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-800 transition-colors"
                  >
                    Start Creating
                  </a>
                  <a
                    href={HERO_CONFIG.secondaryCtaLink}
                    className="bg-white text-gray-900 px-8 py-3.5 rounded-full font-medium border border-gray-300 hover:border-gray-400 transition-colors"
                  >
                    Explore Gallery
                  </a>
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white" />
                    <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white" />
                    <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Join with <span className="font-semibold">2100+ Users</span> and start
                    generating image now
                  </p>
                </div>
              </div>

              {/* Right Image Grid */}
              <div className="grid grid-cols-2 gap-4 md:ml-4 lg:ml-10 xl:ml-20">
                {/* Top Left */}
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/images/about-us/team-image.png"
                    alt="Students"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Top Right */}
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/images/about-us/soni-image.png"
                    alt="Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Middle Left – tall */}
                <div className="rounded-2xl overflow-hidden row-span-2">
                  <img
                    src="/images/about-us/philosophy-image.png"
                    alt="Blue chair style visual"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Middle Right */}
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/images/about-us/employers.png"
                    alt="Work setup"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom Right */}
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="/images/about-us/dream-action-bg.png"
                    alt="Minimalist aesthetic"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="self-stretch bg-white py-14 md:py-16">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <p className="text-center text-[#111827] text-base md:text-lg font-medium mb-10">
              Three simple steps to start your international education journey
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {STEP_CARDS.map((step) => (
                <article
                  key={step.number}
                  className="flex flex-col bg-[#E6F7EC] rounded-[24px] overflow-hidden shadow-sm"
                >
                  <div className="h-[190px] md:h-[210px] overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <p className="text-[#047857] text-sm font-semibold mb-2">
                      {step.number}
                    </p>
                    <h3 className="text-[#111827] text-xl font-semibold mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[#4B5563] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
              <article className="flex flex-col bg-gradient-to-b from-[#22C55E] to-[#047857] text-white rounded-[24px] p-6 md:p-8 justify-between shadow-md">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Connect With Us
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed mb-6">
                    Have questions or need personalised advice? Our team is here
                    to help you every step of the way.
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#047857] text-sm md:text-base font-medium hover:bg-gray-100 transition-colors self-start"
                >
                  Get Started Now →
                </button>
              </article>
            </div>
          </div>
        </section>

        {/* Lifestyle & Culture */}
        <section className="self-stretch pt-[3px]">
          <div className="flex justify-between items-start self-stretch mb-[26px] mx-[77px] flex-wrap gap-4">
            {LIFESTYLE_TOP_ROW.map((card, i) => (
              <div
                key={`top-${i}`}
                className={`rounded-[11px] overflow-hidden ${card.className}`}
              >
                {card.inner && (
                  <div className="flex flex-col items-start">
                    <div className="bg-[#00352B] w-[95px] h-[77px] rounded-[11px]" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center self-stretch mb-9">
            <h2 className="text-black text-[58px] font-bold text-center">
              Lifestyle & Culture
            </h2>
          </div>
          <div className="flex items-start self-stretch max-w-[1085px] mb-[42px] ml-[274px] mr-[81px] flex-wrap gap-4 max-md:ml-auto max-md:mr-auto max-md:px-4 max-md:justify-center">
            {LIFESTYLE_BOTTOM_ROW.map((card, i) => (
              <div
                key={`bottom-${i}`}
                className={
                  card.spacer
                    ? "flex-1 self-stretch min-w-[100px]"
                    : `bg-[#00352B] rounded-[11px] overflow-hidden ${card.className}`
                }
              />
            ))}
          </div>
        </section>

        {/* Career Services (simplified) */}
        <section className="self-stretch py-14 md:py-16 bg-[#FFFBE9]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3">
              Career Services Tailored For You
              <span
                className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF3300] align-middle ml-0.5"
                aria-hidden
              />
            </h2>
            <p className="text-black text-base md:text-lg text-center max-w-[720px] mx-auto mb-10">
              Our services are meticulously designed to unveil your potential,
              interests, learning styles, and skills, scientifically.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {CAREER_CATEGORIES.map((name, i) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setActiveCareerCategoryIndex(i)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    i === activeCareerCategoryIndex
                      ? "bg-[#00352B] text-white"
                      : "text-black bg-transparent hover:bg-black/5"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentServices.map((service) => (
                <article
                  key={service.title}
                  className="flex flex-col bg-white rounded-t-2xl overflow-hidden shadow-md border border-[#00352B]/10"
                >
                  <div className="aspect-[4/3] bg-[#00352B]/5 overflow-hidden">
                    <img
                      src={service.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-[#00352B] text-white p-5 flex flex-col gap-3">
                    <h3 className="font-bold text-lg leading-tight">
                      {service.title}
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {service.features.map((text) => (
                        <li key={text} className="flex items-center gap-2">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="flex items-center gap-1.5 text-sm font-medium pt-1">
                      <span>₹</span>
                      <span>{service.price}</span>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials – What Our Students Say (fixed editorial grid: 220x200, 220x420, 320x420) */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 text-sm bg-green-100 text-green-700 rounded-full mb-4">
              ★ Testimonials
            </span>
            <h2 className="text-3xl font-bold">What Our Students Say</h2>
            <p className="text-gray-500 mt-2">
              Hear from students who have successfully started their international education journey
            </p>
          </div>

          {/* Fixed CSS grid with named areas and exact pixel sizes (no responsive auto sizing / masonry) */}
          <div
            className="grid gap-6"
            style={{
              // 5 fixed columns: 220, 220, 320, 220, 220
              gridTemplateColumns: "220px 220px 320px 220px 220px",
              // 2 fixed rows: 200 + 220 = 420 for tall cards
              gridTemplateRows: "200px 220px",
              gridTemplateAreas: `"a b c d e" "a f c g e"`,
            }}
          >
            {/* We map the first 7 testimonials into the fixed positions a–g */}
            <TestimonialCard
              area="a"
              img={TESTIMONIALS[0]?.image}
              name={TESTIMONIALS[0]?.name}
              university={TESTIMONIALS[0]?.university}
            />
            <TestimonialCard
              area="b"
              img={TESTIMONIALS[1]?.image}
              name={TESTIMONIALS[1]?.name}
              university={TESTIMONIALS[1]?.university}
            />
            <TestimonialCard
              area="c"
              img={TESTIMONIALS[2]?.image}
              name={TESTIMONIALS[2]?.name}
              university={TESTIMONIALS[2]?.university}
            />
            <TestimonialCard
              area="d"
              img={TESTIMONIALS[3]?.image}
              name={TESTIMONIALS[3]?.name}
              university={TESTIMONIALS[3]?.university}
            />
            <TestimonialCard
              area="e"
              img={TESTIMONIALS[4]?.image}
              name={TESTIMONIALS[4]?.name}
              university={TESTIMONIALS[4]?.university}
            />
            <TestimonialCard
              area="f"
              img={TESTIMONIALS[5]?.image}
              name={TESTIMONIALS[5]?.name}
              university={TESTIMONIALS[5]?.university}
            />
            <TestimonialCard
              area="g"
              img={TESTIMONIALS[6]?.image}
              name={TESTIMONIALS[6]?.name}
              university={TESTIMONIALS[6]?.university}
            />
          </div>
        </section>

        {/* FAQ – matches Figma layout */}
        <section className="self-stretch bg-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-[#024C3A] text-4xl md:text-5xl font-bold mb-10">
              Frequently Asked Questions
            </h2>
            <div className="divide-y divide-[#E5E7EB]">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index}>
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-start justify-between gap-4 py-5 md:py-6 text-left focus:outline-none"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <div className="flex-1">
                        <p className="text-base md:text-lg font-medium text-[#024C3A]">
                          {item.question}
                        </p>
                        {isOpen && item.answer && (
                          <p
                            id={`faq-answer-${index}`}
                            className="mt-2 text-sm md:text-base text-[#4B5563]"
                          >
                            {item.answer}
                          </p>
                        )}
                      </div>
                      <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#FF3300] text-[#FF3300] text-xs shrink-0">
                        {isOpen ? "−" : "+"}
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function TestimonialCard({ area, img, name, university }) {
  return (
    <div
      style={{ gridArea: area }}
      className="relative overflow-hidden rounded-3xl bg-gray-200 w-full h-full"
    >
      {/* Image */}
      <img
        src={img}
        alt={name || "testimonial"}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
          ▶
        </div>
      </div>

      {/* Name Badge */}
      <div
        className="absolute bottom-3 left-3 right-3 
                    bg-black/55 backdrop-blur
                    text-white text-xs px-4 py-2 rounded-full"
      >
        {name || "John Doe"} | {university || "ABCD University"}
      </div>
    </div>
  );
}


