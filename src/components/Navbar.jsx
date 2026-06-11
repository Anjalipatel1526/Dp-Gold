import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiPhone, FiMessageCircle } from "react-icons/fi";
import logo from "../assets/logo/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3 border-b border-slate-100"
          : "bg-white/90 backdrop-blur-md py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="DP Gold Logo" className="h-10 w-auto object-contain" />
            <span className="font-poppins font-extrabold text-xl tracking-tight text-primary">
              DP <span className="text-amber-500">Gold</span>
            </span>
          </Link>

          {/* Desktop Navigation Links (Pill Style) */}
          <div className="hidden md:flex items-center gap-1.5 bg-slate-50 border border-slate-200/60 rounded-full p-1 shadow-sm">
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                isActive("/") 
                  ? "bg-accent text-white shadow-sm" 
                  : "text-slate-600 hover:text-primary hover:bg-slate-100/50"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                isActive("/about") 
                  ? "bg-accent text-white shadow-sm" 
                  : "text-slate-600 hover:text-primary hover:bg-slate-100/50"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/products"
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                isActive("/products") 
                  ? "bg-accent text-white shadow-sm" 
                  : "text-slate-600 hover:text-primary hover:bg-slate-100/50"
              }`}
            >
              Product
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                isActive("/contact") 
                  ? "bg-accent text-white shadow-sm" 
                  : "text-slate-600 hover:text-primary hover:bg-slate-100/50"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-accent focus:outline-none p-2"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 transition-all duration-300 ease-in-out transform ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          <Link
            to="/"
            className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
              isActive("/") ? "bg-slate-50 text-accent font-bold" : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
              isActive("/about") ? "bg-slate-50 text-accent font-bold" : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            About Us
          </Link>
          <Link
            to="/products"
            className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
              isActive("/products") ? "bg-slate-50 text-accent font-bold" : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            Product
          </Link>
          <Link
            to="/contact"
            className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
              isActive("/contact") ? "bg-slate-50 text-accent font-bold" : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
