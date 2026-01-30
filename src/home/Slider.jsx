import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";

const Slider = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="w-full"
        >
          {/* SLIDE 1 */}
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-3 flex justify-center">
                <img
                  src={client3}
                  alt="David Beckham"
                  className="w-28 h-28 md:w-32 md:h-32 rounded-xl object-cover"
                />
              </div>

              <div className="md:col-span-9 text-center md:text-left">
                <p className="text-base md:text-lg leading-relaxed text-gray-700">
                  As a sales gamification company, we were skeptical to work with
                  a consultant to optimize our sales emails, but Elixir was
                  highly recommended by many other Y-Combinator startups we
                  knew. Elixir helped us run a ~6 week email campaign.
                </p>

                <h6 className="mt-6 font-semibold text-gray-900">
                  David Beckham
                </h6>
                <p className="text-gray-500 text-sm">
                  Chairman, Harmony Corporation
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-3 flex justify-center">
                <img
                  src={client1}
                  alt="Michael Clarke"
                  className="w-28 h-28 md:w-32 md:h-32 rounded-xl object-cover"
                />
              </div>

              <div className="md:col-span-9 text-center md:text-left">
                <p className="text-base md:text-lg leading-relaxed text-gray-700">
                  Their work on our website and Internet marketing has made a
                  significant difference to our business. We’ve seen a 425%
                  increase in quote requests from the website which has been
                  pretty remarkable – but I’d always like to see more!
                </p>

                <h6 className="mt-6 font-semibold text-gray-900">
                  Michael Clarke
                </h6>
                <p className="text-gray-500 text-sm">
                  CEO, A.E.T Institute
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 3 */}
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-3 flex justify-center">
                <img
                  src={client2}
                  alt="Maria Sharapova"
                  className="w-28 h-28 md:w-32 md:h-32 rounded-xl object-cover"
                />
              </div>

              <div className="md:col-span-9 text-center md:text-left">
                <p className="text-base md:text-lg leading-relaxed text-gray-700">
                  Writing case studies was a daunting task for us. We didn’t
                  know where to begin or what questions to ask, and clients
                  never seemed to follow through when we asked. Elixir team
                  did everything – with almost no time or effort for me!
                </p>

                <h6 className="mt-6 font-semibold text-gray-900">
                  Maria Sharapova
                </h6>
                <p className="text-gray-500 text-sm">
                  Managing Director, Themewagon Inc.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
