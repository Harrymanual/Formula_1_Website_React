import backgroundImage from './images/driver_paper.jpg';
import { useNavigate } from 'react-router-dom';

const DriversPage = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
      }}
    >
      <h1>Drivers Page</h1>
    </div>
  );
};

export default DriversPage;