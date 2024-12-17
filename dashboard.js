import Link from 'next/link';

export default function Dashboard() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Dashboard</h1>
      <p>Select a section to explore:</p>
      <nav style={{ marginTop: '20px' }}>
        <Link href="/home">
          <button style={{ margin: '10px', padding: '10px 20px', cursor: 'pointer' }}>
            Home
          </button>
        </Link>
        <Link href="/leaderboard-page">
          <button style={{ margin: '10px', padding: '10px 20px', cursor: 'pointer' }}>
            Leaderboard
          </button>
        </Link>
        <Link href="/achievements">
          <button style={{ margin: '10px', padding: '10px 20px', cursor: 'pointer' }}>
            Achievements
          </button>
        </Link>
        <Link href="/contact">
          <button style={{ margin: '10px', padding: '10px 20px', cursor: 'pointer' }}>
            Contact Us
          </button>
        </Link>
        <Link href="/gallery">
          <button style={{ margin: '10px', padding: '10px 20px', cursor: 'pointer' }}>
            Gallery
          </button>
        </Link>
      </nav>
    </div>
  );
}
