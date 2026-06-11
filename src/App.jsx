import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Floating Quick Contacts and Back to Top
import { FiMessageCircle, FiPhone, FiArrowUp } from "react-icons/fi";

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quad"
    });

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-brandBg font-sans text-primary antialiased">
        {/* Sticky Header Navbar */}
        <Navbar />

        {/* Page Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Quick Action Contacts */}
        <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
          {/* Quick Call Button */}
          <a
            href="tel:+918148744998"
            className="flex items-center justify-center w-12 h-12 bg-accent hover:bg-accent-700 text-white rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
            title="Call DPGOLD Office"
          >
            <FiPhone size={20} />
          </a>
          
          {/* WhatsApp Floating Chat */}
          <a
            href="https://wa.me/918148744998?text=Hello%20DPGOLD,%20I'm%2520inquiring%2520from%2520your%2520website."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
            title="Chat on WhatsApp"
          >
            <FiMessageCircle size={22} />
          </a>
        </div>

        {/* Floating Back To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full shadow-lg transition-all transform hover:scale-110 active:scale-95 border border-slate-800"
            title="Scroll to Top"
          >
            <FiArrowUp size={20} />
          </button>
        )}
      </div>
    </Router>
  );
};

export default App;
