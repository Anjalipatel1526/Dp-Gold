import React from "react";
import { FiX, FiCheck, FiMessageCircle, FiPhoneCall } from "react-icons/fi";

const ProductDetailModal = ({ product, isOpen, onClose, onInquire }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-primary/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-100 z-10 animate-in fade-in zoom-in duration-200"
        data-aos="zoom-in"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors z-25"
          aria-label="Close details modal"
        >
          <FiX size={20} />
        </button>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-8">
          
          {/* Visual Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-slate-50 rounded-xl overflow-hidden aspect-square border border-slate-100 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Direct pricing info */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <span className="text-xs font-semibold text-slate-500 uppercase block">Wholesale Base Price</span>
              <div className="text-2xl font-extrabold text-accent mt-1">
                ₹{product.price.toFixed(2)}
                <span className="text-xs font-medium text-slate-500 ml-1">/ {product.unit || "Piece"}</span>
              </div>
              {product.hasCapOption && (
                <p className="text-xs text-amber-600 font-medium mt-1">
                  * Cap Available @ ₹{product.capPrice} Extra
                </p>
              )}
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-7 space-y-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-accent tracking-wider uppercase bg-accent-50 text-accent-700 px-2.5 py-1 rounded-full">
                {product.category.replace("-", " ")}
              </span>
              
              <h2 className="text-2xl font-extrabold text-primary font-poppins mt-3">
                {product.name}
              </h2>
              
              <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Technical Specifications */}
            {product.specs && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Technical Specifications</h4>
                <div className="bg-slate-50 rounded-xl border border-slate-150 overflow-hidden text-xs">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-2 border-b border-slate-150 last:border-0 p-2.5">
                      <span className="font-semibold text-slate-600">{key}</span>
                      <span className="text-slate-800 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features List */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Key Features</h4>
              <ul className="grid grid-cols-2 gap-2 text-xs">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <FiCheck className="text-emerald-500 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA panel */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => onInquire(product)}
                className="w-full py-3 bg-accent hover:bg-accent-700 text-white font-semibold rounded-lg text-sm transition-colors flex items-center justify-center gap-2 shadow-md shadow-accent/25"
              >
                <FiMessageCircle size={16} />
                <span>Inquire Now</span>
              </button>
              <a
                href="tel:+918148744998"
                className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg text-sm transition-colors flex items-center justify-center gap-2 border border-slate-200"
              >
                <FiPhoneCall size={16} />
                <span>Call Sales</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetailModal;
