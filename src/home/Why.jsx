import React from "react";
import whychooseImage from "../assets/why-choose-us.jpg";
import briefcaseIcon from "../assets/mess.png";
import bulbIcon from "../assets/paint.png";
import clockIcon from "../assets/stopwatch.png";

const Why = ({ showTitle = true }) => {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Title */}
        {showTitle && (
          <div className="text-center">
            <h2 className="font-bold text-4xl text-slate-900 mb-4">
              Why Choose Elixir
            </h2>
            <div className="w-16 h-0.5 bg-slate-900 mx-auto"></div>
          </div>
        )}

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div>
            <img
              src={whychooseImage}
              alt="Why choose us"
              className="w-full h-[260px] sm:h-[360px] lg:h-full object-cover rounded-xl"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-12">
            {/* Item 1 */}
            <div className="flex gap-4">
              <img src={briefcaseIcon} className="w-6 h-6 mt-1" alt="" />
              <div>
                <h4 className="font-bold text-xl text-slate-900 mb-2">
                  We Are Professional
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  We resource, train, speak, mentor and encourage; marketplace
                  leaders, business owners and career professionals to be
                  effective in the workplace.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4">
              <img src={bulbIcon} className="w-6 h-6 mt-1" alt="" />
              <div>
                <h4 className="font-bold text-xl text-slate-900 mb-2">
                  We Are Creative
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  With so many factors to consider when deciding how to
                  characterize your company, wouldn’t it be great to have a
                  group of forward-thinking, well-informed individuals on
                  board?
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-4">
              <img src={clockIcon} className="w-6 h-6 mt-1" alt="" />
              <div>
                <h4 className="font-bold text-xl text-slate-900 mb-2">
                  24/7 Great Support
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Design clever and compelling marketing strategies, improve
                  product positioning, and drive conversion rates. Elixir is
                  always available to guide you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
