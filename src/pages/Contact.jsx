import React from "react";
import { useLocation } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { FiPhoneCall, FiMapPin, FiMail, FiClock } from "react-icons/fi";

const ContactPage = () => {
  const location = useLocation();
  const prefilledProduct = location.state?.product || null;

  return (
    <div className="pt-24 bg-brandBg min-h-screen">
      {/* Page Header - Redesigned Clean & Minimal */}
      <div className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-xs block">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-primary">
            Contact DP <span className="text-amber-500">Gold</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Contact our factory sales representatives, request structural test reports, or schedule a bulk dealership meeting.
          </p>
        </div>
      </div>

      {/* Main Form and Details Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ContactForm initialProduct={prefilledProduct} />
      </div>

      {/* Map and Operations Timing Grid */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Contact Details & Operations card */}
            <div className="lg:col-span-4 space-y-6">
              <h3 className="text-xl font-bold text-primary font-poppins">Our Location & Hours</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Visit our factory office in Chennai for physical sample checks and manufacturing inspection audits.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3 text-sm">
                  <FiMapPin className="text-accent mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h4 className="font-semibold text-slate-800">Factory Office</h4>
                    <p className="text-slate-500 mt-1">
                      30 Vanchinathan Street, Krishnamoorthy Nagar, Chennai – 600118, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 text-sm">
                  <FiClock className="text-accent mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h4 className="font-semibold text-slate-800">Business Hours</h4>
                    <p className="text-slate-500 mt-1">
                      Monday – Saturday: 9:00 AM – 6:30 PM IST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 text-sm">
                  <FiPhoneCall className="text-accent mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h4 className="font-semibold text-slate-800">Direct Sales Line</h4>
                    <p className="text-slate-500 mt-1">+91 81487 44998</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps */}
            <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-slate-200 shadow-lg h-[400px]">
              <iframe
                title="DPGOLD Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.6427306232537!2d80.2227181!3d13.1218824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265cc2a74c2df%3A0xc07bd855ef9c81bb!2s30%2C%20Vanchinathan%20St%2C%20Krishnamoorthy%20Nagar%2C%20Kodungaiyur%2C%20Chennai%2C%20Tamil%20Nadu%20600118!5e0!3m2!1sen!2sin!4v1717800000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
