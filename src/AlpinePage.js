import React, { useState, useEffect } from 'react';
import TeamPageTemplate from './TeamPageTemplate';
import alpineLogo from './images/renault.jpg';
import stock from './images/stock.jpg';
import background from './images/f1_logo.jpg';

const AlpinePage = () => {
  const [infoList, setInfoList] = useState([]);

  useEffect(() => {
    fetch('/team_info.txt')
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n').slice(89, 99); //red bull lines from txt file. hardocoding works fine for this as its just not worth it to spend that much time on something so trivial
        setInfoList(lines);
      })
      .catch(error => console.error(error)); //logs the error from fetch
  }, []);

  return (
    <TeamPageTemplate
      teamName="Alpine"
      imageSrc={alpineLogo}
      infoList={infoList}
      secondImageSrc={stock}
      background = {background}
    />
  );
};

export default AlpinePage;