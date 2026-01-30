import React, { useState, useEffect } from "react";
import headImage from "../assets/background-2.jpg";
import Why from "../home/Why";
import Services from "../home/Services";
import Query from "../home/Query";
import Slider from "../home/Slider";
import EmailSignupFooter from "../home/EmailSignupFooter";
import GlobalLeadership from "../home/GlobalLeadership";
import Partners from "../home/Partners";

const Serv = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Page Header */}
      <section className="relative h-[320px] md:h-[420px] flex items-end overflow-hidden">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${headImage})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content with Motion */}
        <div 
          className="relative z-10 w-full"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            opacity: Math.max(0.3, 1 - scrollY / 500),
          }}
        >
          <div className="max-w-7xl mx-auto px-6 pb-10 text-white">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Services
            </h1>

            {/* Breadcrumb */}
            <nav className="mt-2">
              <ol className="flex space-x-2 text-sm md:text-base font-semibold">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>{">>"}</li>
                <li className="text-gray-200">Services</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <Why showTitle={false} />
      <Services heading="Industries" />
      <Query/>
      <Slider/>
      <Partners/>
      <EmailSignupFooter/>
    </div>
  );
};

export default Serv;
