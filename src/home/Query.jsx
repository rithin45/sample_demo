import React from "react";

const Query = () => {
  return (
    <section className="bg-slate-700 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* TEXT */}
          <p className="text-white font-bold text-xl md:text-2xl">
            If you have any query related investment... we are available 24/7
          </p>

          {/* BUTTON */}
          <button className="rounded-full bg-white px-8 py-2 text-sm font-semibold text-slate-900 hover:bg-gray-200 transition">
            Contact Us
          </button>

        </div>
      </div>
    </section>
  );
};

export default Query;
