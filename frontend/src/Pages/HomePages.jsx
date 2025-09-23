

import React from "react";
import HeroSection from "../components/HeroSection";
import ContactUs from "../components/ContactUs";
import AboutPages from "./AboutPages";
import Programs from "../components/Programs";  
import HomeGallery from "../components/HomeGallery";
import Messages from "../components/Messages";
import AboutUS from "../components/AboutUs";
import Alumni from "../components/Alumuni";


const HomePage = () => {
    return (
        <>
            <HeroSection/>
            <AboutUS/>
            <Messages/>
            <Alumni/>
             <HomeGallery/>
            <Programs/>
            <ContactUs/>
        </>
    );
};


export default HomePage;