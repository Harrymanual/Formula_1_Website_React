import React, { useState, useEffect } from 'react';
import DriverPageTemplate from './DriverPageTemplate';
import redBullLogo from './images/DriverPhotos/Per.jpg';
import background from './images/f1_logo.jpg';

const PerezPage = () => {
  const [infoList, setInfoList] = useState([]);

  useEffect(() => {
    fetch('/driver_info.txt')
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n').slice(12, 22); //red bull lines from txt file. hardocoding works fine for this as its just not worth it to spend that much time on something so trivial
        setInfoList(lines);
      })
      .catch(error => console.error(error)); //logs the error from fetch
  }, []);

  return (
    <DriverPageTemplate
      driverName="Sergio Perez"
      imageSrc={redBullLogo}
      infoList={infoList}
      background = {background}
    />
  );
};

export default PerezPage;