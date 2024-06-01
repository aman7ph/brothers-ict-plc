import React from "react";

import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";
import SwiperCore from "swiper";
SwiperCore.use([Autoplay]);

import AddisAbabau from "../assets/testimonials/AddisAbabau.png";
import Ambassador from "../assets/testimonials/Ambassador.png";
import DARO from "../assets/testimonials/DARO.jpg";
import EARI from "../assets/testimonials/EARI.jpg";
import ECAA from "../assets/testimonials/ECAA.png";
import EPA from "../assets/testimonials/EPA.jpg";
import EPHI from "../assets/testimonials/EpHI.png";
import FPC from "../assets/testimonials/FPC.jpg";
import HMMBI from "../assets/testimonials/HMMBI.png";
import Hagbes from "../assets/testimonials/Hagbes.jpeg";
import INSA from "../assets/testimonials/INSA.jpg";
import MIDI from "../assets/testimonials/MlDI.jpg";
import ORCE from "../assets/testimonials/ORCE.jpeg";
import PPPDS from "../assets/testimonials/PPPDS.png";
import SRSBIT from "../assets/testimonials/SRSBIT.jpg";
import TAC from "../assets/testimonials/TAC.png";
import THMB from "../assets/testimonials/THMB.jpeg";
import WellegaUniversity from "../assets/testimonials/WellegaUniversity.jpg";
import cissa from "../assets/testimonials/cissa.png";
import ethiotelecom from "../assets/testimonials/ethiotelecom.png";
import mali from "../assets/testimonials/mali.jpg";
import WogagenBank from "../assets/testimonials/WogagenBank.png";

import TestimonialsCard from "./Card/TestimonialsCard";

