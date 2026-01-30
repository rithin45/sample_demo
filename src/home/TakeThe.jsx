import React, { useEffect, useRef, useState } from "react";
import bgImage from "../assets/background-15.jpg";
import checkmark from "../assets/checkmark.png";

const TakeThe = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#2c3e5b]/90" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          
          {/* ICON */}
          <img
            src={checkmark}
            alt="checkmark"
            className="w-12 h-12 lg:w-14 lg:h-14"
          />

          {/* TEXT + STATS */}
          <div className="flex-1">
            {/* HEADING */}
            <h3 className="font-bold leading-tight">
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-yellow-400">
                Take the right step,
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-white">
                do the big things.
              </span>
            </h3>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 mt-12">
              <Stat value={52} label="Cases Solved" />
              <Stat value={164} label="Trained Experts" />
              <Stat value={38} label="Branches" />
              <Stat value={100} label="Satisfied Clients" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= STAT COMPONENT ================= */

const Stat = ({ value, label }) => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1500;
    const increment = Math.ceil(value / (duration / 16));
    let counter;

    const animate = () => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    };

    counter = setInterval(animate, 16);

    return () => clearInterval(counter);
  }, [isVisible, value]);

  return (
    <div ref={ref}>
      <div className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-none">
        {count}
      </div>
      <div className="text-white text-sm mt-1">{label}</div>
    </div>
  );
};

export default TakeThe;
