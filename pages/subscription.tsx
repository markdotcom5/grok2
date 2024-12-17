import React from 'react';

export default function Dashboard() {
  return <h1>Dashboard Placeholder</h1>;
}
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Choose Your Subscription Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Plan 1 */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Individual Plan</h2>
          <p className="text-gray-400 mb-6">Perfect for solo space enthusiasts.</p>
          <p className="text-3xl font-bold mb-4">$49.99/mo</p>
        </div>

        {/* Plan 2 */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Family Plan</h2>
          <p className="text-gray-400 mb-6">Share the journey with family.</p>
          <p className="text-3xl font-bold mb-4">$134.99/mo</p>
        </div>

        {/* Plan 3 */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Galactic Travelers</h2>
          <p className="text-gray-400 mb-6">Ultimate plan for future astronauts.</p>
          <p className="text-3xl font-bold mb-4">$2,048/mo</p>
        </div>
      </div>
    </div>
  );
}
