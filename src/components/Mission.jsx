import React from "react";
import aboutimg from "../assets/about-us.svg";

function Mission() {
    return (
        <div id="about" className="my-12">
          <h3 className="font-bold text-2xl text-center">About our company</h3>
          <div className="flex gap-12 items-center justify-between w-full p-6 h-[900px] animate-fade-in">
            <div className="w-1/2 h-full">
              <img
                className="h-full w-full object-contain "
                src={aboutimg}
                alt="img"
              />
            </div>
            <div className="w-1/2 ">
              <p>
                Brothers IT Private Limited Company 
                is 
                a business firm established in 
                October 
                2012G.C. 
                It 
                started 
                passionately about making people 
                and technology meet on common 
                ground. We select our brands and 
                product alignment carefully to bring 
                best of breed technology to your 
                business. We test, break, fix and 
                implement every IT technology within 
                our own environment before we bring 
                it to the market. This way you are 
                assured at all time of our best 
                intentions and ability to deliver on the 
                promises we make. 
              </p>
              <div className="m-4 flex items-center ">
              </div>
            </div>
          </div>
        </div>
      );
}

export default Mission;