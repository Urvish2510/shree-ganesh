import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://www.bugbountyhunter.com/assets/img/gB.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-screen">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Discover the Power of{" "}
            <span className="text-yellow-400">Innovation</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Learn, build, and transform ideas into reality. Start your journey
            with us today.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="#explore"
              className="bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300"
            >
              Explore Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
