import React from 'react'
import HeroSection from '../src/components/HeroSection'
import ContactUs from '../src/components/ContactUs'
import Messages from '../src/components/Messages'
import OurTeachers from '../src/components/OurTeachers'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <Messages />
            <OurTeachers />
            <ContactUs />

        </>
    )
}

export default HomePage