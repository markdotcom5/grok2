import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md flex items-center justify-center">
          <p>Training Progress Placeholder</p>
        </div>
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md flex items-center justify-center">
          <p>Leaderboards Placeholder</p>
        </div>
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md flex items-center justify-center">
          <p>Achievements Placeholder</p>
        </div>
      </div>
    </div>
  );
}
