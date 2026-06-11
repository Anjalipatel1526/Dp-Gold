import React from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall, FiMail, FiMessageCircle } from "react-icons/fi";

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 to-primary text-white relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-700/10 rounded-full blur-3xl -ml-40 -mb-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text */}
          <div className="lg:col-span-8 space-y-4">
            <span className="text-amber-400 font-bold tracking-wider uppercase text-xs">Bulk Distributors & Projects</span>
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold leading-tight">
              Ready to Partner With DPGOLD?
            </h2>
            <p className="text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
              Whether you are an electrical wholesale distributor expansion lead, a real estate project head in Chennai, or a contractor sourcing top-tier conduit fittings, our team is equipped to support your custom supply requirements.
            </p>
          </div>

          {/* Action buttons */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link
              to="/contact"
              className="flex-grow px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-lg shadow-lg shadow-amber-500/20 text-center transition-all flex items-center justify-center gap-2"
            >
              <FiPhoneCall />
              <span>Get Wholesale Price List</span>
            </Link>
            <a
              href="https://wa.me/918148744998?text=Hello%20DPGOLD,%20I'm%20a%20distributor%20inquiring%20about%20dealership%20opportunities."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-grow px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg text-center transition-all flex items-center justify-center gap-2"
            >
              <FiMessageCircle size={18} />
              <span>WhatsApp Dealership Desk</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
