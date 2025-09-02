import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import MainLayout from "./components/layout/MainLayout";


import HomePages from "./Pages/HomePages";
import AboutUsSection from "./Pages/Aboutpages";
import ContactSection from "./Pages/Contact";
import Academic from "./Pages/Academic";
import MessagePage from "./Pages/MessagePage";  
import Gallery from "./Pages/Gallery";




function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Home Page */}
<Route path="/" element={<HomePages />} />
          {/* Other Pages */}
          <Route path="/about" element={<AboutUsSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/academic" element={<Academic />} />
<Route path ="/message" element={<MessagePage />} />
<Route path ="/gallery" element={<Gallery />} />
          {/* Messages Page */}

    </Route>
      </Routes>
    </Router>
  );
}

export default App;
