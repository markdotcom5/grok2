import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-6 justify-center">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/leaderboard">Leaderboard</Link></li>
        <li><Link href="/team">Team</Link></li>
      </ul>
    </nav>
  );
}
