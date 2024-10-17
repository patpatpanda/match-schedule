import React from 'react';

const MatchSchedule = ({ data }) => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Matchschema</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '10px', border: '1px solid black' }}>Match Information</th>
            <th style={{ padding: '10px', border: '1px solid black' }}>Other Match Information</th>
          </tr>
        </thead>
        <tbody>
          {data.map((match, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', border: '1px solid black' }}>{match.matchInfo}</td>
              <td style={{ padding: '10px', border: '1px solid black' }}>{match.otherMatchInfo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchSchedule;
