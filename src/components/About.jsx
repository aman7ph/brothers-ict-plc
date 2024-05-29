import React from "react";
import aboutimg from "../assets/about-us.svg";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function About() {
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            quidem iure facilis corporis dignissimos velit! Natus quo laborum
            dignissimos beatae magni vero explicabo ipsam, fugiat nemo nisi,
            reiciendis temporibus? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Tempore accusantium vero aliquid accusamus 
            commodi consectetur unde enim recusandae magnam? Repellendus
            praesentium ipsum maxime solu aliquid. Corrupti,
          </p>
          <div className="m-4 flex items-center ">
            <Link to="about"  className="p-4 flex items-center gap-3 hover:text-fuchsia-500 hover:scale-110 transition duration-200">
              read more
              <span>
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
