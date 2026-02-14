import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

function SopDocumentsPage() {
  return (
    <div className="service-page">
      <Header />
      <main className="service-page__main" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <section className="container">
          <h1>SOP &amp; Other Documents</h1>
          <p>Statement of Purpose and document preparation support.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SopDocumentsPage;
