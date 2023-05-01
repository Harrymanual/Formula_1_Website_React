import React from 'react';
import TeamPage from './TeamPageTemplate';
import mercedes from './images/merrc.jpg';

const MercedesPage = () => {
  return (
    <TeamPage teamName="Mercedes" imageSrc={mercedes} />
  );
};

export default MercedesPage;