const testimonials = [
  {
    title: "Mali Embassy (Government)",
    image: mali,
    description:
      "At the Mali Embassy, our company provided video conferencing capabilities, video surveillance systems, IP telephone systems for all office spaces, and expansion services to ensure seamless communication and security across the embassy.",
  },
  {
    title: "CISSA (Government)",
    image: cissa,
    description:
      "The Committee of Intelligence & Security Service of Africa received LAN installation, Wi-Fi setup, and PBX system implementation from our company to create a robust and secure network infrastructure for their operations.",
  },
  {
    title: "MIDI (Government)",
    image: MIDI,
    description:
      "The Metal Industry Development Institute implemented a comprehensive LAN/WAN system with assistance from our company, enhancing their internal network capabilities and ensuring efficient communication and data transfer.",
  },
  {
    title: "DARO (Government)",
    image: DARO,
    description:
      "DARO (Document Authentication & Registration Organization) engaged our company's services for PBX installation, telephone line maintenance, and generator maintenance and service to ensure uninterrupted communication and power supply for their operations.",
  },
  {
    title: "INSA (Government)",
    image: INSA,
    description:
      "INSA (Information & Network Security Agency) was supplied with high-quality network printers by our company to enhance their printing capabilities and support their network security operations.",
  },
  {
    title: "HMMBI (Government)",
    image: HMMBI,
    description:
      "HMMBI (Hibret Manufacturing and Machine Building Industry) received comprehensive antivirus protection, advanced firewalls, Cisco switches, and additional products from our company to bolster their network security and operational efficiency.",
  },
  {
    title: "THMB ENGINEERING PLC (Private)",
    image: THMB,
    description:
      "THMB ENGINEERING PLC acquired servers, Cisco switches, access points, and other essential network components from our company, ensuring a robust and efficient IT infrastructure for their engineering operations.",
  },
  {
    title: "ORCE (Government)",
    image: ORCE,
    description:
      "ORCE (Oromia Road Construction Enterprise) received Cisco switches and UTP cables from our company to enhance their network infrastructure and support their road construction projects.",
  },
  {
    title: "Ambassador Hotel (Private)",
    image: Ambassador,
    description:
      "Ambassador Hotel (Private) benefited from our company's Wi-Fi installation and maintenance services, ensuring reliable and high-speed wireless connectivity for their guests throughout the hotel premises.",
  },
  {
    title: "HMMMBI (Government)",
    image: HMMBI,
    description:
      "Hibret Metal Manufacturing Machine Building Industry received Kaspersky antivirus protection, Cisco firewall installation, and other essential network materials from our company to ensure robust security and efficient network operations.",
  },
  {
    title: "Hagbes P.L.C (Private)",
    image: Hagbes,
    description:
      "Hagbes P.L.C utilized IT consultancy services from our company, gaining valuable insights and recommendations to enhance their IT infrastructure and operations.",
  },
  {
    title: "FPC (Government)",
    image: FPC,
    description:
      "The Federal Police Commission was provided with Kaspersky antivirus software, Cisco wireless access points (WAP), and other essential materials by our company to ensure robust network security and efficient communication.",
  },
  {
    title: "AAU (Government)",
    image: AddisAbabau,
    description:
      "The AAU Natural Science College received a high-performance Dell server from our company, enhancing their computational capabilities and supporting their scientific research and educational activities.",
  },
  {
    title: "TAC (Private)",
    image: TAC,
    description:
      "Teklebirhane Ambaye Construction (Private) was provided with a Cisco router and media converter by our company, ensuring reliable network connectivity and efficient data transfer for their construction projects.",
  },
  {
    title: "PPPDS (Government)",
    image: PPPDS,
    description:
      "PPPDS (Public Procurement & Property Disposal Service) benefited from network installation and configuration services provided by our company, ensuring a robust and efficient network infrastructure to support their procurement and property disposal operations.",
  },
  {
    title: "ECAA (Government)",
    image: ECAA,
    description:
      "The Ethiopian Civil Aviation Authority received comprehensive network installation, configuration services, and Cisco switch supply from our company to ensure reliable and secure network operations for their aviation activities.",
  },
  {
    title: "EPHI (Government)",
    image: EPHI,
    description:
      "The Ethiopian Public Health Institute was supplied with advanced IT infrastructure by our company, enhancing their data management and communication capabilities to support their public health initiatives.",
  },
  {
    title: "Wegagen Bank (Private)",
    image: WogagenBank,
    description:
      "Wegagen Bank HQ with Alta Computer PLC received a comprehensive datacenter decoration system, civil work services, and power cable and panel delivery from our company to ensure a state-of-the-art datacenter to support their banking operations.",
  },
  {
    title: "Ethio Telecom (Government)",
    image: ethiotelecom,
    description:
      "Ethio Telecom engaged our company for various services, including the supply of different capacity UPS for network devices, Cisco routers, a 4K 86” digital display project, video conference supply, installation and training, router and switch supply, installation and training, Trend Micro Deep Security license renewal and premium support, and Kaspersky Endpoint Security license for Business Advanced for three years, ensuring a comprehensive and secure network infrastructure.",
  },
  {
    title: "SRSBIT (Government)",
    image: SRSBIT,
    description:
      "The Somali Regional State Bureau of Innovation & Technology received datacenter renovation and maintenance services from our company, ensuring a modern and efficient datacenter to support their technological innovations.",
  },
  {
    title: "Wellega University (Government)",
    image: WellegaUniversity,
    description:
      "Wellega University benefited from our company's full campus network infrastructure installation services, ensuring reliable and high-speed connectivity across the university campus to support their educational and administrative activities.",
  },
  {
    title: "Ethiopian Press Agency (Government)",
    image: EPA,
    description:
      "The Ethiopian Press Agency received high-quality products from our company including printers, scanners, and CDs to support their publishing and documentation processes.",
  },
  {
    title: "EARI (Government)",
    image: EARI,
    description:
      "The Ethiopian Agriculture Research Institute was supplied with scanners, external hard disks, and access points by our company to enhance their research capabilities and data management.",
  },
];

function Testimonials() {
  return (
    <div>
      <div id="testimonials" className="my-12 h-[800px] py-12 px-[5%]">
        <h3 className="font-bold text-2xl text-center text-black p-12">
          Testimon of our Services
        </h3>
        <div className="flex items-center    gap-12 justify-center animate-fade-in">
          <Swiper
            modules={[Autoplay, A11y]}
            breakpoints={{
              0: {
                spaceBetween: 50,
                slidesPerView: 1,
              },
              640: {
                spaceBetween: 20,
                slidesPerView: 2,
              },
              1024: {
                spaceBetween: 25,
                slidesPerView: 3,
              },
              1280: {
                spaceBetween: 30,
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
            }}
            loop={true}
            longSwipes={true}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                <TestimonialsCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
