import React from "react";
import universeIcon from "../assets/universe.png";
import emailIcon from "../assets/email.png";
import targetIcon from "../assets/target.png";
import globeIcon from "../assets/globe.png";
import moneyIcon from "../assets/money.png";
import chartIcon from "../assets/chart.png";

const ThingsuGet = () => {
  return (
    <div className="bg-white py-24 px-4">
      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Title */}
        <div className="text-center">
          <h2 className="font-bold text-4xl text-slate-900 mb-4">
            Things You Get
          </h2>
          <div className="w-16 h-0.5 bg-slate-900 mx-auto"></div>
        </div>

        {/* ITEMS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 text-center">
          {/* Item 1 */}
          <div>
            <img src={universeIcon} alt="" className="w-12 h-12 mx-auto mb-6" />
            <h4 className="text-xl font-bold text-slate-900 mb-4">
              Creative Support
            </h4>
            <p className="text-slate-600 leading-relaxed">
              We transform brands, grow businesses, and tell brand and product
              stories in a most creative way.
            </p>
          </div>

          {/* Item 2 */}
          <div>
            <img src={emailIcon} alt="" className="w-12 h-12 mx-auto mb-6" />
            <h4 className="text-xl font-bold text-slate-900 mb-4">
              Creating Experiences
            </h4>
            <p className="text-slate-600 leading-relaxed">
              We cover a large range of creative platforms and digital projects
              with one purpose: to create experiences.
            </p>
          </div>

          {/* Item 3 */}
          <div>
            <img src={targetIcon} alt="" className="w-12 h-12 mx-auto mb-6" />
            <h4 className="text-xl font-bold text-slate-900 mb-4">
              Product Consulting
            </h4>
            <p className="text-slate-600 leading-relaxed">
              We guide you through the pipelines that generate new products with
              higher potential and lower risk.
            </p>
          </div>

          {/* Item 4 */}
          <div>
            <img src={globeIcon} alt="" className="w-12 h-12 mx-auto mb-6" />
            <h4 className="text-xl font-bold text-slate-900 mb-4">
              Business Boosting
            </h4>
            <p className="text-slate-600 leading-relaxed">
              We provide energy-efficient and environmentally conservative
              solutions to boost business growth.
            </p>
          </div>

          {/* Item 5 */}
          <div>
            <img src={moneyIcon} alt="" className="w-12 h-12 mx-auto mb-6" />
            <h4 className="text-xl font-bold text-slate-900 mb-4">
              Strategic Approach
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Based on solid strategic frameworks and real research, we create
              prototypes, not presentations.
            </p>
          </div>

          {/* Item 6 */}
          <div>
            <img src={chartIcon} alt="" className="w-12 h-12 mx-auto mb-6" />
            <h4 className="text-xl font-bold text-slate-900 mb-4">
              Logistic Consulting
            </h4>
            <p className="text-slate-600 leading-relaxed">
              We work buy side and sell side to give clients clear answers and
              focus on the best opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsuGet;
