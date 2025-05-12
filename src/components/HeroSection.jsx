import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="w-full bg-white text-primary">
            {/* Top Banner Image */}
            <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden">
                <img
                    src="https://img.freepik.com/free-vector/large-school-building-scene_1308-32058.jpg?t=st=1746697792~exp=1746701392~hmac=f73819bbf24cf6a6625bc74052d8e0290b9f2cf92d550ff0ab4875cf6981f2ba&w=1380"
                    alt="School Banner"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-5 lg:px-0 py-10 flex flex-col md:flex-row items-center gap-8">

                {/* Left Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://img.freepik.com/free-vector/large-school-building-scene_1308-32058.jpg?t=st=1746697792~exp=1746701392~hmac=f73819bbf24cf6a6625bc74052d8e0290b9f2cf92d550ff0ab4875cf6981f2ba&w=1380"
                        alt="School Building"
                        className="rounded-md shadow-md w-full h-auto object-cover"
                    />
                </div>

                {/* Right Text Content */}
                <div className="w-full md:w-1/2 text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
                        Welcome to Shree Kundule Secondary School
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg text-justify mb-4">
                        Shree Kundule Secondary School is dedicated to nurturing young minds through quality education and values.
                        Our campus fosters a collaborative and inclusive learning environment where students can explore, grow, and achieve excellence.
                        Join us in building a brighter future, one student at a time.
                    </p>
                    <Link
                        to="/about"
                        className="inline-block text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 transition"
                    >
                        Read More About Us
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
