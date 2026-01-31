import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DigitalMarketing from "./pages/DigitalMarketing";
import Designing from "./pages/Designing";
import Consulting from "./pages/Consulting";
import Industry from "./pages/Industry";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digital" element={<DigitalMarketing />} />
        <Route path="/designing" element={ <Designing />} />
        <Route path="/consulting" element={ <Consulting />} />
        <Route path="/industry" element={ <Industry/>} />
        <Route path="/contact" element={ <Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
