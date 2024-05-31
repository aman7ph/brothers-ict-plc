import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Products from "../components/Products";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";

function LandingPage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <Partners />
      <Testimonials />
    </>
  );
}

export default LandingPage;
