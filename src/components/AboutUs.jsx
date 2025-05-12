import React from 'react';

const AboutUs = () => {
    return (
        <div className="w-full px-4 py-10  text-primary">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 text-center mb-8">
                    About Us
                </h1>

                <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                            About Shree Kundule Secondary School
                        </h2>
                        <p className="leading-relaxed text-base sm:text-lg text-justify text-gray-700 mb-4">
                            Kundule Secondary School, Baglung (कुण्डुले माध्यामिक विद्यालय, बाग्लुङ) is located in Baglung district of Nepal. Affiliated with NEB and approved by the Ministry of Education, it offers Grade 1 to 12 programs in Education and Management streams.
                        </p>
                        <p className="leading-relaxed text-base sm:text-lg text-justify text-gray-700">
                            The school provides quality education with affordable fees and scholarships for deserving and underprivileged students. It also supports activities like ECA, sports, tours, counseling, and more.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="school.jpg"
                            alt="Shree Kundule Secondary School"
                            className="w-full h-auto rounded shadow"
                        />
                    </div>
                </div>

                <div className="bg-white p-6 rounded shadow text-center">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                        Our Vision & Mission
                    </h2>
                    <p className="leading-relaxed text-base sm:text-lg text-justify text-gray-700 mb-4">
                        <strong className="text-blue-600">Mission:</strong> to provide a safe place where everyone is valued. All staff are committed to doing what it takes for students to achieve academic success, as guided by the state principles. Promote social awareness, civic responsibility, personal development and academic excellence which enables students to better understand the world and improve conditions for local and global communities.
                    </p>
                    <p className="leading-relaxed text-base sm:text-lg text-justify text-gray-700">
                        <strong className="text-blue-600">Vision:</strong> To provide quality education in Nepal, build strong, positive connections, caring environment, alternative opportunities, independent learning and prepare the students to achieve academic as well as co-curricular excellence.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
