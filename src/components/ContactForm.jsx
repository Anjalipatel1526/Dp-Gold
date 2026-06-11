import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiMessageCircle, FiSend, FiCheckCircle } from "react-icons/fi";

const ContactForm = ({ initialProduct = null }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    category: initialProduct ? initialProduct.category : "round-sheet",
    productName: initialProduct ? initialProduct.name : "",
    message: "",
    location: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        category: "round-sheet",
        productName: "",
        message: "",
        location: ""
      });
    }, 1500);
  };

  const triggerWhatsApp = () => {
    const text = `Hello DPGOLD, I am interested in placing an inquiry.
Name: ${formData.name || "N/A"}
Phone: ${formData.phone || "N/A"}
Company: ${formData.company || "N/A"}
Category: ${formData.category}
Product: ${formData.productName || "N/A"}
Location: ${formData.location || "N/A"}
Message: ${formData.message || "Interested in catalog and price lists"}`;

    const url = `https://wa.me/918148744998?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Info Column (Dark Navy) */}
        <div className="lg:col-span-5 bg-primary p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/25 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
          
          <div className="space-y-8 relative z-10">
            <div>
              <h3 className="text-2xl font-bold font-poppins text-white">Inquiry Desk</h3>
              <p className="text-sm text-slate-400 mt-2">
                Connect with our commercial sales team. We offer tailored bulk pricing schedules for distributors, projects, and retailers.
              </p>
            </div>

            {/* Quick Details */}
            <div className="space-y-6">
              <a href="tel:+918148744998" className="flex items-start gap-4 group">
                <div className="p-3 bg-white/10 text-amber-400 rounded-lg group-hover:bg-amber-400 group-hover:text-primary transition-colors">
                  <FiPhone size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone Call</h4>
                  <p className="text-sm font-semibold text-slate-200 mt-0.5">+91 81487 44998</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 text-amber-400 rounded-lg">
                  <FiMail size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Inquiry</h4>
                  <p className="text-sm font-semibold text-slate-200 mt-0.5">sales@dpgoldproducts.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 text-amber-400 rounded-lg">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Factory & Office Address</h4>
                  <p className="text-sm font-semibold text-slate-200 mt-0.5 leading-relaxed">
                    30 Vanchinathan Street<br />
                    Krishnamoorthy Nagar<br />
                    Chennai – 600118, Tamil Nadu
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 relative z-10">
            DPGOLD is a brand of Dinesh Plastics PVC Electrical manufacturing division.
          </div>
        </div>

        {/* Form Column (White) */}
        <div className="lg:col-span-7 p-8 sm:p-12">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center h-full py-12">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <FiCheckCircle size={36} />
              </div>
              <h3 className="text-2xl font-bold text-primary font-poppins">Inquiry Submitted!</h3>
              <p className="text-slate-500 mt-3 max-w-md">
                Thank you for reaching out to DPGOLD. Our executive will review your requirements and respond with a quotation within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 px-6 py-2.5 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-bold font-poppins text-primary">Request a Commercial Quote</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Anand Kumar"
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company / Shop Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Supreme Electricals"
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">City / Location *</label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Chennai, Madurai"
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Product Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-accent bg-white"
                  >
                    <option value="round-sheet">Round Sheets</option>
                    <option value="fan-sheet">Fan Sheets</option>
                    <option value="junction-box">Junction Boxes</option>
                    <option value="fan-box">Fan Boxes</option>
                    <option value="elbow-tee">Elbows, Tees & Reducers</option>
                    <option value="spotlight-box">Spot Light Boxes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Specific Product (Optional)</label>
                  <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                    placeholder="e.g. DPGOLD Jumbo Round Sheet"
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Requirements / Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us the quantity required and any other specifications..."
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-accent resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-grow bg-accent hover:bg-accent-700 text-white font-semibold py-3 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <FiSend />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={triggerWhatsApp}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <FiMessageCircle size={18} />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
