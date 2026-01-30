import React from "react";
import barGraphIcon from "../assets/bar-graph.png";
import bellIcon from "../assets/bell.png";
import bulbIcon from "../assets/bulb.png";
import headphonesIcon from "../assets/headphones.png";

const features = [
  {
    icon: barGraphIcon,
    title: "Business Consulting",
    desc: "Solution for every business related problems, readily and skillfully.",
  },
  {
    icon: bellIcon,
    title: "Risk Management",
    desc: "Calculate every possible risk in your business, take control over them.",
  },
  {
    icon: bulbIcon,
    title: "Market Research",
    desc: "Know the market before taking any step, reduce risks before you go.",
  },
  {
    icon: headphonesIcon,
    title: "Quality Services",
    desc: "Experience unparalleled service, from beginning to final construction.",
  },
];

const About = () => {
  return (
    <section className="py-24 px-4 bg-white">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="font-semibold text-[42px] leading-tight text-slate-900">
          Welcome to the Elixir
        </h2>

        <p className="mt-4 text-[17px] leading-relaxed text-slate-600">
          Get expert consultancy and support with Elixir, an advisory firm
          <br className="hidden sm:block" />
          that stand by your side always.
        </p>

        {/* underline */}
        <div className="w-14 h-[3px] bg-slate-900 mx-auto mt-6"></div>
      </div>

      {/* FEATURES */}
      <div className="mt-20 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 text-center">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Icon circle */}
            <div className="w-28 h-28 rounded-full border border-slate-200 flex items-center justify-center">
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10"
              />
            </div>

            {/* Title */}
            <h4 className="mt-6 font-semibold text-[20px] text-slate-900">
              {item.title}
            </h4>

            {/* Description */}
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600 max-w-[260px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
