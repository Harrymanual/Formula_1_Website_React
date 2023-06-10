import React, { useState } from 'react';
import leftArrow from './images/leftArrow.png';
import rightArrow from './images/rightArrow.png';

import slides from './Slides/slides';  // import slides
import modalTexts from './Slides/modalText';  // import modal texts

import './aboutPage.css';


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

const paths = [
  'M0,50 Q50,0 100,50 T200,50 T300,50 T400,50 T500,50', 
  'M0,50 Q50,100 100,50 T200,50 T300,50 T400,50 T500,50', 
  'M0,50 Q50,0 100,50 T200,50 T300,50 T400,50 T500,50',
];

// Positions of the circles. Each inner array represents a slide, with 5 circles each.
const circlePositions = [
  [{x: "50", y: "25"}, {x: "150", y: "75"}, {x: "250", y: "25"}, {x: "350", y: "75"}, {x: "450", y: "25"}],
  [{x: "50", y: "75"}, {x: "150", y: "25"}, {x: "250", y: "75"}, {x: "350", y: "25"}, {x: "450", y: "75"}],
  [{x: "50", y: "25"}, {x: "150", y: "75"}, {x: "250", y: "25"}, {x: "350", y: "75"}, {x: "450", y: "25"}]
];

// Texts to display inside each circle for each slide.
const circleTexts = [
  ['Why?', 'Home Page', 'Team Page', 'Individual Teams', 'Drivers Page'],
  ['About Page', 'Git', 'Individual Drivers', 'Text 9', 'Text 10'],
  ['Text 11', 'Text 12', 'Text 13', 'Text 14', 'Text 15'],
];

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalText, setModalText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);


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

  const handleCircleClick = (text) => {
    setModalText(text);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };


  const Arrow = ({ direction, handleClick, glyph }) => (
    <div
      className={ `slide-arrow slide-arrow-${direction}` }
      onClick={ handleClick }>
      <img src={glyph} alt={`${direction} Slide Arrow`} />
      <div className='arrow-overlay'></div>
    </div>
  );

  return (
    <div className="about-page">
      <div className="slide">
        {currentSlide > 0 && (
          <Arrow 
            direction='left' 
            handleClick={ handlePrev } 
            glyph={ leftArrow }
          />
        )}
        
        <div className="slide-content">
          {slides[currentSlide]}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 -20 500 100">
            <defs>
              {gradients[currentSlide]}
            </defs>
            <path 
              d={paths[currentSlide]} 
              stroke={`url(#gradient${currentSlide + 1})`} 
              fill="transparent" 
              strokeWidth="7" 
            />
            {circlePositions[currentSlide].map((circle, index) => (
              <a key={index} onClick={() => handleCircleClick(modalTexts[currentSlide][index])} className="circle-text">
                <circle
                  cx={circle.x}
                  cy={circle.y}
                  r="20"
                  fill="green"
                  className="circle" 
                />
                <text
                  x={circle.x}
                  y={circle.y}
                  fontSize="8"
                  textAnchor="middle"
                  dy=".3em"
                >
                  {circleTexts[currentSlide][index]}
                </text>
              </a>
            ))}
          </svg>
        </div>
  
        <div className="progress-bar"> 
          {slides.map((slide, index) => (
            <div className={`notch ${index <= currentSlide ? "active" : ""}`} key={index} />
          ))}
        </div>
        
        {currentSlide < slides.length - 1 && (
          <Arrow 
            direction='right' 
            handleClick={ handleNext } 
            glyph={ rightArrow }
          />
        )}
      </div>
      {modalVisible && (
      <div className="popup-container">
        <div className="popup-box">
          <div 
            className="popup-text"
            dangerouslySetInnerHTML={{ __html: modalText.replace(/\n/g, '<br />') }}
          />
          <button onClick={handleModalClose}>Close</button>
        </div>
      </div>
    )}
    </div>
  );
};

export default AboutPage;