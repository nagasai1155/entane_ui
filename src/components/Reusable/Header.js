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
            <li><a href="#services">Our Services</a></li>
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
          <button className="cta-button">Book 1:1 Counselling</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
