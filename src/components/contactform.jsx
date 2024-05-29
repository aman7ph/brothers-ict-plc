import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
} from "react-icons/sl";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";
import { PiTelegramLogoLight } from "react-icons/pi";

const Footer = () => {
  const [subscribeFormData, setSubscribeFormData] = useState({
    email: "",
  });
  const [contactFormData, setContactFormData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateSubscribeFormData = () => {
    let errors = {};
    let isValid = true;

    if (!subscribeFormData.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(subscribeFormData.email)) {
      errors.email = "Invalid email format";
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  };
  const validateContactFormData = () => {
    let errors = {};
    let isValid = true;

    if (!contactFormData.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(contactFormData.email)) {
      errors.email = "Invalid email format";
      isValid = false;
    }

    if (!contactFormData.name) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!contactFormData.phone) {
      errors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(contactFormData.phone)) {
      errors.phone = "Invalid phone number format";
      isValid = false;
    }

    if (!contactFormData.message) {
      errors.message = "Message is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleChangeForSubscription = (e) => {
    const { name, value } = e.target;
    setSubscribeFormData({
      ...subscribeFormData,
      [name]: value,
    });
  };
  const handleChangeForContact = (e) => {
    const { name, value } = e.target;
    setContactFormData({
      ...contactFormData,
      [name]: value,
    });
  };
  const handleSubscription = () => {
    console.log(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form data submitted:", contactFormData);
      setErrors({});
    }
  };
  return (
    <div className="border-t p-12">
      <div className="flex flex-wrap justify-between gap-12  sm:flex-row">
        <div className="flex flex-col justify-center gap-6 p-4">
          <Link to="/">
            <img src={logo} alt="keray" className="w-30 h-5" />
          </Link>

          <div className="flex flex-col gap-4 text-lg">
            <div className="flex items-center gap-4 ">
              <CiLocationOn className=" text-green-500 hover:text-green-700" />
              <p>piassa,enat blg</p>
            </div>

            <div className="flex items-center gap-4 ">
              <CiPhone className=" text-green-500 hover:text-green-700" />
              <Link to="tel:994">+251-912-345-6789</Link>
            </div>
            <div className="flex items-center gap-4 ">
              <MdOutlineAttachEmail className=" text-green-500 hover:text-green-700" />
              <Link to="mailto:marakiBetoch@gmail.com">
                brothers.ict.info@gmail.com
              </Link>
            </div>
          </div>
          <div className=" text-lg ">
            <h3 className="font-semibold">follow us on</h3>
            <div className="my-3 flex gap-3">
              <Link to="/">
                <SlSocialFacebook className="m-3 text-green-500 hover:text-green-700 hover:scale-110 transition duration-200" />
              </Link>
              <Link to="/">
                <SlSocialInstagram className="m-3 text-green-500 hover:text-green-700 hover:scale-110 transition duration-200" />
              </Link>
              <Link to="/">
                <SlSocialTwitter className="m-3 text-green-500 hover:text-green-700 hover:scale-110 transition duration-200" />{" "}
              </Link>
              <Link to="/">
                <PiTelegramLogoLight className="m-3 text-green-500 hover:text-green-700 hover:scale-110 transition duration-200" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-[300px] flex-col">
          <h3 className="font-semibold">Contact us</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 mt-5 w-full">
              <p className="my-2">Email</p>
              <input
                type="email"
                name="email"
                className={`h-12 w-full rounded border border-fuchsia-300 px-4 text-sm outline-none focus:border-green-700 ${
                  errors.email && "border-red-500"
                }`}
                placeholder="Please enter your email"
                value={contactFormData.email}
                onChange={handleChangeForContact}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="mb-4 w-full">
              <p className="my-2">Name</p>
              <input
                type="text"
                name="name"
                className={`h-12 w-full rounded border border-fuchsia-300 px-4 text-sm outline-none focus:border-green-700 ${
                  errors.name && "border-red-500"
                }`}
                placeholder="Please enter your name"
                value={contactFormData.name}
                onChange={handleChangeForContact}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="mb-4 w-full">
              <p className="my-2">Phone Number</p>
              <input
                type="tel"
                name="phone"
                className={`h-12 w-full rounded border border-fuchsia-300 px-4 text-sm outline-none focus:border-green-700 ${
                  errors.phone && "border-red-500"
                }`}
                placeholder="Please enter your phone number"
                value={contactFormData.phone}
                onChange={handleChangeForContact}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            <div className="mb-4 w-full">
              <p className="my-2">Message</p>
              <textarea
                name="message"
                className={`h-24 w-full rounded border border-fuchsia-300 px-4 text-sm outline-none focus:border-green-700 ${
                  errors.message && "border-red-500"
                }`}
                placeholder="Please enter your message"
                value={contactFormData.message}
                onChange={handleChangeForContact}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <div className="mb-4 w-full">
              <button
                type="submit"
                className="w-full rounded bg-green-400 p-4 text-sm text-white hover:bg-green-500 hover:scale-110 transition duration-200"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="flex w-[300px] justify-center flex-col">
          <h3 className="font-semibold">Join Our Newslatter</h3>
          <form>
            <div className="mb-4 mt-5 w-full">
              <p className="my-2">Email</p>
              <input
                type="email"
                name="email"
                className={`h-12 w-full rounded border border-fuchsia-300 px-4 text-sm outline-none focus:border-green-700 ${
                  errors.email && "border-red-500"
                }`}
                placeholder="please enter your email"
                value={subscribeFormData.email}
                onChange={handleChangeForSubscription}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="mb-4 w-full">
              <button
                type="submit"
                className="w-full rounded bg-green-400 p-4 text-sm text-white  hover:bg-green-500 hover:scale-110 transition duration-200"
              >
                subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
