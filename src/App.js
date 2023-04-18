import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import DriversPage from './DriversPage';
import TeamsPage from './TeamsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/teams" element={<TeamsPage />} />
      <Route path="/drivers" element={<DriversPage />} />
    </Routes>
  );
};

export default App;