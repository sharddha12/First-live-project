import React from 'react'
import HeroSection from '../src/components/HeroSection'
import ContactUs from '../src/components/ContactUs'
import Messages from '../src/components/Messages'
import OurTeachers from '../src/components/OurTeachers'
import AboutUs from '../src/components/AboutUs'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <AboutUs />
            <Messages />
            <OurTeachers />
            <ContactUs />

        </>
    )
}

export default HomePage