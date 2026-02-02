import React, { useState, useEffect } from 'react';

const Projects = React.memo(() => {
  const projects = [
    { name: "Sign Language", description: "AI-powered sign language recognition system" },
    { name: "Music Recommendation", description: "Personalized music recommendation engine" },
    { name: "Sentiment Analysis", description: "NLP-based sentiment analysis tool" },
    { name: "Meal Box App", description: "Still in production" }
  ];

  const cardImages = [
    "/assets/images/sign_language.avif",
    "/assets/images/music_recommendation.avif",
    "/assets/images/sentiment_analysis.avif",
    "/assets/images/meal_box.avif"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const normalizedIndex = (newIndex + cardImages.length) % cardImages.length;
    setCurrentIndex(normalizedIndex);

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
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
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

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
        <button 
          className="projects-nav-arrow projects-left" 
          onClick={() => updateCarousel(currentIndex - 1)}
          aria-label="Previous project"
        >
          ‹
        </button>
        
        <div className="projects-carousel-track">
          {cardImages.map((image, index) => (
            <div
              key={index}
              className={getCardClass(index)}
              data-index={index}
              onClick={() => updateCarousel(index)}
              role="button"
              tabIndex={0}
              aria-label={`View ${projects[index].name}`}
            >
              <img src={image} alt={`${projects[index].name} project preview`} loading="lazy" />
            </div>
          ))}
        </div>
        
        <button 
          className="projects-nav-arrow projects-right" 
          onClick={() => updateCarousel(currentIndex + 1)}
          aria-label="Next project"
        >
          ›
        </button>
      </div>

      <div className="projects-member-info">
        <h2 className="projects-member-name">
          {projects[currentIndex].name}
        </h2>
        <p className="projects-member-role">
          {projects[currentIndex].description}
        </p>
      </div>

      <div className="projects-dots">
        {cardImages.map((_, index) => (
          <button
            key={index}
            className={`projects-dot ${index === currentIndex ? 'projects-active' : ''}`}
            onClick={() => updateCarousel(index)}
            aria-label={`Go to project ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
});

Projects.displayName = 'Projects';

export default Projects;