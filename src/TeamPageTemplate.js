import React from 'react';

const TeamPageTemplate = ({ teamName, imageSrc, infoList, secondImageSrc, background }) => {

  const imgStyle = {
    width: '20%',
    height: 'auto'
  }

  const backgroundStyle1 = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top right',
    backgroundSize: '100% 100%', // Set background size to 100% 100%
    height: '100%',
    position: 'relative',
    zIndex: '1',
  };

  const backgroundStyle2 = {
    backgroundImage: `url(${secondImageSrc})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: '100% 100%', // Set background size to 100% 100%
    height: '70%',
    position: 'relative',
    zIndex: '1',
  };

  const teamNameStyle = {
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
      <div className="team-page" style={backgroundStyle1}>
        <h1 className="team-name" style={teamNameStyle}>
          {teamName}
        </h1>
        <img src={imageSrc} alt={teamName} className="team-image" style={imgStyle} />
        <div className="team-info" style={infoListStyle}>
          <ul>
            {infoList.map((info, index) => (
              <li key={index}>
                <span>{info}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="team-page" style={backgroundStyle2}></div>
    </>
  );
};

export default TeamPageTemplate;