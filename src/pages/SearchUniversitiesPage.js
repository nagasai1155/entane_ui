import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

function SearchUniversitiesPage() {
  return (
    <div className="service-page">
      <Header />
      <main className="service-page__main" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <section className="container">
          <h1>Search by University</h1>
          <p>Browse universities by city. Search, filter, and enquire about universities.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SearchUniversitiesPage;
