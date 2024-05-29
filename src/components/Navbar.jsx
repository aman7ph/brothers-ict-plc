import logoimg from "../assets/hero.svg";
function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full sticky top-0 p-4 h-[100px] bg-white bg-opacity-30 backdrop-blur shadow-md z-50">
      <div className="w-[120px] cursor-pointer">
        <img
          src={logoimg}
          alt="brothers ict"
          className=" rounded-2xl"
        />
      </div>
      <ul className="flex gap-4 items-center p-4">
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
    </nav>
  );
}

export default Navbar;
