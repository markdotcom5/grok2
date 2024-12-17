import React from 'react';

export default function Dashboard() {
  return <h1>Dashboard Placeholder</h1>;
}
      <div className="min-h-screen p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member Placeholder */}
          <div className="w-full h-48 bg-gray-300 flex items-center justify-center rounded-lg">
            <p>Team Member Placeholder</p>
          </div>
          <div className="w-full h-48 bg-gray-300 flex items-center justify-center rounded-lg">
            <p>Board of Advisors Placeholder</p>
          </div>
          <div className="w-full h-48 bg-gray-300 flex items-center justify-center rounded-lg">
            <p>Mission Statement Placeholder</p>
          </div>
        </div>
      </div>
    );
  }
  