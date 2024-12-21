// components/MissionTimeline.tsx

import React from 'react';

const MissionTimeline = () => {
  const missions = [
    { name: 'Apollo 11', date: '1969-07-20', description: 'First manned moon landing.' },
    { name: 'Mars Rover', date: '2021-02-18', description: 'Perseverance rover lands on Mars.' },
    // Add more missions here
  ];

  return (
    <div className="timeline">
      <h2>Space Mission Timeline</h2>
      <ul>
        {missions.map((mission, index) => (
          <li key={index}>
            <h3>{mission.name}</h3>
            <p>{mission.date}</p>
            <p>{mission.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MissionTimeline;
