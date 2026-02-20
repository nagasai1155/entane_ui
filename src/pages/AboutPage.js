import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';
import AboutUs from '../components/About-Page/AboutUs';
import EsanteBanner from '../components/Reusable/EsanteBanner';

function AboutPage() {
  return (
    <div className="about-page">
      <Header />
      <AboutUs />
      <EsanteBanner />
      <Footer />
    </div>
  );
}

export default AboutPage;
