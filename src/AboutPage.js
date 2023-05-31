import React, { useState } from 'react';
import leftArrow from './images/leftArrow.png';
import rightArrow from './images/rightArrow.png';
import './aboutPage.css';

const slides = [
  <div>
    <h1>This is slide 1 content</h1>
    <p>Firstly, this website is designed mainly with a computer in mind, not a phone. It still works however I am not using any css frameworks and computers are therefore getting priority.</p>
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

const gradients = [
  // Define gradients for each slide
  <linearGradient id="gradient1">
    <stop offset="0%" stopColor="red" />
    <stop offset="100%" stopColor="yellow" />
  </linearGradient>,
  <linearGradient id="gradient2">
    <stop offset="0%" stopColor="yellow" />
    <stop offset="100%" stopColor="blue" />
  </linearGradient>,
  <linearGradient id="gradient3">
    <stop offset="0%" stopColor="blue" />
    <stop offset="100%" stopColor="purple" />
  </linearGradient>,
];

// SVG paths using viewport coordinates
const paths = [
  'M0,50 Q50,0 100,50 T200,50 T300,50 T400,50 T500,50', // SVG path for slide 1
  'M0,50 Q50,100 100,50 T200,50 T300,50 T400,50 T500,50', // SVG path for slide 2
  'M0,50 Q50,0 100,50 T200,50 T300,50 T400,50 T500,50', // SVG path for slide 3
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
        
        <div className="slide-content">
          {slides[currentSlide]}
          <svg width="100%" height="500" xmlns="http://www.w3.org/2000/svg" viewBox="0 -20 500 100">
            <defs>
              <linearGradient id="gradient1">
                <stop offset="0%" stopColor="red" />
                <stop offset="100%" stopColor="yellow" />
              </linearGradient>
              <linearGradient id="gradient2">
                <stop offset="0%" stopColor="yellow" />
                <stop offset="100%" stopColor="blue" />
              </linearGradient>
              <linearGradient id="gradient3">
                <stop offset="0%" stopColor="blue" />
                <stop offset="100%" stopColor="purple" />
              </linearGradient>
            </defs>
            <path 
              d={paths[currentSlide]} 
              stroke={`url(#gradient${currentSlide + 1})`} 
              fill="transparent" 
              strokeWidth="7" 
            />
          </svg>
        </div>
        {/* sd */}
        <div className="progress-bar"> 
          {slides.map((slide, index) => (
            <div className={`notch ${index <= currentSlide ? "active" : ""}`} key={index} />
          ))}
        </div>
        
        {currentSlide < slides.length - 1 && (
          <img src={rightArrow} alt="next" onClick={handleNext} className="slide-arrow slide-arrow-right" />
        )}
      </div>
    </div>
  );
};

export default AboutPage;