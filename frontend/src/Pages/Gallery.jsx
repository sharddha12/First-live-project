import React from "react";

const buildingData = {
  type: "image",
  src: "https://i.pinimg.com/736x/7a/84/50/7a84500e248d70204807b2dc49b84ed5.jpg",
  title: "School Building",
  description:
    "Kundule Secondary School in Baglung, Nepal, provides quality education focused on academic excellence and overall student development. The school encourages creativity, critical thinking, and participation in extracurricular activities.",
};

// Additional gallery items
const galleryItems = [
  {
    type: "image",
    src: "https://i.pinimg.com/736x/64/02/94/64029400e8ec965f6df6e9e022233f43.jpg",
    description: "Students actively participate in various outdoor games and sports in the school playground. These activities help them stay fit, develop teamwork, and enjoy a healthy break from classroom studies..",
  },
  {
    type: "image",
    src: "https://i.pinimg.com/736x/15/c6/e7/15c6e7cd0e8c606c393f8776d38961d7.jpg",
    description: "Modern computer lab for digital learning and coding practice.",
  },
  {
    type: "image",
    src: "https://i.pinimg.com/736x/b0/e7/cf/b0e7cff2e4cfdd077b2fce6b52490838.jpg",
    description: "Well-stocked library for reading and research activities.",
  },
  {
    type: "image",
    src: "https://i.pinimg.com/1200x/8c/f2/e2/8cf2e2ddb7c3c91f7ba7952766da647b.jpg",
    description: "Students participating in cultural and music programs.",
  },
];

const GalleryWithBuildingAndImages = () => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen space-y-16">
      {/* Centered school building image */}
      <div className="max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <img
          src={buildingData.src}
          alt={buildingData.title}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-700">{buildingData.description}</p>
      </div>

      {/* Gallery items: left-right alternate */}
      <div className="space-y-12">
        {galleryItems.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-6 ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 w-full rounded-lg overflow-hidden shadow-lg">
                <img
                  src={item.src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="md:w-1/2 w-full">
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryWithBuildingAndImages;
