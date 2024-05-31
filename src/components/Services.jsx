import React from "react";
import cloud from "../assets/services/cloud.svg";
import consulting from "../assets/services/consulting.svg";
import develope from "../assets/services/develope.svg";
import iaas from "../assets/services/iaas.svg";
import network from "../assets/services/network.svg";
import router from "../assets/services/router.svg";
import shield from "../assets/services/shield.svg";
import uc from "../assets/services/uc.svg";
import ServiceListCard from "./Card/ServiceListCard";
import { Link } from "react-router-dom";
import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";
import SwiperCore from "swiper";
SwiperCore.use([Autoplay]);
const services = [
  {
    category: "network",
    title: "Network Infrastructure Services",
    image: network,
    description:
      "Network services design, install, and secure your network (wired/wireless) for optimal performance. They then monitor it to fix issues and keep things running smoothly. ",
  },
  {
    category: "cloud",
    title: "Cloud and Data Center Services",
    image: cloud,
    description:
      "We offer cloud migration & management (optimize costs, manage workloads). We also provide colocation (data center space, power, cooling) & disaster recovery planning.",
  },
  {
    category: "uc",
    title: "Unified Communications (UC)",
    image: uc,
    description:
      "We offer unified communications: VoIP for efficient calls, video conferencing platforms for virtual meetings, and collaboration tools for seamless teamwork. ",
  },
  {
    category: "security",
    title: "Security Services",
    image: shield,
    description:
      "We provide security services like endpoint protection for devices, security audits to improve your defenses, and SIEM for continuous security monitoring. ",
  },
  {
    category: "iaas",
    title: "Infrastructure as a Service (IaaS)",
    image: iaas,
    description:
      "We offer IaaS including server hosting, scalable storage solutions, and virtual machine/container setup for your infrastructure needs. ",
  },
  {
    category: "equipment",
    title: "Network Hardware and Equipment",
    image: router,
    description:
      "We provide network hardware (switches, routers, access points) and security (firewalls, VPNs) to build and secure your wired/wireless network. ",
  },
  {
    category: "software",
    title: "Software Development",
    image: develope,
    description:
      "We offer web, mobile app development, and custom software (ERP, CRM) to meet your business needs, crafting user-friendly applications and websites.",
  },
  {
    category: "consultancy",
    title: "ICT Solutions and Consultancy",
    image: consulting,
    description:
      "assisting businesses with network infrastructure design, cloud services, software development, and cybersecurity",
  },
];

function Services() {
  return (
    <div
      id="services"
      className="my-12 min-h-[20rem] p-12"
      style={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 41%, rgba(162,28,160,1) 87%)",
      }}
    >
      <h3 className="font-bold text-2xl text-center text-white p-12">
        Services we give
      </h3>

      <div className="flex flex-wrap items-center gap-12  justify-center animate-fade-in">
        <Swiper
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          loop={true}
          longSwipes={true}
          className="py-12"
        >
          {services.map((service, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <ServiceListCard {...service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Services;
