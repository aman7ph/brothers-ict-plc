import React from "react";
import Navbar from "../components/Navbar";
import aboutimg from "../assets/about-us.svg";

function About() {
  return (
    <>
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
              dolorum quidem iure facilis corporis dignissimos velit! Natus quo
              laborum dignissimos beatae magni vero explicabo ipsam, fugiat nemo
              nisi, reiciendis temporibus? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Tempore accusantium vero aliquid
              accusamus quidem commodi consectetur unde enim recusandae magnam?
              Repellendus praesentium ipsum maxime soluta pariatur, quas
              voluptate delectus sint! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Architecto, nam iusto dolor, et illum ducimus
              placeat error odio minus, odit obcaecati magni consequatur aliquid
              repellat. Explicabo, aliquid. Corrupti, dolorum laboriosam?
            </p>
          </div>
        </div>
        <div className="flex gap-12 items-center justify-between w-full p-6 h-[900px] animate-fade-in">
          <div className="w-1/2 ">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
              dolorum quidem iure facilis corporis dignissimos velit! Natus quo
              laborum dignissimos beatae magni vero explicabo ipsam, fugiat nemo
              nisi, reiciendis temporibus? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Tempore accusantium vero aliquid
              accusamus quidem commodi consectetur unde enim recusandae magnam?
              Repellendus praesentium ipsum maxime soluta pariatur, quas
              voluptate delectus sint! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Architecto, nam iusto dolor, et illum ducimus
              placeat error odio minus, odit obcaecati magni consequatur aliquid
              repellat. Explicabo, aliquid. Corrupti, dolorum laboriosam?
            </p>
            <div className="m-4 flex items-center "></div>
          </div>{" "}
          <div className="w-1/2 h-full">
            <img
              className="h-full w-full object-contain "
              src={aboutimg}
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
