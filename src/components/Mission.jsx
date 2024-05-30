import React from "react";
import missionimage from "../assets/mission.svg";

function Mission() {
  return (
    <div className="h-screen w-screen mt-0  "   style={{
      background:
        "linear-gradient(90deg, rgba(2,0,36,1) 41%, rgba(162,28,160,1) 87%)",
    }}   >
     <div className=" min-h-[70vh] flex flex-row   items-center  mx-10 pt-40 " >
       <div className=" md:w-2/4 text-start">
         <h2 className=" text-5xl text-white font-semibold leading-tight">
            Our
           <span className="green">  mission</span>
         </h2>
         <p className=" text-white mt-5  text-start">
              Our company mission is to be reliable, competitive, professional provider of 
              Information Technology and information systems with maximum capacity and 
              reliability in the East Africa. Our company mission is to enhancing the business 
              growth of our customers with creative Design and Development to deliver market
              defining high-quality solutions that create value and reliable competitive 
              advantage for our clients in East Africa. Our company mission is to deliver optimal 
              solutions with quality and services at reasonable prices. For us customer 
              satisfaction is given top place. 
         </p>
       </div>   
       <div className="ml-52  ">
         <img  className= "h-full w-full object-contain object-center" src={missionimage} alt="img" />
       </div>
     </div>
    </div>
   );
}

export default Mission;