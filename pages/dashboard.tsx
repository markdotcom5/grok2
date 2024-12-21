import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [progress, setProgress] = useState(null);
  const [leaderboard, setLeaderboard] = useState(null);
  const [achievements, setAchievements] = useState([]);
  const [error, setError] = useState(false); // Add global error state

  // Fetch data on component mount with error handling
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch training progress
        const progressResponse = await fetch('/api/get_progress');
        if (!progressResponse.ok) throw new Error('Failed to fetch progress');
        const progressData = await progressResponse.json();
        setProgress(progressData);

        // Fetch leaderboard
        const leaderboardResponse = await fetch('/api/get_leaderboard');
        if (!leaderboardResponse.ok) throw new Error('Failed to fetch leaderboard');
        const leaderboardData = await leaderboardResponse.json();
        setLeaderboard(leaderboardData);

        // Fetch achievements
        const achievementsResponse = await fetch('/api/get_achievements');
        if (!achievementsResponse.ok) throw new Error('Failed to fetch achievements');
        const achievementsData = await achievementsResponse.json();
        setAchievements(achievementsData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(true); // Set error state
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Training Progress */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Training Progress</h2>
          {error ? (
            <p>Error loading progress. Please try again later.</p>
          ) : progress ? (
            <p>
              Credits: {progress.credits} <br />
              Completed Modules: {progress.completed_modules.join(', ')}
            </p>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {/* Leaderboards */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Leaderboards</h2>
          {error ? (
            <p>Error loading leaderboard. Please try again later.</p>
          ) : leaderboard ? (
            <p>
              Your Rank: #{leaderboard.rank} <br />
              Top Performer: {leaderboard.top_performer}
            </p>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {/* Achievements */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
          {error ? (
            <p>Error loading achievements. Please try again later.</p>
          ) : achievements.length > 0 ? (
            <ul>
              {achievements.map((achievement, index) => (
                <li key={index}>🏆 {achievement.name}</li>
              ))}
            </ul>
          ) : (
            <p>No achievements yet. Keep going!</p>
          )}
        </div>
      </div>
    </div>
  );
}
