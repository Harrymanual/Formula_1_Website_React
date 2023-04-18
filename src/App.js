import React, { useState } from 'react';
import backgroundImage from './images/f1_logo.jpg'; // import the background image
import {useNavigate, Route, Routes} from 'react-router-dom';

import DriversPage from './DriversPage';
import TeamsPage from './TeamsPage';

const App = () => {
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
          // handle left button click
          console.log('Teams button clicked');
          navigate('/teams')
        }}
      >  
        <button style={{ fontSize: '48px', border: 'none', background: 'transparent', cursor: 'pointer'}}>
          Teams
        </button>

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
          // handle left button click
          console.log('Drivers button clicked');
          navigate('/drivers')
        }}
      >
        <button style={{ fontSize: '48px', border: 'none', background: 'transparent', cursor: 'pointer'}}>
          Drivers
        </button>
      </div>

      <Routes>
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/drivers" element={<DriversPage />} />
      </Routes>

    </div>
  );
};

export default App;