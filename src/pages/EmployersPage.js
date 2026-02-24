import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

/* ═══════════════════════════════════════════════════════════════════════════
   SVG: Product Jar Illustration (replaces hero image)
   ═══════════════════════════════════════════════════════════════════════════ */
function ProductJarIllustration() {
  return (
    <div className="relative" style={{ width: 580, height: 560 }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 580 560">
        <defs>
          <linearGradient id="pillGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ede9dd" />
            <stop offset="100%" stopColor="#d8d2c3" />
          </linearGradient>
          <linearGradient id="pillGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c9c4b5" />
            <stop offset="100%" stopColor="#b8b2a2" />
          </linearGradient>
          <filter id="pillShadow">
            <feDropShadow dx="1" dy="3" stdDeviation="3" floodOpacity="0.18" />
          </filter>
          <linearGradient id="jarGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f0ebe0" />
            <stop offset="25%" stopColor="#ece6d8" />
            <stop offset="60%" stopColor="#e4ddd0" />
            <stop offset="100%" stopColor="#d9d2c4" />
          </linearGradient>
          <linearGradient id="jarGlassEdge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d5cebd" />
            <stop offset="8%" stopColor="#ece6d8" />
            <stop offset="92%" stopColor="#e4ddd0" />
            <stop offset="100%" stopColor="#cfc8b8" />
          </linearGradient>
          <linearGradient id="jarLid" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3a3a3a" />
            <stop offset="40%" stopColor="#222" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
          <linearGradient id="lidShine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="30%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="70%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <linearGradient id="glassReflect" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* Scattered pills — top right cluster */}
        <ellipse cx="440" cy="22" rx="16" ry="10" fill="url(#pillGrad1)" filter="url(#pillShadow)" transform="rotate(-25 440 22)" />
        <ellipse cx="490" cy="50" rx="14" ry="9" fill="url(#pillGrad2)" filter="url(#pillShadow)" transform="rotate(18 490 50)" />
        <ellipse cx="530" cy="30" rx="13" ry="8" fill="url(#pillGrad1)" filter="url(#pillShadow)" transform="rotate(-10 530 30)" />
        <ellipse cx="400" cy="45" rx="12" ry="7.5" fill="url(#pillGrad2)" filter="url(#pillShadow)" transform="rotate(35 400 45)" />
        <ellipse cx="555" cy="75" rx="14" ry="8.5" fill="url(#pillGrad1)" filter="url(#pillShadow)" transform="rotate(-40 555 75)" />
        <ellipse cx="465" cy="80" rx="11" ry="7" fill="url(#pillGrad1)" filter="url(#pillShadow)" transform="rotate(12 465 80)" />

        {/* Scattered pills — right side */}
        <ellipse cx="520" cy="340" rx="15" ry="9" fill="url(#pillGrad2)" filter="url(#pillShadow)" transform="rotate(-20 520 340)" />
        <ellipse cx="540" cy="380" rx="13" ry="8" fill="url(#pillGrad1)" filter="url(#pillShadow)" transform="rotate(25 540 380)" />

        {/* Scattered pills — bottom cluster */}
        <ellipse cx="350" cy="510" rx="16" ry="10" fill="url(#pillGrad1)" filter="url(#pillShadow)" transform="rotate(22 350 510)" />
        <ellipse cx="400" cy="530" rx="14" ry="9" fill="url(#pillGrad2)" filter="url(#pillShadow)" transform="rotate(-18 400 530)" />
        <ellipse cx="450" cy="505" rx="12" ry="7.5" fill="url(#pillGrad1)" filter="url(#pillShadow)" transform="rotate(40 450 505)" />
        <ellipse cx="310" cy="525" rx="13" ry="8" fill="url(#pillGrad2)" filter="url(#pillShadow)" transform="rotate(-35 310 525)" />
        <ellipse cx="480" cy="540" rx="11" ry="7" fill="url(#pillGrad1)" filter="url(#pillShadow)" transform="rotate(8 480 540)" />

        {/* Scattered pills — left of jar */}
        <ellipse cx="160" cy="380" rx="14" ry="9" fill="url(#pillGrad2)" filter="url(#pillShadow)" transform="rotate(30 160 380)" />
        <ellipse cx="140" cy="420" rx="12" ry="7.5" fill="url(#pillGrad1)" filter="url(#pillShadow)" transform="rotate(-15 140 420)" />

        {/* ——— Main Jar ——— */}
        <g transform="translate(175, 40)">
          {/* Jar shadow on surface */}
          <ellipse cx="115" cy="472" rx="120" ry="18" fill="rgba(0,0,0,0.07)" filter="url(#softGlow)" />

          {/* Glass body */}
          <rect x="5" y="62" width="220" height="408" rx="14" fill="url(#jarGlass)" />
          <rect x="5" y="62" width="220" height="408" rx="14" fill="url(#jarGlassEdge)" opacity="0.4" />

          {/* Glass left reflection stripe */}
          <rect x="12" y="70" width="18" height="390" rx="9" fill="url(#glassReflect)" />

          {/* Glass subtle inner glow */}
          <rect x="15" y="68" width="200" height="395" rx="10" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />

          {/* Label area */}
          <rect x="28" y="130" width="174" height="310" rx="5" fill="#ffffff" />
          <rect x="28" y="130" width="174" height="310" rx="5" fill="none" stroke="#e5e0d5" strokeWidth="0.6" />

          {/* Brand: Bite */}
          <text x="48" y="180" fontFamily="Georgia, serif" fontWeight="700" fontSize="34" fill="#1a1a1a" letterSpacing="-0.5">Bite</text>
          <text x="120" y="171" fontFamily="Poppins, sans-serif" fontWeight="400" fontSize="10" fill="#777" letterSpacing="2">248 BITS</text>

          {/* Green separator */}
          <rect x="46" y="194" width="130" height="1.8" rx="0.9" fill="#4a8c7f" />

          {/* Instructions heading */}
          <text x="46" y="216" fontFamily="Poppins, sans-serif" fontWeight="600" fontSize="8" fill="#4a8c7f" letterSpacing="0.6">INSTRUCTIONS</text>

          {/* Instructions body */}
          <text fontFamily="Poppins, sans-serif" fontWeight="400" fontSize="8" fill="#555">
            <tspan x="46" y="234">Place one (1) bit in your mouth, bite</tspan>
            <tspan x="46" dy="14">down, brush with a wet toothbrush —</tspan>
            <tspan x="46" dy="14">twice a day, every day.</tspan>
          </text>

          {/* Bottom label */}
          <text x="46" y="370" fontFamily="Poppins, sans-serif" fontWeight="400" fontSize="6" fill="#999" letterSpacing="0.4">NATURALLY WHITENING TOOTHPASTE BITS</text>

          {/* Lid — dark metallic screw top */}
          <rect x="10" y="38" width="210" height="30" rx="8" fill="url(#jarLid)" />
          <rect x="10" y="38" width="210" height="30" rx="8" fill="url(#lidShine)" />
          <rect x="14" y="42" width="202" height="22" rx="6" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.7" />

          {/* Lid knob */}
          <rect x="55" y="18" width="120" height="24" rx="12" fill="url(#jarLid)" />
          <rect x="55" y="18" width="120" height="24" rx="12" fill="url(#lidShine)" />

          {/* Glass rim between lid and body */}
          <rect x="8" y="62" width="214" height="8" rx="4" fill="#ddd8cb" />
          <rect x="8" y="62" width="214" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
        </g>
      </svg>

      {/* "Recommended by doctors" badge */}
      <div
        className="absolute flex items-center bg-white rounded-full shadow-lg"
        style={{ top: 12, right: -10, padding: '9px 18px 9px 12px', gap: 8 }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="11" fill="#4a8c7f" opacity="0.15" />
          <path d="M11 5c-1.6 0-2.7 1-2.7 2.2v1h5.4v-1C13.7 6 12.6 5 11 5z" fill="#4a8c7f" />
          <rect x="6.5" y="8.2" width="9" height="7.5" rx="1.2" fill="#4a8c7f" />
          <path d="M10 11.5h2M11 10.5v2" stroke="#fff" strokeWidth="1.1" strokeLinecap="round" />
        </svg>
        <span style={{ fontSize: 13, fontWeight: 500, color: '#1a1a1a', fontFamily: 'Poppins, sans-serif' }}>
          Recommended by doctors
        </span>
      </div>

      {/* "Trusted by 21,000+ People" badge */}
      <div
        className="absolute flex items-center bg-white rounded-lg shadow-lg"
        style={{ bottom: 55, right: 10, padding: '10px 16px', gap: 8 }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <polygon points="10,1 12.7,7.2 19,7.8 14.5,12 15.8,18 10,15 4.2,18 5.5,12 1,7.8 7.3,7.2" fill="#f0c040" />
        </svg>
        <span style={{ fontSize: 13, fontWeight: 500, color: '#1a1a1a', fontFamily: 'Poppins, sans-serif' }}>
          Trusted by 21,000+ People
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SVG: Phone Mockup with Trading App (replaces stats image)
   ═══════════════════════════════════════════════════════════════════════════ */
function PhoneMockup() {
  return (
    <div className="relative rounded-[20px] overflow-hidden" style={{ width: 240, height: 280, background: '#f0ece3' }}>
      <svg viewBox="0 0 240 280" width="240" height="280">
        <defs>
          <linearGradient id="phoneBody" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#111" />
          </linearGradient>
          <clipPath id="phoneScreen">
            <rect x="52" y="20" width="140" height="244" rx="14" />
          </clipPath>
          <linearGradient id="chartLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00352B" />
            <stop offset="100%" stopColor="#4a8c7f" />
          </linearGradient>
        </defs>

        {/* Hand holding the phone - simplified */}
        <ellipse cx="45" cy="170" rx="35" ry="80" fill="#d4a574" opacity="0.6" />
        <ellipse cx="195" cy="180" rx="30" ry="70" fill="#d4a574" opacity="0.4" />

        {/* Phone body */}
        <rect x="48" y="15" width="148" height="252" rx="18" fill="url(#phoneBody)" />

        {/* Phone screen */}
        <g clipPath="url(#phoneScreen)">
          <rect x="52" y="20" width="140" height="244" fill="#ffffff" />

          {/* Status bar */}
          <text x="62" y="38" fontSize="7" fill="#333" fontWeight="500">9:41</text>
          <circle cx="170" cy="34" r="3" fill="#4CAF50" />

          {/* Back arrow */}
          <path d="M62 50 L58 54 L62 58" stroke="#333" strokeWidth="1.5" fill="none" />

          {/* Price */}
          <text x="62" y="82" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="18" fill="#1a1a1a">$139.85</text>
          <circle cx="120" cy="77" r="4" fill="#4CAF50" opacity="0.3" />

          {/* Chart area */}
          <polyline
            points="60,130 80,125 100,135 120,110 140,120 160,105 180,115"
            fill="none"
            stroke="url(#chartLine)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="60,130 80,125 100,135 120,110 140,120 160,105 180,115 180,160 60,160"
            fill="url(#chartLine)"
            opacity="0.07"
          />

          {/* Time labels */}
          <text x="60" y="170" fontSize="5" fill="#aaa">1D</text>
          <text x="85" y="170" fontSize="5" fill="#aaa">1W</text>
          <text x="110" y="170" fontSize="5" fill="#aaa">1M</text>
          <text x="135" y="170" fontSize="5" fill="#aaa">3M</text>
          <text x="160" y="170" fontSize="5" fill="#aaa">1Y</text>

          {/* Buy button */}
          <rect x="105" y="185" width="80" height="24" rx="12" fill="#4CAF50" />
          <text x="132" y="201" fontSize="9" fill="#fff" fontWeight="600" textAnchor="middle">Buy</text>

          {/* Bottom nav icons */}
          <circle cx="75" cy="240" r="4" fill="#ddd" />
          <circle cx="100" r="4" cy="240" fill="#ddd" />
          <circle cx="125" cy="240" r="4" fill="#ddd" />
          <circle cx="150" cy="240" r="4" fill="#ddd" />
          <circle cx="175" cy="240" r="4" fill="#ddd" />
        </g>

        {/* Notch */}
        <rect x="95" y="18" width="54" height="12" rx="6" fill="#1a1a1a" />
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Stats Grid (right side of "Why Employers Choose Us")
   ═══════════════════════════════════════════════════════════════════════════ */
function StatsGrid() {
  const avatars = [
    { bg: '#8B5CF6', initials: 'AK' },
    { bg: '#059669', initials: 'MJ' },
    { bg: '#D97706', initials: 'SR' },
    { bg: '#DC2626', initials: 'PL' },
    { bg: '#2563EB', initials: 'TN' },
    { bg: '#7C3AED', initials: 'RW' },
  ];

  return (
    <div className="flex flex-col" style={{ gap: 16, flex: '1 1 0', minWidth: 0 }}>
      {/* Top row: phone + $14B card */}
      <div className="flex" style={{ gap: 16 }}>
        <PhoneMockup />
        <div
          className="flex flex-col justify-center rounded-[20px]"
          style={{ flex: 1, background: '#f3f1ed', padding: '30px 24px' }}
        >
          <span className="font-poppins" style={{ fontSize: 48, fontWeight: 700, color: '#1a1a1a', lineHeight: 1.1 }}>
            $14B
          </span>
          <span className="font-poppins" style={{ fontSize: 15, fontWeight: 400, color: '#666', marginTop: 6 }}>
            Funds &amp; Syndicates
          </span>
        </div>
      </div>

      {/* Bottom row: 27k+ and 80k cards */}
      <div className="flex" style={{ gap: 16 }}>
        <div
          className="flex flex-col justify-center rounded-[20px]"
          style={{ flex: 1, background: '#f3f1ed', padding: '30px 24px' }}
        >
          <span className="font-poppins" style={{ fontSize: 48, fontWeight: 700, color: '#1a1a1a', lineHeight: 1.1 }}>
            27k+
          </span>
          <span className="font-poppins" style={{ fontSize: 15, fontWeight: 400, color: '#666', marginTop: 6 }}>
            Raised by startups
          </span>
        </div>
        <div
          className="flex flex-col justify-center rounded-[20px]"
          style={{ flex: 1, background: '#f0ece3', padding: '30px 24px' }}
        >
          <span className="font-poppins" style={{ fontSize: 48, fontWeight: 700, color: '#1a1a1a', lineHeight: 1.1 }}>
            80k
          </span>
          <span className="font-poppins" style={{ fontSize: 15, fontWeight: 400, color: '#666', marginTop: 6 }}>
            Active members
          </span>
          {/* Avatar row */}
          <div className="flex" style={{ marginTop: 12 }}>
            {avatars.map((a, i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-full border-2 border-white"
                style={{
                  width: 36,
                  height: 36,
                  background: a.bg,
                  marginLeft: i === 0 ? 0 : -8,
                  zIndex: avatars.length - i,
                }}
              >
                <span style={{ fontSize: 10, fontWeight: 600, color: '#fff' }}>{a.initials}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Value Proposition Checkmark Item
   ═══════════════════════════════════════════════════════════════════════════ */
function ValueCheckItem({ boldText, normalText }) {
  return (
    <div className="flex items-start" style={{ gap: 12, marginBottom: 14 }}>
      <div
        className="flex items-center justify-center rounded-full flex-shrink-0"
        style={{ width: 26, height: 26, background: '#FF3300', marginTop: 1 }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 7l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span className="font-poppins" style={{ fontSize: 15, lineHeight: '1.6em', color: '#333' }}>
        <strong style={{ color: '#1a1a1a' }}>{boldText}</strong> {normalText}
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Collaboration Form
   ═══════════════════════════════════════════════════════════════════════════ */
function CollaborationForm() {
  const [form, setForm] = useState({
    companyName: '',
    contactPerson: '',
    workEmail: '',
    phoneNumber: '',
    industry: '',
    hiringNeeds: '',
    requirements: '',
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    fontSize: 14,
    fontFamily: 'Poppins, sans-serif',
    border: '1px solid #ddd',
    borderRadius: 8,
    outline: 'none',
    color: '#1a1a1a',
    background: '#fff',
  };

  const labelStyle = {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '1.2px',
    color: '#1a1a1a',
    marginBottom: 6,
    fontFamily: 'Poppins, sans-serif',
    textTransform: 'uppercase',
  };

  const selectStyle = {
    ...inputStyle,
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 16px center',
    paddingRight: 40,
  };

  return (
    <div className="w-full rounded-[16px] bg-white" style={{ padding: '40px 44px', maxWidth: 660, margin: '0 auto' }}>
      {/* Row 1 */}
      <div className="flex" style={{ gap: 24, marginBottom: 24 }}>
        <div className="flex flex-col" style={{ flex: 1 }}>
          <label style={labelStyle}>Company Name</label>
          <input
            type="text"
            placeholder="Your Business Name"
            value={form.companyName}
            onChange={handleChange('companyName')}
            style={inputStyle}
          />
        </div>
        <div className="flex flex-col" style={{ flex: 1 }}>
          <label style={labelStyle}>Contact Person</label>
          <input
            type="text"
            placeholder="Full Name"
            value={form.contactPerson}
            onChange={handleChange('contactPerson')}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex" style={{ gap: 24, marginBottom: 24 }}>
        <div className="flex flex-col" style={{ flex: 1 }}>
          <label style={labelStyle}>Work Email</label>
          <input
            type="email"
            placeholder="name@company.com"
            value={form.workEmail}
            onChange={handleChange('workEmail')}
            style={inputStyle}
          />
        </div>
        <div className="flex flex-col" style={{ flex: 1 }}>
          <label style={labelStyle}>Phone Number</label>
          <input
            type="tel"
            placeholder="+61 ..."
            value={form.phoneNumber}
            onChange={handleChange('phoneNumber')}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex" style={{ gap: 24, marginBottom: 24 }}>
        <div className="flex flex-col" style={{ flex: 1 }}>
          <label style={labelStyle}>Industry</label>
          <select
            value={form.industry}
            onChange={handleChange('industry')}
            style={selectStyle}
          >
            <option value="" disabled>Select Industry</option>
            <option value="healthcare">Healthcare</option>
            <option value="construction">Construction</option>
            <option value="hospitality">Hospitality</option>
            <option value="engineering">Engineering</option>
            <option value="it">IT & Technology</option>
            <option value="mining">Mining</option>
            <option value="trades">Trades</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex flex-col" style={{ flex: 1 }}>
          <label style={labelStyle}>Hiring Needs</label>
          <select
            value={form.hiringNeeds}
            onChange={handleChange('hiringNeeds')}
            style={selectStyle}
          >
            <option value="" disabled>Select Volume</option>
            <option value="1-5">1–5 positions</option>
            <option value="6-20">6–20 positions</option>
            <option value="21-50">21–50 positions</option>
            <option value="50+">50+ positions</option>
          </select>
        </div>
      </div>

      {/* Specific Requirements */}
      <div className="flex flex-col" style={{ marginBottom: 28 }}>
        <label style={labelStyle}>Specific Requirements</label>
        <textarea
          placeholder="Tell us about the roles you are looking to fill..."
          value={form.requirements}
          onChange={handleChange('requirements')}
          rows={5}
          style={{ ...inputStyle, resize: 'vertical', minHeight: 110 }}
        />
      </div>

      {/* Submit button */}
      <button
        className="w-full font-poppins"
        style={{
          padding: '15px 0',
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: '1.5px',
          color: '#fff',
          background: '#00352B',
          border: 'none',
          borderRadius: 8,
          cursor: 'pointer',
          textTransform: 'uppercase',
        }}
      >
        Submit Enquiry
      </button>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Main Page
   ═══════════════════════════════════════════════════════════════════════════ */
function EmployersPage() {
  return (
    <div className="service-page">
      <Header />
      <main className="service-page__main" style={{ paddingTop: 0, paddingBottom: 0 }}>

        {/* ═══ 1. HERO SECTION ══════════════════════════════════════════════ */}
        <section
          className="flex flex-row items-center w-full"
          style={{
            background: '#f8f5ef',
            padding: '60px 100px 60px 80px',
            minHeight: 584,
            gap: 20,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Left column — center-aligned content */}
          <div
            className="flex flex-col items-center"
            style={{ flex: '0 0 42%', zIndex: 1, textAlign: 'center', padding: '20px 10px' }}
          >
            <h1
              className="m-0"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 58,
                fontWeight: 700,
                lineHeight: 1.08,
                color: '#1a1a1a',
                letterSpacing: '-0.8px',
              }}
            >
              It's time to<br />brush{' '}
              <span style={{ color: '#2d6a4f', fontStyle: 'italic' }}>
                better.
              </span>
            </h1>
            <p
              className="m-0"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 15,
                lineHeight: '1.7em',
                color: '#555',
                marginTop: 22,
                maxWidth: 360,
              }}
            >
              Clean up your routine with Toothpaste Bits. No plastic, no harsh chemicals – just a better way to brush your teeth.
            </p>
            <button
              style={{
                marginTop: 30,
                padding: '16px 80px',
                fontFamily: 'Poppins, sans-serif',
                fontSize: 15,
                fontWeight: 600,
                color: '#fff',
                background: '#00352B',
                border: 'none',
                borderRadius: 50,
                cursor: 'pointer',
              }}
            >
              Shop Now
            </button>
          </div>

          {/* Right column — product illustration */}
          <div className="flex items-center justify-center" style={{ flex: '1 1 0', minWidth: 0, zIndex: 1 }}>
            <ProductJarIllustration />
          </div>
        </section>

        {/* ═══ 2. WHY EMPLOYERS CHOOSE US ═══════════════════════════════════ */}
        <section
          className="flex flex-row items-stretch w-full"
          style={{
            background: '#FFFBE9',
            padding: '80px 100px',
            gap: 25,
          }}
        >
          {/* Left column — text */}
          <div className="flex flex-col justify-center" style={{ flex: '1 1 0', minWidth: 0, gap: 10 }}>
            <div className="flex flex-col" style={{ gap: 14 }}>
              <h2
                className="font-poppins font-bold m-0"
                style={{
                  fontSize: 40,
                  lineHeight: '1.12em',
                  letterSpacing: '-0.375%',
                  color: '#00352B',
                }}
              >
                Why Employers Choose Us
              </h2>
              <p
                className="font-poppins font-normal m-0"
                style={{
                  fontSize: 16,
                  lineHeight: '1.5em',
                  letterSpacing: '-0.94%',
                  color: '#00352B',
                }}
              >
                Legal pathways to employment abroad, including skilled migration, corporate, and talent programs.Legal pathways to employment abroad, including
              </p>
            </div>

            <h3
              className="font-poppins font-bold m-0"
              style={{ fontSize: 24, lineHeight: '1.5em', color: '#000', marginTop: 10 }}
            >
              Our Value Proposition:
            </h3>

            {/* Value proposition items */}
            <div style={{ marginTop: 6 }}>
              <ValueCheckItem
                boldText="Global Reach:"
                normalText="Access candidates from 190+ countries."
              />
              <ValueCheckItem
                boldText="Compliance First:"
                normalText="We handle skill assessments and visa sponsorship paperwork."
              />
              <ValueCheckItem
                boldText="Cultural Integration:"
                normalText="Our candidates undergo cultural orientation before arrival."
              />
            </div>
          </div>

          {/* Right column — stats grid */}
          <StatsGrid />
        </section>

        {/* ═══ 3. LET'S COLLABORATE (FORM SECTION) ═════════════════════════ */}
        <section
          className="flex flex-col items-center w-full"
          style={{
            background: '#00291F',
            padding: '80px 100px',
            position: 'relative',
          }}
        >
          {/* Subtle radial glow */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80%',
              height: '50%',
              background: 'radial-gradient(ellipse at center top, rgba(74,140,127,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <h2
            className="font-poppins font-bold m-0"
            style={{
              fontSize: 40,
              lineHeight: '1.2em',
              color: '#ffffff',
              fontStyle: 'italic',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            Let's Collaborate
          </h2>
          <p
            className="font-poppins m-0"
            style={{
              fontSize: 14,
              lineHeight: '1.6em',
              color: 'rgba(255,255,255,0.55)',
              fontStyle: 'italic',
              textAlign: 'center',
              marginTop: 10,
              maxWidth: 560,
              position: 'relative',
              zIndex: 1,
            }}
          >
            Ready to solve your staffing shortages? Fill out the form below and our Corporate Partnerships team will be in touch within 24 hours.
          </p>

          <div style={{ marginTop: 40, width: '100%', position: 'relative', zIndex: 1 }}>
            <CollaborationForm />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default EmployersPage;
