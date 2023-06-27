import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import DriversPage from './DriversPage';
import TeamsPage from './TeamsPage';

import AboutButton from './AboutButton';
import AboutPage from './AboutPage';
import HomeButton from './HomeButton'

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

import VerstappenPage from './VerstappenPage';
import HamiltonPage from './HamiltonPage';
import PerezPage from './PerezPage';


import './homebutton.css'
import './appStyle.css'


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

        <Route path="/drivers/hamilton" element={<HamiltonPage />} />
        <Route path="/drivers/verstappen" element={<VerstappenPage />} />
        <Route path="/drivers/perez" element={<PerezPage />} />
        
      </Routes>
      <div className="buttons-container">
        <HomeButton className="home-button" />
        <AboutButton className="about-button" />
      </div>
    </div>
  );
};


export default App;