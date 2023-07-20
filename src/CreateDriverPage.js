import React, { useState, useEffect } from 'react';
import DriverPageTemplate from './DriverPageTemplate';


import TsunodaImg from './images/DriverPhotos/Tsu.jpg';
import AlonsoImg from './images/DriverPhotos/Alo.jpg';
import StrollImg from './images/DriverPhotos/Str.jpg';
import OconImg from './images/DriverPhotos/Oco.jpg';
import GaslyImg from './images/DriverPhotos/Gas.jpg';
import AlbonImg from './images/DriverPhotos/Alb.jpg';
import BottasImg from './images/DriverPhotos/Bot.jpg';
import ZhouImg from './images/DriverPhotos/Gua.jpg';
import MagnussenImg from './images/DriverPhotos/Mag.jpg';
import NorrisImg from './images/DriverPhotos/Nor.jpg';
import background from './images/f1_logo.jpg';


const CreateDriverPage = (driverName, driverImage, startNum, endNum) => {
  return () => {
    const [infoList, setInfoList] = useState([]);
  
    useEffect(() => {
      fetch('/driver_info.txt')
        .then(response => response.text())
        .then(text => {
          const lines = text.split('\n').slice(startNum, endNum);
          setInfoList(lines);
        })
        .catch(error => console.error(error));
    }, []);
  
    return (
      <DriverPageTemplate
        driverName={driverName}
        imageSrc={driverImage}
        infoList={infoList}
        background={background}
      />
    );
  };
};

export const TsunodaPage = CreateDriverPage("Yuki Tsunoda", TsunodaImg, 67, 77);
export const AlonsoPage = CreateDriverPage("Fernando Alonso", AlonsoImg, 78, 88);
export const StrollPage = CreateDriverPage("Lance Stroll", StrollImg, 89, 99);
export const OconPage = CreateDriverPage("Esteban Ocon", OconImg, 100, 110);
export const GaslyPage = CreateDriverPage("Pierre Gasly", GaslyImg, 111, 121);
export const AlbonPage = CreateDriverPage("Alexander Albon", AlbonImg, 122, 132);
export const BottasPage = CreateDriverPage("Valtteri Bottas", BottasImg, 133, 143);
export const ZhouPage = CreateDriverPage("Zhou Guanyu", ZhouImg, 144, 154);
export const MagnussenPage = CreateDriverPage("Kevin Magnussen", MagnussenImg, 155, 165);
export const NorrisPage = CreateDriverPage("Lando Norris", NorrisImg, 166, 176);