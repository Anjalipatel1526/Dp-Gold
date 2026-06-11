import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { products, categories } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductDetailModal from "../components/ProductDetailModal";
import { FiSearch, FiSliders, FiX } from "react-icons/fi";

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Search and filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Modal states
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sync category state with URL search param if present (e.g. ?cat=round-sheet)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const catParam = params.get("cat");
    if (catParam) {
      setSelectedCategory(catParam);
    }
  }, [location]);

  // Handle category tab click
  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    // Update URL params silently
    if (catId === "all") {
      navigate("/products", { replace: true });
    } else {
      navigate(`/products?cat=${catId}`, { replace: true });
    }
  };

  const handleOpenDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleInquireProduct = (product) => {
    setIsModalOpen(false);
    navigate("/contact", { state: { product } });
  };

  // Filter products based on search term and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.features.some((f) => f.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 bg-brandBg min-h-screen">
      {/* Page Header */}
      <div className="bg-primary text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-amber-400 font-bold uppercase tracking-wider text-xs">DPGOLD Catalog</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold">
            Our Products & Price List
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Browse our complete line of industrial PVC electrical accessories, mounting sheets, junction boxes, and concrete slab fittings.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Search and Category Control Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Box */}
          <div className="relative w-full md:max-w-md">
            <FiSearch className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products, materials, specs..."
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-accent"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm("")} 
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
              >
                <FiX size={16} />
              </button>
            )}
          </div>

          {/* Category Filter Status */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <FiSliders />
            <span>Showing {filteredProducts.length} Products</span>
          </div>
        </div>

        {/* Sidebar/Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar (Categories) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h3 className="font-bold text-primary mb-4 border-b border-slate-100 pb-2 font-poppins">
                Filter by Category
              </h3>
              
              <div className="flex flex-col gap-1.5">
                <button
                  onClick={() => handleCategoryChange("all")}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    selectedCategory === "all"
                      ? "bg-accent text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  All Products
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                      selectedCategory === cat.id
                        ? "bg-accent text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quality Commitment Sidebar Banner */}
            <div className="bg-gradient-to-br from-slate-900 to-primary text-white p-6 rounded-xl border border-slate-800 relative overflow-hidden hidden lg:block">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/25 rounded-full blur-2xl -mr-12 -mt-12" />
              <h4 className="font-poppins font-bold text-base mb-2">Virgin uPVC Grade</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Our fittings conform to building safety protocols. They undergo insulation testing and structural pressure trials.
              </p>
              <span className="text-[10px] font-bold tracking-wider text-amber-500 uppercase">IS:3419 Compliant</span>
            </div>
          </div>

          {/* Right Product Grid */}
          <div className="lg:col-span-9">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id}>
                    <ProductCard
                      product={product}
                      onOpenDetails={handleOpenDetails}
                      onInquire={handleInquireProduct}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-16 text-center">
                <p className="text-lg text-slate-500 font-medium font-poppins">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    navigate("/products", { replace: true });
                  }}
                  className="mt-6 px-6 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-accent-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Details Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onInquire={handleInquireProduct}
      />
    </div>
  );
};

export default Products;
