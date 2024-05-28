import React from "react";
import catimg from "../assets/cta.svg";
function Hero() {
  return (
    <div
      className="flex gap-12 items-center justify-between w-full p-6 h-[800px]"
      style={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 41%, rgba(162,28,160,1) 87%)",
      }}
    >
      <div className="animate-fade-in">
        <h1 className="text-white text-5xl flex flex-col font-extrabold gap-2">
          Empowering Innovation, Connecting Futures{" "}
          <span className="text-green-500"></span>{" "}
          <span className="text-fuchsia-500">Brothers ICT PLC</span>
        </h1>
      </div>
      <div className="flex-1 h-full">
        <img
          className="h-full w-full object-contain animate-fade-in"
          src={catimg}
          alt="img"
        />
      </div>
    </div>
  );
}

export default Hero;
