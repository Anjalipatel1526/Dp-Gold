import React from "react";
import { FiEye, FiMessageCircle } from "react-icons/fi";

const ProductCard = ({ product, onOpenDetails, onInquire }) => {
  return (
    <div className="group card-premium flex flex-col h-full overflow-hidden relative">
      {/* Price tag badge */}
      <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-sm text-accent font-bold px-3 py-1.5 rounded-full text-sm shadow-md border border-slate-100 flex items-center gap-0.5">
        <span className="text-xs font-semibold">₹</span>
        <span>{product.price.toFixed(2)}</span>
        <span className="text-[10px] text-slate-500 font-normal ml-0.5">/ {product.unit || "pc"}</span>
      </div>

      {/* Product Image Area */}
      <div className="relative overflow-hidden bg-slate-100 aspect-video sm:aspect-square flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button
            onClick={() => onOpenDetails(product)}
            className="p-3 bg-white text-primary rounded-full hover:bg-accent hover:text-white transition-all shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300"
            title="Quick View Technical Specs"
          >
            <FiEye size={18} />
          </button>
        </div>
      </div>

      {/* Info Area */}
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-bold text-accent tracking-wider uppercase mb-1">
          {product.category.replace("-", " ")}
        </span>
        <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors line-clamp-1 mb-2">
          {product.name}
        </h3>
        <p className="text-xs text-slate-500 line-clamp-2 mb-4 flex-grow">
          {product.description}
        </p>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-1 mb-6">
          {product.features.slice(0, 2).map((feat, i) => (
            <span
              key={i}
              className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded"
            >
              {feat}
            </span>
          ))}
          {product.features.length > 2 && (
            <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded">
              +{product.features.length - 2} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <button
            onClick={() => onOpenDetails(product)}
            className="px-3 py-2 text-xs font-semibold border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5"
          >
            <FiEye />
            <span>Details</span>
          </button>
          <button
            onClick={() => onInquire(product)}
            className="px-3 py-2 text-xs font-semibold bg-accent text-white rounded-lg hover:bg-accent-700 transition-colors flex items-center justify-center gap-1.5 shadow-sm shadow-accent/20"
          >
            <FiMessageCircle />
            <span>Inquire</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
