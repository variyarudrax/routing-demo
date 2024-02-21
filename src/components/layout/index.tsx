import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: '87vh' }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
