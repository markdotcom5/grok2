// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/"><a><img src="/logo.png" alt="StelTrek Logo" /></a></Link>
      </div>
      <ul>
        <li><Link href="#steltrek"><a>StelTrek</a></Link></li>
        <li><Link href="#lets-go-to-space"><a>Let's Go to Space</a></Link></li>
        <li><Link href="#about"><a>About</a></Link></li>
        <li><Link href="#team"><a>Team</a></Link></li>
        <li><Link href="#regulatory"><a>Regulatory</a></Link></li>
        <li><Link href="#plans"><a>Plans</a></Link></li>
        <li><Link href="#competitions"><a>Competitions</a></Link></li>
        <li><Link href="#newsroom"><a>Newsroom</a></Link></li>
        <li><Link href="#careers"><a>Careers</a></Link></li>
        <li><Link href="#contact"><a>Contact</a></Link></li>
        <li><Link href="#store"><a>Store</a></Link></li>
        <li><Link href="#search"><a><img src="/icons/search.svg" alt="Search" /></a></Link></li>
      </ul>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: #333;
          color: white;
        }
        nav .logo img {
          height: 50px; /* Adjust the size as needed */
        }
        nav ul {
          list-style: none;
          display: flex;
          gap: 1rem;
        }
        nav ul li {
          margin: 0;
        }
        nav ul li a {
          color: white;
          text-decoration: none;
          font-weight: 600;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
