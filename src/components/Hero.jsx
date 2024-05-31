import React from "react";
import img from "../assets/hero.svg";

function Hero() {
  return (
    <div
      className="h-screen  mt-0 "
      style={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 41%, rgba(162,28,160,1) 87%)",
      }}
    >
      <div className=" min-h-[70vh] flex flex-col-reverse md:flex-row md:justify-between items-center mx-[5%]  pt-40 ">
        <div className=" md:w-2/4 text-start">
          <h2 className=" text-5xl text-white font-semibold leading-tight">
            Brothers IT
            <span className="text-green"> PLC</span>
          </h2>
          <p className=" text-white mt-5 text-start">
            `Bridging People and Technology with Passion and Precision`
          </p>
        </div>

        <div className=" sm:w-[80%] w-[95%]  md:w-2/4">
          <img src={img} alt="img" className="object-contain object-center" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
