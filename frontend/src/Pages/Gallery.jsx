import React, { useState } from "react";
import { Camera, Eye, X, ChevronLeft, ChevronRight, Calendar } from "lucide-react";

// Predefined gallery images
const galleryDataArray = [
  {
    id: 1,
    title: "School Picnic",
    description: "Fun moments at the school picnic.",
    category: "Events",
    uploadDate: "2023-03-15",
    src: "https://i.pinimg.com/736x/92/a5/df/92a5dfa211720ddacef7fc0684bd3c9c.jpg", // Put images inside public/images folder
  },
  {
    id: 2,
    title: "Science Exhibition",
    description: "Students showcasing their science projects.",
    category: "Events",
    uploadDate: "2025-06-10",
    src: "https://i.pinimg.com/736x/14/9a/37/149a3714e4568bd3445aa5e4e05c7416.jpg",
  },
  {
    id: 3,
    title: "Sports Day",
    description: "Exciting moments from Sports Day.",
    category: "Sports",
    uploadDate: "2025-05-20",
    src: "https://i.pinimg.com/1200x/7b/06/60/7b0660aee4e1a7d6c634ff4cdb7b8e02.jpg",
  },
  {
    id: 4,
    title: "Cultural Program",
    description: "School cultural program memories.",
    category: "Culture",
    uploadDate: "2024-07-18",
    src: "public/assets/image1.jpg",
  },
  {
    id: 5,
    title: "Prizes Distribution",
    
    description: "Students showing their creativity in art.",
    category: "Art",
    uploadDate: "2023-08-12",
    src: "public/assets/image2.jpg",
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Get unique categories
  const categories = ["All", ...new Set(galleryDataArray.map((item) => item.category))];

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "All"
      ? galleryDataArray
      : galleryDataArray.filter((item) => item.category === selectedCategory);

  // Open lightbox
  const openLightbox = (image, index) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  // Navigate lightbox
  const navigateLightbox = (direction) => {
    const newIndex =
      direction === "next"
        ? (lightboxIndex + 1) % filteredImages.length
        : (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxIndex(newIndex);
    setLightboxImage(filteredImages[newIndex]);
  };

  const getPolaroidStyle = (index) => {
    const rotations = [-8, -4, 0, 4, 8, -6, 3, -2, 6, -3];
    const shadows = ["drop-shadow-lg", "drop-shadow-xl", "drop-shadow-2xl"];
    const tapeColors = ["bg-yellow-200", "bg-orange-200", "bg-pink-200", "bg-blue-200", "bg-green-200"];
    return {
      rotation: rotations[index % rotations.length],
      shadow: shadows[index % shadows.length],
      tapeColor: tapeColors[index % tapeColors.length],
      tapeRotation: index % 2 === 0 ? "rotate-12" : "-rotate-12",
    };
  };

  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden bg-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <Camera className="w-12 h-12 mr-4" />
            <h1 className="text-5xl font-bold font-serif">School Memories</h1>
          </div>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-serif">
            A nostalgic journey through the beautiful moments at Kundule Secondary School
          </p>
          <div className="mt-8 text-lg opacity-75">{galleryDataArray.length} Photos</div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="mb-16">
          <h3 className="text-center text-2xl font-serif text-amber-800 mb-8">Browse by Category</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-full font-serif font-semibold transition-all duration-300 transform hover:scale-105 border-2 ${
                  selectedCategory === category
                    ? "bg-amber-600 text-white shadow-lg border-amber-600"
                    : "bg-white text-amber-700 hover:bg-amber-50 border-amber-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-12 p-8">
          {filteredImages.map((image, index) => {
            const polaroidStyle = getPolaroidStyle(index);
            return (
              <div
                key={image.id}
                className="group cursor-pointer transform transition-all duration-500 hover:scale-110 hover:z-10 relative"
                onClick={() => openLightbox(image, index)}
                style={{
                  transform: `rotate(${polaroidStyle.rotation}deg)`,
                  margin: "30px",
                }}
              >
                <div
                  className={`bg-white p-6 pb-16 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:rotate-0 ${polaroidStyle.shadow}`}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-80 h-80 object-cover transition-all duration-300 group-hover:brightness-110"
                  />
                  <div className="mt-6 space-y-2">
                    <h3 className="font-handwriting text-xl text-gray-800 text-center">{image.title}</h3>
                    <div className="flex items-center justify-center space-x-3 mt-3">
                      <span className="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-semibold">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <Camera className="w-16 h-16 text-amber-400 mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-semibold text-amber-700 mb-2">No memories found</h3>
            <p className="text-amber-600 font-serif">No photos available in the selected category.</p>
          </div>
        )}
      </div>

      {lightboxImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={() => navigateLightbox("prev")}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-4 text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => navigateLightbox("next")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-4 text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 rounded-b-lg">
              <div className="text-white">
                <h2 className="text-3xl font-serif font-bold mb-3">{lightboxImage.title}</h2>
                <p className="text-gray-200 text-lg">{lightboxImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
