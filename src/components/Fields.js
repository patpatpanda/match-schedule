import React, { useState } from 'react';
import './Fields.css';

const Fields = () => {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  // Uppdaterade scheman för alla 5 planer
  const schedules = {
    1: [
      '10:00 - 10:30: Boo 16:12:1 vs Hammarby2016:1',
      '10:50 - 11:20: Boo 16:12:1 vs Boo 16:13:1',
      '11:30 - 12:00: Boo 16:12:1 vs Nacka FC',
      '12:30 - 13:00: Boo 16:12:1 vs AIK 1',
    ],
    2: [
      '10:00 - 10:30: Boo 16:12:2 vs BP2016:1',
      '10:50 - 11:20: Boo 16:12:2 vs Boo 16:13:2',
      '12:30 - 13:00: Boo 16:12:2 vs AIK 2',
      '13:10 - 13:40: Boo 16:12:2 vs Nacka FC',
    ],
    3: [
      '10:50 - 11:20: Boo 16:13:1 vs Boo 16:12:1',
      '11:30 - 12:00: Boo 16:13:1 vs BP2016:1',
      '13:15 - 13:45: Boo 16:13:1 vs AIK 1',
      '13:50 - 14:20: Boo 16:13:1 vs Nacka FC',
    ],
    4: [
      '10:00 - 10:30: Boo 16:13:2 vs Boo 2016:11',
      '14:00 - 14:30: AIK 2 vs Boo 2016:11',
      '14:40 - 15:10: Boo 16:13:2 vs AIK 2',
    ],
    5: [
      '11:15 - 11:45: Boo 2016:11 vs Hammarby2016:1',
      '12:45 - 13:15: Boo 16:13:2 vs BP2016:1',
      '13:20 - 13:50: AIK 2 vs Hammarby2016:1',
      '14:35 - 15:05: Hammarby2016:1 vs BP2016:1',
    ],
  };

  return (
    <div className="full-field">
      {[1, 2, 3, 4, 5].map((plan) => (
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
