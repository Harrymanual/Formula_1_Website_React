import React from 'react';
import TeamPage from './TeamPageTemplate';
import redbull from './images/redbull.jpg';

const RedBullPage = () => {
  return (
    <TeamPage teamName="Red Bull" imageSrc={redbull} description = "Redbull best team!" />
  );
};

export default RedBullPage;