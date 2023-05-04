import { useNavigate } from 'react-router-dom';
import ver from './images/DriverPhotos/Ver.jpg';
import alb from './images/DriverPhotos/Alb.jpg';
import alo from './images/DriverPhotos/Alo.jpg';
import bot from './images/DriverPhotos/Bot.jpg';
import gas from './images/DriverPhotos/Gas.jpg';
import gua from './images/DriverPhotos/Gua.jpg';
import ham from './images/DriverPhotos/Ham.jpg';
import lec from './images/DriverPhotos/Lec.jpg';
import mag from './images/DriverPhotos/Mag.jpg';
import nor from './images/DriverPhotos/Nor.jpg';
import oco from './images/DriverPhotos/Oco.jpg';
import per from './images/DriverPhotos/Per.jpg';
import rus from './images/DriverPhotos/Rus.jpg';
import sai from './images/DriverPhotos/Sai.jpg';
import str from './images/DriverPhotos/Str.jpg';
import tsu from './images/DriverPhotos/Tsu.jpg';
import './DriversPage.css';

const DriversPage = () => {
  const navigate = useNavigate();

  const images = [
    { src: ver, alt: "verstappen", path: "/drivers/verstappen" },
    { src: per, alt: "perez", path: "/drivers/perez" },
    { src: ham, alt: "hamilton", path: "/drivers/hamilton" },
    { src: rus, alt: "russell", path: "/drivers/russell" },
    { src: lec, alt: "leclerc", path: "/drivers/leclerc" },
    { src: sai, alt: "sainz", path: "/drivers/sainz" },
    { src: tsu, alt: "tsunoda", path: "/drivers/tsunoda" },
    { src: alo, alt: "alonso", path: "/drivers/alonso" },
    { src: str, alt: "stroll", path: "/drivers/stroll" },
    { src: oco, alt: "ocon", path: "/drivers/ocon" },
    { src: gas, alt: "gasly", path: "/drivers/gasly" },
    { src: alb, alt: "albon", path: "/drivers/albon" },
    { src: bot, alt: "bottas", path: "/drivers/bottas" },
    { src: gua, alt: "guanyou", path: "/drivers/guanyou" },
    { src: mag, alt: "magnussen", path: "/drivers/magnussen" },
    { src: nor, alt: "norris", path: "/drivers/norris" },
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
        <button key={index} onClick={() => navigate(image.path)} style={{ backgroundColor: 'white' }}>
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