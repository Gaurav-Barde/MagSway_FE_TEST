import React from "react";
import icon from "../assets/icon-1.png";
import HeroImageSection from "./HeroImageSection";

const HeroSection = () => {
  return (
    <section className="grid grid-flow-col grid-cols-5 mt-40 justify-between">
      <div className="col-span-3 flex flex-col justify-start items-start">
        <h1 className="text-6xl text-left">
          Experience the power of
          <span className="font-bold block">professional UI kits</span>
        </h1>
        <p className="text-sm mt-7 text-left">
          Choose from a wide range of styles and themes <br /> to find the
          perfect fit for your project
        </p>
        <button className="bg-yellow-400 rounded-full py-5 px-9 mt-11">
          Discover →
        </button>
        <div className="flex items-center mt-24 text-left">
          <img src={icon} className="w-7 h-7" />
          <div className="ml-6">
            <h3>Unlimited Blocks</h3>
            <p>
              Having access to unlimited blocks means that users can create a
              wide range of designs without running out of elements to work
              with.
            </p>
          </div>
        </div>
      </div>
      <HeroImageSection />
    </section>
  );
};

export default HeroSection;
