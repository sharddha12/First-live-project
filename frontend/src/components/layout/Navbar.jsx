import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "react-feather";

const Navbar = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 bg-blue-700 shadow-md transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-5 lg:px-0 h-[80px] flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 pl-2 sm:pl-4 lg:pl-6">
            <figure className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
              <img
                src="/assets/logo.png"
                alt="Kundule Secondary School Logo"
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </figure>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-white text-sm sm:text-base font-semibold uppercase tracking-wide">
                Kundule
              </span>
              <span className="text-white text-sm sm:text-base font-light tracking-wider">
                Secondary School
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="relative text-white font-bold hover:text-yellow-300 transition-all duration-300 group"
              >
                {link.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:text-gray-100 hover:bg-blue-600 focus:outline-none transition"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden w-full bg-blue-700">
            <div className="flex flex-col items-start px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="w-full px-3 py-2 text-lg font-medium text-white hover:text-yellow-300 hover:bg-blue-600 rounded-md transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="w-full text-center text-lg font-medium text-white bg-gradient-to-br from-yellow-400 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 rounded-md px-5 py-2.5 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent overlap */}
      <div className="h-[80px] md:h-[80px]"></div>
    </>
  );
};

export default Navbar;
