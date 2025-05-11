import React, { useState, useEffect, useRef } from 'react';
import { Phone, ChevronDown, ChevronUp } from 'lucide-react';

const teachers = [
    { image: "/Teacher.jpg", name: 'Ram Krishna Sapkota', contact: '+977 9847322918', subject: 'Mathematics' },
    { image: "/Teacher.jpg", name: 'Ram Prasad Acharya', contact: '+977 9857326215', subject: 'Science' },
    { image: "/Teacher.jpg", name: 'Hari Prasad Upadhya', contact: '+977 9847621253', subject: 'English' },
    { image: "/Teacher.jpg", name: 'Bidur Prasad Sharma', contact: '+977 9847632260', subject: 'Social Studies' },
    { image: "/Teacher.jpg", name: 'Shyam Bahadur Karki', contact: '+977 9847632261', subject: 'Nepali' },
    { image: "/Teacher.jpg", name: 'Gita Devi Sharma', contact: '+977 9847632262', subject: 'Computer Science' },
    { image: "/Teacher.jpg", name: 'Sita Kumari Rai', contact: '+977 9847632263', subject: 'Health Education' },
    { image: "/Teacher.jpg", name: 'Krishna Prasad Adhikari', contact: '+977 9847632264', subject: 'Physical Education' },
    { image: "/Teacher.jpg", name: 'Anita Gurung', contact: '+977 9847632265', subject: 'Music' },
    { image: "/Teacher.jpg", name: 'Bimala Thapa', contact: '+977 9847632266', subject: 'Arts' },
    { image: "/Teacher.jpg", name: 'Narayan Shrestha', contact: '+977 9847632267', subject: 'Accountancy' },
    { image: "/Teacher.jpg", name: 'Nayan Shrestha', contact: '+977 9847625647', subject: 'Sports' },
];

const TeacherCard = ({ teacher }) => (
    <div className="rounded-xl p-6 flex flex-col items-center text-center bg-white shadow transition-all duration-300 hover:shadow-md w-full h-full">
        <div className="group relative w-32 h-32 md:w-36 md:h-36 mb-4 overflow-hidden rounded-full border-4 border-white shadow">
            <img
                src={teacher.image}
                alt={teacher.name}
                className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder-teacher.jpg";
                }}
            />
        </div>
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 mt-2">{teacher.name}</h2>
        <p className="text-sm text-gray-600 font-medium mt-1 mb-3">{teacher.subject}</p>
        <a
            href={`tel:${teacher.contact.replace(/\s+/g, '')}`}
            className="flex items-center text-sm text-gray-700 hover:text-blue-500 transition-all duration-200"
            aria-label={`Call ${teacher.name}`}
        >
            <Phone className="mr-2 h-4 w-4 text-blue-500" />
            <span className="truncate max-w-[160px]">{teacher.contact}</span>
        </a>
    </div>
);

const OurTeachers = () => {
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const teachersRef = useRef(null);

    useEffect(() => {
        const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
        checkIfMobile();

        let timeoutId;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(checkIfMobile, 100);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    const handleToggle = () => {
        const currentShowAll = !showAll;
        setShowAll(currentShowAll);

        if (!currentShowAll && teachersRef.current) {
            setTimeout(() => {
                const offsetTop = teachersRef.current.offsetTop;
                window.scrollTo({
                    top: offsetTop - 20,
                    behavior: 'smooth',
                });
            }, 10);
        }
    };

    const featuredTeachers = teachers.slice(0, 1);
    const secondRowTeachers = teachers.slice(1, 3);
    const thirdRowTeachers = teachers.slice(3, 6);
    const fourthRowTeachers = teachers.slice(6, 9);
    const remainingTeachers = teachers.slice(9);

    const teachersToDisplay = isMobile && !showAll
        ? teachers.slice(0, 4)
        : showAll
            ? teachers
            : [...featuredTeachers, ...secondRowTeachers, ...thirdRowTeachers, ...fourthRowTeachers];

    return (
        <div ref={teachersRef} className="w-full py-12 md:py-20 px-4 md:px-5 lg:px-0" id="teachers">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Our <span className="text-blue-500">Teachers</span>
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                        Meet our dedicated educators who inspire and empower students with knowledge and values.
                    </p>
                </div>

                {!isMobile ? (
                    <div className="space-y-6">
                        <div className="flex justify-center">
                            <div className="w-full max-w-xs">
                                {featuredTeachers[0] && <TeacherCard teacher={featuredTeachers[0]} />}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
                            {secondRowTeachers.map((teacher) => (
                                <TeacherCard key={teacher.name} teacher={teacher} />
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            {thirdRowTeachers.map((teacher) => (
                                <TeacherCard key={teacher.name} teacher={teacher} />
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            {fourthRowTeachers.map((teacher) => (
                                <TeacherCard key={teacher.name} teacher={teacher} />
                            ))}
                        </div>

                        {showAll && remainingTeachers.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                                {remainingTeachers.map((teacher) => (
                                    <TeacherCard key={teacher.name} teacher={teacher} />
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                            {teachersToDisplay.map((teacher) => (
                                <TeacherCard key={teacher.name} teacher={teacher} />
                            ))}
                        </div>

                        {isMobile && teachers.length > 4 && (
                            <div className="text-center mt-8">
                                <button
                                    onClick={handleToggle}
                                    className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow hover:shadow-md transition-all duration-300"
                                >
                                    {showAll ? (
                                        <>
                                            Show Less <ChevronUp size={16} />
                                        </>
                                    ) : (
                                        <>
                                            Show All ({teachers.length}) <ChevronDown size={16} />
                                        </>
                                    )}
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default OurTeachers;
