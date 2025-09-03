import React, { useState, useEffect } from "react";
import { Camera, Eye, X, ChevronLeft, ChevronRight, Heart, Star, Calendar, MapPin } from "lucide-react";

// Mock data structure - replace with your API call
const mockGalleryData = [
  {
    id: 1,
    src: "https://i.pinimg.com/736x/7a/84/50/7a84500e248d70204807b2dc49b84ed5.jpg",
    title: "School Building",
    category: "Infrastructure",
    description: "Our beautiful main school building that houses classrooms and administrative offices.",
    uploadDate: "2024-01-15",
    location: "Main Campus",
    likes: 45
  },
  {
    id: 2,
    src: "https://i.pinimg.com/736x/64/02/94/64029400e8ec965f6df6e9e022233f43.jpg",
    title: "Sports Activities",
    category: "Sports",
    description: "Students actively participating in outdoor games and sports activities.",
    uploadDate: "2024-02-10",
    location: "Sports Ground",
    likes: 32
  },
  {
    id: 3,
    src: "https://i.pinimg.com/736x/15/c6/e7/15c6e7cd0e8c606c393f8776d38961d7.jpg",
    title: "Computer Lab",
    category: "Academics",
    description: "Modern computer lab equipped with latest technology for digital learning.",
    uploadDate: "2024-02-20",
    location: "Tech Building",
    likes: 28
  },
  {
    id: 4,
    src: "https://i.pinimg.com/736x/b0/e7/cf/b0e7cff2e4cfdd077b2fce6b52490838.jpg",
    title: "Library",
    category: "Academics",
    description: "Well-stocked library providing resources for research and reading.",
    uploadDate: "2024-03-05",
    location: "Academic Block",
    likes: 38
  },
  {
    id: 5,
    src: "https://i.pinimg.com/1200x/8c/f2/e2/8cf2e2ddb7c3c91f7ba7952766da647b.jpg",
    title: "Cultural Programs",
    category: "Events",
    description: "Students showcasing their talents in cultural and music programs.",
    uploadDate: "2024-03-15",
    location: "Auditorium",
    likes: 56
  },
  {
    id: 6,
    src: "https://i.pinimg.com/736x/7a/84/50/7a84500e248d70204807b2dc49b84ed5.jpg",
    title: "Classroom",
    category: "Academics",
    description: "Interactive classroom environment promoting student engagement.",
    uploadDate: "2024-03-20",
    location: "Building A",
    likes: 29
  },
  {
    id: 7,
    src: "https://i.pinimg.com/736x/64/02/94/64029400e8ec965f6df6e9e022233f43.jpg",
    title: "Science Lab",
    category: "Academics",
    description: "Well-equipped science laboratory for practical experiments.",
    uploadDate: "2024-04-01",
    location: "Science Block",
    likes: 41
  },
  {
    id: 8,
    src: "https://i.pinimg.com/736x/15/c6/e7/15c6e7cd0e8c606c393f8776d38961d7.jpg",
    title: "Art Exhibition",
    category: "Events",
    description: "Annual art exhibition showcasing student creativity.",
    uploadDate: "2024-04-10",
    location: "Art Hall",
    likes: 33
  }
];

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [likedImages, setLikedImages] = useState(new Set());

  // Simulate API call - replace with your actual API endpoint
  const fetchGalleryData = async () => {
    setLoading(true);
    try {
      // Load mock data instantly
      setGalleryData(mockGalleryData);
    } catch (error) {
      console.error('Error fetching gallery data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleryData();
  }, []);

  // Get unique categories
  const categories = ["All", ...new Set(galleryData.map(item => item.category))];

  // Filter images based on selected category
  const filteredImages = selectedCategory === "All" 
    ? galleryData 
    : galleryData.filter(item => item.category === selectedCategory);

  // Open lightbox
  const openLightbox = (image, index) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const navigateLightbox = (direction) => {
    const newIndex = direction === 'next' 
      ? (lightboxIndex + 1) % filteredImages.length
      : (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    
    setLightboxIndex(newIndex);
    setLightboxImage(filteredImages[newIndex]);
  };

  const toggleLike = (imageId, e) => {
    e.stopPropagation();
    const newLikedImages = new Set(likedImages);
    if (newLikedImages.has(imageId)) {
      newLikedImages.delete(imageId);
    } else {
      newLikedImages.add(imageId);
    }
    setLikedImages(newLikedImages);
  };

  const getPolaroidStyle = (index) => {
    const rotations = [-8, -4, 0, 4, 8, -6, 3, -2, 6, -3];
    const shadows = [
      'drop-shadow-lg',
      'drop-shadow-xl', 
      'drop-shadow-2xl'
    ];
    const tapeColors = [
      'bg-yellow-200',
      'bg-orange-200', 
      'bg-pink-200',
      'bg-blue-200',
      'bg-green-200'
    ];
    
    return {
      rotation: rotations[index % rotations.length],
      shadow: shadows[index % shadows.length],
      tapeColor: tapeColors[index % tapeColors.length],
      tapeRotation: (index % 2 === 0) ? 'rotate-12' : '-rotate-12'
    };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-handwriting">Loading Photos...</p>
        </div>
      </div>
    );
  }

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
          <div className="mt-8 text-lg opacity-75">
            {galleryData.length} Photos
          </div>
        </div>
        
        
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-black opacity-30">
          <div className="flex justify-around items-center h-full">
            {Array.from({length: 20}).map((_, i) => (
              <div key={i} className="w-4 h-4 bg-white opacity-50 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="mb-16">
          <h3 className="text-center text-2xl font-serif text-amber-800 mb-8">Browse by Category</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-full font-serif font-semibold transition-all duration-300 transform hover:scale-105 border-2 ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white shadow-lg border-amber-600'
                    : 'bg-white text-amber-700 hover:bg-amber-50 border-amber-300'
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
            const isLiked = likedImages.has(image.id);
            
            return (
              <div
                key={image.id}
                className="group cursor-pointer transform transition-all duration-500 hover:scale-110 hover:z-10 relative"
                onClick={() => openLightbox(image, index)}
                style={{
                  transform: `rotate(${polaroidStyle.rotation}deg)`,
                  margin: '30px'
                }}
              >
                <div className={`bg-white p-6 pb-16 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:rotate-0 ${polaroidStyle.shadow}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-80 h-80 object-cover transition-all duration-300 group-hover:brightness-110"
                    />
                    
                    {/* Corner decorations */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-gray-400 opacity-30"></div>
                    <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-gray-400 opacity-30"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-gray-400 opacity-30"></div>
                  </div>
                  
                  {/* Polaroid Caption Area */}
                  <div className="mt-6 space-y-2">
                    <h3 className="font-handwriting text-xl text-gray-800 text-center">
                      {image.title}
                    </h3>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {image.uploadDate}
                      </div>
                      
                    </div>
                    <div className="flex items-center justify-center space-x-3 mt-3">
                      <span className="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-semibold">
                        {image.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-3 right-6 font-handwriting text-xs text-gray-500 transform rotate-3">
                    ♡ Memories
                  </div>
                </div>
                
                {/* Multiple tape pieces for authenticity */}
                <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-8 ${polaroidStyle.tapeColor} opacity-80 ${polaroidStyle.tapeRotation} shadow-sm`}>
                  <div className="w-full h-full border border-yellow-300 opacity-50"></div>
                </div>
                <div className={`absolute -top-2 right-8 w-12 h-6 ${polaroidStyle.tapeColor} opacity-70 rotate-45 shadow-sm`}>
                  <div className="w-full h-full border border-yellow-300 opacity-50"></div>
                </div>
                
               
                                <div className="absolute bottom-20 right-4 bg-amber-600 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="w-4 h-4" />
                </div>
                
                {/* Vintage aging effects */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 right-8 w-2 h-2 bg-amber-200 opacity-40 rounded-full"></div>
                  <div className="absolute bottom-24 left-4 w-1 h-1 bg-orange-300 opacity-30 rounded-full"></div>
                  <div className="absolute top-1/3 left-2 w-1.5 h-1.5 bg-yellow-200 opacity-25 rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <Camera className="w-16 h-16 text-amber-400 mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-semibold text-amber-700 mb-2">No memories found</h3>
            <p className="text-amber-600 font-serif">No photos available in the selected category.</p>
          </div>
        )}
        
        {/* Vintage decorative border */}
        <div className="mt-16 border-t-4 border-double border-amber-300 pt-8">
          <p className="text-center font-handwriting text-lg text-amber-700">
            "Every picture tells a story, every moment creates a memory" ✨
          </p>
        </div>
      </div>

      {/* Enhanced Lightbox */}
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
                  onClick={() => navigateLightbox('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-4 text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => navigateLightbox('next')}
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
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="bg-amber-600 px-4 py-2 rounded-full text-sm font-semibold">
                      {lightboxImage.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{lightboxImage.uploadDate}</span>
                    </div>
                    
                  </div>
                  <span className="text-gray-300 text-sm">
                    {lightboxIndex + 1} of {filteredImages.length}
                  </span>
                </div>
                <h2 className="text-3xl font-serif font-bold mb-3">{lightboxImage.title}</h2>
                <p className="text-gray-200 text-lg">{lightboxImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating refresh button with vintage style */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={fetchGalleryData}
          className="bg-amber-600 hover:bg-amber-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
          title="Refresh Memories"
        >
          <Camera className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;