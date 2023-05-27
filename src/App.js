import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import DriversPage from './DriversPage';
import TeamsPage from './TeamsPage';

import AboutButton from './AboutButton';
import AboutPage from './AboutPage';

//teams
import RedBullPage  from './RedBullPage';
import MercedesPage from './MercedesPage';
import AlpinePage from './AlpinePage';
import HaasPage from './HaasPage';
import AstonPage from './AstonPage';
import FerrariPage from './FerrariPage';
import WilliamsPage from './WilliamsPage';
import McLarenPage from './McLarenPage';
import AlfaPage from './AlfaPage';
import AlphaPage from './AlphaPage';

import './homebutton.css'
import './appStyle.css'

//fix this later

const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF']; // Colors of the rainbow

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
    <Link to="/" className="home-button" style={{ color: colors[colorIndex] }}>
      Home
    </Link>
  );
};


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/drivers" element={<DriversPage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/teams/red-bull" element={<RedBullPage />} />
        <Route path="/teams/mercedes" element={<MercedesPage />} />
        <Route path="/teams/alpine" element={<AlpinePage />} />
        <Route path="/teams/haas" element={<HaasPage />} />
        <Route path="/teams/aston-martin" element={<AstonPage />} />
        <Route path="/teams/williams" element={<WilliamsPage />} />
        <Route path="/teams/alfa-romeo" element={<AlfaPage />} />
        <Route path="/teams/alpha-tauri" element={<AlphaPage />} />
        <Route path="/teams/ferrari" element={<FerrariPage />} />
        <Route path="/teams/mclaren" element={<McLarenPage />} />
        
      </Routes>
      <div className="buttons-container">
        <HomeButton className="home-button" />
        <AboutButton className="about-button" />
      </div>
    </div>
  );
};


export default App;