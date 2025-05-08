import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Programs", href: "/programs" },
        { name: "Gallery", href: "/gallery" },
        { name: "Facilities", href: "/facilities" },
    ];

    return (
        <nav className="sticky top-0 bg-blue-500 text-white w-full z-50">
            <div className="max-w-5xl mx-auto px-4 md:px-5 lg:px-0 h-[15vh] flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-2xl  font-extrabold leading-tight">
                    Shree Kundule <br /> Secondary School
                </h1>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="relative text-lg font-medium hover:text-gray-300 transition-all duration-300 ease-in-out group"
                        >
                            {link.name}
                            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gray-200 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="text-lg font-medium text-white bg-gradient-to-br from-yellow-400 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 rounded-lg px-5 py-2.5 transition"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Icon */}
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
                <div className="md:hidden bg-blue-500 w-full">
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
                            className="w-full text-center text-lg font-medium text-white bg-gradient-to-br from-yellow-400 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 rounded-lg px-5 py-2.5 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
