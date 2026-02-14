import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ConsultationPopup from './components/Reusable/ConsultationPopup';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WhyAustraliaPage from './pages/WhyAustraliaPage';
import NewsBlogsPage from './pages/NewsBlogsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import EligibilityCalculatorPage from './pages/EligibilityCalculatorPage';
import CostOfLivingCalculatorPage from './pages/CostOfLivingCalculatorPage';
import VisaPathwaysPage from './pages/VisaPathwaysPage';
import SearchCoursesPage from './pages/SearchCoursesPage';
import SearchUniversitiesPage from './pages/SearchUniversitiesPage';
import ExpensePlanningScholarshipsPage from './pages/ExpensePlanningScholarshipsPage';
import SopDocumentsPage from './pages/SopDocumentsPage';
import AccommodationPage from './pages/AccommodationPage';
import PostStudyWorkVisaPage from './pages/PostStudyWorkVisaPage';
import JobSeekersPage from './pages/JobSeekersPage';
import EmployersPage from './pages/EmployersPage';
import BookConsultationPage from './pages/BookConsultationPage';
import AncillaryServicesPage from './pages/AncillaryServicesPage';

function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setConsultationOpen(true);
    window.addEventListener('openConsultationPopup', handleOpen);
    return () => window.removeEventListener('openConsultationPopup', handleOpen);
  }, []);

  return (
    <>
    <ConsultationPopup isOpen={consultationOpen} onClose={() => setConsultationOpen(false)} />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/why-australia" element={<WhyAustraliaPage />} />
        <Route path="/news-blogs" element={<NewsBlogsPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/eligibility-calculator" element={<EligibilityCalculatorPage />} />
        <Route path="/cost-of-living-calculator" element={<CostOfLivingCalculatorPage />} />
        {/* Our Services */}
        <Route path="/visa-pathways" element={<VisaPathwaysPage />} />
        <Route path="/search-courses" element={<SearchCoursesPage />} />
        <Route path="/search-universities" element={<SearchUniversitiesPage />} />
        <Route path="/expense-planning-scholarships" element={<ExpensePlanningScholarshipsPage />} />
        <Route path="/sop-documents" element={<SopDocumentsPage />} />
        <Route path="/accommodation" element={<AccommodationPage />} />
        <Route path="/post-study-work-visa" element={<PostStudyWorkVisaPage />} />
        <Route path="/job-seekers" element={<JobSeekersPage />} />
        <Route path="/employers" element={<EmployersPage />} />
        <Route path="/book-consultation" element={<BookConsultationPage />} />
        <Route path="/ancillary-services" element={<AncillaryServicesPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
