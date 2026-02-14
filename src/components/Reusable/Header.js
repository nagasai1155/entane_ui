import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isNewsBlogs = location.pathname === '/news-blogs';
  const isCaseStudies = location.pathname === '/case-studies';
  const isEligibility = location.pathname === '/eligibility-calculator';

  return (
    <header
      className={`header ${isHome ? 'header--transparent' : 'header--solid'} ${
        isNewsBlogs || isCaseStudies || isEligibility ? 'header--compact' : ''
      }`}
    >
      <div className="header-top">
        <div className="header-contact">
          <div className="contact-item">
            <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3h12v10H2V3z" stroke="white" strokeWidth="1.5" fill="none"/>
              <path d="M2 3l6 5 6-5" stroke="white" strokeWidth="1.5" fill="none"/>
            </svg>
            <span>info@esante.com.au</span>
          </div>
          <div className="contact-item">
            <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 2h3l1 3-2 2c1 2 2 3 4 4l2-2 3 1v3c0 1-1 2-2 2-6 0-11-5-11-11 0-1 1-2 2-2z" stroke="white" strokeWidth="1.5" fill="none"/>
            </svg>
            <span>+44 1234 5678 90</span>
          </div>
        </div>
      </div>
      <nav className="header-nav">
        <div className="nav-container">
          <div className="logo">
            <Link to="/">
              <img src="/logo.png" alt="Esante Logo" />
            </Link>
          </div>
          <ul className="nav-menu">
            <li><Link to="/about-us">About Us</Link></li>
            <li className="nav-item-dropdown nav-item-dropdown--mega">
              <span className="dropdown-toggle">Our Services</span>
              <div className="dropdown-mega">
                <div className="dropdown-mega-column">
                  <span className="dropdown-mega-title">Migration</span>
                  <ul>
                    <li><Link to="/visa-pathways">Visa Pathways</Link></li>
                    <li>
                      <button
                        type="button"
                        className="dropdown-mega-link"
                        onClick={() => window.dispatchEvent(new CustomEvent('openConsultationPopup'))}
                      >
                        Book 1:1 Consultation
                      </button>
                    </li>
                    <li><Link to="/visa-pathways#migration-advisors">Migration Advisors</Link></li>
                  </ul>
                </div>
                <div className="dropdown-mega-column">
                  <span className="dropdown-mega-title">Edu &amp; Training</span>
                  <ul>
                    <li><Link to="/search-courses">Search by Courses</Link></li>
                    <li><Link to="/search-universities">Search by University</Link></li>
                    <li><Link to="/expense-planning-scholarships">Expense Planning &amp; Scholarships</Link></li>
                    <li className="dropdown-mega-sub">
                      <span className="dropdown-mega-subtitle">Ancillary Services</span>
                      <ul>
                        <li><Link to="/ancillary-services">Ancillary Services Overview</Link></li>
                        <li><Link to="/sop-documents">SOP &amp; Other Documents</Link></li>
                        <li><Link to="/accommodation">Accommodation</Link></li>
                        <li><Link to="/post-study-work-visa">Post Study Work Visa</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/book-consultation">Book 1:1 Consultation</Link></li>
                  </ul>
                </div>
                <div className="dropdown-mega-column">
                  <span className="dropdown-mega-title">Recruitment</span>
                  <ul>
                    <li><Link to="/job-seekers">For Job Seekers</Link></li>
                    <li><Link to="/job-seekers#top-in-demand">Top In-Demand Jobs</Link></li>
                    <li><Link to="/employers">For Employers</Link></li>
                  </ul>
                </div>
              </div>
            </li>
            <li><Link to="/why-australia">Why Australia</Link></li>
            <li className="nav-item-dropdown">
              <span className="dropdown-toggle">Tools &amp; Resources</span>
              <ul className="dropdown-menu">
                <li><Link to="/news-blogs">News &amp; Blogs</Link></li>
                <li><Link to="/case-studies">Case Studies</Link></li>
                <li><Link to="/eligibility-calculator">Eligibility Calculator</Link></li>
                <li><Link to="/cost-of-living-calculator">Cost of Living Calculator</Link></li>
              </ul>
            </li>
          </ul>
          <button
            type="button"
            className="cta-button"
            onClick={() => window.dispatchEvent(new CustomEvent('openConsultationPopup'))}
          >
            Book 1:1 Counselling
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
