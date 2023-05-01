const TeamPageTemplate = ({ teamName, imageSrc, description }) => {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={imageSrc} alt={teamName} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
          <h1>{teamName}</h1>
        </div>
        <p>{description}</p>
        {/* the rest of the content */}
      </div>
    );
  };

export default TeamPageTemplate;