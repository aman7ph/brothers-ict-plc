import React from "react";
import Navbar from "../components/Navbar";
import LandingPage from "../pages/LandingPage";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { Outlet } from "react-router-dom";
import ContactPage from "../components/Contact";

function GeneralLayout() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Navbar />
      <Outlet></Outlet>
      <ContactPage />
      <Footer />
    </div>
  );
}

export default GeneralLayout;
