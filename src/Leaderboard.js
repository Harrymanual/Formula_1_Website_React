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
      case 26 : return 'gold';
      case 18: return 'silver';
      case 19: return 'silver';
      case 15: return '#cd7f32';
      case 16: return '#cd7f32';
      case 'Veto': return 'red';
      case 'DNF' : return 'red';
      case 13: return '#b854d4';
      default: return 'white';
    }
  };
  
  // Function to calculate total score
  const getTotalScore = (playerScores) => {
    return playerScores.reduce((total, score) => total + ((score !== 'X' && score !== 'Veto' && score !== 'DNF') ? parseInt(score) : 0), 0);
};
  
  const Leaderboard = () => {
    return (
      <div style={{ textAlign: 'center' }}>
      {/* Table for F1 Points System */}
      <table style={{ margin: 'auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '8px', backgroundColor: '#e8e8e8', color: 'black' }}>Position</th>
            <th style={{ padding: '8px', backgroundColor: 'gold', color: 'black' }}>1st</th>
            <th style={{ padding: '8px', backgroundColor: 'silver', color: 'black' }}>2nd</th>
            <th style={{ padding: '8px', backgroundColor: '#cd7f32', color: 'black' }}>3rd</th>
            <th style={{ padding: '8px', backgroundColor: 'white', color: 'black' }}>4th</th>
            <th style={{ padding: '8px', backgroundColor: 'white', color: 'black' }}>5th</th>
            <th style={{ padding: '8px', backgroundColor: 'white', color: 'black' }}>6th</th>
            <th style={{ padding: '8px', backgroundColor: 'white', color: 'black' }}>7th</th>
            <th style={{ padding: '8px', backgroundColor: 'white', color: 'black' }}>8th</th>
            <th style={{ padding: '8px', backgroundColor: 'white', color: 'black' }}>9th</th>
            <th style={{ padding: '8px', backgroundColor: 'white', color: 'black' }}>10th</th>
            <th style={{ padding: '8px', backgroundColor: '#b854d4', color: 'black' }}>Fastest Lap</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ backgroundColor: '#e8e8e8', color: 'black', padding: '8px' }}>Points</td>
            <td style={{ backgroundColor: 'gold', color: 'black', padding: '8px' }}>25</td>
            <td style={{ backgroundColor: 'silver', color: 'black', padding: '8px' }}>18</td>
            <td style={{ backgroundColor: '#cd7f32', color: 'black', padding: '8px' }}>15</td>
            <td style={{ backgroundColor: 'white', padding: '8px' }}>12</td>
            <td style={{ backgroundColor: 'white', padding: '8px' }}>10</td>
            <td style={{ backgroundColor: 'white', padding: '8px' }}>8</td>
            <td style={{ backgroundColor: 'white', padding: '8px' }}>6</td>
            <td style={{ backgroundColor: 'white', padding: '8px' }}>4</td>
            <td style={{ backgroundColor: 'white', padding: '8px' }}>2</td>
            <td style={{ backgroundColor: 'white', color: 'black', padding: '8px' }}>1</td>
            <td style={{ backgroundColor: '#b854d4', color: 'black', padding: '8px' }}>+1</td>
          </tr>
        </tbody>
      </table>

      <h1 style={{ fontWeight: 'bold', textAlign: 'center'}}>Season 1 F1 2022</h1>

      <table style={{ margin: 'auto', borderCollapse: 'collapse' }}>
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
                <td key={index} style={{ backgroundColor: getBackgroundColor(score) }}>
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