import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaGoogle } from "react-icons/fa";

const Info = () => {
  return (
    <section className="bg-gray-50 py-10 sm:py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Offices */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="bg-white rounded-2xl shadow p-6 sm:p-8">
            <h5 className="text-base sm:text-lg font-semibold mb-3">
              Melbourne Office
            </h5>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              121 King Street,<br />
              Melbourne 1200,<br />
              Australia
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 sm:p-8">
            <h5 className="text-base sm:text-lg font-semibold mb-3">
              Sydney Office
            </h5>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              62 Collins Street West,<br />
              Sydney 3000,<br />
              Australia
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 sm:p-8 sm:col-span-2 lg:col-span-1">
            <h5 className="text-base sm:text-lg font-semibold mb-4">
              Socials
            </h5>

            <div className="flex gap-3">
              {[FaLinkedin, FaTwitter, FaFacebook, FaGoogle].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-11 h-11 sm:w-12 sm:h-12
                      bg-slate-100 text-slate-600
                      flex items-center justify-center
                      rounded-md
                      hover:bg-slate-900 hover:text-white
                      transition"
                  >
                    <Icon className="text-xl sm:text-2xl" />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-2xl shadow mb-12 overflow-hidden">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps?q=48.8583701,2.2922873&z=17&output=embed"
            className="w-full h-64 sm:h-80 lg:h-[420px]"
            loading="lazy"
          />
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow p-8 sm:p-12">
          <h5 className="text-xl font-semibold mb-8">
            Write to us
          </h5>

          <form className="space-y-6">
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full
                border border-gray-300
                rounded-lg
                px-5 py-4
                text-base
                focus:outline-none
                focus:ring-2 focus:ring-violet-500
                focus:border-violet-500"
              required
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full
                border border-gray-300
                rounded-lg
                px-5 py-4
                text-base
                focus:outline-none
                focus:ring-2 focus:ring-violet-500
                focus:border-violet-500"
              required
            />

            {/* Message (Expandable) */}
            <textarea
              rows="9"
              placeholder="Enter your descriptions here..."
              className="w-full
                border border-gray-300
                rounded-lg
                px-5 py-4
                text-base
                resize-y
                min-h-[220px]
                focus:outline-none
                focus:ring-2 focus:ring-violet-500
                focus:border-violet-500"
              required
            />

            {/* Button */}
            <button
              type="submit"
              className="bg-slate-800
                text-white
                px-8 py-3
                rounded-md
                font-semibold
                hover:bg-slate-900
                transition"
            >
              Send Now
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Info;
