import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

function EmployersPage() {
  return (
    <div className="service-page">
      <Header />
      <main className="service-page__main" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <section className="container">
          <h1>For Employers</h1>
          <p>Why partner with Esante. B2B collaboration form.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default EmployersPage;
