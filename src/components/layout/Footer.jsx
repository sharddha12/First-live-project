import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const interval = setInterval(() => {
            setYear(new Date().getFullYear());
        }, 1000 * 60 * 60);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="w-full bg-blue-500 text-primary">
            <div className="max-w-5xl mx-auto px-4 md:px-5 lg:px-0 py-10">
                <div className="flex flex-col md:flex-row md:justify-between gap-10">

                    {/* Logo Section */}
                    <div className="flex-1 flex flex-col items-start text-left">
                        <h1 className="text-2xl font-extrabold text-white mb-4">
                            Shree Kundule <br /> Secondary School
                        </h1>
                        <p className="text-sm text-primary max-w-xs">
                            Building the future, one innovation at a time.
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div className="flex-1 flex flex-col items-start text-left">
                        <h2 className="text-lg font-semibold text-white mb-3">Useful Links</h2>
                        <ul className="space-y-2">
                            {['About', 'Press', 'Careers', 'Privacy policy', 'Brand assets & guidelines'].map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to="/"
                                        className="text-sm hover:text-gray-300 transition-colors duration-300"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex-1 flex flex-col items-start text-left">
                        <h2 className="text-lg font-semibold text-white mb-3">Contact Info</h2>
                        <ul className="space-y-2 text-sm text-primary">
                            <li>
                                <span className="text-white font-medium">Address:</span> Ba. Na.Pa. -4, Kundule Baglung
                            </li>
                            <li>
                                <span className="text-white font-medium">Phone:</span> +977-9876543210
                            </li>
                            <li>
                                <span className="text-white font-medium">Email:</span> info@kunduleschool.edu.np
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 py-8 mt-9"></div>

                {/* Copyright */}
                <div className="text-left text-xs text-white">
                    © {year} Shree Kundule Secondary School™. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
