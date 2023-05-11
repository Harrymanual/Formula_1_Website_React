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
    { src: redbull, alt: "Red Bull #mostawesometeam", path: "/teams/red-bull" },
    { src: merc, alt: "Merc #2ndbestteam", path: "/teams/mercedes" },
    { src: sf, alt: "rarri #whatcanisay #beststrategy", path: "/teams/ferrari" },
    { src: aston, alt: "aston #whyisstrollinthatrocket", path: "/teams/aston-martin" },
    { src: renault, alt: "alpine #akabeerbudgetchampagne", path: "/teams/alpine" },
    { src: alpha, alt: "alpha tauri #bteam", path: "/teams/alpha-tauri" },
    { src: alfa, alt: "alfa romeo", path: "/teams/alfa-romeo" },
    { src: williams, alt: "williams", path: "/teams/williams" },
    { src: mchonda, alt: "mchonda", path: "/teams/mclaren" },
    { src: haas, alt: "?", path: "/teams/haas" },
  ];

  return (
    <div className="teams-page"
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