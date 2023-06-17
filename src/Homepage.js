import React, { useState } from 'react';
import backgroundImage from './images/f1_logo.jpg';
import { useNavigate } from 'react-router-dom';
import teamsImage from './images/Teams.png';
import driversImage from './images/Drivers.png';
import teamsAnimation from './images/TeamsAnimation.png';
import driversAnimation from './images/DriversAnimation.png';
import Modal from './Modal';

const Homepage = () => {
  const [isTeamsHovered, setisTeamsHovered] = useState(false);
  const [isDriversHovered, setisDriversHovered] = useState(false);
  const [isTeamsClicked, setisTeamsClicked] = useState(false);
  const [isDriversClicked, setisDriversClicked] = useState(false);
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  
  const navigate = useNavigate();

  const handleTeamsHover = () => {
    setisTeamsHovered(true);
    setisDriversHovered(false);
  };

  const handleDriversHover = () => {
    setisTeamsHovered(false);
    setisDriversHovered(true);
  };

  const handleHoverExit = () => {
    setisTeamsHovered(false);
    setisDriversHovered(false);
  };

  const handleTeamsClick = () => {
    setisTeamsClicked(true);
    setisDriversClicked(false);
    setTimeout(() => {
      navigate('/teams');
    }, 1000); 
  };

  const handleDriversClick = () => {
    setisTeamsClicked(false);
    setisDriversClicked(true);
    setTimeout(() => {
      navigate('/drivers');
    }, 1000); //duration
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
      <Modal show={show} handleClose={handleClose} />
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          backgroundColor: isTeamsHovered ? 'rgba(211, 211, 211, 0.1)' : 'transparent',
          height: '100vh',
          transition: 'transform 1.5s', // add transition property
          transform: isTeamsClicked ? 'translateX(40vw)' : 'none', // add transform property
          display: isDriversClicked ? 'none' : 'absolute', // hide the drivers button when the teams button is clicked
          maxWidth: '50%',
        }}
        onMouseEnter={handleTeamsHover}
        onMouseLeave={handleHoverExit}
        onClick={handleTeamsClick} // call handleTeamsClick function
      >  
        <img
          src={isTeamsClicked ? teamsAnimation : teamsImage}
          alt="Teams"
          style={{ width: '80%', height: '80%', cursor: 'pointer', marginTop: '20%'}}
        />
      </div>

      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          backgroundColor: isDriversHovered ? 'rgba(211, 211, 211, 0.1)' : 'transparent',
          height: '100vh',
          transition: 'transform 1.5s', // add transition property
          transform: isDriversClicked ? 'translateX(-40vw)' : 'none', // add transform property
          display: isTeamsClicked ? 'none' : 'absolute', // hide the teams button when the teams button is clicked
          maxWidth: '50%',
        }}
        onMouseEnter={handleDriversHover}
        onMouseLeave={handleHoverExit}
        onClick={handleDriversClick} // call handleTeamsClick function
      >
        <img
          src={isDriversClicked ? driversAnimation : driversImage}
          alt="Drivers"
          style={{ width: '80%', height: '80%',  cursor: 'pointer', marginTop: '20%'}}
        />
      </div>
    </div>
  );
};

export default Homepage;