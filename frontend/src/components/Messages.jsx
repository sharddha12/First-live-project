import React from 'react';
import { Link } from "react-router-dom";

const Messages = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6 sm:px-10 lg:px-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl shadow-2xl my-16 flex flex-col lg:flex-row gap-12 lg:gap-20">
      
      {/* Image */}
      <div className="lg:w-1/3 w-full flex justify-center lg:justify-start">
        <figure className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]">
          <img
            src="assets/Harilalkandel.png"
            alt="Principal"
            className="w-full aspect-[3/4] object-cover rounded-2xl shadow-xl border-4 border-white hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          <figcaption className="text-center text-sm sm:text-base text-gray-700 mt-4 font-medium italic">
            Harilal Kandel — Principal
          </figcaption>
        </figure>
      </div>

      {/* Text */}
      <div className="lg:w-2/3 w-full flex flex-col justify-start space-y-8">
        {/* Headings */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-800">
            Message from the Principal
          </h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-700">
            Shree Kundule Secondary School
          </h3>
        </div>

        {/* Paragraph */}
        <p className="text-gray-800 text-base sm:text-lg leading-relaxed tracking-wide">
          Dear Parents, Students, and Well-Wishers,<br /><br />
          It is my great honor and pleasure to extend a warm welcome to all of you from Shree Kundule Secondary School.<br /><br />
          At our school, we firmly believe that education is the most powerful tool for personal and societal transformation. Our mission is to empower students to become thoughtful, capable, and responsible individuals who are prepared not only for academic challenges but for life beyond the classroom.<br /><br />
          Since the foundation of Kundule Secondary School, our focus has been on student-centered learning, where curiosity is nurtured, creativity is encouraged, and every child’s voice is heard. We are proud of our team of committed teachers who work passionately to foster a caring and challenging learning environment for all students.<br /><br />
          We aim to provide a balanced education that cultivates intellect, character, and emotional strength. Along with academic rigor, we encourage participation in co-curricular activities that help develop leadership, teamwork, and resilience.<br /><br />
          I invite you to become actively involved in your child’s learning journey and be a part of our growing community. Let us work together to shape confident, kind, and capable citizens for tomorrow.<br /><br />
          Thank you for being a part of the Kundule Secondary School family.<br /><br />
          Warm regards,<br />
          <strong>Harilal Kandel</strong><br />
          Principal<br />
          Shree Kundule Secondary School, Baglung
        </p>

        {/* Extra Info */}
        <p className="text-gray-600 text-base sm:text-lg">
          View messages from both of them and learn more about the school’s vision and journey.
        </p>

        {/* Button */}
        <div>
          <Link to="/message">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-900 transition duration-300 hover:-translate-y-1 hover:scale-105">
              Read Full Message
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Messages;
