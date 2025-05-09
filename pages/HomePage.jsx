import React from 'react'
import HeroSection from '../src/components/HeroSection'
import ContactUs from '../src/components/ContactUs'
import Messages from '../src/components/Messages'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <Messages />
            <ContactUs />
        </>
    )
}

export default HomePage