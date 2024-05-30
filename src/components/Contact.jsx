import React from 'react';
import {MdMarkEmailRead} from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-8">
        {/* Contact Information */}
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center md:text-left">
            Contact Information
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
            <MdMarkEmailRead className="mr-2"/>
              <span className="text-gray-600">mohammed@brothersitplc.com</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-2"/>
              <span className="text-gray-600">+251-118-696-861</span>
            </div>
            <div className="flex items-center">
              <IoLocation className="mr-2"/>
              <span className="text-gray-600">Wastina Mega Commercial Center 8th floor</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600">Follow us on social media:</span>
            </div>
            <div className="flex space-x-4">
            <FaLinkedin />
            <IoLogoFacebook />
            <FaTelegramPlane />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center md:text-left">
            Contact Us
          </h2>
          <form className="space-y-6" action="#" method="POST">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input id="name" name="name" type="text" required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input id="email" name="email" type="email" required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input id="subject" name="subject" type="text" required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" rows="4" required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div>
              <button type="submit"
                className="group relative bg-purple-600 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
