import React from "react";
import { FiAward, FiSettings, FiCheckCircle, FiShield, FiHeart } from "react-icons/fi";
import qualityImg from "../assets/products/round-sheet.jpg";
import heroImg from "../assets/hero/hero-banner.jpg";

const AboutPage = () => {
  return (
    <div className="pt-24 bg-brandBg min-h-screen">
      {/* Page Header - Redesigned Clean & Minimal */}
      <div className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-xs block">
            Quality is Our Legacy
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-primary">
            About DP <span className="text-amber-500">Gold</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            A specialized manufacturing brand under the wing of Dinesh Plastics, dedicated to creating premium PVC electrical accessories.
          </p>
        </div>
      </div>

      {/* Corporate History & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Story Content */}
            <div className="space-y-6">
              <span className="text-accent font-bold uppercase tracking-wider text-xs">Our Heritage</span>
              <h2 className="text-3xl font-poppins font-bold text-primary">
                Pioneering Electrical PVC Manufacturing in Chennai
              </h2>
              <p className="text-slate-600 leading-relaxed">
                DPGOLD is a brand of Dinesh Plastics. Established with a vision to redefine safety standards in the Indian construction and electrical engineering fields, we operate out of Krishnamoorthy Nagar, Chennai.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Over the years, we have grown from a localized plastics molding provider into a trusted partner for electrical distributors, retailers, and construction projects. We design and manufacture round sheets, junction boxes, deep ceiling boxes, and fitting components that protect the structural core of buildings.
              </p>
              
              <div className="p-4 bg-slate-50 border-l-4 border-accent rounded-r-xl">
                <p className="text-sm italic font-medium text-slate-700">
                  "Our goal is not simply to manufacture components, but to provide peace of mind. Every product we mold is a safety shield for families and offices across India."
                </p>
                <span className="block text-xs font-bold text-slate-500 mt-2 uppercase tracking-wide">— Dinesh Plastics Leadership</span>
              </div>
            </div>

            {/* Visual Panel */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent to-accent-300 rounded-2xl transform rotate-2 scale-102 opacity-10 hidden md:block pointer-events-none" />
              <img
                src={qualityImg}
                alt="DPGOLD High Glossy Plates"
                className="w-full h-auto object-cover rounded-xl shadow-xl relative z-10 border border-slate-100"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Design Inspiration Section (Schneider/Legrand Inspired) */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold uppercase tracking-wider text-xs">Design & Benchmark Standards</span>
            <h2 className="text-3xl font-poppins font-bold text-primary mt-2">
              Inspired by Global Engineering Leaders
            </h2>
            <p className="text-slate-500 mt-4 text-sm sm:text-base">
              At DPGOLD, we benchmark our product aesthetics and material characteristics against leading global brands like Schneider Electric, Legrand, Havells, Polycab, and Finolex.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 space-y-4">
              <div className="p-3 bg-slate-50 text-accent rounded-lg w-fit">
                <FiShield size={24} />
              </div>
              <h3 className="font-poppins font-bold text-lg text-primary">High-Impact Resistance</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Like global manufacturers, we utilize custom-engineered virgin polymers that absorb impacts, ensuring no cracking or collapsing under structural concrete loads.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 space-y-4">
              <div className="p-3 bg-slate-50 text-accent rounded-lg w-fit">
                <FiSettings size={24} />
              </div>
              <h3 className="font-poppins font-bold text-lg text-primary">Dimensional Accuracy</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Using premium multi-cavity injection molds, our fittings match standard PVC conduits (19mm and 25mm) precisely, creating tight, dust-proof joins.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 space-y-4">
              <div className="p-3 bg-slate-50 text-accent rounded-lg w-fit">
                <FiAward size={24} />
              </div>
              <h3 className="font-poppins font-bold text-lg text-primary">Refined Product Finish</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Our round sheets feature a high-gloss, clean white finish that aligns perfectly with switchboards and ceiling roses, enhancing overall interior decor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing & Testing Quality Control */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual grid representing machinery/conduits */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-xl overflow-hidden shadow-lg border border-slate-150 bg-slate-50">
                <img 
                  src={heroImg} 
                  alt="Automated production floor" 
                  className="w-full h-auto object-cover aspect-video" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-xl shadow-lg hidden sm:block max-w-[220px]">
                <h4 className="font-bold font-poppins text-lg">100% Inspected</h4>
                <p className="text-xs text-slate-300 mt-1">Every production batch undergoes insulation and pressure tests before dispatch.</p>
              </div>
            </div>

            {/* Info panel */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-accent font-bold uppercase tracking-wider text-xs">Quality Benchmarks</span>
              <h2 className="text-3xl font-poppins font-bold text-primary">
                Advanced Quality Controls & Testing Protocols
              </h2>
              <p className="text-slate-600 leading-relaxed">
                To guarantee zero failure rates in building foundations, our testing department performs standardized assessments:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Glow-Wire Flammability Test</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Verifies that the polymer matrix does not support ignition or drip burning fragments at temperatures up to 850°C.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Brass Insert Pull-Out Test</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Ensures the threaded brass inserts in our junction boxes can withstand high torque without stripping or pulling loose.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Compression Load Test</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Our fan boxes and deep boxes are loaded with weights matching maximum ceiling slab depths to guarantee zero collapse under concrete pouring.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
