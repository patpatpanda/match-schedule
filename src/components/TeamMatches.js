import React from 'react';

const TeamMatches = ({ teamName, matches }) => {
  return (
    <div style={{ padding: '20px', marginBottom: '20px', border: '1px solid black', borderRadius: '10px' }}>
      <h2>{teamName}</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '10px', border: '1px solid black' }}>Tid & Plan</th>
            <th style={{ padding: '10px', border: '1px solid black' }}>Motståndare</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', border: '1px solid black' }}>{match.timeAndField}</td>
              <td style={{ padding: '10px', border: '1px solid black' }}>{match.opponent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamMatches;
