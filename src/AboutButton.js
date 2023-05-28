import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './aboutButton.css';

const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF']; // Colors of the rainbow

const AboutButton = () => {
  const [active, setActive] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((colorIndex + 1) % colors.length);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [colorIndex]);

  const handleClick = (event) => {
    event.preventDefault();
    setActive(true);
    setTimeout(() => {
      setActive(false);
      window.location.href = '/about';
    }, 500); 
  };

  const text = "About";
  return (
    <Link 
      to="/about" 
      className={`about-button ${active ? 'active' : ''}`} 
      onClick={handleClick} 
      style={{ color: colors[colorIndex] }}
    >
      {[...text].map((char, idx) => 
        <span key={idx} className="about-letter">{char}</span>
      )}
    </Link>
  );
};

export default AboutButton;