import React, { useState, useEffect } from 'react';
import DriverPageTemplate from './DriverPageTemplate';
import leclercImg from './images/DriverPhotos/Lec.jpg';
import background from './images/f1_logo.jpg';

const LeclercPage = () => {
  const [infoList, setInfoList] = useState([]);

  useEffect(() => {
    fetch('/driver_info.txt')
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n').slice(45, 55); //red bull lines from txt file. hardocoding works fine for this as its just not worth it to spend that much time on something so trivial
        setInfoList(lines);
      })
      .catch(error => console.error(error)); //logs the error from fetch
  }, []);

  return (
    <DriverPageTemplate
      driverName="Charles Leclerc"
      imageSrc={leclercImg}
      infoList={infoList}
      background = {background}
    />
  );
};

export default LeclercPage;