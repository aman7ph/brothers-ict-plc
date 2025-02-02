import { VscThreeBars } from "react-icons/vsc";
import logoimg from "../assets/logo.png";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
function Navbar() {
  const [isMobile, SetMobile] = useState(false);

  return (
    <nav className="flex justify-between  items-center w-full sticky top-0 px-[5%] py-4 h-[100px] bg-white bg-opacity-30 backdrop-blur shadow-md z-50">
      <div className="w-[90px] h-[90px] cursor-pointer">
        <img
          src={logoimg}
          alt="brothers ict"
          className=" object-contain rounded-2xl"
        />
      </div>
      <ul
        className={`flex md:items-center md:flex-row  md:justify-end md:bg-transparent  gap-4  p-4 ${
          isMobile
            ? "md:static absolute top-[100%] px-[5%] md:px-0 items-start  left-0 py-10 flex-col flex  w-full md:w-auto bg-light z-30 max-h-[calc(100vh-102px)] overflow-y-auto"
            : "md:flex md:static  md:flex-row hidden"
        }`}
      >
        <li
          onClick={() => SetMobile(false)}
          className="text-gray-800 hover:text-fuchsia-500 hover:scale-110 transition duration-200 cursor-pointer"
        >
          <HashLink smooth to="/#">
            Home
          </HashLink>
        </li>
        <li
          onClick={() => SetMobile(false)}
          className="text-gray-800 hover:text-fuchsia-500 hover:scale-110 transition duration-200 cursor-pointer"
        >
          <HashLink smooth to="/#about">
            About
          </HashLink>
        </li>
        <li
          onClick={() => SetMobile(false)}
          className="text-gray-800 hover:text-fuchsia-500 hover:scale-110 transition duration-200 cursor-pointer"
        >
          <HashLink smooth to="/#services">
            Services
          </HashLink>
        </li>
        <li
          onClick={() => SetMobile(false)}
          className="text-gray-800 hover:text-fuchsia-500 hover:scale-110 transition duration-200 cursor-pointer"
        >
          <HashLink smooth to="/#products">
            Products
          </HashLink>{" "}
        </li>
        <li
          onClick={() => SetMobile(false)}
          className="text-gray-800 hover:text-fuchsia-500 hover:scale-110 transition duration-200 cursor-pointer"
        >
          <HashLink smooth to="/#partners">
            {" "}
            Partners
          </HashLink>{" "}
        </li>
        <li
          onClick={() => SetMobile(false)}
          className="text-gray-800 hover:text-fuchsia-500 hover:scale-110 transition duration-200 cursor-pointer"
        >
          <HashLink smooth to="/#testimonials">
            {" "}
            Testimonials
          </HashLink>
        </li>
        <Link to="/news">
          <li
            onClick={() => SetMobile(false)}
            className="text-gray-800 hover:text-fuchsia-500 chover:scale-110 transition duration-200 cursor-pointer"
          >
            What is new ?
          </li>
        </Link>
      </ul>
      <button
        className="px-1 py-1 hover:bg-primary focus:ring-1 focus:ring-offset-1 focus:ring-primary-1  md:hidden rounded bg-primary-1 cursor-pointer text-light"
        onClick={() => SetMobile(!isMobile)}
      >
        <VscThreeBars />
      </button>
    </nav>
  );
}

export default Navbar;
