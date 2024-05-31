import SoftwareDevelopment from "../assets/images/software-development.webp";
import ServiceCard from "../components/Card/ServiceCard";
import { useParams } from "react-router-dom";

import cloud from "../assets/services/cloud.svg";
import consulting from "../assets/services/consulting.svg";
import develope from "../assets/services/develope.svg";
import iaas from "../assets/services/iaas.svg";
import network from "../assets/services/network.svg";
import router from "../assets/services/router.svg";
import shield from "../assets/services/shield.svg";
import uc from "../assets/services/uc.svg";

const services = [
  {
    title: "ICT Solutions and Consultancy",
    category: "consultancy",
    image: consulting,
    descriprion: `Brothers empowers businesses with a comprehensive suite of ICT Solutions and Consultancy. We design and implement robust network infrastructures, guide your cloud migration, and deliver innovative software development solutions, including web applications, mobile apps, and enterprise software. Additionally, our security expertise safeguards your data and network.`,
    detail: [
      {
        title: "Network Infrastructure Design",
        description:
          "Assisting businesses with designing network infrastructure to ensure optimal connectivity and performance.",
      },
      {
        title: "Cloud Services",
        description:
          "Providing consultancy and implementation services for cloud solutions.",
      },
      {
        title: "Software Development",
        description:
          "Offering software development services for tailor-made solutions.",
      },
      {
        title: "Cybersecurity",
        description:
          "Providing consultancy and solutions to enhance cybersecurity measures.",
      },
    ],
  },
  {
    title: "Software Development",
    category: "software",
    image: develope,
    descriprion: `Brothers delivers innovative Software Development solutions. We craft user-friendly web applications, captivating websites, and feature-rich mobile apps for iOS and Android.  Additionally, we offer custom and pre-built software solutions, including enterprise resource planning (ERP) systems and customer relationship management (CRM) software, to streamline your business processes`,
    detail: [
      {
        title: "Web Solutions",
        description:
          "Developing platforms, web portals, robust web applications, and captivating websites.",
      },
      {
        title: "Mobile App Development",
        description:
          "Creating user-friendly and feature-rich applications for both iOS and Android platforms.",
      },
      {
        title: "Software Development",
        description:
          "Providing tailor-made and out-of-the-box solutions, including enterprise resource planning (ERP) systems and customer relationship management (CRM) software.",
      },
    ],
  },
  {
    title: "Network Hardware and Equipment",
    category: "equipment",
    image: router,
    descriprion: `Brothers equips you with reliable Network Hardware and Equipment. We supply and configure network switches, routers, and access points for optimal connectivity. Our security expertise includes firewalls and VPNs to protect your network traffic. Additionally, we design and deploy robust wireless networks, ensuring a seamless user experience across your organization.`,
    detail: [
      {
        title: "Switches and Routers",
        description:
          "Supply and configure network switches, routers, and access points.",
      },
      {
        title: "Firewalls and VPNs",
        description:
          "Install security appliances to safeguard network traffic.",
      },
      {
        title: "Wireless Solutions",
        description: "Design and deploy wireless networks.",
      },
    ],
  },
  {
    title: "Infrastructure as a Service (IaaS)",
    category: "iaas",
    image: iaas,
    descriprion: `Brothers strengthens your IT foundation with Infrastructure as a Service (IaaS). We offer secure and scalable server hosting solutions, along with flexible storage options for your data. Our team can also set up virtual machines and containers to optimize your infrastructure needs.`,
    detail: [
      {
        title: "Server Hosting",
        description:
          "Offer server infrastructure for businesses that prefer managed hosting.",
      },
      {
        title: "Storage Solutions",
        description: "Provide scalable storage options for data management.",
      },
      {
        title: "Virtualization Services",
        description: "Set up virtual machines and containers.",
      },
    ],
  },
  {
    title: "Security Services",
    category: "security",
    image: shield,
    descriprion: `Brothers safeguards your business with comprehensive Security Services. We protect devices from malware and breaches with endpoint security. We also conduct security audits to identify vulnerabilities and recommend improvements. Additionally, our Security Information and Event Management (SIEM) continuously monitors and analyzes security events, ensuring your network remains protected.`,
    detail: [
      {
        title: "Endpoint Security",
        description:
          "Protect devices (laptops, smartphones) from malware and data breaches.",
      },
      {
        title: "Security Audits and Assessments",
        description:
          "Evaluate existing security measures and recommend improvements.",
      },
      {
        title: "Security Information and Event Management (SIEM)",
        description: "Monitor and analyze security events.",
      },
    ],
  },
  {
    title: "Unified Communications (UC)",
    category: "uc",
    image: uc,
    descriprion: `Brothers streamlines communication with Unified Communications (UC) solutions. We set up efficient VoIP systems, deploy video conferencing platforms like Zoom or Teams for virtual meetings, and provide collaboration tools for seamless communication and document sharing, keeping your team connected and productive.`,
    detail: [
      {
        title: "VoIP Solutions",
        description:
          "Set up Voice over IP (VoIP) systems for efficient communication.",
      },
      {
        title: "Video Conferencing",
        description:
          "Deploy platforms like Zoom or Microsoft Teams for virtual meetings.",
      },
      {
        title: "Collaboration Tools",
        description: "Enable seamless communication and document sharing.",
      },
    ],
  },

  {
    title: "Cloud and Data Center Services",
    category: "cloud",
    image: cloud,
    descriprion: `Brothers empowers your business with Cloud and Data Center Services. We guide your transition to the cloud, manage workloads, and optimize costs.  Our secure data centers offer colocation services, providing space, power, and cooling for your servers. Additionally, we develop disaster recovery plans to ensure data accessibility during unforeseen circumstances.  
`,
    detail: [
      {
        title: "Cloud Migration and Management",
        description:
          "Assist businesses in moving to the cloud, managing workloads, and optimizing costs.",
      },
      {
        title: "Colocation Services",
        description:
          "Provide space, power, and cooling for servers in data centers.",
      },
      {
        title: "Disaster Recovery Planning",
        description:
          "Develop strategies to ensure data availability during emergencies.",
      },
    ],
  },
  {
    title: "Network Infrastructure Services",
    category: "network",
    image: network,
    descriprion: `Brothers offers robust Network Infrastructure Services. We design and implement wired and wireless networks, ensuring optimal performance and connectivity. Our security expertise includes firewalls, intrusion detection systems, and access controls to safeguard your network. We continuously monitor network health, troubleshoot issues, and optimize performance for a reliable user experience.`,
    detail: [
      {
        title: "Network Design and Implementation",
        description:
          "Design and set up of wired and wireless networks, ensuring optimal connectivity and performance.",
      },
      {
        title: "Network Security",
        description:
          "Implement firewalls, intrusion detection systems (IDS), and access controls to protect against cyber threats.",
      },
      {
        title: "Network Monitoring and Management",
        description:
          "Continuously monitor network health, troubleshoot issues, and optimize performance.",
      },
    ],
  },
];

