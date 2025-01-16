import React from "react";
import bgVideo from "../assets/space.mp4";
import { Typed } from "react-typed"; // Correct named import
import Typewriter from "react-typewriter-effect";

const Hero = () => {
  const typewriterStyle = {
    fontSize: "1.25rem", // Equivalent to text-4xl
    textTransform: "uppercase",
    color: "white",
    textAlign: "center",
    fontWeight: "100", // Equivalent to font-thin
    fontFamily: "Poppins, sans-serif",
  };

  return (
    <section name="home" className="w-full h-screen">
      {/* video section */}
      <video
        className="w-full h-screen object-cover absolute"
        src={bgVideo}
        autoPlay
        muted
        loop
      />

      {/* title section */}
      <div className="absolute w-full h-full flex flex-col justify-center items-center space-y-4">
        <h1 className="text-5xl md:text-6xl text-white font-bold font-[poppins]">
          Space Travel
        </h1>

        <div style={typewriterStyle}>
          <Typewriter
            textStyle={{ fontFamily: "Poppins" }}
            cursorColor="white"
            multiText={["World first civilian space travel"]}
            typeSpeed={50}
            backSpeed={60}
            loop
          />
        </div>

        <div className="space-x-4">
          <button className="border text-white py-1 px-4 rounded-full bg-green-600 bg-opacity-50 font-medium uppercase hover:scale-105 duration-300 shadow shadow-pink-300">
            Training
          </button>

          <button className="border text-white py-1 px-4 rounded-full bg-blue-600 bg-opacity-50 font-medium uppercase hover:scale-105 duration-300 shadow shadow-pink-300">
            Launch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
