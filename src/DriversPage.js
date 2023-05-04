import backgroundImage from './images/driver_paper.jpg';
import { useNavigate } from 'react-router-dom';
import ver from './images/DriverPhotos/Ver.png';
import alb from './images/DriverPhotos/Alb.png';
import alo from './images/DriverPhotos/Alo.png';
import bot from './images/DriverPhotos/Bot.png';
import gas from './images/DriverPhotos/Gas.png';
import gua from './images/DriverPhotos/Gua.png';
import ham from './images/DriverPhotos/Ham.png';
import lec from './images/DriverPhotos/Lec.png';
import mag from './images/DriverPhotos/Mag.png';
import nor from './images/DriverPhotos/Nor.png';
import oco from './images/DriverPhotos/Oco.png';
import per from './images/DriverPhotos/Per.png';
import rus from './images/DriverPhotos/Rus.png';
import sai from './images/DriverPhotos/Sai.png';
import str from './images/DriverPhotos/Str.png';
import tsu from './images/DriverPhotos/Tsu.png';
import './DriversPage.css';

const DriversPage = () => {
  const navigate = useNavigate();

  const images = [
    { src: ver, alt: "verstappen", path: "/drivers/verstappen" },
    { src: alb, alt: "albon", path: "/drivers/albon" },
    { src: alo, alt: "alonso", path: "/drivers/alonso" },
    { src: bot, alt: "bottas", path: "/drivers/bottas" },
    { src: gas, alt: "gasly", path: "/drivers/gasly" },
    { src: gua, alt: "guanyou", path: "/drivers/guanyou" },
    { src: ham, alt: "hamilton", path: "/drivers/hamilton" },
    { src: lec, alt: "leclerc", path: "/drivers/leclerc" },
    { src: mag, alt: "magnussen", path: "/drivers/magnussen" },
    { src: nor, alt: "norris", path: "/drivers/norris" },
    { src: oco, alt: "ocon", path: "/drivers/ocon" },
    { src: per, alt: "perez", path: "/drivers/perez" },
    { src: rus, alt: "russell", path: "/drivers/russell" },
    { src: sai, alt: "sainz", path: "/drivers/sainz" },
    { src: str, alt: "stroll", path: "/drivers/stroll" },
    { src: tsu, alt: "tsunoda", path: "/drivers/tsunoda" },
  ];



  return (
    <div className="driver-page"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', // adjust the minimum width here
        gap: '10px',
        minHeight: '100vh',
        boxSizing: 'border-box',
        padding: '10px',
      }}
    >
      {images.map((image, index) => (
        <button key={index} onClick={() => navigate(image.path)} style={{ backgroundColor: 'rgb(100, 118, 146)' }}>
          <img
            src={image.src}
            alt={image.alt}
            style={{ maxWidth: '100%', maxheight: '100%' }}
          />
        </button>
      ))}
    </div>
  );
};

export default DriversPage;