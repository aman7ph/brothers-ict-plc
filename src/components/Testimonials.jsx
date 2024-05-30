import React from "react";

import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";
import SwiperCore from "swiper";
SwiperCore.use([Autoplay]);

import consultingimg from "../assets/consulting.svg";
import developeimg from "../assets/develope.svg";
import networkimg from "../assets/network.svg";

import Card from "./Card/Card";

const testimonials = [
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
function Testimonials() {
  return (
    <div>
      <div
        id="testimonials"
        className="my-12 h-[800px] py-12 px-[5%] mx-auto">
        <h3 className="font-bold text-2xl text-center text-black p-12">
          Testimonials from our Clients
        </h3>
        <div className="flex items-center    gap-12 justify-center animate-fade-in">
          <Swiper
            modules={[Autoplay, A11y]}
            breakpoints={{
              0: {
                spaceBetween: 15,
                slidesPerView: 1,
              },
              640: {
                spaceBetween: 5,
                slidesPerView: 2,
              },
              1024: {
                spaceBetween: 5,
                slidesPerView: 3,
              },
              1280: {
                spaceBetween: 30,
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            longSwipes={true}
            className=" py-12">
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
