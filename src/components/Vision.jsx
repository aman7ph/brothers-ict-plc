import React from "react";
import Visionimage from "../assets/vision.svg";

function Vision (){
    return (
        <div className="h-screen w-screen mt-0 "     >
         <div className=" min-h-[70vh] flex flex-row   items-center  mx-10 pt-40 " >
           <div className=" md:w-2/4 text-start  text-slate-500">
             <h2 className=" text-5xl  font-semibold leading-tight">
                Our
               <span className="green"> vision</span>
             </h2>
             <p className="  mt-5  text-start">
                To establish efficient information Technology capability that relies on professional 
                work and performance to be the best competitors of IT industry Our vision is 
                to develop in a constant manner and grow as a major IT service provider to 
                become a leading performer, in providing quality data center design, quality IT 
                equipments, Web and Software Development solutions in the competitive IT 
                industry. We always guide our customers to success. We have the ability to 
                accelerate and quickly share the great work or products of your organization or 
                business. 
             </p>
           </div>   
           <div className="ml-52  ">
             <img  className= "h-full w-full object-contain object-center" src={Visionimage} alt="img" />
           </div>
         </div>
        </div>
       );
}

export default Vision;