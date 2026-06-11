import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { FiMessageCircle } from "react-icons/fi";
import SEO from "../components/SEO";

const Products = () => {
  const navigate = useNavigate();

  const handleInquireProduct = (product) => {
    navigate("/contact", { state: { product } });
  };

  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "DPGOLD PVC Electrical Accessories Catalog",
    "description": "Catalog of premium uPVC electrical fittings, junction boxes, and sheets.",
    "itemListElement": products.map((product, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "image": product.image ? `${window.location.origin}${product.image}` : undefined,
        "description": `Premium DPGOLD ${product.name} manufactured by Dinesh Plastics.`,
        "brand": {
          "@type": "Brand",
          "name": "DPGOLD"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "priceValuedRange": "Call for bulk pricing"
        }
      }
    }))
  };

  return (
    <div className="pt-24 bg-brandBg min-h-screen">
      <SEO
        title="Our Products | DPGOLD PVC Electrical Accessories Catalog"
        description="Browse DPGOLD's premium range of PVC electrical products, including round sheets, fan sheets, junction boxes, deep ceiling boxes, and conduit fittings in Chennai."
        keywords="PVC round sheet, electrical fan box, junction box manufacturer, uPVC conduit fittings, DPGOLD product catalog"
        schema={productsSchema}
      />

      {/* Page Header - Redesigned Clean & Minimal */}
      <div className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-xs block">
            DP Gold Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-primary">
            Our Products
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Browse our complete line of premium PVC electrical accessories, mounting sheets, junction boxes, and concrete slab fittings.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Product Image */}
              <div className="bg-slate-50 aspect-[4/3] overflow-hidden flex items-center justify-center p-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-102 transition-transform duration-300"
                />
              </div>

              {/* Info Area */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <h3 className="font-poppins font-bold text-slate-800 text-base mb-4 leading-snug">
                  {product.name}
                </h3>

                <button
                  onClick={() => handleInquireProduct(product)}
                  className="w-full py-2.5 px-4 bg-accent hover:bg-accent-700 text-white font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-sm shadow-accent/10"
                >
                  <FiMessageCircle size={16} />
                  <span>Inquire Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
