import React from "react";
import qualityIcon from "../assets/icons/quality.svg";
import deliveryIcon from "../assets/icons/delivery.svg";
import manufacturingIcon from "../assets/icons/manufacturing.svg";
import trustIcon from "../assets/icons/trust.svg";

const WhyChooseUs = () => {
  const points = [
    {
      title: "100% Virgin Materials",
      desc: "We formulate our uPVC accessories using 100% virgin polymer resin. This ensures optimal impact resistance, high flexural strength, and prevents crack-induced wiring exposures.",
      icon: qualityIcon
    },
    {
      title: "Threaded Brass Inserts",
      desc: "Our junction boxes and deep boxes feature molded-in threaded brass inserts. This ensures durable screw alignments that resist slippage or strip-outs during installation.",
      icon: trustIcon
    },
    {
      title: "Advanced Manufacturing",
      desc: "Equipped with state-of-the-art automated injection molding machinery at our Chennai facilities, we deliver high dimensional accuracy and high-volume consistency.",
      icon: manufacturingIcon
    },
    {
      title: "On-Time Bulk Supply",
      desc: "Our efficient production planning and extensive distribution channel allow us to fulfill large commercial build orders on schedule across India.",
      icon: deliveryIcon
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-accent font-bold tracking-wider uppercase text-sm">Our Engineering Edge</span>
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-primary mt-2">
            Why Electrical Contractors Trust DPGOLD
          </h2>
          <p className="text-slate-500 mt-4">
            Under the legacy of Dinesh Plastics, we combine decades of material science experience with rigorous testing protocols to build the safest electrical accessories on the market.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-start"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="p-3 bg-slate-50 rounded-lg text-accent mb-6 border border-slate-100 flex items-center justify-center">
                <img src={pt.icon} alt={pt.title} className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3 font-poppins">{pt.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{pt.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
