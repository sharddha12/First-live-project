import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const MainLayout = () => {
    return (
        <main className='h-screen'>
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    )
}

export default MainLayout