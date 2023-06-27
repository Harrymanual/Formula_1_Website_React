import React, { useState, useEffect } from 'react';
import DriverPageTemplate from './DriverPageTemplate';
import redBullLogo from './images/DriverPhotos/Ver.jpg';
import background from './images/f1_logo.jpg';

const VerstappenPage = () => {
  const [infoList, setInfoList] = useState([]);

  useEffect(() => {
    fetch('/driver_info.txt')
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n').slice(0, 11); //red bull lines from txt file. hardocoding works fine for this as its just not worth it to spend that much time on something so trivial
        setInfoList(lines);
      })
      .catch(error => console.error(error)); //logs the error from fetch
  }, []);

  return (
    <DriverPageTemplate
      teamName="Verstappen"
      imageSrc={redBullLogo}
      infoList={infoList}
      background = {background}
    />
  );
};

export default VerstappenPage;