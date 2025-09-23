import React from "react";


const MessagePage = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6 space-y-16">

    





{/* Director Message: image-left, text-right */}
      <div className="flex flex-col md:flex-row items-center gap-12 bg-blue-50 p-10 rounded-2xl shadow-lg">
        
      

        {/* Right: Director Message */}
        <div className="md:w-1/2 w-full space-y-4 text-left">
          <h2 className="text-3xl font-bold text-blue-800">MESSAGE FROM THE Chairmain</h2>
          <h3 className="text-xl font-semibold text-gray-700">Krishna Prasad Acharya</h3>
          <p className="text-gray-900 text-xl leading-relaxed justify-items-center">

Dear Students, Parents, Teachers, and Well-Wishers,
It is with great pride and heartfelt gratitude that I welcome you all to Shree Kundule Secondary School.As the Chairman, I feel honored to be part of an institution that stands as a beacon of learning, discipline, and development in our community. Our school has always been committed to offering not just education, but a strong foundation for life.
Education today must go beyond textbooks. It should shape individuals who are not only knowledgeable but also responsible, empathetic, and prepared to face the challenges of the future. At Kundule, we strive to build such individuals with a blend of academic excellence, moral values, and life skills.
I am deeply proud of our dedicated school management team, passionate teachers, and hardworking students who continuously contribute to the growth and success of this institution. Together, we have made great strides, and with your continued support, we will achieve even greater milestones in the years to come.

I encourage all parents and guardians to stay actively engaged in your child’s educational journey. Your involvement plays a vital role in shaping their confidence, curiosity, and character.

Let us continue to work hand-in-hand for the betterment of our children and our society.

Thank you for trusting and supporting Shree Kundule Secondary School.

Warm regards,
Krishna Prasad Acharya
Chairman
Shree Kundule Secondary School, Baglung
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">Thank you,<br/>Krishna Prasad Acharya, Chairman</p>
        </div>
  {/* Left: Director Photo */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-start">
  <img
    src="/assets/KrishnaPrasadAcharya.png"
    alt="Krishna Prasad Acharya"
    className="w-full md:w-[450px] md:h-[500px] rounded-xl shadow-md object-cover"
  />
</div>

      </div>


      {/* Director Message: image-left, text-right */}
      <div className="flex flex-col md:flex-row items-center gap-12 bg-blue-50 p-10 rounded-2xl shadow-lg">
        
        {/* Left: Director Photo */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-start">
          <img
    src="/assets/student.jpg" 
            
            alt="Milan Kandel"
            className="w-full md:w-[350px] h-auto rounded-xl shadow-md object-cover"
          />
        </div>

        {/* Right: Director Message */}
        <div className="md:w-1/2 w-full space-y-4 text-left">
          <h2 className="text-3xl font-bold text-blue-800">MESSAGE FROM THE Alumuni Student</h2>
          <h3 className="text-2xl font-semibold text-gray-700">Milan Kandel</h3>
          <p className="text-gray-900 text-xl leading-relaxed justify-center items-center">
            "Dear students, teachers, guardians, and respected community members,

It is my great pleasure and honor to serve as the Chairman of Shree Kundule Secondary School. Our goal is not only to provide education, but to empower the next generation with knowledge, values, and skills. We are continuously working to improve our school’s infrastructure, teaching methods, and student support systems.

I believe that with cooperation, commitment, and a shared vision, we can make Kundule School one of the most outstanding educational institutions in Baglung district. Let us move forward together with unity and dedication for a brighter future of our children.

Thank you!"
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">Thank you,</p>
        </div>

      </div>

    </section>
  );
};

export default MessagePage;
