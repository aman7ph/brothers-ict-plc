import React from "react";
import Navbar from "../components/Navbar";
import LandingPage from "../page/LandingPage";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

function GeneralLayout() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Contact />
      <Footer />
    </div>
  );
}

export default GeneralLayout;
