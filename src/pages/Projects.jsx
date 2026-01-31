import React, { useState, useEffect } from 'react';

const Projects = () => {
  const projects = [
    { name: "Sign Language", description: "AI-powered sign language recognition system" },
    { name: "Music Recommendation", description: "Personalized music recommendation engine" },
    { name: "Sentiment Analysis", description: "NLP-based sentiment analysis tool" },
    { name: "Meal Box App", description: "Still in production" }
  ];

  const cardImages = [
    "public/assets/images/sign_language.avif",
    "public/assets/images/music_recommendation.avif",
    "public/assets/images/sentiment_analysis.avif",
    "public/assets/images/meal_box.avif"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [memberOpacity, setMemberOpacity] = useState(1);

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const normalizedIndex = (newIndex + cardImages.length) % cardImages.length;
    setCurrentIndex(normalizedIndex);

    setMemberOpacity(0);
    setTimeout(() => {
      setMemberOpacity(1);
    }, 300);

    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  const getCardClass = (index) => {
    const offset = (index - currentIndex + cardImages.length) % cardImages.length;
    
    if (offset === 0) return 'carousel-card carousel-center';
    if (offset === 1) return 'carousel-card carousel-right-1';
    if (offset === 2) return 'carousel-card carousel-right-2';
    if (offset === cardImages.length - 1) return 'carousel-card carousel-left-1';
    if (offset === cardImages.length - 2) return 'carousel-card carousel-left-2';
    return 'carousel-card carousel-hidden';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        updateCarousel(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        updateCarousel(currentIndex + 1);
      }
    };

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          updateCarousel(currentIndex + 1);
        } else {
          updateCarousel(currentIndex - 1);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex]);

  return (
    <div className="projects-wrapper">
      <h1 className="projects-about-title">PROJECTS</h1>

      <div className="projects-carousel-container">
        <button className="projects-nav-arrow projects-left" onClick={() => updateCarousel(currentIndex - 1)}>
          ‹
        </button>
        <div className="projects-carousel-track">
          {cardImages.map((image, index) => (
            <div
              key={index}
              className={getCardClass(index)}
              data-index={index}
              onClick={() => updateCarousel(index)}
            >
              <img src={image} alt={`Project ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="projects-nav-arrow projects-right" onClick={() => updateCarousel(currentIndex + 1)}>
          ›
        </button>
      </div>

      <div className="projects-member-info">
        <h2 className="projects-member-name" style={{ opacity: memberOpacity }}>
          {projects[currentIndex].name}
        </h2>
        <p className="projects-member-role" style={{ opacity: memberOpacity }}>
          {projects[currentIndex].description}
        </p>
      </div>

      <div className="projects-dots">
        {cardImages.map((_, index) => (
          <div
            key={index}
            className={`projects-dot ${index === currentIndex ? 'projects-active' : ''}`}
            data-index={index}
            onClick={() => updateCarousel(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;