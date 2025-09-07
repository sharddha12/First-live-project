import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import MainLayout from "./components/layout/MainLayout"; // Added missing import
import AllContact from "./components/admin/AllContact.jsx";
import HomePages from "./Pages/HomePages";
import AboutUs from "./Pages/Aboutpages.jsx";
import ContactSection from "./Pages/Contact";
import Academic from "./Pages/Academic";
import MessagePage from "./Pages/MessagePage";
import Gallery from "./Pages/Gallery";
import AdminGallery from "./components/admin/galleryPages.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* All routes inside MainLayout */}
        <Route element={<MainLayout />}>
          {/* Home Page */}
          <Route path="/" element={<HomePages />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/message" element={<MessagePage />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* Admin Contacts Page */}
          <Route path="/admin/contacts" element={<AllContact />} />
          <Route path="/admin/gallery" element={<AdminGallery />} /> {/* Fixed typo */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;