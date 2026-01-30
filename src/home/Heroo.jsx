import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";

import header1 from "../assets/header-1.jpg";
import header5 from "../assets/header-5.jpg";
import header6 from "../assets/header-6.jpg";

const slides = [
  {
    image: header6,
    title: "Helping Leaders",
    text: "We look forward to help you in taking your company to new height.",
  },
  {
    image: header5,
    title: "Expert Consultants",
    text: "Over 10 years of experience in helping clients finding comprehensive solutions.",
  },
  {
    image: header1,
    title: "Growth Partners",
    text: "Connect with top consultants hand-picked by Elixir consulting and finance.",
  },
];

const Heroo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={800}
        loop
        autoplay={{ delay: 5000 }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="min-h-[48vh] sm:h-[100svh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="min-h-[48vh] sm:h-[100svh]"
          >
            <section className="relative min-h-[48vh] sm:h-[100svh] overflow-hidden">

              {/* Background Image */}
              <div
                className="
                  absolute inset-0
                  bg-no-repeat
                  bg-contain sm:bg-cover
                  bg-center
                "
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-white/20"></div>

              {/* Content */}
              <div className="relative max-w-7xl mx-auto px-6 lg:px-20 min-h-[48vh] sm:h-[100svh] flex items-center">
                <div className="max-w-2xl text-slate-800 translate-y-[-10%]">

                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 40 }
                    }
                    transition={{ duration: 0.8 }}
                    className="text-[26px] sm:text-[42px] lg:text-[52px] font-bold mb-4 leading-tight"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 40 }
                    }
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="text-[13px] sm:text-[18px] lg:text-[20px] mb-7 text-slate-600"
                  >
                    {slide.text}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 40 }
                    }
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-wrap gap-2"
                  >
                    <a
                      href="/services"
                      className="bg-slate-800 hover:bg-slate-900 transition text-white px-4 py-2 text-sm font-semibold inline-block"
                    >
                      Read more →
                    </a>

                    <a
                      href="/contact"
                      className="bg-yellow-400 hover:bg-yellow-500 transition text-black px-4 py-2 text-sm font-semibold inline-block"
                    >
                      Contact us →
                    </a>
                  </motion.div>

                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Heroo;
