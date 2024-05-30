import {} from "react-icons/ai";
import {MdMarkEmailRead} from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const Footer = () => {
  return (
    <footer
      className=" text-gray-300 py-12"
      style={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 41%, rgba(162,28,160,1) 87%)",
      }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-primary-4">
        <div className="flex justify-between flex-wrap ">
          {/* Newsletter Subscription */}

          {/* Footer Navigation */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white">
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
                <IoLocation className="mr-2"/>
                <span>Wastina Mega Commercial Center 8th floor</span>
              </li>
              <li className="flex items-center">
                < FaPhone className="mr-2"/>
                <span>+251-118-696-861</span>
              </li>
              <li className="flex items-center">
                < MdMarkEmailRead className="mr-2"/>
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
                className="px-4 py-2  absolute top-0 bottom-0 -right-[0.125rem] rounded-full bg-green text-light  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex items-center justify-between">
            <p className="text-sm">&copy; 2012-
              {new Date().getFullYear()}  Brothers It PLC. All rights
              reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-300">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M24 4.56v15.1c0 2.5-1.83 4.44-4.43 4.44h-15.1c-2.5 0-4.43-1.94-4.43-4.44v-15.1c0-2.5 1.93-4.43 4.43-4.43h15.1c2.5 0 4.43 1.93 4.43 4.43zm-4.97 7.88c.06.13.06.27.06.41 0 4.31-3.28 9.29-9.29 9.29-1.86 0-3.59-.54-5.06-1.46.27.03.54.04.81.04 1.54 0 2.97-.52 4.1-1.39-1.44-.03-2.66-.97-3.08-2.26.2.04.41.07.62.07.3 0 .6-.04.88-.1-1.5-.3-2.63-1.63-2.63-3.23v-.04c.44.25.94.39 1.48.41-.88-.59-1.46-1.6-1.46-2.74 0-.6.16-1.17.44-1.66 1.59 1.94 3.96 3.21 6.63 3.34-.06-.24-.09-.49-.09-.74 0-1.81 1.46-3.28 3.28-3.28.94 0 1.79.39 2.39 1.02.74-.14 1.44-.42 2.06-.8-.25.77-.78 1.43-1.47 1.85.66-.07 1.29-.25 1.87-.51-.43.66-.97 1.24-1.59 1.7z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-300">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M22.23 5.924c-.807.36-1.67.603-2.57.713a4.487 4.487 0 001.967-2.47c-.885.523-1.864.902-2.91 1.11a4.482 4.482 0 00-7.637 4.09c-3.72-.186-7.027-1.965-9.242-4.67a4.48 4.48 0 001.388 5.99c-.722-.023-1.4-.222-1.993-.55v.055a4.478 4.478 0 003.593 4.395c-.682.186-1.394.204-2.086.077a4.482 4.482 0 004.183 3.104 8.989 8.989 0 01-5.578 1.924c-.363 0-.723-.021-1.078-.063a12.71 12.71 0 006.897 2.022c8.276 0 12.798-6.856 12.798-12.798 0-.194-.004-.387-.013-.58a9.134 9.134 0 002.244-2.326z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-300">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M19.5 0h-15C1.96 0 0 1.96 0 4.5v15c0 2.54 1.96 4.5 4.5 4.5h15c2.54 0 4.5-1.96 4.5-4.5v-15C24 1.96 22.04 0 19.5 0zm-7.35 18.55h-2.3v-6.95h2.3v6.95zm-1.15-7.89a1.33 1.33 0 11-.001-2.66 1.33 1.33 0 010 2.66zm7.89 7.89h-2.3v-3.64c0-.87-.01-2-1.22-2-1.22 0-1.41.95-1.41 1.93v3.71h-2.3v-6.95h2.21v.95h.03c.31-.6 1.07-1.23 2.21-1.23 2.37 0 2.81 1.56 2.81 3.58v3.65z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;