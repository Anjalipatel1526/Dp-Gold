import React from "react";
import { Link } from "react-router-dom";
import { FiCheckCircle, FiShield, FiArrowRight } from "react-icons/fi";
import teeImg from "../assets/products/tee-f.jpg";

const About = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Side */}
          <div className="lg:col-span-5 relative" data-aos="fade-right">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-accent-300 rounded-3xl transform rotate-3 scale-102 opacity-10" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={teeImg}
                alt="DP Gold PVC Conduit Tee"
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
          </div>

          {/* Text/Content Side */}
          <div className="lg:col-span-7 space-y-6" data-aos="fade-left">
            <div className="space-y-2">
              <span className="text-accent font-bold tracking-wider uppercase text-sm block">Who We Are</span>
              <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary">
                A Division of <span className="text-accent">Dinesh Plastics</span>
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-base">
              DPGOLD Products is a flagship brand of Dinesh Plastics, established in Chennai. We are pioneers in manufacturing high-grade PVC Electrical Accessories, catering specifically to the needs of modern electrical distribution networks, architects, and building contractors.
            </p>
            
            <p className="text-slate-600 leading-relaxed text-base">
              Our products are engineered to provide maximum structural safety and flame retardancy. By utilizing state-of-the-art injection molding machinery and precise formulations, we ensure all components maintain exact dimensions and structural load capacities.
            </p>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              <div className="flex items-start gap-3">
                <FiCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Threaded Brass Inserts</h4>
                  <p className="text-xs text-slate-500">Zero screw slippage, high durability threading.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Flame Retardant (uPVC)</h4>
                  <p className="text-xs text-slate-500">Self-extinguishing formulations prevent fires.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">High Load-Bearing Capacity</h4>
                  <p className="text-xs text-slate-500">Perfect for heavy fan boxes and structural loads.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Aesthetic Finishing</h4>
                  <p className="text-xs text-slate-500">High gloss, scratch-resistant wall plates.</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 pt-2">
              <Link to="/about" className="btn-primary">
                <span>Learn Our Story</span>
                <FiArrowRight />
              </Link>
              <Link to="/products" className="btn-outline">
                <span>View Full Catalog</span>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
