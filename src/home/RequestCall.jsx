import React from "react";

const RequestCall = () => {
  return (
    <section className="bg-[#2c3e5b] py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT CARD */}
          <div className="flex justify-center lg:justify-start">
            <div className="border-2 border-yellow-400 rounded-2xl p-8 lg:p-12 max-w-md">
              <h3 className="text-white text-2xl lg:text-3xl font-bold mb-6">
                Request a call back
              </h3>

              <p className="text-slate-200 leading-relaxed text-sm lg:text-base">
                Would you like to speak to one of our financial advisers over the
                phone? Just submit your details and we’ll be in touch shortly.
                You can also email us if you would prefer.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div>
            <h4 className="text-white text-lg lg:text-xl font-bold mb-6 lg:mb-8">
              I would like to discuss:
            </h4>

            {/* ROW 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full h-12 px-5 rounded-md bg-white text-sm outline-none"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full h-12 px-5 rounded-md bg-white text-sm outline-none"
              />
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Subject"
                className="w-full h-12 px-5 rounded-md bg-white text-sm outline-none"
              />

              <button className="h-12 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500 transition">
                Submit
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RequestCall;
