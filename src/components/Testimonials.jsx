import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FiStar } from "react-icons/fi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const reviews = [
    {
      name: "R. Krishnan",
      role: "Proprietor, Sri Balaji Electricals",
      location: "Chennai",
      comment: "We have been distributing DPGOLD round sheets and junction boxes for over three years now. The material consistency is excellent. Contractors specifically ask for DPGOLD because the screw holes never crack, and the brass threads save them a lot of installation time."
    },
    {
      name: "Sanjay Shah",
      role: "Project Head, Horizon Builders",
      location: "Bangalore",
      comment: "In large concrete slab construction, fan boxes undergo massive structural pressure. The Jumbo Fan Boxes from DPGOLD are exceptionally rigid. The double welds and heavy steel hooks give us absolute safety reassurance. Excellent service from Dinesh Plastics."
    },
    {
      name: "M. Anbazhagan",
      role: "Lead Electrical Consultant",
      location: "Coimbatore",
      comment: "DPGOLD Spotlight boxes and deep junction boxes are brilliant. They provide ample spacing for looping conduits and wire terminations. The flame-retardant grade matches premium brand standards but at a highly competitive manufacturing price point."
    }
  ];

  return (
    <section className="mx-4 mb-6 sm:mx-6 sm:mb-8 lg:mx-8 lg:mb-10 rounded-3xl bg-primary text-white py-16 px-6 sm:px-10 overflow-hidden relative shadow-xl">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/25 rounded-full blur-3xl -ml-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-700/20 rounded-full blur-3xl -mr-48 -mb-48 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-amber-400 font-bold tracking-wider uppercase text-sm">Distributor Reviews</span>
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mt-2">
            Trusted By The Industry Leaders
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-16"
        >
          {reviews.map((rev, idx) => (
            <SwiperSlide key={idx}>
              <div className="text-center max-w-3xl mx-auto px-4">
                {/* Rating stars */}
                <div className="flex justify-center gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} fill="currentColor" size={20} />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-lg sm:text-xl text-slate-300 italic font-medium leading-relaxed mb-8">
                  "{rev.comment}"
                </p>

                {/* Author Info */}
                <div>
                  <h4 className="font-poppins font-bold text-lg text-white">{rev.name}</h4>
                  <p className="text-sm text-slate-400 mt-1">
                    {rev.role} — <span className="text-amber-400 font-semibold">{rev.location}</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;
