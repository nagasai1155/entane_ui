import React from 'react';
import Header from '../components/Reusable/Header';
import Footer from '../components/Reusable/Footer';

function ExpensePlanningScholarshipsPage() {
  return (
    <div className="service-page">
      <Header />
      <main className="service-page__main" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <section className="container">
          <h1>Expense Planning &amp; Scholarships</h1>
          <p>Scholarship listings, education loans, and budget planning tools.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ExpensePlanningScholarshipsPage;
