import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// ✅ Add navLinks array
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Academic", href: "/academic" },


  { name: "Contact", href: "/contact" },
  
  { name: "Gallery", href: "/gallery" },
  
  
  
];

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Pass navLinks to Navbar */}
      <Navbar navLinks={navLinks} />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
