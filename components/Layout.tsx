// components/Layout.tsx
import React from 'react';
import Image from 'next/image';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Image src="/logo.png" alt="STELTREK Logo" width={50} height={50} />
      </header>
      <main>{children}</main>
      <footer>
        <p>© Your Company Name</p>
      </footer>
    </div>
  );
};

export default Layout;
