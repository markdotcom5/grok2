import React from 'react';

export default function Leaderboard() {
  const users = [
    { name: 'Alice', score: 1200 },
    { name: 'Bob', score: 1100 },
    { name: 'Charlie', score: 1000 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Leaderboard</h1>
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        {users.map((user, index) => (
          <div key={index} className="flex justify-between py-2 border-b border-gray-700">
            <span>{user.name}</span>
            <span className="font-bold">{user.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
