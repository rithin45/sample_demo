import React from "react";

import logo1 from "../assets/partner/logo1.png";
import logo2 from "../assets/partner/logo2.png";
import logo3 from "../assets/partner/logo3.png";
import logo4 from "../assets/partner/logo4.png";
import logo5 from "../assets/partner/logo5.png";
import logo6 from "../assets/partner/logo6.png";

const logos = [
  logo2,
  logo1,
  logo6,
  logo3,
  logo5,
  logo4,
];

const Partners = () => {
  return (
    <section className="bg-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo}
                alt="partner logo"
                className="max-h-12 opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
