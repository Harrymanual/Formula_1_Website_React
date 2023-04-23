import { useNavigate } from 'react-router-dom';
import redbull from './images/redbull.jpg';
import merc from './images/merrc.jpg';
import sf from './images/sf.jpg';
import aston from './images/aston.jpg';
import renault from './images/renault.jpg';
import alpha from './images/alpha.jpg';
import alfa from './images/alfa.jpg';
import williams from './images/williams.jpg';
import mchonda from './images/mclaren.jpg';
import haas from './images/haas.jpg';
import './TeamsPage.css';


const TeamsPage = () => {
  const navigate = useNavigate();
  const images = [
    { src: redbull, alt: "Red Bull #mostawesometeam", path: "/page1" },
    { src: merc, alt: "Merc #2ndbestteam", path: "/page2" },
    { src: sf, alt: "rarri #whatcanisay #beststrategy", path: "/page3" },
    { src: aston, alt: "aston #whyisstrollinthatrocket", path: "/page4" },
    { src: renault, alt: "alpine #akabeerbudgetchampagne", path: "/page5" },
    { src: alpha, alt: "alpha tauri #bteam", path: "/page6" },
    { src: alfa, alt: "audi", path: "/page7" },
    { src: williams, alt: "williams", path: "/page8" },
    { src: mchonda, alt: "mchonda", path: "/page9" },
    { src: haas, alt: "?", path: "/page10" },
  ];

  return (
    <div className="teams-page"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
        gridAutoRows: '510px',
        gap: '10px',
        minHeight: '100vh',
        boxSizing: 'border-box',
        padding: '10px',
      }}
    >
      {images.map((image, index) => (
        <button key={index} onClick={() => navigate(image.path)} style={{ backgroundColor: 'gray' }}>
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

export default TeamsPage;