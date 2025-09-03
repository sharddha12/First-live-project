import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

// Mock data for home page carousel - replace with your API call
const mockHomeGalleryData = [
  {
    id: 1,
    src: "https://i.pinimg.com/736x/7a/84/50/7a84500e248d70204807b2dc49b84ed5.jpg",
    title: "Our Beautiful Campus",
    category: "Infrastructure",
    description: "Welcome to Kundule Secondary School - where learning meets excellence in a nurturing environment.",
    uploadDate: "2024-01-15",
    location: "Main Campus",
    likes: 89,
    featured: true
  },
  {
    id: 2,
    src: "https://i.pinimg.com/736x/64/02/94/64029400e8ec965f6df6e9e022233f43.jpg",
    title: "Active Student Life",
    category: "Sports",
    description: "Our students excel in sports and physical activities, building character and teamwork skills.",
    uploadDate: "2024-02-10",
    location: "Sports Ground",
    likes: 76,
    featured: true
  },
  {
    id: 3,
    src: "https://i.pinimg.com/736x/15/c6/e7/15c6e7cd0e8c606c393f8776d38961d7.jpg",
    title: "Modern Learning",
    category: "Academics",
    description: "State-of-the-art facilities with cutting-edge technology for the digital age education.",
    uploadDate: "2024-02-20",
    location: "Tech Building",
    likes: 64,
    featured: true
  },
  {
    id: 4,
    src: "https://i.pinimg.com/736x/b0/e7/cf/b0e7cff2e4cfdd077b2fce6b52490838.jpg",
    title: "Knowledge Hub",
    category: "Academics",
    description: "Our comprehensive library provides endless resources for curious minds to explore and grow.",
    uploadDate: "2024-03-05",
    location: "Academic Block",
    likes: 58,
    featured: true
  },
  {
    id: 5,
    src: "https://i.pinimg.com/1200x/8c/f2/e2/8cf2e2ddb7c3c91f7ba7952766da647b.jpg",
    title: "Cultural Excellence",
    category: "Events",
    description: "Celebrating creativity and cultural diversity through music, dance, and artistic expression.",
    uploadDate: "2024-03-15",
    location: "Auditorium",
    likes: 92,
    featured: true
  },
  {
    id: 6,
    src: "https://i.pinimg.com/736x/7a/84/50/7a84500e248d70204807b2dc49b84ed5.jpg",
    title: "Interactive Learning",
    category: "Academics",
    description: "Dynamic classrooms that foster engagement, creativity, and collaborative learning experiences.",
    uploadDate: "2024-03-20",
    location: "Building A",
    likes: 71,
    featured: true
  }
];

const HomeGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [galleryData, setGalleryData] = useState([]);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [loading, setLoading] = useState(true);

  // Group images into pairs for dual display
  const groupedData = [];
  for (let i = 0; i < galleryData.length; i += 2) {
    groupedData.push(galleryData.slice(i, i + 2));
  }

  // Auto-slide interval
  useEffect(() => {
    if (!isAutoPlay || groupedData.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % groupedData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, groupedData.length]);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Replace with your API call
        // const response = await fetch('/api/featured-gallery');
        // const data = await response.json();
        setGalleryData(mockHomeGalleryData);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Navigate slides
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % groupedData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + groupedData.length) % groupedData.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (loading) {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-blue-700 text-lg">Loading gallery...</p>
        </div>
      </div>
    );
  }

  if (galleryData.length === 0) {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        <p className="text-blue-700 text-lg">No images to display</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center py-6">
        <h2 className="text-3xl font-bold text-blue-900">School Gallery</h2>
        <p className="text-blue-600 mt-2">Discover our vibrant school community</p>
      </div>

      {/* Carousel Container */}
      <div className="relative h-[700px] overflow-hidden  rounded-xl">
        {/* Main Carousel */}
        <div className="flex items-center justify-center h-full p-6">
          <div className="relative w-full max-w-6xl">
            {groupedData.map((imagePair, slideIndex) => (
              <div
                key={slideIndex}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  slideIndex === currentSlide ? 'opacity-100 transform translate-x-0' : 'opacity-0'
                }`}
                style={{
                  transform: slideIndex === currentSlide ? 'translateX(0)' : 
                           slideIndex < currentSlide ? 'translateX(-100%)' : 'translateX(100%)'
                }}
              >
                <div className="flex gap-6 h-full items-center justify-center px-4">
                  {imagePair.map((image, imageIndex) => (
                    <div key={image.id} className="flex-1 max-w-lg">
                      {/* Image Container */}
                      <div className="relative group">
                        <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                          <div className="aspect-[4/3] overflow-hidden">
                            <img
                              src={image.src}
                              alt={image.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                          
                          {/* Image Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                              <span className="inline-block bg-blue-500 text-xs px-2 py-1 rounded-full mb-2">
                                {image.category}
                              </span>
                              <p className="text-sm font-medium">{image.description}</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Image Info */}
                        <div className="mt-4 text-center">
                          <h3 className="text-lg font-bold text-blue-900 mb-2">{image.title}</h3>
                          <div className="flex items-center justify-center space-x-4 text-sm text-blue-600">
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                              </svg>
                              {image.location}
                            </span>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Fill empty space if odd number of images */}
                  {imagePair.length === 1 && (
                    <div className="flex-1 max-w-lg opacity-30">
                      <div className="bg-gradient-to-br from-blue-200 to-indigo-200 rounded-xl aspect-[4/3] flex items-center justify-center">
                        <div className="text-center text-blue-400">
                          <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                          </svg>
                          <p className="text-sm">More photos coming soon</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={groupedData.length <= 1}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-blue-600 p-4 rounded-full shadow-xl transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          disabled={groupedData.length <= 1}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-blue-600 p-4 rounded-full shadow-xl transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Auto-play toggle */}
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="absolute top-6 right-6 bg-white/95 hover:bg-white text-blue-600 rounded-full p-3 transition-colors shadow-xl hover:scale-110 duration-200"
          title={isAutoPlay ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
      </div>

      {/* Bottom Section */}
      <div className="text-center py-8">
        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mb-6">
          {groupedData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-blue-600 scale-125 shadow-lg' 
                  : 'bg-blue-300 hover:bg-blue-400 hover:scale-110'
              }`}
            />
          ))}
        </div>
        
       
      </div>
    </div>
  );
};

export default HomeGallery;