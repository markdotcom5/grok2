import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navigation: React.FC = () => {
  return (
    <nav>
      <div className="logo">StelTrek</div>
      <ul>
        <li><Link href="#steltrek">StelTrek</Link></li>
        <li><Link href="#space-prep">Space Prep</Link></li>
        <li><Link href="#training">Training</Link></li>
        <li><Link href="#phys">Phys</Link></li>
        <li><Link href="#chat">Chat</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#team">Team</Link></li>
        <li><Link href="#regulatory">Regulatory</Link></li>
        <li><Link href="#plans">Plans</Link></li>
        <li><Link href="#competitions">Competitions</Link></li>
        <li><Link href="#newsroom">Newsroom</Link></li>
        <li><Link href="#careers">Careers</Link></li>
        <li><Link href="#contact">Contact</Link></li>
        <li><Link href="#store">Store</Link></li>
        <li>
          <Link href="#search">
            <Image src="/icons/search.svg" alt="Search" width={20} height={20} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