const ServiceDetail = () => {
  const { category } = useParams();
  const service = services.find((item) => item.category === category);

  return (
    <main className="flex flex-col gap-12">
      <section className="flex md:flex-row py-9 lg:justify-between  flex-col  items-center  md:bg-gradient-to-l bg-gradient-to-t  to-[#020024] via-[#020023] from-[#a21ca0] px-[5%] gap-16 ">
        <div className="flex flex-col gap-8 flex-1 md:w-1/2">
          <h1 className="xl:font-extrabold  font-bold sm:text-2xl md:text-3xl xl:text-5xl text-primary-3">
            {service.title}
          </h1>
          <span className=" text-light  text-justify    font-medium xl:text-lg ">
            {service.descriprion}
          </span>
        </div>
        <div className="flex-1 md:w-1/2 flex items-center justify-end  h-[30rem]">
          <img
            src={service.image}
            alt="software development"
            className="object-contain object-center h-full  sm:none"
          ></img>
        </div>
      </section>

      <section className="w-full flex flex-col">
        <div className="w-full relative flex flex-col mb-4 ">
          <span className=" border border-primary/20 "></span>
          <span className="absolute left-[50%] px-2 -top-[0.6rem] z-20 bg-light text-center text-sm font-medium">
            Our Service Includes
          </span>
        </div>
        <div className="flex gap-5 w-full flex-wrap items-center justify-center pt-5 pb-10">
          {service.detail.map((item) => (
            <div className="flex justify-center  items-center" key={item.title}>
              <ServiceCard {...item} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
