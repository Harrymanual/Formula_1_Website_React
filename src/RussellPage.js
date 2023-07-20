import React, { useState, useEffect } from 'react';
import DriverPageTemplate from './DriverPageTemplate';
import russellImage from './images/DriverPhotos/Rus.jpg';
import background from './images/f1_logo.jpg';

const RussellPage = () => {
  const [infoList, setInfoList] = useState([]);

  useEffect(() => {
    fetch('/driver_info.txt')
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n').slice(34, 44); 
        setInfoList(lines);
      })
      .catch(error => console.error(error)); //logs the error from fetch
  }, []);

  return (
    <DriverPageTemplate
      driverName="George Russell"
      imageSrc={russellImage}
      infoList={infoList}
      background = {background}
    />
  );
};

export default RussellPage;