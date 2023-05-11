import React, { useState, useEffect } from 'react';
import TeamPageTemplate from './TeamPageTemplate';
import redBullLogo from './images/redbull.jpg';

const RedBullPage = () => {
  const [infoList, setInfoList] = useState([]);

  useEffect(() => {
    fetch('/team_info.txt')
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n').slice(0, 11);
        setInfoList(lines);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <TeamPageTemplate
      teamName="Red Bull Racing"
      imageSrc={redBullLogo}
      infoList={infoList}
    />
  );
};

export default RedBullPage;