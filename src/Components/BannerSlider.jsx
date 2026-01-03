import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router";

const slides = [
  {
    image: "https://i.postimg.cc/ZRtCGWsP/pet1.jpg",
    tagline: "Find Your Furry Friend Today!",
  },
  {
    image: "https://i.postimg.cc/PqyKrvHB/wonner-cat.jpg",
    tagline: "Because Every Pet Deserves Love and Care.",
  },
  {
    image: "https://i.postimg.cc/HW7Vp910/pet2.jpg",
    tagline: "Adopt, Don’t Shop — Give a Pet a Home.",
  },
  {
    image:
      "https://i.postimg.cc/8zjTbMKd/Chat-GPT-Image-Nov-13-2025-10-20-43-AM.png",
    tagline: "Because Every Pet Deserves Love and Care.",
  },
  {
    image: "https://i.postimg.cc/6Qrxjqkv/pet3.jpg",
    tagline: "Because Every Pet Deserves Love and Care.",
  },
];

const BannerSlider = () => {
  return (
    <div className="max-w-[1380px] mx-auto mt-5 px-3 md:px-0">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <figure className="w-full h-[80vh]">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full object-cover"
                />
              </figure>

              {/* Tagline */}
              <div
                className="absolute bottom-24 left-5 md:left-12
                              bg-black/50 px-4 py-2 rounded
                              text-white text-lg font-bold"
              >
                {slide.tagline}
              </div>

              {/* CTA Button */}
              <div className="absolute bottom-10 left-5 md:left-12">
                <Link to="/petsAndSupplies">
                  <button
                    className="bg-indigo-600 hover:bg-indigo-700
                               text-white font-semibold
                               px-6 py-3 rounded-lg
                               transition duration-300 shadow-lg cursor-pointer"
                  >
                    Browse Pets
                  </button>
                </Link>
              </div>

              {/* Scroll hint (optional but recommended) */}
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2
                              text-red-500 text-3xl animate-bounce text-[60px]"
              >
                ↓
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
