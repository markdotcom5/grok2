export default function Leaderboard() {
    const performers = [
      { name: "Alice", score: 95 },
      { name: "Bob", score: 89 },
      { name: "Charlie", score: 82 },
    ];
  
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-center mb-6">🏆 Leaderboard</h1>
        <ul className="max-w-lg mx-auto bg-white shadow-md rounded p-6">
          {performers.map((player, index) => (
            <li
              key={index}
              className="flex justify-between py-2 border-b last:border-b-0"
            >
              <span className="text-lg font-medium">{player.name}</span>
              <span className="text-lg font-bold">{player.score}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  