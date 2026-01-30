import React from "react";
import logo from "../assets/logo-light.png";

const Footer = () => {
  return (
    <footer className="bg-slate-800 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-white opacity-85">

          {/* LEFT – LOGO */}
          <div className="flex justify-center md:justify-start">
            <a href="/">
              <img
                src={logo}
                alt="Elixir Logo"
                className="h-8"
              />
            </a>
          </div>

          {/* CENTER – COPYRIGHT */}
          <div className="text-center">
            <p className="font-semibold text-sm md:text-base">
              © Copyright 2025 Elixir Inc.
            </p>
          </div>

          {/* RIGHT – CREDIT */}
          <div className="text-center md:text-right">
            <span className="font-semibold text-sm md:text-base">
              Made with ❤️ by{" "}
            </span>
            <a
              href="https://themewagon.com/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:opacity-80"
            >
              ThemeWagon
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
