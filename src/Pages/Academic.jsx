// AcademicSection.js
import React, { useState } from "react";

const AcademicSection = () => {
  const [showFaculty, setShowFaculty] = useState(false);

  const facultyMembers = [
    { name: "Ram Bahadur", subject: "Mathematics", photo: "FACULTY_PHOTO_URL" },
    { name: "Sita Sharma", subject: "Science", photo: "FACULTY_PHOTO_URL" },
    // Add more faculty members as needed
  ];

  const testimonials = [
    { name: "Anita Sharma", text: "Kundule Secondary helped me achieve my dreams with holistic education." },
    { name: "Ramesh Thapa", text: "The teachers here are amazing and very supportive." },
    // Add more testimonials
  ];

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
        <img src="https://i.pinimg.com/736x/f9/76/54/f97654f5414c0feb0a6fb9faaee3d936.jpg" alt="Classroom" className="w-full h-64 object-cover rounded-lg" />
        <img src="https://i.pinimg.com/736x/44/d6/a4/44d6a4c965255502c69c9f1039f302d2.jpg" alt="Student Project" className="w-full h-64 object-cover rounded-lg" />
        <img src="https://i.pinimg.com/736x/6b/1e/a8/6b1ea807af405afa121cc738619bf385.jpg" alt="Student Activity" className="w-full h-64 object-cover rounded-lg" />
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
          <li>Computer Science</li>
          <li>Arts & Music</li>
        </ul>
      </div>

      {/* Departments */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Departments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-100 rounded-lg text-center font-medium">Science</div>
          <div className="p-4 bg-green-100 rounded-lg text-center font-medium">Mathematics</div>
          <div className="p-4 bg-yellow-100 rounded-lg text-center font-medium">Humanities</div>
          <div className="p-4 bg-pink-100 rounded-lg text-center font-medium">Arts & Visual Communication</div>
          <div className="p-4 bg-purple-100 rounded-lg text-center font-medium">Languages</div>
          <div className="p-4 bg-orange-100 rounded-lg text-center font-medium">Computer Science</div>
        </div>
      </div>

      {/* Faculty Highlight */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Faculty</h2>
        <p>Our dedicated teachers foster curiosity, knowledge, and excellence.</p>
        <button
          onClick={() => setShowFaculty(!showFaculty)}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {showFaculty ? "Hide Faculty" : "View Faculty"}
        </button>
        {showFaculty && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {facultyMembers.map((fac, i) => (
              <div key={i} className="text-center p-4 bg-gray-100 rounded shadow">
                <img src={fac.photo} alt={fac.name} className="w-20 h-20 mx-auto rounded-full mb-2" />
                <h3 className="font-medium">{fac.name}</h3>
                <p className="text-sm text-gray-600">{fac.subject}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Student Testimonials */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Student Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-lg shadow">
              <p className="italic">"{t.text}"</p>
              <p className="mt-2 font-medium text-right">- {t.name}</p>
            </div>
          ))}
        </div>
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
    </section>
  );
};

export default AcademicSection;
