import React, { useState } from 'react';
import './Fields.css';

const Fields = () => {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  // Scheman för alla planer
  const schedules = {
    1: [
      '10:00 - 10:30: Boo 16:12:1 vs BP2016:1',
      '10:35 - 11:05: Boo 16:12:2 vs DIF2016',
      '11:10 - 11:40: Boo 16:13:1 vs Hammarby2016:1',
      '12:00 - 12:30: AIK 1 vs Boo 2016:11',
      '12:35 - 13:05: AIK 2 vs Boo 16:13:2',
      '13:10 - 13:40: AIK 1 vs BP2016:1',
      '13:45 - 14:15: Boo 16:12:1 vs Hammarby2016:1',
      '14:20 - 14:50: Boo 16:12:2 vs Nacka FC',
      '14:55 - 15:25: AIK 2 vs Hammarby2016:1',
    ],
    2: [
      '10:00 - 10:30: DIF2016 vs Boo 16:12:1',
      '10:35 - 11:05: NackaFC:1 vs Boo 16:13:2',
      '11:10 - 11:40: Boo 16:12:2 vs BP2016:1',
      '12:00 - 12:30: AIK 2 vs DIF2016',
      '12:35 - 13:05: AIK 1 vs Boo 16:13:1',
      '13:10 - 13:40: Boo 2016:11 vs Hammarby2016:1',
      '13:45 - 14:15: DIF2016 vs BP2016:1',
      '14:20 - 14:50: AIK 2 vs Boo 16:13:1',
      '14:55 - 15:25: AIK 1 vs NackaFC:1',
    ],
    3: [
      '10:00 - 10:30: Boo 16:13:2 vs DIF2016',
      '10:35 - 11:05: Boo 16:12:1 vs NackaFC:1',
      '11:10 - 11:40: Boo 16:12:2 vs Boo 16:13:1',
      '12:00 - 12:30: AIK 2 vs BP2016:1',
      '12:35 - 13:05: AIK 1 vs Hammarby2016:1',
      '13:10 - 13:40: Boo 2016:11 vs NackaFC:1',
      '13:45 - 14:15: AIK 1 vs Boo 16:12:1',
      '14:20 - 14:50: Boo 16:12:2 vs BP2016:1',
    ],
    4: [
      '10:00 - 10:30: Hammarby2016:1 vs NackaFC:1',
      '10:35 - 11:05: DIF2016 vs Boo 16:12:2',
      '11:10 - 11:40: BP2016:1 vs Boo 16:13:1',
      '12:00 - 12:30: AIK 1 vs NackaFC:1',
      '12:35 - 13:05: AIK 2 vs Boo 16:12:2',
      '13:10 - 13:40: Boo 2016:11 vs Hammarby2016:1',
      '13:45 - 14:15: AIK 2 vs DIF2016',
      '14:20 - 14:50: Hammarby2016:1 vs DIF2016',
    ],
  };

  return (
    <div className="full-field">
      {[1, 2, 3, 4].map((plan) => (
        <div
          key={plan}
          className="football-plan"
          onMouseEnter={() => setHoveredPlan(plan)}
          onMouseLeave={() => setHoveredPlan(null)}
        >
          <h2>Plan {plan}</h2>
          {hoveredPlan === plan && (
            <div className="schedule">
              <h3>Schema för Plan {plan}</h3>
              {schedules[plan].map((match, index) => (
                <p key={index}>{match}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Fields;
