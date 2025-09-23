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
          <div className="mt-10">
  <p className="text-xl md:text-2xl text-justify text-gray-800 leading-loose">
    Our journey reflects a strong commitment to
    <span className="font-semibold text-black"> holistic development</span>,
    <span className="font-semibold text-black"> character building</span>, and
    <span className="font-semibold text-black"> student-centered learning</span>. Today, the school proudly offers academic
    programs from <span className="font-semibold text-black">Grade 1 to Grade 12</span>, including
    <span className="font-semibold text-black"> +2 level education</span> in Grades 11 and 12. This expansion has made it possible
    for students to access quality higher education within their own community, eliminating the need to move to distant cities.
    <br /><br />
    The growth of <span className="font-semibold text-black">Shree Kundule Secondary School</span> stands as a shining example of
    <span className="font-semibold text-black"> community collaboration</span> and
    <span className="font-semibold text-black"> shared vision</span>. Through community-based initiatives, cultural programs,
    and fundraising efforts, the school has built a solid foundation — not just in terms of infrastructure but also in nurturing
    future-ready students who contribute positively to society.
  </p>
</div>

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
  {/* Title */}
  <h2 className="text-4xl font-bold text-blue-800">BRIEF HISTORY</h2>

  {/* Subtitle */}
  <h3 className="text-2xl font-semibold text-gray-700">Explore Our Past</h3>

  {/* Paragraph */}
  <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify">
    Kundule Secondary School was founded in <span className="font-semibold text-black">2015 A.D.</span> with a commitment
    to provide quality, inclusive, and holistic education. The aim was to nurture a generation of students who are
    <span className="font-semibold text-black"> analytical and independent thinkers</span>, empowering them socially,
    emotionally, and cognitively to build essential skills for life.
  </p>

  {/* Button */}
  <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300 ease-in-out shadow-sm">
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
              src="public/assets/both.jpg"
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
            Message from our Chairmain and Principal
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed items-center justify-center">
  Kundule Secondary School was founded by  Harilal Kandel krishna prasad acharaya  and  with a strong commitment to delivering quality education to children from all backgrounds and regions. Since its establishment, the school has grown steadily with the active involvement of the community. Today, under the dynamic leadership of Chairman Harilal Kandel and the academic guidance of Principal Krishna Prasad Acharya, the school continues to strive for excellence. Their dedication, vision, and tireless efforts have played a vital role in shaping the future of hundreds of students, fostering a learning environment that promotes academic success, discipline, and moral values.
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
