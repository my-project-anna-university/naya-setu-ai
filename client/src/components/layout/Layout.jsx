import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Main Layout wrapper with Navbar, dynamic content, and Footer
 */
export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
