import React from 'react'; 

const HeroSection = () => { 
  return ( 
    <section className="w-full h-screen relative overflow-hidden bg-black"> 
      <video 
        src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/Stw4Y28Bippgedql/videoblocks-happy-primary-school-students-opening-school-doors-and-running-away-from-school-building-after-lessons-crowd-of-joyful-preadolescent-schoolkids-leaving-school-at-the-end-of-studies-and-rus__1937b169a10e91d45d74386582af8942__P360.mp4" 
        className="w-full h-full object-cover" 
        autoPlay 
        muted 
        loop 
        playsInline 
      /> 
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/50 flex items-center justify-center"> 
        <div className="text-center px-6 max-w-4xl">
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-wide drop-shadow-2xl"> 
            Welcome to<br/>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Shree Kundule
            </span><br/>
            <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-200">
              Secondary School
            </span>
          </h1>
          <div className="w-24 h-1 bg-blue-500 mb-6 rounded-full"></div>
          <p className="text-white/90 text-lg md:text-xl lg:text-2xl font-light tracking-wide drop-shadow-lg max-w-2xl">
            Nurturing minds, building futures, creating tomorrow's leaders
          </p>
        </div>
      </div> 
    </section> 
  ); 
}; 

export default HeroSection;