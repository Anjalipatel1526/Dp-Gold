import React from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiChevronsUp } from "react-icons/fi";
import logo from "../assets/logo/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-slate-350 border-t border-slate-900 pt-16 pb-8 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-2">
              <img src={logo} alt="DP Gold Logo" className="h-10 w-auto object-contain brightness-0 invert" />
              <span className="font-poppins font-extrabold text-xl tracking-tight text-white">
                DP <span className="text-amber-400">Gold</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed pr-4 text-xs sm:text-sm">
              DP Gold is a brand of Dinesh Plastics. We specialize in manufacturing high-performance uPVC and steel electrical fittings designed for safety, durability, and aesthetics. Inspired by international engineering benchmarks.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold font-poppins uppercase tracking-wider text-xs">Sitemap</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold font-poppins uppercase tracking-wider text-xs">Categories</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/products?cat=round-sheet" className="text-slate-400 hover:text-white transition-colors">Round Sheets</Link>
              </li>
              <li>
                <Link to="/products?cat=fan-sheet" className="text-slate-400 hover:text-white transition-colors">Fan Sheets</Link>
              </li>
              <li>
                <Link to="/products?cat=junction-box" className="text-slate-400 hover:text-white transition-colors">Junction Boxes</Link>
              </li>
              <li>
                <Link to="/products?cat=fan-box" className="text-slate-400 hover:text-white transition-colors">Fan Boxes</Link>
              </li>
              <li>
                <Link to="/products?cat=elbow-tee" className="text-slate-400 hover:text-white transition-colors">Elbows & Tees</Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold font-poppins uppercase tracking-wider text-xs">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-amber-500 mt-1 flex-shrink-0" />
                <span className="text-slate-400 leading-relaxed text-xs">
                  30 Vanchinathan Street<br />
                  Krishnamoorthy Nagar<br />
                  Chennai – 600118, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-amber-500 flex-shrink-0" />
                <a href="tel:+918148744998" className="text-slate-400 hover:text-white transition-colors text-xs sm:text-sm">
                  +91 81487 44998
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-amber-500 flex-shrink-0" />
                <a href="mailto:sales@dpgoldproducts.com" className="text-slate-400 hover:text-white transition-colors text-xs sm:text-sm">
                  sales@dpgoldproducts.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} DPGOLD Products (Dinesh Plastics). All Rights Reserved. Manufactured in Chennai, Tamil Nadu.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2 px-3.5 rounded-lg transition-colors border border-slate-800"
            title="Back to Top"
          >
            <span>Back to Top</span>
            <FiChevronsUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
