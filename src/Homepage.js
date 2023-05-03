import React, { useState } from 'react';
import backgroundImage from './images/f1_logo.jpg';
import { useNavigate } from 'react-router-dom';
import teamsImage from './images/Teams.png';
import driversImage from './images/Drivers.png';

const Homepage = () => {
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);
  const navigate = useNavigate();

  const handleLeftHover = () => {
    setIsLeftHovered(true);
    setIsRightHovered(false);
  };

  const handleRightHover = () => {
    setIsLeftHovered(false);
    setIsRightHovered(true);
  };

  const handleHoverExit = () => {
    setIsLeftHovered(false);
    setIsRightHovered(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          backgroundColor: isLeftHovered ? 'rgba(211, 211, 211, 0.1)' : 'transparent',
          height: '100vh',
        }}
        onMouseEnter={handleLeftHover}
        onMouseLeave={handleHoverExit}
        onClick={() => {
          console.log('Teams button clicked');
          navigate('/teams')
        }}
      >  
        <img
          src={teamsImage}
          alt="Teams"
          style={{ width: '80%', height: '80%', cursor: 'pointer', marginTop: '250px' }}
        />
      </div>

      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          backgroundColor: isRightHovered ? 'rgba(211, 211, 211, 0.1)' : 'transparent',
          height: '100vh',
        }}
        onMouseEnter={handleRightHover}
        onMouseLeave={handleHoverExit}
        onClick={() => {
          console.log('Drivers button clicked');
          navigate('/drivers')
        }}
      >
        <img
          src={driversImage}
          alt="Drivers"
          style={{ width: '80%', height: '80%',  cursor: 'pointer', marginTop: '250px' }}
        />
      </div>
    </div>
  );
};

export default Homepage;