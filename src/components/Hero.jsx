import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiShield, FiCpu, FiAward } from "react-icons/fi";
import heroBanner from "../assets/hero/hero-banner.jpg";
import productImg from "../assets/hero/product.png";

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden pt-28 pb-12 sm:pt-32 md:pt-36 md:pb-16 border-b border-slate-100">
      {/* Decorative clean geometric backgrounds */}
      <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-slate-50/50 rounded-l-[100px] z-0 hidden lg:block pointer-events-none" />
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-accent-50/40 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute -bottom-40 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl z-0 pointer-events-none" />

      {/* Content Layer */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-primary w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-100 text-accent-800 text-xs font-bold tracking-wider uppercase"
            >
              <FiAward className="text-amber-500" size={14} />
              <span>Dinesh Plastics Brand Flagship</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold tracking-tight leading-none text-primary"
            >
              Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-600">PVC Electrical</span> Accessories
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-600 max-w-xl leading-relaxed"
            >
              DPGOLD manufactures premium round sheets, junction boxes, fan boxes, and fittings engineered with high-impact, flame-retardant virgin polymer materials. Built for safety, durability, and seamless installation.
            </motion.p>

            {/* Quick Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-100 text-accent">
                  <FiShield size={20} />
                </div>
                <span className="text-sm font-semibold text-slate-700">Flame Retardant (FR-uPVC)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-100 text-accent">
                  <FiCpu size={20} />
                </div>
                <span className="text-sm font-semibold text-slate-700">Precision Threaded Brass Inserts</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <Link
                to="/products"
                className="px-8 py-4 bg-accent hover:bg-accent-700 text-white font-bold rounded-lg shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                <span>Explore Products</span>
                <FiArrowRight />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-slate-200 hover:border-slate-350 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center"
              >
                <span>Request Custom Quote</span>
              </Link>
            </motion.div>
          </div>

          {/* Side Product Image */}
          <div className="lg:col-span-5 hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white p-2 aspect-[4/3]"
            >
              <img
                src={productImg}
                alt="DP Gold Premium Electrical Products"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
