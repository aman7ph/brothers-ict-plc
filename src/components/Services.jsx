import React from "react";
import consultingimg from "../assets/consulting.svg";
import developeimg from "../assets/develope.svg";
import networkimg from "../assets/network.svg";
import Card from "./Card";

const services = [
  {
    title: "Consulting",
    image: consultingimg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, aut quas praesentium asperiores assumenda, impedit ad voluptatibus, iusto eos ratione explicabo.",
  },
  {
    title: "Developing",
    image: developeimg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, aut quas praesentium asperiores assumenda, impedit ad voluptatibus, iusto eos ratione explicabo.",
  },
  {
    title: "Networking",
    image: networkimg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, aut quas praesentium asperiores assumenda, impedit ad voluptatibus, iusto eos ratione explicabo.",
  },
];

function Services() {
  return (
    <div
      id="services"
      className="my-12 h-[800px] p-12"
      style={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 41%, rgba(162,28,160,1) 87%)",
      }}
    >
      <h3 className="font-bold text-2xl text-center text-white p-12">
        Services we give
      </h3>

      <div className="flex items-center gap-12 justify-center animate-fade-in">
        {services.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
