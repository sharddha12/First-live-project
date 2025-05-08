import React from 'react';

const HeroSection = () => {
    return (
        <section className="w-full bg-white text-primary">
            {/* Top Banner Image */}
            <div className="w-full h-[250px] md:h-[400px] overflow-hidden">
                <img
                    src="https://img.freepik.com/free-vector/large-school-building-scene_1308-32058.jpg?t=st=1746697792~exp=1746701392~hmac=f73819bbf24cf6a6625bc74052d8e0290b9f2cf92d550ff0ab4875cf6981f2ba&w=1380"
                    alt="School Banner"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-4 md:px-5 lg:px-0 py-10 flex flex-col md:flex-row items-center gap-8">
                {/* Left Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://img.freepik.com/free-vector/large-school-building-scene_1308-32058.jpg?t=st=1746697792~exp=1746701392~hmac=f73819bbf24cf6a6625bc74052d8e0290b9f2cf92d550ff0ab4875cf6981f2ba&w=1380"
                        alt="School Building"
                        className="rounded-lg shadow-lg w-full"
                    />
                </div>

                {/* Right Text Content */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">Welcome to Shree Kundule Secondary School</h2>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg text-justify">
                        Shree Kundule Secondary School is dedicated to nurturing young minds through quality education and values. 
                        Our campus fosters a collaborative and inclusive learning environment where students can explore, grow, and achieve excellence. 
                        Join us in building a brighter future, one student at a time.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
