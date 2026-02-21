import React, { useState, useEffect } from 'react';
import './FastTrackDegree.css';

const FAST_TRACK_IMAGES = ['/images/home-page/fast-track-1.png', '/images/home-page/fast-track-2.png'];

const FastTrackDegree = () => {
  const [activeTab, setActiveTab] = useState('management');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = {
    management: [
      {
        title: 'Masters in Business Management',
        description: 'Lorem ipsum opms herist Lorem ipsuLorem ipsum opms herist Lorem ipsu Lorem ipsum opms herist Lorem ipsuna...',
        fullDescription: 'Our Masters in Business Management program provides comprehensive training in modern business practices, strategic planning, and leadership skills. This program is designed to prepare students for senior management roles in various industries.',
        duration: '2 years',
        intake: 'February, July',
        location: 'Sydney, Melbourne, Brisbane'
      },
      {
        title: 'Masters in Business Management',
        description: 'Lorem ipsum opms herist Lorem ipsuLorem ipsum opms herist Lorem ipsu Lorem ipsum opms herist Lorem ipsuna...',
        fullDescription: 'Our Masters in Business Management program provides comprehensive training in modern business practices, strategic planning, and leadership skills. This program is designed to prepare students for senior management roles in various industries.',
        duration: '2 years',
        intake: 'February, July',
        location: 'Sydney, Melbourne, Brisbane'
      }
    ],
    engineering: [
      {
        title: 'Masters in Engineering',
        description: 'Lorem ipsum opms herist Lorem ipsuLorem ipsum opms herist Lorem ipsu Lorem ipsum opms herist Lorem ipsuna...',
        fullDescription: 'The Masters in Engineering program offers advanced technical knowledge and practical skills in various engineering disciplines. Students will gain expertise in problem-solving, design, and innovation.',
        duration: '2 years',
        intake: 'February, July',
        location: 'Sydney, Melbourne, Perth'
      }
    ],
    medical: [
      {
        title: 'Masters in Medical Science',
        description: 'Lorem ipsum opms herist Lorem ipsuLorem ipsum opms herist Lorem ipsu Lorem ipsum opms herist Lorem ipsuna...',
        fullDescription: 'Our Masters in Medical Science program provides in-depth knowledge of medical research, clinical practice, and healthcare management. This program prepares students for careers in medical research and healthcare administration.',
        duration: '2 years',
        intake: 'February, July',
        location: 'Sydney, Melbourne, Adelaide'
      }
    ]
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedCourse(null);
      }
    };

    if (selectedCourse) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedCourse]);

  return (
    <section className="fast-track-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Fast-Track Your <span className="section-title-accent">Degree</span>
          </h2>
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

          <div className="courses-wrapper">
            <img
              src="/images/home-page/thingreen.png"
              alt=""
              className="thingreen-image"
              aria-hidden="true"
            />
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
                    <button
                      className="explore-btn"
                      onClick={() => setSelectedCourse({ ...course, category: activeTab, imageIndex: index })}
                    >
                      Explore More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Course Modal */}
      {selectedCourse && (
        <div 
          className="course-modal-overlay"
          onClick={() => setSelectedCourse(null)}
        >
          <div 
            className="course-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="course-modal-close"
              onClick={() => setSelectedCourse(null)}
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="course-modal-content">
              <div className="course-modal-image">
                <img
                  src={FAST_TRACK_IMAGES[selectedCourse.imageIndex % FAST_TRACK_IMAGES.length]}
                  alt={selectedCourse.title}
                />
              </div>
              <div className="course-modal-details">
                <h2 className="course-modal-title">{selectedCourse.title}</h2>
                <p className="course-modal-description">{selectedCourse.fullDescription || selectedCourse.description}</p>
                <div className="course-modal-info">
                  <div className="course-info-item">
                    <span className="course-info-label">Duration:</span>
                    <span className="course-info-value">{selectedCourse.duration || '2 years'}</span>
                  </div>
                  <div className="course-info-item">
                    <span className="course-info-label">Intake:</span>
                    <span className="course-info-value">{selectedCourse.intake || 'February, July'}</span>
                  </div>
                  <div className="course-info-item">
                    <span className="course-info-label">Location:</span>
                    <span className="course-info-value">{selectedCourse.location || 'Multiple cities'}</span>
                  </div>
                </div>
                <div className="course-modal-actions">
                  <button 
                    className="course-modal-btn-primary"
                    onClick={() => {
                      window.location.href = '/#book-free-call';
                      setSelectedCourse(null);
                    }}
                  >
                    Book Free Consultation
                  </button>
                  <button 
                    className="course-modal-btn-secondary"
                    onClick={() => setSelectedCourse(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FastTrackDegree;
