import React from "react";

// Facilities Data
const facilities = [
  {
    name: "Computer Lab",
    image: "https://www.durbarhighschool.edu.np/wp-content/uploads/2020/11/dhs39-1536x1024.jpg",
    description: "Equipped with modern computers and internet access for digital learning.",
  },
  {
    name: "Science Lab",
    image: "https://www.durbarhighschool.edu.np/wp-content/uploads/2020/11/dhs34-1536x1024.jpg",
    description: "Hands-on experiments and practical learning with modern lab equipment.",
  },
  {
    name: "E-Library Lab",
    image: "https://i.pinimg.com/736x/66/37/6d/66376d5f9b536e90f259c4d78dede544.jpg",
    description: "Digital library with access to e-books and online research materials.",
  },
  {
    name: "Library",
    image: "https://www.durbarhighschool.edu.np/wp-content/uploads/2020/11/library.jpg",
    description: "A quiet place for reading and self-study with a wide collection of books.",
  },
  {
    name: "Indoor Multipurpose Hall",
    image: "https://i.pinimg.com/1200x/a1/1b/9a/a11b9ae216e2f615ede1113836c81f9c.jpg",
    description: "Used for indoor sports, events, and school functions.",
  },
];

const Facilities = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Facilities
        </h2>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image with Hover Zoom */}
              <div className="overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Facility Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{facility.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
