import { VscThreeBars } from "react-icons/vsc";
import logoimg from "../assets/hero.svg";
import { useState } from "react";
function Navbar() {
  const [isMobile, SetMobile] = useState(true);

  return (
    <nav className="flex justify-between  items-center w-full sticky top-0 px-[5%] py-4 h-[100px] bg-white bg-opacity-30 backdrop-blur shadow-md z-50">
      <div className="w-[120px] cursor-pointer">
        <img
          src={logoimg}
          alt="brothers ict"
          className=" rounded-2xl"
        />
      </div>
      <ul
        className={`flex md:items-center md:flex-row  md:justify-end md:bg-transparent  gap-4  p-4 ${
          isMobile
            ? "md:static absolute top-[100%] px-[5%] md:px-0 items-start  left-0 py-10 flex-col flex  w-full md:w-auto bg-light z-30 max-h-[calc(100vh-102px)] overflow-y-auto"
            : "md:flex md:static  md:flex-row hidden"
        }`}>
        <li className="text-gray-800 hover:text-fuchsia-500 hover:scale-110 transition duration-200 cursor-pointer">
          <a href="#"> Home</a>
        </li>
        <li className="text-gray-800 hover:text-fuchsia-500 hover:scale-110 transition duration-200 cursor-pointer">
          <a href="#about">About</a>
        </li>
        <li className="text-gray-800 hover:text-fuchsia-500 hover:scale-110 transition duration-200 cursor-pointer">
          <a href="#services">Services</a>{" "}
        </li>
        <li className="text-gray-800 hover:text-fuchsia-500 hover:scale-110 transition duration-200 cursor-pointer">
          <a href="#products"> Products</a>{" "}
        </li>
        <li className="text-gray-800 hover:text-fuchsia-500 hover:scale-110 transition duration-200 cursor-pointer">
          <a href="#partners"> Partners</a>{" "}
        </li>
        <li className="text-gray-800 hover:text-fuchsia-500 hover:scale-110 transition duration-200 cursor-pointer">
          <a href="#testimonials"> Testimonials</a>{" "}
        </li>
        <li className="text-gray-800 hover:text-fuchsia-500 chover:scale-110 transition duration-200 cursor-pointer">
          What is new ?
        </li>
      </ul>
      <button
        className="px-1 py-1 hover:bg-primary focus:ring-1 focus:ring-offset-1 focus:ring-primary-1  md:hidden rounded bg-primary-1 cursor-pointer text-light"
        onClick={() => SetMobile(!isMobile)}>
        <VscThreeBars />
      </button>
    </nav>
  );
}

export default Navbar;
