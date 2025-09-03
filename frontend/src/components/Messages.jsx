import React from 'react';
import { Link } from "react-router-dom";


const Messages = () => {
    return (
        <>
      {/* Message Section */}
            <section className="max-w-7xl mx-auto py-16 px-6 bg-blue-50 rounded-2xl shadow-lg my-16 flex flex-col md:flex-row items-center gap-12">
              {/* Image */}
              <div className="md:w-1/2 w-full">
                <figure className="w-full">
                  <img
                    src="https://i.pinimg.com/1200x/24/ee/de/24eede9d06b57481c190ac1fda3117b5.jpg"
                    alt="Director and Principal"
                    className="w-full h-[350px] md:h-[400px] object-cover rounded-xl shadow-md"
                  />
                  <figcaption className="text-center text-sm text-gray-500 mt-2">
                    Shanta Dixit & Milan Dixit – Director and Principal
                  </figcaption>
                </figure>
              </div>
      
              {/* Text */}
              <div className="md:w-1/2 w-full flex flex-col justify-center space-y-6 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-800">MESSAGE</h2>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
                  Message from our Director and Principal
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Khem Acharaya and Milan Kandel formed Kundule Secondary School with the aim of providing quality education to children from all regions.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  View messages from both of them and learn more about the school’s vision and journey.
                </p>
      
                {/* Read Full Message Button */}
                <div className="flex justify-center md:justify-start">
                  <Link to="/message">
                    <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-1">
                      Read Full Message
                    </button>
                  </Link>
                </div>
              </div>
            </section>
        </>

   
        //             {/* Image Section */}
        //             <div className="relative w-full md:w-1/2 max-w-md mx-auto order-1 md:order-2">
        //                 {/* Background SVG */}
        //                 <img
        //                     src="/svg.svg"
        //                     alt="Decorative shape"
        //                     className="w-full"
        //                 />

        //                 {/* Image */}
        //                 <div className="absolute top-1/2 left-1/2 w-72 h-72 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-white shadow-xl">
        //                     <img
        //                         src="/man.jpg"
        //                         alt="Principal"
        //                         className="w-full h-full object-cover transition-transform duration-1000 ease-in-out hover:scale-125"
        //                     />
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        //             {/* Text Section */}
        //             <div className="md:w-1/2 order-1 md:order-2 text-left">
        //                 <h2 className="text-2xl md:text-4xl font-bold text-blue-500 mb-4">
        //                     A Message from Our Principal
        //                 </h2>
        //                 <p className="text-base md:text-lg text-gray-600 font-normal leading-relaxed">
        //                     I would like to extend a heartfelt welcome to all students, parents, and staff. Our school is committed to providing a nurturing and academically enriching environment where every student can thrive. The Principal believes in fostering values such as respect, responsibility, and lifelong learning. Together, let us continue to build a strong, supportive community that encourages excellence and personal growth for all.
        //                 </p>
        //             </div>

        //             {/* Image Section */}
        //             <div className="relative w-full md:w-1/2 max-w-md mx-auto order-2 md:order-1">
        //                 {/* Background SVG */}
        //                 <img
        //                     src="/svg.svg"
        //                     alt="Decorative shape"
        //                     className="w-full"
        //                 />

        //                 {/* Image */}
        //                 <div className="absolute top-1/2 left-1/2 w-72 h-72 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-white shadow-xl">
        //                     <img
        //                         src="/man.jpg"
        //                         alt="Principal"
        //                         className="w-full h-full object-cover transition-transform duration-1000 ease-in-out hover:scale-125"
        //                     />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
      
    );
};

export default Messages;
