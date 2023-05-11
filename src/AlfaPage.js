import React, { useState, useEffect } from 'react';
import TeamPageTemplate from './TeamPageTemplate';
import alfaLogo from './images/alfa.jpg';

const AlfaPage = () => {
  const [infoList, setInfoList] = useState([]);

  useEffect(() => {
    fetch('/team_info.txt')
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n').slice(12, 22);
        setInfoList(lines);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <TeamPageTemplate
      teamName="Alfa Romeo"
      imageSrc={alfaLogo}
      infoList={infoList}
    />
  );
};

export default AlfaPage;