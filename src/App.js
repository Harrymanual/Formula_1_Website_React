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
import LeclercPage from './LeclercPage';
import RussellPage from './RussellPage';
import SainzPage from './SainzPage';
import { TsunodaPage, AlonsoPage, StrollPage, OconPage, GaslyPage, AlbonPage, BottasPage, ZhouPage, MagnussenPage, NorrisPage } from './CreateDriverPage';


import './homebutton.css'
import './appStyle.css'
import Leaderboard from './Leaderboard';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/drivers" element={<DriversPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />


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
        <Route path="/drivers/russell" element={<RussellPage />} />
        <Route path="/drivers/leclerc" element={<LeclercPage />} />
        <Route path="/drivers/sainz" element={<SainzPage />} />

        <Route path="/drivers/tsunoda" element={<TsunodaPage />} />
        <Route path="/drivers/alonso" element={<AlonsoPage />} />
        <Route path="/drivers/stroll" element={<StrollPage />} />
        <Route path="/drivers/ocon" element={<OconPage />} />
        <Route path="/drivers/gasly" element={<GaslyPage />} />
        <Route path="/drivers/albon" element={<AlbonPage />} />
        <Route path="/drivers/guanyu" element={<ZhouPage />} />
        <Route path="/drivers/magnussen" element={<MagnussenPage />} />
        <Route path="/drivers/norris" element={<NorrisPage />} />
        <Route path="/drivers/bottas" element={<BottasPage />} />

        
      </Routes>
      <div className="buttons-container">
        <HomeButton className="home-button" />
        <AboutButton className="about-button" />
      </div>
    </div>
  );
};


export default App;