import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

function AccommodationPage() {
  return (
    <div className="service-page">
      <Header />
      <main className="service-page__main" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <section className="container">
          <h1>Accommodation</h1>
          <p>Student accommodation and housing options in Australia.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AccommodationPage;
