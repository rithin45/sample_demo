import React from "react";
import news1 from "../assets/9.jpg";
import news2 from "../assets/10.jpg";
import news3 from "../assets/11.jpg";

const news = [
  {
    img: news1,
    title: "Tax impacts of lease mean accounting change",
    author: "By Paul O'Sullivan",
    desc: "HMRC released a consultation document to flag some potential tax impacts that a forthcoming change...",
  },
  {
    img: news2,
    title: "What brexit means for data protection law",
    author: "By Enrico Ambrosi",
    desc: "Assuming that the referendum is not ignored completely, there are two possible futures for the UK...",
  },
  {
    img: news3,
    title: "The growing menace of social engineering fraud",
    author: "By Robson",
    desc: "Social engineering involves the collection of information from various sources about a target...",
  },
];

const LatestNews = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold text-slate-900">
            Latest News
          </h2>
          <hr className="w-16 border-t-4 border-slate-900 mx-auto mt-4" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-lg overflow-hidden flex flex-col"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[220px] object-cover"
              />

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-grow">
                <h5 className="text-lg font-semibold mb-1 hover:text-yellow-500 transition">
                  {item.title}
                </h5>

                <p className="text-gray-500 text-sm">
                  {item.author}
                </p>

                <p className="mt-4 text-gray-700 text-sm leading-relaxed flex-grow">
                  {item.desc}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center font-medium text-slate-900 hover:text-yellow-500 mt-4"
                >
                  Learn More <span className="ml-2">⟶</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestNews;
