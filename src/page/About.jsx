import React from "react";
import Navbar from "../components/Navbar";
// import aboutimg from "../assets/about-us.svg";
import Footer from "../components/Footer";
import Vision from "../components/Vision";
import Mission from "../components/Mission";
import Corevalues from "../components/Corevalues";

function About() {
    return (
      <>
        <Navbar />
        <div id="about" className="my-12">
      <h3 className="font-bold text-2xl text-center">About our company</h3>
      <div className="flex gap-12 items-center justify-between w-full p-6 h-[900px] animate-fade-in">
             {/* <div className="w-1/2 h-full">
               <img className="h-full w-full object-contain " src={aboutimg} alt="img" />
             </div> */}
        <div className="w-screen ">
          <p className="px-12">
          Brothers IT Private Limited Company 
          is 
          a business firm established in 
          October 
          2012G.C. 
          It 
          started 
          passionately about making people 
          and technology meet on common 
          ground. We select our brands and 
          product alignment carefully to bring 
          best of breed technology to your 
          business. We test, break, fix and 
          implement every IT technology within 
          our own environment before we bring 
          it to the market. This way you are 
          assured at all time of our best 
          intentions and ability to deliver on the 
          promises we make.  
          We are constantly on the lookout for new IT technologies that are rapidly 
          shifting and offering to our esteemed customers. If you want such a change 
          in your lifestyle then please do not hesitate to contact Brothers IT. Moreover, 
          providing services to customers requires unique skills beyond those of 
          normal educational knowledge and talent. Accordingly, a unique customer 
          that cares for a continuous improvement on technology- oriented areas or 
          to swift to IT technology empowerment Brothers IT plc is your place. We 
          offer a full range of IT & Related services such as Design and implement 
          LAN/WAN Network infrastructure & sale IT related products, give technical 
          support, and import updated IT solutions that benefit for any businesses 
          and peoples. We also aspire to expand on other business sector such as 
          export on injera and other home cultural food to different countries.         
          </p>
          <br />
          <p className="px-12">
          Brothers IT Private Limited Company 
          is 
          a business firm established in 
          October 
          2012G.C. 
          It 
          started 
          passionately about making people 
          and technology meet on common 
          ground. We select our brands and 
          product alignment carefully to bring 
          best of breed technology to your 
          business. We test, break, fix and 
          implement every IT technology within 
          our own environment before we bring 
          it to the market. This way you are 
          assured at all time of our best 
          intentions and ability to deliver on the 
          promises we make.  
          We are constantly on the lookout for new IT technologies that are rapidly 
          shifting and offering to our esteemed customers. If you want such a change 
          in your lifestyle then please do not hesitate to contact Brothers IT. Moreover, 
          providing services to customers requires unique skills beyond those of 
          normal educational knowledge and talent. Accordingly, a unique customer 
          that cares for a continuous improvement on technology- oriented areas or 
          to swift to IT technology empowerment Brothers IT plc is your place. We 
          offer a full range of IT & Related services such as Design and implement 
          LAN/WAN Network infrastructure & sale IT related products, give technical 
          support, and import updated IT solutions that benefit for any businesses 
          and peoples. We also aspire to expand on other business sector such as 
          export on injera and other home cultural food to different countries.         
          </p>
          <br/>
          <p></p>
          <div className="m-4 flex items-center ">
          </div>
        </div>
      </div>
    </div>
    < Vision />
    < Mission />
    < Corevalues />
    < Footer />
      </>
    )
}

export default  About;