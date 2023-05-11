import React from 'react';
import './TeamPageTemplate.css';

const TeamPageTemplate = ({ teamName, imageSrc, infoList }) => {
  return (
    <div className="team-page">
      <img src={imageSrc} alt={teamName} className="team-image" />
      <div className="team-info">
        <h1>{teamName}</h1>
        <ul>
          {infoList.map((info, index) => (
            <li key={index}>
              <pre>{info}</pre>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamPageTemplate;