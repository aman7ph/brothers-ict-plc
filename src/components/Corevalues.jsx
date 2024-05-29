import React from 'react';
import Image from "../assets/cta.svg";



const coreValues = [
  { id: 1,  description: "Our employees are key to our success ." },
  { id: 2, description: "We embrace change and creativity." },
  { id: 3,  description: "Our customers are pillars of our existance." },
  { id: 4,  description: "Quality of service for every body ." },
  { id: 5,  description: "Making a difference in the field of IT industry." },
];

const CoreValues = () => {
    return (
        <section className="App min-h-[40rem] border">
          <div className="p-4">
           <div className="flex flex-col md:flex-row p-4   rounded-lg  items-center">
             <div className="md:w-1/2 te p-4">
                <ul className="space-y-1 text-base text-slate-500 font-medium" >
                   {coreValues.map((value) => (
                                <li key={value.id} className="p-2  rounded-lg flex items-center">
                                <span className="text-green-500 ml-2">✓</span> {/* Right mark */} {/* Render icon */}
                                <div className="ml-2 flex-1">
                                    
                                    <p className="px-2">{value.description}</p>
                                </div>
                                
                            </li>
                    ))}
                </ul>
              </div>
             <div className="md:w-1/2 p-4 md:h-[20rem] h[10rem] flex justify-center items-center">
                <img
                  className=" md:h-[20rem] w-full object-contain object-center "
                  src={Image}
                  alt="img"
                />
             </div>
           </div>
          </div>
        </section>
      );
};

export default CoreValues;
