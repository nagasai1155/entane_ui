import React, { useState } from 'react';
import './FastTrackDegree.css';

const FAST_TRACK_IMAGES = ['/images/home-page/fast-track-1.png', '/images/home-page/fast-track-2.png'];

const FastTrackDegree = () => {
  const [activeTab, setActiveTab] = useState('management');

  const courses = {
    management: [
      {
        title: 'Masters in Business Management',
        description: 'Lorem ipsum opms herist Lorem ipsuLorem ipsum opms herist Lorem ipsu Lorem ipsum opms herist Lorem ipsuna...'
      },
      {
        title: 'Masters in Business Management',
        description: 'Lorem ipsum opms herist Lorem ipsuLorem ipsum opms herist Lorem ipsu Lorem ipsum opms herist Lorem ipsuna...'
      }
    ],
    engineering: [
      {
        title: 'Masters in Engineering',
        description: 'Lorem ipsum opms herist Lorem ipsuLorem ipsum opms herist Lorem ipsu Lorem ipsum opms herist Lorem ipsuna...'
      }
    ],
    medical: [
      {
        title: 'Masters in Medical Science',
        description: 'Lorem ipsum opms herist Lorem ipsuLorem ipsum opms herist Lorem ipsu Lorem ipsum opms herist Lorem ipsuna...'
      }
    ]
  };

  return (
    <section className="fast-track-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Fast-Track Your Degree</h2>
          <p className="section-subtitle">
            Foundation and diploma programs designed for university success.
          </p>
        </div>

        <div className="tabs-container">
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'management' ? 'active' : ''}`}
              onClick={() => setActiveTab('management')}
            >
              Management
            </button>
            <button
              className={`tab ${activeTab === 'engineering' ? 'active' : ''}`}
              onClick={() => setActiveTab('engineering')}
            >
              Engineering
            </button>
            <button
              className={`tab ${activeTab === 'medical' ? 'active' : ''}`}
              onClick={() => setActiveTab('medical')}
            >
              Medical
            </button>
          </div>

          <div className="courses-grid">
            {courses[activeTab].map((course, index) => (
              <div key={index} className="course-card">
                <div className="course-image">
                  <img
                    src={FAST_TRACK_IMAGES[index % FAST_TRACK_IMAGES.length]}
                    alt={course.title}
                  />
                </div>
                <div className="course-content">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-description">{course.description}</p>
                  <button className="explore-btn">
                    Explore More
                    <span className="underline"></span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FastTrackDegree;
