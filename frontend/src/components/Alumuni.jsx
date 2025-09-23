import React from "react";
import { Link } from "react-router-dom";

const alumniData = [
  {
    name: "Tej K. Sharma",
    image: "/assets/tejendrasharma.png",
    profession:
      "PhD, Florida International University, Florida USA | Jacobs School of Medicine, University at Buffalo, NY, USA | Postdoctoral Associate | Lecturer | Researcher",
    message:
      "Hi, I'm Tej K. Sharma. I am passionate about innovative research in medicine and education, constantly seeking impactful solutions in academic and medical fields. Kundule Secondary School laid the foundation for my journey, nurturing my curiosity and ambition from the very beginning. I am proud to be an alumnus of this institution that continues to shape future leaders in the field of education and healthcare.",
  },
  {
    name: "Durga Prasad Sapkota",
    image: "/assets/durga.jpg",
    profession: "Chartered Accountant (CA)",
    message:
      "Kundule Secondary School played a vital role in shaping my personal and professional journey. The discipline, dedication, and values I learned here laid the foundation for my success as a Chartered Accountant. I am forever grateful to this institution for guiding me toward a bright future.",
  },
];

const AlumniMessages = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6 space-y-12">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-800 text-center mb-12">
        Alumni Messages
      </h1>
      {alumniData.map((alumni, index) => (
        <div
          key={index}
          className="bg-blue-50 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-12 p-6"
        >
          {/* Image */}
          <div className="md:w-1/2 w-full">
            <figure className="w-full">
              <img
                src={alumni.image}
                alt={alumni.name}
                className={`w-full object-cover rounded-xl shadow-md ${
                  alumni.name === "Durga Prasad Sapkota"
                    ? "h-[650px]"
                    : "h-[650px] md:h-[650px]"
                }`}
              />
              <figcaption className="text-center text-sm text-gray-500 mt-2 whitespace-pre-line">
                {alumni.name} – {alumni.profession}
              </figcaption>
            </figure>
          </div>

          {/* Text */}
          <div className="md:w-1/2 w-full flex flex-col justify-center space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800">His Message</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{alumni.message}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AlumniMessages;
