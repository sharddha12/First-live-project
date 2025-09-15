import React from "react";

const AcademicSection = () => {
  const facultyMembers = [
    { name: "Mr. Ram Bahadur", role: "Principal", photo: "https://i.ibb.co/6N5KxkB/principal.jpg" },
    { name: "Mrs. Sita Sharma", role: "Director", photo: "https://i.ibb.co/3W2Xr8x/director.jpg" },
  ];

  const testimonials = [
    { name: "Anita Sharma", text: "Kundule Secondary helped me achieve my dreams with holistic education." },
    { name: "Ramesh Thapa", text: "The teachers here are amazing and very supportive." },
    { name: "Sujan Rai", text: "A wonderful environment for learning and growth." },
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
          <li>Computer Studies</li>
        </ul>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-center text-blue-700">Meet Our Faculty</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {facultyMembers.map((faculty, i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform transition-transform hover:-translate-y-2 hover:shadow-2xl">
              <img src={faculty.photo} alt={faculty.name} className="w-32 h-32 rounded-full object-cover mb-4" />
              <h3 className="text-xl font-semibold text-center">{faculty.name}</h3>
              <p className="text-gray-600 text-center">{faculty.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-center text-blue-700">Student Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition">
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
