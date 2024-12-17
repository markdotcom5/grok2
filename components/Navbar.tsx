import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/leaderboards">Leaderboards</Link></li>
        <li><Link href="/about">About Us</Link></li>
      </ul>
    </nav>
  );
}
