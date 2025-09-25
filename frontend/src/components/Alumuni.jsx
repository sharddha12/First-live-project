import React from "react";
import { Link } from "react-router-dom";

const alumniData = [
  {
    name: "Tej K. Sharma",
    image: "/assets/tejendrasharma.png",
    profession:
      "PhD, Florida International University, Florida USA | Jacobs School of Medicine, University at Buffalo, NY, USA | Postdoctoral Associate | Lecturer | Researcher",
    message:
      "Hi, I'm Tej K. Sharma. I am deeply passionate about innovative research in medicine and education, always striving to contribute meaningful solutions that can create real change. The journey that brought me here began at Kundule Secondary School — a place that did more than just educate me. It ignited my curiosity, instilled a sense of purpose, and inspired me to dream beyond boundaries. The values and vision I gained from this institution continue to guide me as I serve in the academic and medical communities. I am forever grateful and proud to be an alumnus of a school that nurtures minds, uplifts communities, and shapes the leaders of tomorrow in both education and healthcare. Thank you, Kundule Secondary School, for being the foundation of my journey.",
  },
      
  {
    name: "Durga Prasad Sapkota",
    image: "/assets/durga.jpg",
    profession: "Chartered Accountant (CA)",
    message:
      "Kundule Secondary School played a vital role in shaping my personal and professional journey. The discipline, dedication, and values I learned here laid the foundation for my success as a Chartered Accountant. I am forever grateful to this institution for guiding me toward a bright future. It was here that I first learned the importance of hard work, perseverance, and integrity — values that continue to guide me in every step of my career journey.The supportive environment and inspiring teachers helped transform my potential into purpose. Kundule will always hold a special place in my heart as the starting point of my lifelong commitment to excellence. Thank you, Kundule Secondary School, for being an integral part of my life. ",   

  },
];

const AlumniMessages = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 text-center mb-16 tracking-tight">
        Our Esteemed Alumni
      </h1>

      <div className="space-y-20">
        {alumniData.map((alumni, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-2xl flex flex-col lg:flex-row items-center lg:items-start gap-8 p-6 sm:p-8 lg:p-10 transform hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Image */}
            <div className="lg:w-1/3 w-full flex justify-center lg:justify-start">
              <figure className="w-full max-w-[300px] lg:max-w-[360px]">
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className="w-full h-[360px] object-cover rounded-2xl shadow-lg border-2 border-blue-100 transition-transform duration-300 hover:scale-105"
                />
                <figcaption className="text-center text-sm sm:text-base text-gray-600 mt-4 font-medium">
                  <span className="text-blue-800 font-semibold">{alumni.name}</span> – {alumni.profession}
                </figcaption>
              </figure>
            </div>

            {/* Text */}
            <div className="lg:w-2/3 w-full flex flex-col justify-center space-y-6 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 tracking-tight">
                Their Journey
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto lg:mx-0">
                {alumni.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlumniMessages;