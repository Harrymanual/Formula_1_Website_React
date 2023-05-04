import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import DriversPage from './DriversPage';
import TeamsPage from './TeamsPage';
import RedBullPage  from './RedBullPage';
import MercedesPage from './MercedesPage';
import './homebutton.css'
import './appStyle.css'

const HomeButton = () => {
  return (
    <Link to="/" className="home-button">
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
        <Route path="/teams/red-bull" element={<RedBullPage />} />
        <Route path="/teams/mercedes" element={<MercedesPage />} />
        
      </Routes>
      <HomeButton className="home-button" />
    </div>
  );
};


export default App;