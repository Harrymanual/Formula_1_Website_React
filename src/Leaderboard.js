import React from 'react';

// Players names
const players = ['Harry', 'Baxter', 'Cameron'];

// Define the initial scores for each player and each race
// Replace 'X' with the actual scores as the season progresses
const scores = {
    Harry: [26, 'X', 'X', 'X', 'X', 'X', 'Veto', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'Veto', 'X', 'X', 'X', 'X', 'X', 'Veto', 'X'],
    Baxter: [4, 'X', 'X', 'X', 'X', 'X', 'Veto', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'Veto', 'X', 'X', 'X', 'X', 'X', 'Veto', 'X'],
    Cameron: ['DNF', 'X', 'X', 'X', 'X', 'X', 'Veto', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'Veto', 'X', 'X', 'X', 'X', 'X', 'Veto', 'X'],
  };

// List of races and corresponding flag images
const races = [
  { name: 'Bahrain', flag: 'https://www.worldometers.info/img/flags/ba-flag.gif' },
  { name: 'Saudi Arabian', flag: 'https://www.worldometers.info/img/flags/sa-flag.gif' },
  { name: 'Australia', flag: 'https://www.worldometers.info/img/flags/as-flag.gif' },
  { name: 'Emilia Romagna', flag: 'https://www.worldometers.info/img/flags/it-flag.gif' },
  { name: 'Miami', flag: 'https://www.worldometers.info/img/flags/us-flag.gif' },
  { name: 'Spain', flag: 'https://www.worldometers.info/img/flags/sp-flag.gif' },
  { name: 'Monaco', flag: 'https://www.worldometers.info/img/flags/mn-flag.gif' },
  { name: 'Azerbaijan', flag: 'https://www.worldometers.info/img/flags/aj-flag.gif' },
  { name: 'Canada', flag: 'https://www.worldometers.info/img/flags/ca-flag.gif' },
  { name: 'England', flag: 'https://www.worldometers.info/img/flags/uk-flag.gif' },
  { name: 'Austria', flag: 'https://www.worldometers.info/img/flags/au-flag.gif' },
  { name: 'France', flag: 'https://www.worldometers.info/img/flags/fr-flag.gif' },
  { name: 'Hungary', flag: 'https://www.worldometers.info/img/flags/hu-flag.gif' },
  { name: 'Belgium', flag: 'https://www.worldometers.info/img/flags/be-flag.gif' },
  { name: 'Netherlands', flag: 'https://www.worldometers.info/img/flags/nl-flag.gif' },
  { name: 'Monza', flag: 'https://www.worldometers.info/img/flags/it-flag.gif' },
  { name: 'Singapore', flag: 'https://www.worldometers.info/img/flags/sn-flag.gif' },
  { name: 'Japan', flag: 'https://www.worldometers.info/img/flags/ja-flag.gif' },
  { name: 'Texas', flag: 'https://www.worldometers.info/img/flags/us-flag.gif' },
  { name: 'Mexico', flag: 'https://www.worldometers.info/img/flags/mx-flag.gif' },
  { name: 'Brazil', flag: 'https://www.worldometers.info/img/flags/br-flag.gif' },
  { name: 'Abu Dhabi', flag: 'https://www.worldometers.info/img/flags/ae-flag.gif' },
  { name: 'China', flag: 'https://www.worldometers.info/img/flags/ch-flag.gif' },
  { name: 'Portugal', flag: 'https://www.worldometers.info/img/flags/po-flag.gif' },
];



// Function to determine the background color based on the score
const getBackgroundColor = (score) => {
    switch (score) {
      case 'X': return 'red';
      case 25: return 'gold';
      case 18: return 'silver';
      case 15: return '#cd7f32';
      case 'Veto': return 'red';
      case 26 : return 'gold';
      case 'DNF' : return 'red';
      default: return 'white';
    }
  };
  
  // Function to calculate total score
  const getTotalScore = (playerScores) => {
    return playerScores.reduce((total, score) => total + ((score !== 'X' && score !== 'Veto' && score !== 'DNF') ? parseInt(score) : 0), 0);
};
  
  const Leaderboard = () => {
    return (
      <div>
        <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Season 1 F1 2022</h1>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              {races.map((race, index) => (
                <th key={index}>
                  <img src={race.flag} alt={race.name} width="50" height="30" />
                </th>
              ))}
              <th style={{ backgroundColor: 'lime' }}>Total</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player}>
                <td>{player}</td>
                {scores[player].map((score, index) => (
                  <td key={index} style={{backgroundColor: getBackgroundColor(score)}}>
                    {score}
                  </td>
                ))}
                <td style={{ backgroundColor: 'lime' }}>{getTotalScore(scores[player])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Leaderboard;