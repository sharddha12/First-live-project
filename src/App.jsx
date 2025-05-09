import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from '../pages/HomePage';
import SchoolGallery from '../pages/SchoolGallery';

function App() {
    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/gallery" element={<SchoolGallery />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
