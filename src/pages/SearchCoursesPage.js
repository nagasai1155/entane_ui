import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

function SearchCoursesPage() {
  return (
    <div className="service-page">
      <Header />
      <main className="service-page__main" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <section className="container">
          <h1>Search by Courses</h1>
          <p>Browse courses by category (Engg, Medical, etc.). Search, filter, and enquire about courses.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SearchCoursesPage;
