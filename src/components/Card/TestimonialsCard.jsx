import React from "react";
import { Link } from "react-router-dom";

function TestimonialsCard({ title, image, description }) {
  return (
    <Link>
      <div className="flex gap-5 flex-col w-[350px] bg-light p-6 rounded-lg border border-green-2 shadow-lg hover:scale-110 transition duration-200 min-h-[440px]">
        <img
          src={image}
          alt={title}
          className="border border-green-2 rounded-lg w-[190px] max-h-[190px] self-center"
        />
        <h5 className="font-bold text-pretty  text-xl">{title}</h5>
        <p className="text-pretty">{description}</p>
      </div>
    </Link>
  );
}

export default TestimonialsCard;
