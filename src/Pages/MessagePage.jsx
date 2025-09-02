import React from "react";


const MessagePage = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6 space-y-16">

    





{/* Director Message: image-left, text-right */}
      <div className="flex flex-col md:flex-row items-center gap-12 bg-blue-50 p-10 rounded-2xl shadow-lg">
        
      

        {/* Right: Director Message */}
        <div className="md:w-1/2 w-full space-y-4 text-left">
          <h2 className="text-3xl font-bold text-blue-800">MESSAGE FROM THE DIRECTOR</h2>
          <h3 className="text-xl font-semibold text-gray-700">Milan Kandel</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
                   Message from the Principal
Kundule Secondary School

Dear Parents, Students, and Well-Wishers,

It is my great honor and pleasure to extend a warm welcome to all of you from Kundule Secondary School.

At our school, we firmly believe that education is the most powerful tool for personal and societal transformation. Our mission is to empower students to become thoughtful, capable, and responsible individuals who are prepared not only for academic challenges but for life beyond the classroom.

Since the foundation of Kundule Secondary School, our focus has been on student-centered learning, where curiosity is nurtured, creativity is encouraged, and every child’s voice is heard. We are proud of our team of committed teachers who work passionately to foster a caring and challenging learning environment for all students.

We aim to provide a balanced education that cultivates intellect, character, and emotional strength. Along with academic rigor, we encourage participation in co-curricular activities that help develop leadership, teamwork, and resilience.

I invite you to become actively involved in your child’s learning journey and be a part of our growing community. Let us work together to shape confident, kind, and capable citizens for tomorrow.

Thank you for being a part of the Kundule Secondary School family.

Warm regards,
Milan Dixit
Principal
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">Thank you,<br/>Shanta Dixit, Director</p>
        </div>
  {/* Left: Director Photo */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-start">
          <img
    src="https://i.pinimg.com/736x/c6/f8/e0/c6f8e003ff1fbe287bfb78a134ab8415.jpg"
    alt="Khema Acharaya"
            className="w-full md:w-[350px] h-auto rounded-xl shadow-md object-cover"
          />
        </div>
      </div>










      {/* Director Message: image-left, text-right */}
      <div className="flex flex-col md:flex-row items-center gap-12 bg-blue-50 p-10 rounded-2xl shadow-lg">
        
        {/* Left: Director Photo */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-start">
          <img
            src="https://i.pinimg.com/736x/3c/2b/ad/3c2badd0b9688bcb810ef699afc3f7c1.jpg"
            alt="Milan Kandel "
            className="w-full md:w-[350px] h-auto rounded-xl shadow-md object-cover"
          />
        </div>

        {/* Right: Director Message */}
        <div className="md:w-1/2 w-full space-y-4 text-left">
          <h2 className="text-3xl font-bold text-blue-800">MESSAGE FROM THE DIRECTOR</h2>
          <h3 className="text-xl font-semibold text-gray-700">Milan Kandel</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            dear Students, Parents, and Guardians,

It is with great pride and enthusiasm that we welcome you to Kundule Secondary School. Our vision has always been to provide inclusive, high-quality education that not only nurtures academic excellence but also encourages ethical values, leadership, and social responsibility.

At Kundule Secondary School, we believe that every child is unique and possesses immense potential. Our dedicated faculty and staff are committed to creating a safe, supportive, and stimulating environment where students can explore their interests, develop critical thinking skills, and grow into responsible, confident individuals.

Education at our school goes beyond textbooks. We emphasize holistic development, offering diverse opportunities in academics, arts, sports, and community service. We aim to instill lifelong learning habits that prepare our students for the challenges and opportunities of the modern world.

We sincerely thank our students, parents, and the community for placing their trust in us. Together, we can foster a generation of compassionate, innovative, and socially responsible citizens who will make a positive impact in society.

With warm regards,
 Milan Kandel
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">Thank you,<br/>Shanta Dixit, Director</p>
        </div>

      </div>

    </section>
  );
};

export default MessagePage;
