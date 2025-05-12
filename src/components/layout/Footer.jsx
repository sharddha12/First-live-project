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
        <footer className="w-full bg-blue-500 text-white">
            <div className="max-w-5xl mx-auto px-4 md:px-0 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    
                    {/* Logo Section */}
                    <div>
                        <h1 className="text-2xl font-extrabold mb-4 leading-snug">
                            Shree Kundule <br /> Secondary School
                        </h1>
                        <p className="text-base">
                            Building the future, one innovation at a time.
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
                        <ul className="space-y-2">
                            {['About', 'Press', 'Careers', 'Privacy policy', 'Brand assets & guidelines'].map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to="/"
                                        className="text-base hover:text-gray-300 transition-colors duration-300"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
                        <ul className="space-y-2 text-base">
                            <li>
                                <span className="font-medium">Address:</span> Ba. Na.Pa. -4, Kundule, Baglung
                            </li>
                            <li>
                                <span className="font-medium">Phone:</span> +977-9876543210
                            </li>
                            <li>
                                <span className="font-medium">Email:</span> info@kunduleschool.edu.np
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/30 my-10"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <div className='text-center md:text-left'>© {year} Shree Kundule Secondary School™. All Rights Reserved.</div>
                    <div>
                        Design and Developed By {' '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://squarelabs.com.np/"
                            className="underline hover:text-gray-300 transition-colors duration-300"
                        >
                            Square Labs
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
