import React from "react";
import Visionimage from "../assets/vision.svg";

function Vision() {
  return (
    <section className="App min-h-[40rem] ">
      <div className="p-4">
        <div className="flex flex-col md:flex-row p-4 mt-[7rem] gap-6  rounded-lg  items-center">
          <div className="md:w-1/2 p-4 md:h-[20rem] h-[10rem] flex justify-center items-center my-4">
            <img
              className=" md:h-[20rem] w-full object-contain object-center "
              src={Visionimage}
              alt="img"
            />
          </div>
          <div className="md:w-1/2 te p-4">
            <h2 className="text-5xl mb-[1rem] ml-[2rem] text-slate-500 font-semibold leading-tight">
              Our
              <span className="green"> Vision</span>
            </h2>
            <ul className="space-y-1 text-base text-slate-500 font-medium">
              <li className="p-2  rounded-lg flex items-center">
                <div className="ml-2 flex-1">
                  <p className="  mt-5  text-start">
                    To establish efficient information Technology capability
                    that relies on professional work and performance to be the
                    best competitors of IT industry Our vision is to develop in
                    a constant manner and grow as a major IT service provider to
                    become a leading performer, in providing quality data center
                    design, quality IT equipments, Web and Software Development
                    solutions in the competitive IT industry. We always guide
                    our customers to success. We have the ability to accelerate
                    and quickly share the great work or products of your
                    organization or business.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
