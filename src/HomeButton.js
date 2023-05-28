import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homebutton.css';

const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF']; 

const HomeButton = () => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((colorIndex + 1) % colors.length);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [colorIndex]);

  return (
    <div className="home-button">
      <Link to="/" style={{ color: colors[colorIndex] }}>
        Home
      </Link>
    </div>
  );
};

export default HomeButton;