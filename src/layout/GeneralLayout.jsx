import React from "react";
import Navbar from "../components/Navbar";
import LandingPage from "../page/LandingPage";
import Footer from "../components/Footer";

function GeneralLayout() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default GeneralLayout;
