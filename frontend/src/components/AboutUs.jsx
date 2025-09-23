import React from 'react';
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <>
            {/* About Us Header */}

                {/* <section className="l mx-auto py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50"> */}

            <div className="w-7xl mx-auto py-20 px-6 flex flex-col lg:flex-row items-center gap-16 mb-20">
                <div className="flex-1 space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <h4 className="text-2xl text-blue-600 font-bold uppercase font-serif">
                                About Us
                            </h4>
                            <div className="h-px bg-gradient-to-r from-blue-600 to-blue-300 flex-1 max-w-20"></div>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent leading-tight">
                            Kundule Secondary School
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div className="relative">
                            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                            <p className="text-lg text-gray-700 leading-relaxed pl-6 font-medium">
                                Kundule Secondary School is dedicated to delivering exceptional education from Grades 1 to 12.
                                Our mission is to foster responsible, confident, and skilled individuals who make a positive impact on society.
                            </p>
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We emphasize academic excellence, ethical values, leadership, and social responsibility, creating a nurturing environment for holistic growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-6">
                        <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
                            <div className="text-2xl font-bold text-blue-600">Grade</div>
                            <div className="text-sm text-gray-600">1-12</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
                            <div className="text-2xl font-bold text-blue-600">Excellence</div>
                            <div className="text-sm text-gray-600">in Education</div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 relative">
                    <div className="absolute inset-0  rounded-2xl transform rotate-3 opacity-20"></div>
                    <div className="relative">
                        <img
                            src="https://i.pinimg.com/1200x/db/c4/5c/dbc45c1d643811fbcaf2ed8fcab18d43.jpg"
                            alt="Kundule Secondary School"
                            className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500 border-white"
                        />
                        <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                            <div className="text-xs uppercase tracking-wide">Established</div>
                            <div className="text-lg font-bold">Excellence</div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <Link
                            to="/about"
                            className="inline-block text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 transition"
                        >
                            Read More About Us
                        </Link>
                    </div>
                </div>
            </div>

            
        </>
    );
};

export default AboutUs;
