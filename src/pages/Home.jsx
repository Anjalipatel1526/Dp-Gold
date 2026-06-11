import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import ProductSection from "../components/ProductSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import ProductDetailModal from "../components/ProductDetailModal";
import { faqs } from "../data/products";
import { FiPlus, FiMinus } from "react-icons/fi";

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState(null);
  const navigate = useNavigate();

  const handleOpenDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleInquireProduct = (product) => {
    setIsModalOpen(false);
    // Navigate to Contact Page and pass state
    navigate("/contact", { state: { product } });
  };

  const toggleFaq = (idx) => {
    if (openFaqIdx === idx) {
      setOpenFaqIdx(null);
    } else {
      setOpenFaqIdx(idx);
    }
  };

  return (
    <div className="relative">
      {/* Hero Header */}
      <Hero />

      {/* Main product overview section */}
      <ProductSection />

      {/* Dynamic About section */}
      <About />

      {/* Company strengths */}
      <WhyChooseUs />

      {/* Slide testimonials */}
      <Testimonials />

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-accent font-bold tracking-wider uppercase text-sm">Got Questions?</span>
            <h2 className="text-3xl font-poppins font-bold text-primary mt-2">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
          </div>

          {/* Accordion list */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition-colors text-left focus:outline-none"
                >
                  <span className="font-semibold text-primary font-poppins text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <span className="text-slate-500 flex-shrink-0">
                    {openFaqIdx === idx ? <FiMinus size={18} /> : <FiPlus size={18} />}
                  </span>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaqIdx === idx ? "max-h-[300px] border-t border-slate-200" : "max-h-0"
                  }`}
                >
                  <p className="px-6 py-5 text-sm sm:text-base text-slate-600 leading-relaxed bg-white">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Callout */}
      <CTA />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onInquire={handleInquireProduct}
      />
    </div>
  );
};

export default Home;
