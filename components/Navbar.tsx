import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-6 justify-center">
      <Link href="/home">Home</Link>
        <li><Link href="/homepage">Homepage</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/arvr">AR/VR</Link></li>
      </ul>
    </nav>
  );
}
