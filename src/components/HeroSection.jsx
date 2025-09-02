import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="w-full bg-white text-primary">
      {/* Top Banner: Video */}
      <div className="w-full h-[600px] sm:h-[600px] md:h-[600px] relative overflow-hidden">
        <video
          src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Stw4Y28Bippgedql/videoblocks-happy-primary-school-students-opening-school-doors-and-running-away-from-school-building-after-lessons-crowd-of-joyful-preadolescent-schoolkids-leaving-school-at-the-end-of-studies-and-rus__1937b169a10e91d45d74386582af8942__P360.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
        />
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-5 lg:px-0 py-10 flex flex-col md:flex-row items-center gap-8">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://media.istockphoto.com/id/978336766/photo/public-school-building-exterior-view-of-school-building-with-playground.jpg?s=2048x2048&w=is&k=20&c=a6z4JDLBnvChyLkJVbpDN59qf1NcxCY3fS6b88IWjxQ="
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
