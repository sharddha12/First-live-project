import React from "react";
import { Link } from "react-router-dom";

const AboutUsSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      
      {/* About Us Header */}
      <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
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
                Kundule Secondary School is dedicated to delivering exceptional education from Grades 1 to 10. 
                Our mission is to foster responsible, confident, and skilled individuals who make a positive impact on society.
              </p>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              We emphasize academic excellence, ethical values, leadership, and social responsibility, creating a nurturing environment for holistic growth.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-blue-600">10</div>
              <div className="text-sm text-gray-600">Grade Levels</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-blue-600">Excellence</div>
              <div className="text-sm text-gray-600">in Education</div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-indigo-200 rounded-2xl transform rotate-3 opacity-20"></div>
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
        </div>
      </div>

      {/* Introduction Section */}
      <section className="max-w-5xl mx-auto py-16 px-4">
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-400"></div>
            <h4 className="text-2xl text-blue-600 font-semibold uppercase px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
              Introduction
            </h4>
            <div className="w-17 h-px bg-gradient-to-l from-transparent to-blue-400"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-blue-800 bg-clip-text text-transparent leading-tight">
            Discover Kundule Secondary School
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute top-0 left-0 text-6xl text-blue-200 font-serif leading-none select-none">"</div>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed pt-8 px-8 relative z-10">
              Founded with a vision to provide inclusive and high-quality education, Kundule Secondary School has become a cornerstone of academic excellence in our community. 
              Since its inception, we have focused on holistic development, character building, and student-centered learning.
            </p>
            <div className="absolute bottom-0 right-0 text-6xl text-blue-200 font-serif leading-none select-none transform rotate-180">"</div>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
            Our robust academic programs, paired with diverse extracurricular opportunities, empower students to become confident, responsible, and skilled individuals ready to shape a brighter future.
          </p>
        </div>
      </section>

      {/* Brief History Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 bg-blue-50 rounded-2xl shadow-lg my-16 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img
            src="https://i.pinimg.com/736x/d3/a1/32/d3a1328811b0e6630b96f80c47dd6af1.jpg"
            alt="Kundule School History"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-blue-800">BRIEF HISTORY</h2>
          <h3 className="text-xl font-semibold text-gray-700">Explore Our Past</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Kundule Secondary School was founded in [Year] with a commitment to provide quality, inclusive, and holistic education. 
            The aim was to nurture a generation of students who are analytical and independent thinkers, empowering them socially, emotionally, 
            and cognitively to build essential skills for life.
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 bg-blue-800 rounded-2xl shadow-lg my-16">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800">Our Mission</h2>
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-4xl mx-auto">
            To provide a nurturing environment that fosters critical thinkers, innovators, and lifelong learners who embrace and adapt to challenges, 
            thrive in an ever-changing world, and grow into compassionate, open-minded, socially committed global citizens.
          </p>
        </div>
      </section>

      {/* Message Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 bg-blue-50 rounded-2xl shadow-lg my-16 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <figure className="w-full">
            <img
              src="https://i.pinimg.com/1200x/24/ee/de/24eede9d06b57481c190ac1fda3117b5.jpg"
              alt="Director and Principal"
              className="w-full h-[350px] md:h-[400px] object-cover rounded-xl shadow-md"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              Shanta Dixit & Milan Dixit – Director and Principal
            </figcaption>
          </figure>
        </div>

        {/* Text */}
        <div className="md:w-1/2 w-full flex flex-col justify-center space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800">MESSAGE</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
            Message from our Director and Principal
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Khem Acharaya and Milan Kandel formed Kundule Secondary School with the aim of providing quality education to children from all regions.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            View messages from both of them and learn more about the school’s vision and journey.
          </p>

          {/* Read Full Message Button */}
          <div className="flex justify-center md:justify-start">
            <Link to="/message">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-1">
                Read Full Message
              </button>
            </Link>
          </div>
        </div>
      </section>

    </section>
  );
};

export default AboutUsSection;
