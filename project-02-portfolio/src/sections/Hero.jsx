

import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#35364a] text-white flex flex-col items-center justify-center relative pl-16 md:pl-20"
    >
      <div className="flex flex-col items-center text-center px-4">
        {/* Profile Avatar */}
        <div className="relative mb-6">
          <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#35364a] shadow-[0_0_50px_rgba(45,212,191,0.5)] bg-cyan-400/20 flex items-center justify-center">
            <img
              src="/images/IMG_20220619_150816-removebg-preview 1.png"
              alt="Wahid Ahmed"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-wider mb-2">
          WAHID AHMED
        </h1>
        <p className="text-gray-300 text-sm md:text-base font-light mb-6">
          I Am Web Designer and Video Editor
        </p>

        {/* Social Links using Images from public/images/ */}
        <div className="flex items-center gap-4 mb-12">
          {/* Globe / Website Icon */}
          <a
            href="#"
            className="w-9 h-9 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center hover:bg-cyan-400/20 transition-all"
          >
            <img
              src="/images/Vector.png"
              alt="Website"
              className="w-4 h-4 object-contain"
            />
          </a>

          {/* Twitter / X Icon */}
          <a
            href="#"
            className="w-9 h-9 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center hover:bg-cyan-400/20 transition-all"
          >
            <img
              src="/images/Vector (2).png"
              alt="Twitter"
              className="w-4 h-4 object-contain"
            />
          </a>

          {/* Instagram Icon */}
          <a
            href="#"
            className="w-9 h-9 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center hover:bg-cyan-400/20 transition-all"
          >
            <img
              src="/images/🦆 icon _Instagram Square_.png"
              alt="Instagram"
              className="w-4 h-4 object-contain"
            />
          </a>

          {/* Facebook Icon */}
          <a
            href="#"
            className="w-9 h-9 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center hover:bg-cyan-400/20 transition-all"
          >
            <img
              src="/images/Vector (3).png"
              alt="Facebook"
              className="w-4 h-4 object-contain"
            />
          </a>

          {/* Youtube Icon */}
          <a
            href="#"
            className="w-9 h-9 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center hover:bg-cyan-400/20 transition-all"
          >
            <img
              src="/images/Vector (4).png"
              alt="Youtube"
              className="w-4 h-4 object-contain"
            />
          </a>
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-8 flex flex-col items-center gap-1 text-gray-400 text-xs animate-bounce cursor-pointer">
        <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-green-400 rounded-full" />
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;