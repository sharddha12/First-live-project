

import React from "react";
import HeroSection from "../components/HeroSection";
import ContactUs from "../components/ContactUs";
import Messages from "../components/Messages";
import OurTeachers from "../components/OurTeachers";
import AboutUs from "../components/AboutUs";
import Programs from "../components/Programs";  
import Gallery from "./Gallery";

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <AboutUs />
            <Messages />
            <OurTeachers />
            <Programs />
            <ContactUs />
<Gallery />
        </>
    )
}

export default HomePage;