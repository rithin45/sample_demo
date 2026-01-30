import React from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
} from "react-icons/fa";

const EmailSignupFooter = () => {
  return (
    <section className="bg-[#3D4C6F] py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT – SIGNUP CARD */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-slate-800 text-white rounded-xl w-full max-w-xl">
              <div className="p-6 sm:p-8 lg:p-10">
                <h4 className="text-2xl sm:text-3xl font-semibold mb-1">
                  Sign up for email alerts
                </h4>
                <p className="text-white/90">
                  Stay current with our latest insights
                </p>

                <form
                  className="mt-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter Email Here"
                      className="flex-1 px-4 py-3 rounded-md outline-none text-gray-800 bg-white"
                    />

                    <button
                      type="submit"
                      className="bg-yellow-400 hover:bg-yellow-500 transition px-6 py-3 rounded-md font-semibold text-black"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* RIGHT – LINKS + SOCIAL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-white">

            {/* LINKS */}
            <ul className="space-y-4 text-center sm:text-left">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Global Office</a></li>
              <li><a href="#" className="hover:underline">Local Office</a></li>
            </ul>

            {/* SOCIAL LINKS */}
            <ul className="space-y-4 flex flex-col items-center sm:items-start">
              {[
                { icon: <FaLinkedinIn />, label: "Linkedin" },
                { icon: <FaTwitter />, label: "Twitter" },
                { icon: <FaFacebookF />, label: "Facebook" },
                { icon: <FaGooglePlusG />, label: "Google+" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center gap-3 hover:opacity-80"
                  >
                    <span className="w-10 h-10 bg-slate-700 rounded flex items-center justify-center">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSignupFooter;
