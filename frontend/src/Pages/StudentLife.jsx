// StudentLifeSection.js
import React, { useState } from "react";

const StudentLifeSection = () => {
  const [showGallery, setShowGallery] = useState(false);

  const clubs = [
    { name: "Science Club", icon: "🔬" },
    { name: "Drama Club", icon: "🎭" },
    { name: "Music Club", icon: "🎵" },
    { name: "Sports Team", icon: "⚽" },
    { name: "Debate Club", icon: "🗣️" },
    { name: "Art & Craft", icon: "🎨" },
  ];

  const events = [
    { name: "Annual Sports Day", date: "January 2025" },
    { name: "Science Fair", date: "March 2025" },
    { name: "Cultural Fest", date: "August 2025" },
    { name: "Field Trip", date: "November 2025" },
  ];

  const testimonials = [
    { name: "Anita Sharma", text: "I love the vibrant environment and all the clubs!" },
    { name: "Ramesh Thapa", text: "Student Life at Kundule made my school years unforgettable." },
  ];

  const galleryImages = [
    "STUDENT_ACTIVITY_IMAGE_URL_1",
    "STUDENT_ACTIVITY_IMAGE_URL_2",
    "STUDENT_ACTIVITY_IMAGE_URL_3",
    "STUDENT_ACTIVITY_IMAGE_URL_4",
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 space-y-16" id="student-life">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Life at Kundule Secondary School</h1>
        <p className="text-lg text-gray-700">
          Explore our vibrant student community, clubs, events, and memorable experiences.
        </p>
      </div>

      {/* Clubs & Activities */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Clubs & Activities</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {clubs.map((club, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-blue-50 rounded-lg shadow">
              <div className="text-4xl mb-2">{club.icon}</div>
              <p className="font-medium">{club.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Events */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Events & Highlights</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          {events.map((event, index) => (
            <li key={index}>
              <span className="font-medium">{event.name}</span> - <span className="text-gray-600">{event.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Student Testimonials */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Student Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((t, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg shadow">
              <p className="italic">"{t.text}"</p>
              <p className="mt-2 font-medium text-right">- {t.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Gallery</h2>
        <button
          onClick={() => setShowGallery(!showGallery)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {showGallery ? "Hide Gallery" : "View Gallery"}
        </button>
        {showGallery && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <img key={index} src={img} alt={`Gallery ${index + 1}`} className="w-full h-40 object-cover rounded-lg" />
            ))}
          </div>
        )}
      </div>

      {/* Call-to-Action */}
      <div className="text-center p-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Join the Student Life!</h2>
        <p className="text-lg mb-6">Experience holistic learning, fun, and growth at Kundule Secondary School.</p>
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

export default StudentLifeSection;
