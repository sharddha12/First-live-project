

import React from "react";
import HeroSection from "../components/HeroSection";
import ContactUs from "../components/ContactUs";
import Messages from "../components/Messages";
import OurTeachers from "../components/OurTeachers";
import AboutUs from "../components/AboutUs";
import Programs from "../components/Programs";  
import HomeGallery from "../components/HomeGallery";


const HomePage = () => {
    return (
        <>
            <HeroSection/>
            <AboutUs/>
            <Messages/>
                                    <HomeGallery/>

            <OurTeachers/>
            <Programs/>

            <ContactUs/>
        </>
    );
};


export default HomePage;