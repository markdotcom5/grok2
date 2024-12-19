import React from 'react';

export default function Team() {
  const teamMembers = [
    { name: 'John Doe', role: 'CEO' },
    { name: 'Jane Smith', role: 'CTO' },
    { name: 'Alice Johnson', role: 'Lead Engineer' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
            <p className="text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
