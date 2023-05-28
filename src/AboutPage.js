import React, { useState } from 'react';
import leftArrow from './images/leftArrow.png';
import rightArrow from './images/rightArrow.png';
import './aboutPage.css';

const slides = [
  <div>
    <h1>This is slide 1 content</h1>
    <p>Some more content for slide 1.</p>
  </div>,
  
  <div>
    <h1>This is slide 2 content</h1>
    <p>Some more content for slide 2.</p>
  </div>,
  
  <div>
    <h1>This is slide 3 content</h1>
    <p>Some more content for slide 3.</p>
  </div>
];

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div className="about-page">
      <div className="slide">
        {currentSlide > 0 && (
          <img src={leftArrow} alt="previous" onClick={handlePrev} className="slide-arrow slide-arrow-left" />
        )}
        
        <div className="slide-content">{slides[currentSlide]}</div>
        
        {currentSlide < slides.length - 1 && (
          <img src={rightArrow} alt="next" onClick={handleNext} className="slide-arrow slide-arrow-right" />
        )}
      </div>
    </div>
  );
};

export default AboutPage;