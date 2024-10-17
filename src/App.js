import React from 'react';
import TeamMatches from './components/TeamMatches';
import Invitation from './components/Invitation';
import './App.css';
import Fields from './components/Fields';

function App() {
  // AIK 1:s matcher
  const aik1Matches = [
    { timeAndField: '12:00 - 12:30 (Plan 1)', opponent: 'Boo 2016:11' },
    { timeAndField: '13:10 - 13:40 (Plan 1)', opponent: 'BP2016:1' },
    { timeAndField: '13:45 - 14:15 (Plan 3)', opponent: 'Boo 16:12:1' },
    { timeAndField: '14:20 - 14:50 (Plan 4)', opponent: 'BP2016:1' },
    { timeAndField: '14:55 - 15:25 (Plan 2)', opponent: 'Nacka FC' }
  ];

  // AIK 2:s matcher
  const aik2Matches = [
    { timeAndField: '12:35 - 13:05 (Plan 1)', opponent: 'Boo 16:13:2' },
    { timeAndField: '13:10 - 13:40 (Plan 2)', opponent: 'Boo 16:13:1' },
    { timeAndField: '13:45 - 14:15 (Plan 3)', opponent: 'Boo 16:12:2' },
    { timeAndField: '14:20 - 14:50 (Plan 3)', opponent: 'DIF2016' },
    { timeAndField: '14:55 - 15:25 (Plan 1)', opponent: 'Hammarby2016:1' }
  ];

  // Boo 16:12:1:s matcher
  const boo16121Matches = [
    { timeAndField: '10:00 - 10:30 (Plan 1)', opponent: 'BP2016:1' },
    { timeAndField: '10:35 - 11:05 (Plan 2)', opponent: 'DIF2016' },
    { timeAndField: '13:45 - 14:15 (Plan 1)', opponent: 'Hammarby2016:1' },
    { timeAndField: '13:45 - 14:15 (Plan 3)', opponent: 'AIK 1' },
    { timeAndField: '10:35 - 11:05 (Plan 3)', opponent: 'Nacka FC' }
  ];

  // Boo 16:12:2:s matcher
  const boo16122Matches = [
    { timeAndField: '10:35 - 11:05 (Plan 4)', opponent: 'DIF2016' },
    { timeAndField: '11:10 - 11:40 (Plan 2)', opponent: 'BP2016:1' },
    { timeAndField: '12:35 - 13:05 (Plan 4)', opponent: 'AIK 2' },
    { timeAndField: '13:45 - 14:15 (Plan 3)', opponent: 'Boo 16:13:1' },
    { timeAndField: '14:20 - 14:50 (Plan 1)', opponent: 'Nacka FC' }
  ];

  // Boo 16:13:1:s matcher
  const boo16131Matches = [
    { timeAndField: '11:10 - 11:40 (Plan 1)', opponent: 'Hammarby2016:1' },
    { timeAndField: '12:35 - 13:05 (Plan 2)', opponent: 'AIK 1' },
    { timeAndField: '13:45 - 14:15 (Plan 3)', opponent: 'Boo 16:12:2' },
    { timeAndField: '14:20 - 14:50 (Plan 3)', opponent: 'DIF2016' },
    { timeAndField: '10:35 - 11:05 (Plan 4)', opponent: 'BP2016:1' }
  ];

  // Boo 16:13:2:s matcher
  const boo16132Matches = [
    { timeAndField: '10:35 - 11:05 (Plan 2)', opponent: 'Nacka FC' },
    { timeAndField: '11:10 - 11:40 (Plan 3)', opponent: 'DIF2016' },
    { timeAndField: '12:35 - 13:05 (Plan 1)', opponent: 'AIK 2' },
    { timeAndField: '14:55 - 15:25 (Plan 4)', opponent: 'BP2016:1' },
    { timeAndField: '13:10 - 13:40 (Plan 3)', opponent: 'Boo 16:12:1' }
  ];
  const bp20161Matches = [
    { timeAndField: '10:00 - 10:30 (Plan 1)', opponent: 'Boo 16:12:1' },
    { timeAndField: '11:10 - 11:40 (Plan 2)', opponent: 'Boo 16:12:2' },
    { timeAndField: '12:00 - 12:30 (Plan 3)', opponent: 'AIK 2' },
    { timeAndField: '13:45 - 14:15 (Plan 3)', opponent: 'Boo 16:12:1' },
    { timeAndField: '14:20 - 14:50 (Plan 4)', opponent: 'Boo 16:13:2' }
  ];
  // DIF2016:s matcher
  const dif2016Matches = [
    { timeAndField: '10:35 - 11:05 (Plan 2)', opponent: 'Boo 16:12:1' },
    { timeAndField: '11:10 - 11:40 (Plan 3)', opponent: 'Boo 16:13:2' },
    { timeAndField: '12:35 - 13:05 (Plan 4)', opponent: 'AIK 2' },
    { timeAndField: '13:45 - 14:15 (Plan 3)', opponent: 'BP2016:1' },
    { timeAndField: '14:55 - 15:25 (Plan 4)', opponent: 'Hammarby2016:1' }
  ];

  // Hammarby2016:1:s matcher
  const hammarby20161Matches = [
    { timeAndField: '11:10 - 11:40 (Plan 1)', opponent: 'Boo 16:13:1' },
    { timeAndField: '12:35 - 13:05 (Plan 3)', opponent: 'AIK 1' },
    { timeAndField: '13:45 - 14:15 (Plan 1)', opponent: 'Boo 16:12:1' },
    { timeAndField: '14:20 - 14:50 (Plan 4)', opponent: 'DIF2016' },
    { timeAndField: '14:55 - 15:25 (Plan 1)', opponent: 'AIK 2' }
  ];

  // NackaFC:1:s matcher
  const nackaFCMatches = [
    { timeAndField: '10:35 - 11:05 (Plan 2)', opponent: 'Boo 16:13:2' },
    { timeAndField: '12:00 - 12:30 (Plan 4)', opponent: 'AIK 1' },
    { timeAndField: '13:10 - 13:40 (Plan 3)', opponent: 'Boo 2016:11' },
    { timeAndField: '14:20 - 14:50 (Plan 1)', opponent: 'Boo 16:12:2' },
    { timeAndField: '14:55 - 15:25 (Plan 2)', opponent: 'AIK 1' }
  ];

  // Boo 2016:11:s matcher
  const boo201611Matches = [
    { timeAndField: '10:35 - 11:05 (Plan 2)', opponent: 'DIF2016' },
    { timeAndField: '11:10 - 11:40 (Plan 4)', opponent: 'Hammarby2016:1' },
    { timeAndField: '12:00 - 12:30 (Plan 1)', opponent: 'AIK 1' },
    { timeAndField: '13:10 - 13:40 (Plan 3)', opponent: 'Nacka FC' },
    { timeAndField: '14:55 - 15:25 (Plan 1)', opponent: 'Boo 16:12:1' }
  ];

  return (
    <div className="App">
      <Invitation />
      <h1>Fotbollsplaner</h1>
      <Fields />
      <h1>Matchschema</h1>

      {/* Sektion för AIK 1 */}
      <TeamMatches teamName="AIK 1" matches={aik1Matches} />

      {/* Sektion för AIK 2 */}
      <TeamMatches teamName="AIK 2" matches={aik2Matches} />

      {/* Sektion för Boo 16:12:1 */}
      <TeamMatches teamName="Boo 16:12:1" matches={boo16121Matches} />

      {/* Sektion för Boo 16:12:2 */}
      <TeamMatches teamName="Boo 16:12:2" matches={boo16122Matches} />

      {/* Sektion för Boo 16:13:1 */}
     
      {/* Sektion för Boo 16:13:1 */}
      <TeamMatches teamName="Boo 16:13:1" matches={boo16131Matches} />

      {/* Sektion för Boo 16:13:2 */}
      <TeamMatches teamName="Boo 16:13:2" matches={boo16132Matches} />
 {/* Sektion för BP2016:1 */}
 <TeamMatches teamName="BP2016:1" matches={bp20161Matches} />
      {/* Sektion för DIF2016 */}
      <TeamMatches teamName="DIF2016" matches={dif2016Matches} />

      {/* Sektion för Hammarby2016:1 */}
      <TeamMatches teamName="Hammarby2016:1" matches={hammarby20161Matches} />

      {/* Sektion för NackaFC:1 */}
      <TeamMatches teamName="NackaFC:1" matches={nackaFCMatches} />

      {/* Sektion för Boo 2016:11 */}
      <TeamMatches teamName="Boo 2016:11" matches={boo201611Matches} />
    </div>
  );
}

export default App;
