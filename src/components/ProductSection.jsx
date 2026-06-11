import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { products } from "../data/products";

// Styles
import "swiper/css";
import "swiper/css/navigation";

const ProductSection = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-primary">
            Look our Product
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Swiper Carousel */}
        <div className="relative px-2" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 }
            }}
            className="pb-6"
          >
            {products.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-white p-2 aspect-[4/3] group">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default ProductSection;
