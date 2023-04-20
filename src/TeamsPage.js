import backgroundImage from './images/team_logos_updated.png';
import { useNavigate } from 'react-router-dom';


const TeamsPage = () => {
  const navigate = useNavigate();
  

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, minmax(200px, 1fr))',
        gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
        gap: '5px',
        height: '100vh',
        boxSizing: 'border-box',
      }}
    >
      <h1>Teams Page</h1>

    </div>
  );
};

export default TeamsPage;