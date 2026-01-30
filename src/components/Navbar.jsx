import React, { useState } from "react";
import logoIcon from "../assets/logo-dark.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">

        {/* LEFT SECTION - LOGO + DESKTOP MENU */}
        <div className="flex items-center gap-8">
          {/* LOGO */}
          <Link to="/">
          <img src={logoIcon} alt="logo" className="h-8" />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 font-bold text-gray-700">

            
             <Link to="/services" className="cursor-pointer">
            Services
            </Link>
            

             


            <span className="cursor-pointer">News</span>
            <span className="cursor-pointer">Elements</span>
            <Link to="/contact" className="cursor-pointer">Contact
            </Link>
            <Link to="/getting-started" className="cursor-pointer">Getting Started
            </Link>
          </div>
        </div>

        {/* RIGHT SECTION - PURCHASE BUTTON */}
        <div className="hidden md:flex">
          <button className="px-4 py-1 rounded-full border-2 font-bold text-gray-700 hover:bg-slate-700 hover:text-white transition">
            Purchase
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-4 py-4 space-y-3 font-bold text-gray-700">
          <Link to="/services" className="block cursor-pointer" onClick={() => setMenuOpen(false)}>Services</Link>
          <span className="block cursor-pointer">News</span>
          <span className="block cursor-pointer">Elements</span>
          <Link to="/contact" className="block cursor-pointer" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/getting-started" className="block cursor-pointer" onClick={() => setMenuOpen(false)}>Getting Started</Link>

          <button className="w-full mt-4 px-4 py-2 rounded-full border-2 hover:bg-slate-700 hover:text-white transition">
            Purchase
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
