import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const slides = [
  {
    image: "https://i.postimg.cc/ZRtCGWsP/pet1.jpg",
    tagline: "Find Your Furry Friend Today!",
  },
  {
    image: "https://i.postimg.cc/HW7Vp910/pet2.jpg",
    tagline: "Adopt, Don’t Shop — Give a Pet a Home.",
  },
  {
    image: "https://i.postimg.cc/6Qrxjqkv/pet3.jpg",
    tagline: "Because Every Pet Deserves Love and Care.",
  },
];

const BannerSlider = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-10">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-125">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-5 bg-black bg-opacity-50 p-3 rounded-sm text-white text-lg font-bold ml-84">
                {slide.tagline}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
