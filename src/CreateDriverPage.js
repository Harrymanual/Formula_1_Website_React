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


const CreateDriverPage = (driverName, driverImage) => {
  return () => {
    const [infoList, setInfoList] = useState([]);
  
    useEffect(() => {
      fetch('/driver_info.txt')
        .then(response => response.text())
        .then(text => {
          const lines = text.split('\n').slice(0, 11);
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

export const TsunodaPage = CreateDriverPage("Yuki Tsunoda", TsunodaImg);
export const AlonsoPage = CreateDriverPage("Fernando Alonso", AlonsoImg);
export const StrollPage = CreateDriverPage("Lance Stroll", StrollImg);
export const OconPage = CreateDriverPage("Esteban Ocon", OconImg);
export const GaslyPage = CreateDriverPage("Pierre Gasly", GaslyImg);
export const AlbonPage = CreateDriverPage("Alexander Albon", AlbonImg);
export const BottasPage = CreateDriverPage("Valtteri Bottas", BottasImg);
export const ZhouPage = CreateDriverPage("Zhou Guanyu", ZhouImg);
export const MagnussenPage = CreateDriverPage("Kevin Magnussen", MagnussenImg);
export const NorrisPage = CreateDriverPage("Lando Norris", NorrisImg);