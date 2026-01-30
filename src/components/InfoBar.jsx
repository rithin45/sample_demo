import React, { useState, useEffect } from "react";
import searchIcon from "../assets/location.png";
import phoneIcon from "../assets/phone.png";
import clockIcon from "../assets/clock.png";

const InfoBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-slate-700 transition-all duration-500 overflow-hidden ${
        isVisible ? "max-h-16 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4">
        {/* GRID = 3 equal columns (Elixir style) */}
        <nav className="h-16 grid grid-cols-3 items-center text-white text-sm">

          {/* LEFT — LOCATION */}
          <span
            className="
              flex items-center gap-2
              justify-start        /* ⬅ move left/center/right here */
              text-xs font-bold
              pl-0                /* ⬅ adjust left spacing here */
            "
          >
            <img src={searchIcon} alt="location" className="h-4 w-4" />
            1010 Avenue, New York, NY 10018 US.
          </span>

          {/* CENTER — PHONE */}
          <span
            className="
              flex items-center gap-2
              justify-center       /* ⬅ center alignment */
              text-xs font-bold
            "
          >
            <img src={phoneIcon} alt="phone" className="h-4 w-4" />
            212 386 5575, 212 386 5576
          </span>

          {/* RIGHT — TIME */}
          <span
            className="
              flex items-center gap-2
              justify-end          /* ⬅ move right/center/left here */
              text-xs font-bold
              pr-0                /* ⬅ adjust right spacing here */
            "
          >
            <img src={clockIcon} alt="clock" className="h-4 w-4" />
            Mon–Sat, 8.00–18.00 | Sunday CLOSED
          </span>

        </nav>
      </div>
    </div>
  );
};

export default InfoBar;
