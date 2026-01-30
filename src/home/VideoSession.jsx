import React from "react";
import videoSessionImage from "../assets/video-screenshot-2.jpg";
import playIcon from "../assets/play.png";
import customersIcon from "../assets/customers.png";
import chatIcon from "../assets/chating.png";
import lightningIcon from "../assets/lightning.png";

const VideoSession = () => {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* VIDEO */}
        <div className="relative flex justify-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full max-w-5xl"
          >
            <img
              src={videoSessionImage}
              alt=""
              className="w-full h-auto rounded-lg object-cover"
            />

            {/* PLAY BUTTON */}
            <div className="absolute inset-0 flex items-center justify-center">
            {/* Outer circle */}
                <div className="w-20 h-20 sm:w-25 sm:h-25 bg-white/60 rounded-full flex items-center justify-center">
                    
                    {/* Inner circle (INCREASED radius) */}
                    <div className="w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center">
                    <img src={playIcon} alt="" className="w-5 h-5" />
                    </div>

                </div>
            </div>

          </a>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={customersIcon} alt="" className="w-6 h-6" />
              <h4 className="text-xl font-bold text-slate-900">
                Awesome Team
              </h4>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Before talking destination, we shine a spotlight across your
              organization to fully understand it.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={chatIcon} alt="" className="w-6 h-6" />
              <h4 className="text-xl font-bold text-slate-900">
                Excellent Support
              </h4>
            </div>
            <p className="text-slate-600 leading-relaxed">
              If you face any trouble, you can always let our dedicated support
              team help you. They are ready for you 24/7.
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={lightningIcon} alt="" className="w-6 h-6" />
              <h4 className="text-xl font-bold text-slate-900">
                Faster Performance
              </h4>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We develop a systematic well-ordered process of analysis, from
              concept through implementation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSession;
