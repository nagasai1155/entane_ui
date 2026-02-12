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

const HERO_GRID_IMAGES = [
  "/images/about-us/hero-bg.png",
  "/images/about-us/team-image.png",
  "/images/about-us/philosophy-image.png",
  "/images/about-us/founder-image.png",
  "/images/about-us/employers.png",
  "/images/about-us/migration-partners.png",
];

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
    question: "Is there a free trial or free consultation available?",
    answer:
      "Yes. You can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my course or visa plan later?",
    answer: null,
  },
  {
    question: "What is your cancellation policy?",
    answer: null,
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
        {/* Hero: left text, right 2x3 grid */}
        <section className="self-stretch bg-white">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12 md:py-16 flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-8">
            <div className="lg:w-[48%] flex flex-col text-left">
              <h1 className="text-[#1a1a1a] text-3xl md:text-5xl lg:text-[56px] font-bold leading-[1.05] tracking-tight mb-6">
                {HERO_CONFIG.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="text-[#6b6b6b] text-base md:text-lg leading-relaxed mb-8">
                {HERO_CONFIG.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href={HERO_CONFIG.primaryCtaLink}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-[10px] bg-[#1a1a1a] text-white font-medium text-sm hover:bg-[#00352B] transition-colors"
                >
                  {HERO_CONFIG.primaryCta}
                </a>
                <a
                  href={HERO_CONFIG.secondaryCtaLink}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-[10px] bg-white text-[#1a1a1a] font-medium text-sm border border-[#1a1a1a] hover:border-[#00352B] hover:text-[#00352B] transition-colors"
                >
                  {HERO_CONFIG.secondaryCta}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {HERO_CONFIG.avatarImages.map((avatar, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200 flex-shrink-0"
                    >
                      <img
                        src={avatar}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-[#6b6b6b] text-sm">
                  Join with{" "}
                  <span className="font-semibold text-[#1a1a1a]">
                    2100+ Users
                  </span>{" "}
                  and start generating images now
                </p>
              </div>
            </div>
            <div className="lg:w-[52%] rounded-t-2xl overflow-hidden bg-white">
              <div className="grid grid-cols-2 grid-rows-3 gap-3 md:gap-4">
                {HERO_GRID_IMAGES.map((src, i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden bg-gray-100 aspect-[4/3]"
                  >
                    <img
                      src={src}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
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

        {/* Testimonials – 3-column structured grid */}
        <section className="self-stretch bg-white py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <p className="text-center text-sm md:text-base text-[#6B7280] mb-8">
              Hear from students who have successfully started their
              international education journey
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:auto-rows-[260px] justify-items-center">
              {TESTIMONIALS.map((item, index) => {
                let extraClasses = "";
                if (index === 0) extraClasses = "lg:col-start-1 lg:row-start-1";
                if (index === 1) extraClasses = "lg:col-start-1 lg:row-start-2";
                if (index === 2)
                  extraClasses =
                    "lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:h-[540px]";
                if (index === 3) extraClasses = "lg:col-start-3 lg:row-start-1";
                if (index === 4) extraClasses = "lg:col-start-3 lg:row-start-2";

                const baseHeight =
                  index === 2 ? "h-[360px] sm:h-[420px] lg:h-[540px]" : "h-[260px]";

                return (
                  <article
                    key={`${item.name}-${index}`}
                    className={`relative rounded-[32px] overflow-hidden bg-gray-100 flex items-end shadow-md w-full max-w-[220px] ${baseHeight} ${extraClasses}`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white transition-colors"
                      aria-label={`Play testimonial from ${item.name}`}
                    >
                      <span className="ml-0.5 inline-block w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[11px] border-l-[#111827]" />
                    </button>
                    <div className="relative z-10 w-full px-4 pb-4">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-black/80 text-white text-xs">
                        <span className="font-semibold mr-1">
                          {item.name}
                        </span>
                        <span className="opacity-80">
                          | {item.university}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="flex flex-col items-center self-stretch py-20 gap-5">
          <h2 className="text-[#00352B] text-[74px] font-bold text-center max-md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col self-stretch max-w-[1064px] mx-auto gap-0 w-full px-4">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="flex flex-col self-stretch">
                  {index > 0 && (
                    <div className="self-stretch bg-[#00352B1A] h-[1px]" />
                  )}
                  <div
                    className="flex flex-col self-stretch gap-6 cursor-pointer py-4"
                    onClick={() => toggleFaq(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleFaq(index);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <div className="flex items-start self-stretch gap-6">
                      <div className="flex flex-1 flex-col items-start pr-[22px] gap-2 min-w-0">
                        <span
                          className={`text-[#00352B] ${
                            index >= 4 ? "text-xl" : "text-lg"
                          } font-medium`}
                        >
                          {item.question}
                        </span>
                        {item.answer && (
                          <div
                            id={`faq-answer-${index}`}
                            className={`overflow-hidden transition-all duration-200 ${
                              isOpen
                                ? "max-h-[500px] opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                            aria-hidden={!isOpen}
                          >
                            <span className="text-[#00352B] text-base block pt-1">
                              {item.answer}
                            </span>
                          </div>
                        )}
                      </div>
                      <svg
                        className={`w-6 h-[26px] shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

