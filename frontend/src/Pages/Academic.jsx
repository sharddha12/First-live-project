import React from "react";
import Facilities from "./Facilities";

const AcademicSection = () => {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4 space-y-16">
      {/* Header / Value Proposition */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Empowering Learning at Kundule Secondary School</h1>
        <p className="text-lg text-gray-700">
          Quality education from Grades 1–12 with a focus on academic excellence and holistic development.
        </p>
      </div>

      {/* Visual Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img
          src="https://i.pinimg.com/736x/f9/76/54/f97654f5414c0feb0a6fb9faaee3d936.jpg"
          alt="Classroom"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="https://i.pinimg.com/736x/44/d6/a4/44d6a4c965255502c69c9f1039f302d2.jpg"
          alt="Student Project"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="https://i.pinimg.com/736x/6b/1e/a8/6b1ea807af405afa121cc738619bf385.jpg"
          alt="Student Activity"
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      {/* Curriculum Overview */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Curriculum Overview</h2>
        <p>
          Kundule Secondary School offers a comprehensive curriculum with focus on core subjects and practical learning experiences.
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Mathematics</li>
          <li>Science</li>
          <li>English</li>
          <li>Social Studies</li>
          <li>Computer Studies</li>
        </ul>
      </div>

      {/* Call-to-Action */}
      <div className="text-center p-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Interested in Joining?</h2>
        <p className="text-lg mb-6">Apply now or contact us for more information about admissions and programs.</p>
        <a
          href="/admission"
          className="bg-white text-blue-700 font-bold px-6 py-3 rounded hover:bg-gray-100"
        >
          Apply Now
        </a>
      </div>
      <Facilities/>
    </section>
  );
};

export default AcademicSection;
