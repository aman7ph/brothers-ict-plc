import React from "react";
import missionimage from "../assets/mission.svg";

function Mission() {
  return (
    <section
      className="App min-h-[40rem] "
      style={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 41%, rgba(162,28,160,1) 87%)",
      }}
    >
      <div className="">
        <div className="flex flex-col md:flex-row p-4 mt-[7rem]  rounded-lg  items-center gap-6">
          <div className="md:w-1/2 te p-4">
            <h2 className="text-5xl mb-[1rem] ml-[2rem] text-light font-semibold leading-tight">
              Our
              <span className="green"> missions</span>
            </h2>
            <ul className="space-y-1 text-base text-light font-medium">
              <li className=" rounded-lg flex items-center">
                <div className=" flex-1">
                  <p className="">
                    Our company mission is to be reliable, competitive,
                    professional provider of Information Technology and
                    information systems with maximum capacity and reliability in
                    the East Africa. Our company mission is to enhancing the
                    business growth of our customers with creative Design and
                    Development to deliver market defining high-quality
                    solutions that create value and reliable competitive
                    advantage for our clients in East Africa. Our company
                    mission is to deliver optimal solutions with quality and
                    services at reasonable prices. For us customer satisfaction
                    is given top place.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 p-4 md:h-[20rem] h-[10rem] flex justify-center items-center">
            <img
              className=" md:h-[20rem] w-full object-contain object-center"
              src={missionimage}
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
