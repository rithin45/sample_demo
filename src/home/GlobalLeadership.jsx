import React from "react";
import reenalIcon from "../assets/portrait-3.jpg";
import lilyIcon from "../assets/portrait-4.jpg";
import thomasIcon from "../assets/portrait-5.jpg";
import legarthaIcon from "../assets/portrait-6.jpg";
import johnIcon from "../assets/portrait-7.jpg";
import ragnerIcon from "../assets/portrait-1.jpg";

const leaders = [
  {
    img: reenalIcon,
    name: "Reenal Scott",
    role: "Advertising Consultant",
    desc: "Reenal Scott is the Founder and CEO of Elixir, which he started from his dorm room in 2013 with 3 people only.",
  },
  {
    img: lilyIcon,
    name: "Lily Anderson",
    role: "Activation Consultant",
    desc: "Lily leads Elixir UK and oversees the company’s Customer Operations teams supporting millions of users.",
  },
  {
    img: thomasIcon,
    name: "Thomas Anderson",
    role: "Change Management Consultant",
    desc: "As the VP of People, Thomas’s focus lies in the development and optimization of talent retention.",
  },
  {
    img: legarthaIcon,
    name: "Legartha Mantana",
    role: "Brand Management Consultant",
    desc: "As General Counsel of Elixir, Tony oversees global legal activities and policies across all aspects.",
  },
  {
    img: johnIcon,
    name: "John Snow",
    role: "Business Analyst",
    desc: "John has overseen the meteoric growth while protecting and scaling its uniquely creative culture.",
  },
  {
    img: ragnerIcon,
    name: "Ragner Lothbrok",
    role: "Business Consultant",
    desc: "Ragner, SVP of Engineering, oversees Elixir’s vast engineering organization driving core programming.",
  },
];

const GlobalLeadership = () => {
  return (
    <section className="bg-gray-100 py-20">
      {/* HEADING */}
      <div className="text-center mb-14">
        <h2 className="font-bold text-4xl text-slate-900 mb-4">
          Global leadership
        </h2>
        <hr className="w-16 border-t-4 border-slate-900 mx-auto" />
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <img
                src={leader.img}
                alt={leader.name}
                className="w-full h-[240px] object-cover"
              />

              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {leader.name}
                </h3>

                <span className="text-sm text-slate-400 block mb-4">
                  {leader.role}
                </span>

                <p className="text-gray-600 text-base leading-relaxed">
                  {leader.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalLeadership;
