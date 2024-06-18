import React from "react";
import heroImage from "../assets/backgroud-image.jpeg";
const Hero = () => {
  return (
    <div>
      <div className="relative h-screen">
        <img src={heroImage} alt="" className="w-full object-cover h-full  " />
        <div className="absolute bg-black z-50 top-0 left-0 right-0 h-full  opacity-[0.6] "></div>
        <div className="absolute top-1/2 right-1/2">
          <div className="border-2 border-black flex gap-4">
            <h1 className="text-white text-4xl ">Text 1</h1>
            <h1 className="text-white text-4xl ">text 2</h1>
          </div>
        </div>
      </div>
      <div className="h-screen">
        <h1>Image</h1>
      </div>
    </div>
  );
};

export default Hero;
