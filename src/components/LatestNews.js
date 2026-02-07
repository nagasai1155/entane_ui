import React from 'react';
import './LatestNews.css';

const NEWS_IMAGES = [
  '/images/news-1.png',
  '/images/news-2.png',
  '/images/news-3.png',
  '/images/news-4.png'
];

const LatestNews = () => {
  const articles = [
    { date: '19 Nov 2025', title: 'Australia Awaits: Your Ultimate Guide to Studying, Working, and Living Down Under' },
    { date: '19 Nov 2025', title: 'Australia Awaits: Your Ultimate Guide to Studying, Working, and Living Down Under' },
    { date: '19 Nov 2025', title: 'Australia Awaits: Your Ultimate Guide to Studying, Working, and Living Down Under' },
    { date: '19 Nov 2025', title: 'Australia Awaits: Your Ultimate Guide to Studying, Working, and Living Down Under' }
  ];

  return (
    <section className="latest-news-section">
      <div className="container">
        <div className="latest-news-header">
          <h2 className="latest-news-title">Latest News</h2>
          <p className="latest-news-tagline">
            Join thousands who have successfully made the move.
          </p>
        </div>

        <div className="latest-news-grid">
          {articles.map((article, index) => (
            <article key={index} className="latest-news-card">
              <div className="latest-news-card-image">
                <img src={NEWS_IMAGES[index]} alt="" />
              </div>
              <div className="latest-news-card-content">
                <time className="latest-news-date">{article.date}</time>
                <h3 className="latest-news-card-title">{article.title}</h3>
                <a href="#" className="latest-news-read-more">Read More</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
