import React, { useState, useEffect } from "react";
import headImage from "../assets/background-2.jpg";
import QuickStarted from "./QuickStarted";

const GettingStarted = () => {
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
            <section className="relative h-[200px] sm:h-[280px] md:h-[420px] flex items-end overflow-hidden w-full">
              
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${headImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%'
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
                    Getting Started
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
                      <li className="text-gray-200">Getting Started</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </section>
            <QuickStarted/>
    </div>
  )
}

export default GettingStarted
