import React from "react";
import aboutimg from "../assets/about-us.svg";
import Vision from "../components/Vision";
import Mission from "../components/Mission";
import Corevalues from "../components/Corevalues";

function About() {
  return (
    <>
      <div
        id="about"
        className="mb-12 px-[5%] text-white"
        style={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 41%, rgba(162,28,160,1) 87%)",
        }}
      >
        <h3 className="font-bold text-2xl mb-5 text-center">Brothers it plc</h3>
        <div className=" text-justify  my-12 pb-24 ">
          {/* <img  className="float-left h-[12rem] w-80" alt="about image" src={aboutimg} /> */}
          <p>
            Brothers IT Private Limited Company is a business firm established
            in October 2012G.C. It started passionately about making people and
            technology meet on common ground. We select our brands and product
            alignment carefully to bring best of breed technology to your
            business. We test, break, fix and implement every IT technology
            within our own environment before we bring it to the market. This
            way you are assured at all time of our best intentions and ability
            to deliver on the promises we make. We are constantly on the lookout
            for new IT technologies that are rapidly shifting and offering to
            our esteemed customers. If you want such a change in your lifestyle
            then please do not hesitate to contact Brothers IT. Moreover,
            providing services to customers requires unique skills beyond those
            of normal educational knowledge and talent. Accordingly, a unique
            customer that cares for a continuous improvement on technology-
            oriented areas or to swift to IT technology empowerment Brothers IT
            plc is your place. We offer a full range of IT & Related services
            such as Design and implement LAN/WAN Network infrastructure & sale
            IT related products, give technical support, and import updated IT
            solutions that benefit for any businesses and peoples. We also
            aspire to expand on other business sector such as export on injera
            and other home cultural food to different countries.{" "}
          </p>
          <br />
          <p>
            {" "}
            Brothers IT Private Limited Company is a business firm established
            in October 2012G.C. It started passionately about making people and
            technology meet on common ground. We select our brands and product
            alignment carefully to bring best of breed technology to your
            business. We test, break, fix and implement every IT technology
            within our own environment before we bring it to the market. This
            way you are assured at all time of our best intentions and ability
            to deliver on the promises we make. We are constantly on the lookout
            for new IT technologies that are rapidly shifting and offering to
            our esteemed customers. If you want such a change in your lifestyle
            then please do not hesitate to contact Brothers IT. Moreover,
            providing services to customers requires unique skills beyond those
            of normal educational knowledge and talent. Accordingly, a unique
            customer that cares for a continuous improvement on technology-
            oriented areas or to swift to IT technology empowerment Brothers IT
            plc is your place. We offer a full range of IT & Related services
            such as Design and implement LAN/WAN Network infrastructure & sale
            IT related products, give technical support, and import updated IT
            solutions that benefit for any businesses and peoples. We also
            aspire to expand on other business sector such as export on injera
            and other home cultural food to different countries.{" "}
          </p>
        </div>
      </div>
      <Vision />
      <Mission />
      <Corevalues />
    </>
  );
}

export default About;
