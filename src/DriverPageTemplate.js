import React from 'react';

const DriverPageTemplate = ({ driverName, imageSrc, infoList, background }) => {

  const imgStyle = {
    width: '20%',
    height: 'auto'
  }

  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top right',
    backgroundSize: '100% 100%', // Set background size to 100% 100%
    height: '100%',
    position: 'relative',
    zIndex: '1',
  };

  const driverNameStyle = {
    color: '#fff',
    textAlign: 'center',
    fontSize: '5vh',
    fontWeight: 'bold',
    position: 'absolute',
    top: '5%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1',
  };

  const infoListStyle = {
    color: '#fff',
    fontWeight: 'bold',
    position: 'absolute',
    top: '20%',
    right: '5%',
    transform: 'translate(0, -50%)',
    zIndex: '1',
    fontSize: '1vw', 
  };

  return (
    <>
      <div className="driver-page1" style={backgroundStyle}>
        <h1 className="driver-name" style={driverNameStyle}>
          {driverName}
        </h1>
        <img src={imageSrc} alt={driverName} className="driver-image1" style={imgStyle} />
        <div className="driver-info" style={infoListStyle}>
          <ul>
            {infoList.map((info, index) => (
              <li key={index}>
                <span>{info}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DriverPageTemplate;