import React from 'react';

const SchoolGallery = () => {
    // Using same image for demonstration, limited to 3 images
    const schoolImages = [
        { src: '/school.jpg', alt: 'School building front view' },
        { src: '/school.jpg', alt: 'Classroom with students' },
        { src: '/school.jpg', alt: 'Classroom with students' },
        { src: '/school.jpg', alt: 'Classroom with students' },
        { src: '/school.jpg', alt: 'Classroom with students' },
        { src: '/school.jpg', alt: 'Classroom with students' },
        { src: '/school.jpg', alt: 'Classroom with students' },
        { src: '/school.jpg', alt: 'Classroom with students' },
        { src: '/school.jpg', alt: 'Classroom with students' },
        { src: '/school.jpg', alt: 'Classroom with students' },
        { src: '/school.jpg', alt: 'Classroom with students' },
        { src: '/school.jpg', alt: 'Classroom with students' },
    ];

    return (
        <section className="bg-blue-50 w-full py-12 sm:py-16" id="school-gallery">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg

:text-5xl font-bold text-blue-800 mb-4">
                        Our School Gallery
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Capturing memorable moments from our school life
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {schoolImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 aspect-[4/3]"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-150"
                                loading="lazy"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = '/placeholder-school.jpg';
                                }}
                            />
                            {/* Optional caption below image */}
                            <div className="p-2 bg-white text-center text-sm text-gray-700">
                                {image.alt}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SchoolGallery;