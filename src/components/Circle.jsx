import React from "react";

function Circle({ icon, name }) {
  return (
    <div className="flex flex-col gap-4 hover:scale-110 transition duration-200">
      <div className="flex items-center justify-center bg-white h-[120px] w-[120px] rounded-full p-4 border border-green-300">
        <img src={icon} alt={name} className="object-contain" />
      </div>
      <h6 className="text-white text-center text-xl font-bold">{name}</h6>
    </div>
  );
}

export default Circle;
