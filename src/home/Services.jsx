import React from "react";
import table1 from "../assets/t1.jpg";
import table2 from "../assets/t2.jpg";
import table3 from "../assets/t3.jpg";
import atmIcon from "../assets/bank-card.png";
import messageIcon from "../assets/message.png";
import callIcon from "../assets/call.png";

const Services = ({ heading = "Our Services" }) => {
  return (
    <section className="bg-gray-100 py-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="font-bold text-4xl text-slate-900 mb-4">
          {heading}
        </h2>
        <div className="w-16 h-1 bg-slate-900 mx-auto"></div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Service 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 bg-white rounded-xl overflow-hidden">
          <img
            src={table1}
            alt=""
            className="w-full h-[260px] sm:h-[350px] lg:h-[420px] object-cover"
          />

          <div className="p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Business Consulting
            </h3>
            <p className="text-slate-600 leading-relaxed">
              As one of the world’s largest accountancy networks, Elixir helps a
              diverse range of clients with a diverse range of needs.
            </p>
            <a
              href="#"
              className="inline-flex items-center mt-6 font-semibold text-slate-900 hover:gap-2 transition-all"
            >
              Learn More <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        {/* Service 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 bg-white rounded-xl overflow-hidden">
          <div className="p-8 lg:p-12 order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Tax Consulting
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Elixir serves clients across the country and around the world as
              they navigate an increasingly complex tax landscape. Our tax
              professionals draw on deep experience and industry-specific
              knowledge to deliver insights and innovation.
            </p>
            <a
              href="#"
              className="inline-flex items-center mt-6 font-semibold text-slate-900 hover:gap-2 transition-all"
            >
              Learn More <span className="ml-2">→</span>
            </a>
          </div>

          <img
            src={table2}
            alt=""
            className="w-full h-[260px] sm:h-[350px] lg:h-[420px] object-cover order-1 lg:order-2"
          />
        </div>

        {/* Service 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 bg-white rounded-xl overflow-hidden">
          <img
            src={table3}
            alt=""
            className="w-full h-[260px] sm:h-[350px] lg:h-[420px] object-cover"
          />

          <div className="p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Advisory
            </h3>
            <p className="text-slate-600 leading-relaxed">
              To help you understand what this road looks like, we surveyed 1165
              digital marketers across Europe and North America.
            </p>
            <a
              href="#"
              className="inline-flex items-center mt-6 font-semibold text-slate-900 hover:gap-2 transition-all"
            >
              Learn More <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="max-w-7xl mx-auto px-4 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src={atmIcon} className="w-6 h-6" alt="" />
              <h4 className="text-xl font-bold text-slate-900">
                Special financing
              </h4>
            </div>
            <p className="text-slate-600">
              Apply for special financial support and earn exclusive rewards.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src={messageIcon} className="w-6 h-6" alt="" />
              <h4 className="text-xl font-bold text-slate-900">
                Chat with team
              </h4>
            </div>
            <p className="text-slate-600">
              Have a question? Chat online with an expert.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src={callIcon} className="w-6 h-6" alt="" />
              <h4 className="text-xl font-bold text-slate-900">
                Call a specialist
              </h4>
            </div>
            <p className="text-slate-600">
              Our 24/7 support team is ready for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
