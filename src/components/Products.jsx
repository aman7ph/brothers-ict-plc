import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";
import SwiperCore from "swiper";
SwiperCore.use([Autoplay]);

import serverImage from "../assets/products/server.png";
import networkingImage from "../assets/products/routher.png";
import computersImage from "../assets/products/computer.png";
import printerImage from "../assets/products/printer.png";
import toolImage from "../assets/products/tool.png";
import antiImage from "../assets/products/antivirus.png";
import PBXImage from "../assets/products/PBX.png";
import RacksImage from "../assets/products/Racks.png";
import CameraImage from "../assets/products/Camera.png";
import SQLServerImage from "../assets/products/SQLServer.png";
import ToolkitImage from "../assets/products/Toolkit.png";
import SoftwareImage from "../assets/products/Software.png";

import Card from "./Card/Card";

const products = [
  {
    title: "Different Purpose Servers",
    image: serverImage,
    description:
      "We offer servers for various needs including web servers, database servers, and application servers.",
  },
  {
    title: "Different Networking Devices",
    image: networkingImage,
    description:
      "We provide networking devices such as routers, switches, and firewalls for secure and reliable connectivity.",
  },
  {
    title: "Software Development and Implementation",
    image: SoftwareImage,
    description:
      "We specialize in software development and implementation services, offering tailored solutions to meet your specific business needs.",
  },
  {
    title: "Laptop and Desktop Computers",
    image: computersImage,
    description:
      "We supply a range of laptops and desktop computers suitable for both office tasks and high-demand applications.",
  },
  {
    title:
      "Printer, Photocopy Machine, Scanner, and Related IT Office Equipment",
    image: printerImage,
    description:
      "We offer printers, photocopy machines, scanners, and other IT equipment for office use.",
  },
  {
    title: "Any Network Materials & Equipment",
    image: toolImage,
    description:
      "We provide network materials and equipment including cables, connectors, and patch panels.",
  },
  {
    title: "Antivirus Protection",
    image: antiImage,
    description:
      "We provide antivirus protection to safeguard systems from malware, ransomware, and other threats.",
  },
  {
    title: "PBX",
    image: PBXImage,
    description:
      "We offer PBX systems with features like call routing, voicemail, and conferencing for improved communication.",
  },
  {
    title: "Network Server Racks",
    image: RacksImage,
    description:
      "We supply server racks to organize and secure servers and other networking equipment.",
  },
  {
    title: "Security Camera and Its Accessories",
    image: CameraImage,
    description:
      "We provide security cameras and accessories for monitoring and protecting premises.",
  },
  {
    title: "SQL Server, Windows Server",
    image: SQLServerImage,
    description:
      "We offer SQL Server and Windows Server solutions for database management and application hosting.",
  },
  {
    title: "Digital Signage, Video Conference Toolkit",
    image: ToolkitImage,
    description:
      "We provide digital signage solutions and video conference toolkits for effective communication and engagement.",
  },
];

function Products() {
  return (
    <section id="products" className="my-12 h-[800px] p-[5%]">
      <h3 className="font-bold text-2xl text-center text-black p-12">
        Products we Serve
      </h3>
      <div className="flex animate-fade-in">
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
          {products.map((product, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <Card {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Products;
