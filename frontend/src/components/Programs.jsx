import React, { useState } from 'react';

const Programs = () => {
    const [expandedCards, setExpandedCards] = useState([]);

    const toggleCardExpansion = (index) => {
        if (expandedCards.includes(index)) {
            setExpandedCards(expandedCards.filter(i => i !== index));
        } else {
            setExpandedCards([...expandedCards, index]);
        }
    };const programs = [

    

    // New program added here


    {
    title: "Advanced 10+2 Education Program",
    description: "Kundule Secondary School offers an advanced two-year 10+2 education program focusing on academic excellence and skill development in the Education stream. Affiliated with the National Examinations Board (NEB), this program equips students with knowledge and critical thinking skills essential for higher education and career success.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    eligibility: [
        "Candidates must have passed SEE or equivalent examination from any recognized board with a minimum 1.6 GPA.",
        "Candidates must have passed the entrance examination conducted by the Kundule Secondary School (KSS), Baglung."
    ],
    admission: "Eligible and Interested Candidates can contact along with necessary documents for admission to the Ten Plus Two Education program.",
    scholarship: "Kundule Secondary School provides a scholarship for deserving, hardworking and the deprived students."
}
,
    {
        title: "Comprehensive Schooling: Grades 1 to 12",
        description: "Our complete academic program from Grade 1 through Grade 12 focuses on holistic development, combining strong fundamentals in science, arts, and humanities with extracurricular activities. Designed to foster creativity, critical thinking, and leadership, this program prepares students for national and international higher education opportunities.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        eligibility: [
            "Students should meet the age and previous grade-level requirements.",
            "Basic assessment or interview may be conducted for new admissions."
        ],
        admission: "Parents or guardians can apply by submitting necessary documents including birth certificate, past academic records, and ID proofs at the school office.",
        scholarship: "Scholarships and fee concessions are available for talented, underprivileged, and socially marginalized students, based on merit and need."
    },





    {
        title: "Ten Plus Two in Management",
        description: "Kundule Secondary School, Baglung offers a Two-year duration Ten Plus Two program under Management stream i.e. Ten Plus Two in Management. It is affiliated to the National Examinations Board (NEB) and recognized by the Ministry of Education, Nepal.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        eligibility: [
            "Candidates must have passed SEE or equivalent examination from any recognized board with a minimum 1.6 GPA.",
            "Candidates must have passed the entrance examination conducted by the Kundule Secondary School (KSS), Baglung."
        ],
        admission: "Eligible and Interested Candidates directly contact along with essential documents for admission to the Ten Plus Two in Management program.",
        scholarship: "Kundule Secondary School provides scholarships for hardworking, deserving and deprived students."
    }
];


    return (
        <div className='w-full'>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0">
                <div className="text-center mb-16">
                    <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>Our Academic Programs</h1>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {programs.map((program, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
                            {/* Image Section */}
                            <div className="h-56 overflow-hidden relative">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <h2 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{program.title}</h2>
                            </div>

                            <div className="p-6">
                                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>

                                {/* Additional information that appears when expanded */}
                                {expandedCards.includes(index) && (
                                    <div className="space-y-6 animate-fadeIn">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Eligibility Criteria
                                            </h3>
                                            <ul className="space-y-2 pl-7">
                                                {program.eligibility.map((item, i) => (
                                                    <li key={i} className="text-gray-600 relative before:absolute before:-left-4 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-blue-500">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                                </svg>
                                                Admission Procedure
                                            </h3>
                                            <p className="text-gray-600 pl-7">{program.admission}</p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Scholarship
                                            </h3>
                                            <p className="text-gray-600 pl-7">{program.scholarship}</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center">
                                <button
                                    onClick={() => toggleCardExpansion(index)}
                                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors duration-300"
                                >
                                    {expandedCards.includes(index) ? (
                                        <>
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                            </svg>
                                            Show Less
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                            Read More
                                        </>
                                    )}
                                </button>

                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-md flex items-center">
                                    Apply Now
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Programs;