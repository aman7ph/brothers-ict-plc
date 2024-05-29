import React from 'react';

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
              <svg className="w-6 h-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a5.5 5.5 0 006.61 0L21 8m-18 8h18"></path>
              </svg>
              <span className="text-gray-600">info@yourcompany.com</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l9 6 9-6-9-6-9 6z"></path>
              </svg>
              <span className="text-gray-600">(123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-5m0 0L12 3m0 0L2 14m10-11v18"></path>
              </svg>
              <span className="text-gray-600">123 Your Street, Your City, Your State, 12345</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11h2a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2v-2M9 15H7a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v2"></path>
              </svg>
              <span className="text-gray-600">Follow us on social media:</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-indigo-500 hover:text-indigo-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.94 3.06a9.994 9.994 0 010 17.88c-5.4 3.14-11.2-1.66-8.06-7.06 2.06-3.56 6.66-4.24 9.3-1.6 1.94 1.94 1.94 5.08 0 7.02a1 1 0 11-1.42-1.42 3 3 0 000-4.24 5 5 0 00-7.07 0 5 5 0 000 7.07 9.994 9.994 0 01-5.24 2.9c-5.4 1.5-10.58-3.68-8.58-9.08A9.994 9.994 0 0118.94 3.06z"></path>
                </svg>
              </a>
              <a href="#" className="text-indigo-500 hover:text-indigo-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.8 9.2c.2-1.5-.2-2.8-.8-3.7-.9-1.4-2.6-2.2-4.5-2.2-2.6 0-4.7 2.1-4.7 4.7 0 .2 0 .3.1.5C4.8 8.5 2 6.3 1 3.5a4.58 4.58 0 00-.6 2.4c0 1.6.8 3 2 3.8-.7-.2-1.4-.4-2-.8v.1c0 2.3 1.7 4.3 3.9 4.7-.8.2-1.7.2-2.4 0 .7 2.2 2.6 3.7 4.8 3.7-1.8 1.5-4.1-1.5-4.1-3.8 0-1.8 1.4-3.2 3.2-3.2.9 0 1.7.3 2.4.9.7-.1 1.5-.3 2.2-.6-.2.7-.7 1.4-1.3 1.8.6 0 1.2-.2 1.8-.5-.4.6-1 1.2-1.6 1.7z"></path>
                </svg>
              </a>
              <a href="#" className="text-indigo-500 hover:text-indigo-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.2c-2.3 0-4.2 1.8-4.2 4.2 0 2.3 1.8 4.2 4.2 4.2s4.2-1.8 4.2-4.2c0-2.3-1.8-4.2-4.2-4.2zm-1.3 9.1H8.6c-.3 0-.6.2-.6.6v3.1c0 .3.2.6.6.6h2.1v-4.2zm8.4 4.2c.3 0 .6-.2.6-.6V10c0-.3-.2-.6-.6-.6H16v4.2h2.1zm-2.8-5.2c-.1 0-.2.1-.2.2v5.1c0 .1.1.2.2.2h1.3c.1 0 .2-.1.2-.2v-5.1c0-.1-.1-.2-.2-.2h-1.3zM6.8 10c.1 0 .2-.1.2-.2v-5.1c0-.1-.1-.2-.2-.2H5.5c-.1 0-.2.1-.2.2v5.1c0 .1.1.2.2.2h1.3zm0-6.3H4.3C2.8 3.7 1.8 5 1.8 6.5v10.7c0 1.5 1 2.8 2.5 2.8h12.5c1.5 0 2.5-1.3 2.5-2.8V6.5c0-1.5-1-2.8-2.5-2.8H6.8zm0 15.2c0 .5-.4.9-.9.9H4.3c-.5 0-.9-.4-.9-.9V7.1c0-.5.4-.9.9-.9h1.6c.5 0 .9.4.9.9v11.8zm8.4-.9c0 .5-.4.9-.9.9H7.6c-.5 0-.9-.4-.9-.9V7.1c0-.5.4-.9.9-.9h6.7c.5 0 .9.4.9.9v11.8z"></path>
                </svg>
              </a>
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
