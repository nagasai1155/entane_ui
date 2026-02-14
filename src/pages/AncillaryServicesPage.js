import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

export default function AncillaryServicesPage() {
  const openConsultation = () => window.dispatchEvent(new CustomEvent('openConsultationPopup'));

  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      <div className="w-full bg-white py-16 px-4 pt-32 relative">
        <div className="max-w-6xl mx-auto relative">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-gray-800 text-3xl md:text-4xl font-normal mb-2 font-poppins">
              Ancillary Services
            </h2>
            <h3 className="text-accent text-4xl md:text-5xl font-bold italic mb-6 font-poppins">
              That Actually Matter
            </h3>

            {/* Description Text */}
            <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-3 font-poppins">
              Studying in Australia isn't just about getting an offer letter — it's about surviving,
              settling, earning and succeeding once you land.
            </p>
            <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8 font-poppins">
              That's where <span className="font-semibold">Esante</span>'s end-to-end ancillary services come in.
            </p>

            {/* CTA Button */}
            <button
              type="button"
              onClick={openConsultation}
              className="bg-accent hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-poppins"
            >
              View Services Cost Below
            </button>
          </div>

          {/* Cards Section with 3D Perspective - 5 cards */}
          <div className="relative my-16 min-h-[400px] flex items-center justify-center">
            <div className="flex justify-center items-center gap-4" style={{ perspective: '1500px' }}>
              {/* Far Left Card - Grayscale, Rotated */}
              <div
                className="w-48 h-64 md:w-56 md:h-72 rounded-3xl overflow-hidden shadow-2xl grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                style={{
                  transform: 'rotateY(20deg) rotateZ(-20deg)',
                  transformStyle: 'preserve-3d',
                  zIndex: 1,
                }}
              >
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/1jb651bq_expires_30_days.png"
                  alt="Student"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Inner Left Card - Grayscale, Rotated */}
              <div
                className="w-52 h-72 md:w-60 md:h-80 rounded-3xl overflow-hidden shadow-2xl grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                style={{
                  transform: 'rotateY(15deg) rotateZ(-15deg)',
                  transformStyle: 'preserve-3d',
                  zIndex: 2,
                }}
              >
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/1jb651bq_expires_30_days.png"
                  alt="Student studying"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Center Card - Color with Accommodation Label */}
              <div
                className="w-64 h-80 md:w-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                style={{
                  transform: 'scale(1.1)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/yma2akls_expires_30_days.png"
                  alt="Accommodation"
                  className="w-full h-full object-cover"
                />
                {/* Accommodation Label */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-6 py-2.5 rounded-full shadow-lg">
                  <span className="text-gray-800 font-semibold text-sm font-poppins">Accommodation</span>
                </div>
              </div>

              {/* Inner Right Card - Grayscale, Rotated */}
              <div
                className="w-52 h-72 md:w-60 md:h-80 rounded-3xl overflow-hidden shadow-2xl grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                style={{
                  transform: 'rotateY(-15deg) rotateZ(15deg)',
                  transformStyle: 'preserve-3d',
                  zIndex: 2,
                }}
              >
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/vl3js3xg_expires_30_days.png"
                  alt="Students collaborating"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Far Right Card - Grayscale, Rotated */}
              <div
                className="w-48 h-64 md:w-56 md:h-72 rounded-3xl overflow-hidden shadow-2xl grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                style={{
                  transform: 'rotateY(-20deg) rotateZ(20deg)',
                  transformStyle: 'preserve-3d',
                  zIndex: 1,
                }}
              >
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/vFwliBRFnJ/vl3js3xg_expires_30_days.png"
                  alt="Students"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Services List */}
          <div className="text-center mb-12">
            <p className="text-accent text-base md:text-lg leading-relaxed max-w-4xl mx-auto font-poppins">
              <span className="font-semibold">From SOP & GS-compliant documentation, scholarship optimisation, free IELTS & communication training, accommodation support, part-time job assistance, to complete post-arrival hand-holding</span>, we cover <span className="font-semibold">everything students usually struggle with</span> — at <span className="font-semibold">no extra cost</span>.
            </p>
          </div>

          {/* Bottom Description */}
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto shadow-sm mb-12">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center font-poppins">
              Unlike traditional consultancies that stop at offer letters, <span className="font-semibold">Esante works</span> as your on-ground support system in Australia, ensuring you save money, avoid mistakes, and build a future-ready pathway aligned with Australia's education and migration framework.
            </p>
          </div>

          {/* Orange CTA Card */}
          <div className="bg-gradient-to-br from-accent to-orange-600 rounded-3xl p-10 md:p-12 max-w-4xl mx-auto shadow-2xl">
            <div className="text-center text-white">
              <p className="text-xl md:text-2xl font-light mb-2 font-poppins">
                Think of
              </p>
              <h4 className="text-3xl md:text-4xl font-bold italic mb-4 font-poppins">
                Esante as your Australia-study partner
              </h4>
              <p className="text-xl md:text-2xl font-light mb-6 font-poppins">
                — not just an agent.
              </p>

              <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto opacity-95 font-poppins">
                Let Our Experts In Melbourne Guide You Every Step Of The Way.
              </p>

              {/* White Button */}
              <button
                type="button"
                onClick={openConsultation}
                className="bg-white text-accent font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gray-50 font-poppins"
              >
                Book Free Call
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
