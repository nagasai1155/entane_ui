import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

function JobSeekersPage() {
  return (
    <div className="service-page">
      <Header />
      <main className="service-page__main" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <section className="container">
          <h1>For Job Seekers</h1>
          <p>Top in-demand jobs, skilled occupation list, and PR calculator.</p>
        </section>
        <section id="top-in-demand" className="container" style={{ marginTop: 40 }}>
          <h2>Top In-Demand Jobs</h2>
          <p>Explore the most sought-after roles in Australia.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default JobSeekersPage;
