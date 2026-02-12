import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WhyAustraliaPage from './pages/WhyAustraliaPage';
import NewsBlogsPage from './pages/NewsBlogsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import EligibilityCalculatorPage from './pages/EligibilityCalculatorPage';
import CostOfLivingCalculatorPage from './pages/CostOfLivingCalculatorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/why-australia" element={<WhyAustraliaPage />} />
        <Route path="/news-blogs" element={<NewsBlogsPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/eligibility-calculator" element={<EligibilityCalculatorPage />} />
        <Route path="/cost-of-living-calculator" element={<CostOfLivingCalculatorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
