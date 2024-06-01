import {} from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
  const notify = () => toast("Coming soon.");

  return (
    <footer
      className=" text-gray-300 py-12"
      style={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 41%, rgba(162,28,160,1) 87%)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-primary-4">
        <div className="flex justify-between flex-wrap ">
          {/* Newsletter Subscription */}

          {/* Footer Navigation */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <IoLocation className="mr-2" />
                <span>Wastina Mega Commercial Center 8th floor</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <span>+251-118-696-861</span>
              </li>
              <li className="flex items-center">
                <MdMarkEmailRead className="mr-2" />
                <span>mohammed@brothersitplc.com</span>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">
              Subscribe to our Newsletter
            </h3>
            <form className="flex h-12 relative">
              <input
                type="email"
                className="w-full pl-4 py-2 text-gray-900    rounded-full focus:outline-none focus:ring-2 pr-[7rem] focus:ring-indigo-500 text-secondary-dark"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                className="px-4 py-2  absolute top-0 bottom-0 -right-[0.125rem] rounded-full bg-green text-light  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex items-center justify-between flex-col sm:flex-row gap-4">
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-green hover:text-gray-300"
                onClick={notify}
              >
                <CiFacebook className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-green hover:text-gray-300"
                onClick={notify}
              >
                <FaXTwitter className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-green hover:text-gray-300"
                onClick={notify}
              >
                <CiLinkedin className="w-6 h-6" />
              </Link>
            </div>
            <p className="text-sm">
              &copy; 2012-
              {new Date().getFullYear()} Brothers It PLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
