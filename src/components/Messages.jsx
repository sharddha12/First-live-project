import React from 'react';

const Messages = () => {
    return (
        <div className="w-full py-12 px-4 bg-blue-50">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    
                    {/* Text Section */}
                    <div className="md:w-1/2 order-2 md:order-1 text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                            A Message from Our Principal
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 font-normal leading-relaxed">
                            "Our goal is to inspire students to reach their full potential through quality education, innovation, and community spirit."
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="relative w-full md:w-1/2 max-w-md mx-auto order-1 md:order-2">
                        {/* Background SVG */}
                        <img
                            src="/svg.svg"
                            alt="Decorative shape"
                            className="w-full"
                        />

                        {/* Profile Image in circular frame */}
                        <div className="absolute top-1/2 left-1/2 w-72 h-72 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-white shadow-xl">
                            <img
                                src="/man.jpg"
                                alt="Principal"
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;
