import React from 'react';

export default function BOA() {
  const advisors = [
    { name: 'Dr. Mark R. Pete', role: 'Chief Medical Officer, NASA' },
    { name: 'Travis Talbot', role: 'Senior Manufacturing Engineer, SpaceX' },
    { name: 'Laura Anne Edwards', role: 'Global Innovation Executive, NASA Datanaut' },
    { name: 'Erich Spangenberg', role: 'Founder, Sauvegarder Investment Management' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Board of Advisors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advisors.map((advisor, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-2">{advisor.name}</h2>
            <p className="text-gray-400">{advisor.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
