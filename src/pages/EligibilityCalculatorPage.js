import React, { useState } from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

function EligibilityCalculatorPage() {
  const [activeTab, setActiveTab] = useState('PROFILE');
  const [selectedAge, setSelectedAge] = useState('25-32');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    highestQualification: '',
    fieldOfStudy: '',
    graduationYear: '',
    preferredIntake: '',
    yearsExperience: '',
    currentRole: '',
    industry: '',
    englishTest: '',
    englishScore: '',
    testDate: '',
  });

  const tabs = ['PROFILE', 'EDUCATION', 'EXPERIENCE', 'ENGLISH'];
  const ageGroups = ['18-24', '25-32', '33-39', '40-44', '45+'];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sectionConfig = {
    PROFILE: {
      title: 'Personal Details',
      description: "We'll use this to personalise your assessment results.",
    },
    EDUCATION: {
      title: 'Education',
      description: 'Tell us about your highest qualification and field of study.',
    },
    EXPERIENCE: {
      title: 'Work Experience',
      description: 'Share your professional background so we can match visa and course options.',
    },
    ENGLISH: {
      title: 'English Proficiency',
      description: 'Add your English test details so we can assess eligibility accurately.',
    },
  };

  const renderTabFields = () => {
    switch (activeTab) {
      case 'PROFILE':
        return (
          <>
            {/* First Name and Last Name Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="e.g. Sarah"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="e.g. Jenkins"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Email and Phone Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+61 ..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Age Group */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">Age Group</label>
              <div className="grid grid-cols-5 gap-3">
                {ageGroups.map((age) => (
                  <button
                    key={age}
                    type="button"
                    onClick={() => setSelectedAge(age)}
                    className={`py-3 px-4 rounded-lg border-2 text-sm font-medium transition-all ${
                      selectedAge === age
                        ? 'border-teal-600 bg-teal-50 text-teal-700'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {age}
                  </button>
                ))}
              </div>
            </div>
          </>
        );
      case 'EDUCATION':
        return (
          <>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Highest Qualification
                </label>
                <input
                  type="text"
                  name="highestQualification"
                  value={formData.highestQualification}
                  onChange={handleInputChange}
                  placeholder="e.g. Bachelor’s Degree"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Field of Study
                </label>
                <input
                  type="text"
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleInputChange}
                  placeholder="e.g. Computer Science"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Graduation Year
                </label>
                <input
                  type="text"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleInputChange}
                  placeholder="e.g. 2022"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Preferred Intake
                </label>
                <input
                  type="text"
                  name="preferredIntake"
                  value={formData.preferredIntake}
                  onChange={handleInputChange}
                  placeholder="e.g. Feb 2026"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
          </>
        );
      case 'EXPERIENCE':
        return (
          <>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Years of Experience
                </label>
                <input
                  type="text"
                  name="yearsExperience"
                  value={formData.yearsExperience}
                  onChange={handleInputChange}
                  placeholder="e.g. 3 years"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Current Role
                </label>
                <input
                  type="text"
                  name="currentRole"
                  value={formData.currentRole}
                  onChange={handleInputChange}
                  placeholder="e.g. Software Engineer"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Industry</label>
                <input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  placeholder="e.g. IT, Healthcare"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
          </>
        );
      case 'ENGLISH':
        return (
          <>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  English Test
                </label>
                <input
                  type="text"
                  name="englishTest"
                  value={formData.englishTest}
                  onChange={handleInputChange}
                  placeholder="e.g. IELTS, PTE"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Overall Score
                </label>
                <input
                  type="text"
                  name="englishScore"
                  value={formData.englishScore}
                  onChange={handleInputChange}
                  placeholder="e.g. 7.5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Test Date</label>
                <input
                  type="text"
                  name="testDate"
                  value={formData.testDate}
                  onChange={handleInputChange}
                  placeholder="e.g. Jan 2025"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const handleNextStep = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  return (
    <div className="eligibility-calculator-page min-h-screen bg-gray-50">
      <Header />
      <main
        className="eligibility-calculator-main"
        style={{
          marginTop: '40px',
        }}
      >
        {/* Hero Section with Background Image */}
        <div
          className="relative bg-cover bg-center h-96"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&h=400&fit=crop')",
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <div className="mb-4">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-4 py-1.5 rounded-full border border-white/30">
                FREE ASSESSMENT TOOL
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-3">
              Check Your Eligibility
            </h1>
            <p className="text-center text-white/90 text-base md:text-lg max-w-2xl">
              See which Australian visa pathways or university courses match your profile in under 2
              minutes.
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto px-4 -mt-16 pb-20 relative z-10">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 px-6 text-sm font-medium transition-all ${
                    activeTab === tab
                      ? 'text-gray-900 border-b-2 border-gray-900'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Form Content */}
            <div className="p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {sectionConfig[activeTab].title}
                </h2>
                <p className="text-gray-600 text-sm">{sectionConfig[activeTab].description}</p>
              </div>

              <div className="space-y-6">
                {renderTabFields()}

                {/* Next Step Button */}
                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
                  >
                    Next Step
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default EligibilityCalculatorPage;

