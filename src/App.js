import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import DriversPage from './DriversPage';
import TeamsPage from './TeamsPage';
import RedBullPage  from './RedBullPage';
import MercedesPage from './MercedesPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/teams" element={<TeamsPage />} />
      <Route path="/drivers" element={<DriversPage />} />
      <Route path="/teams/red-bull" element={<RedBullPage />} />
      <Route path="/teams/mercedes" element={<MercedesPage />} />
    </Routes>
  );
};

export default App;