import SoftwareDevelopment from "../assets/images/software-development.webp";
import consultingimg from "../assets/consulting.svg";
import developeimg from "../assets/develope.svg";
import networkimg from "../assets/network.svg";
import Card from "../components/Card/Card";

const Service = () => {
  const services = [
    {
      title: "UI/UX",
      image: consultingimg,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, aut quas praesentium asperiores assumenda, impedit ad voluptatibus, iusto eos ratione explicabo.",
    },
    {
      title: "Software Design",
      image: developeimg,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, aut quas praesentium asperiores assumenda, impedit ad voluptatibus, iusto eos ratione explicabo.",
    },
    {
      title: "Software Implementation",
      image: networkimg,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, aut quas praesentium asperiores assumenda, impedit ad voluptatibus, iusto eos ratione explicabo.",
    },
  ];

  return (
    <main className="flex flex-col gap-12">
      <section className="flex md:flex-row py-9 lg:justify-between  flex-col  items-center  md:bg-gradient-to-l bg-gradient-to-t  to-[#020024] via-[#020023] from-[#a21ca0] px-[5%] gap-16 ">
        <div className="flex flex-col gap-8 flex-1 md:w-1/2">
          <h1 className="xl:font-extrabold  font-bold sm:text-2xl md:text-3xl xl:text-5xl text-primary-3">
            Software Development
          </h1>
          <span className=" text-light  text-justify    font-medium xl:text-lg ">
            Brothers is a reputable firm in delivering various types of software
            development services based on both liners as well as dynamic
            specifications from our clients following all the industry standards
            and procedures. Our team has extensive experience in large-scale
            service cloud platforms that involve multi-stakeholders both in the
            development and operation period. We also offer initiation, upgrade,
            and modification of existing platforms following guidelines from our
            clients or ones proposed by us. In addition, we implement enterprise
            solutions platforms both as self-hosted and following software as a
            service model on a subscription basis based on the automation scale
            needs of our clients.
          </span>
        </div>
        <div className="flex-1 md:w-1/2 flex items-center justify-end  h-[30rem]">
          <img
            src={SoftwareDevelopment}
            alt="software development"
            className="object-contain object-center h-full "></img>
        </div>
      </section>

      <section className="w-full flex flex-col">
        <div className="w-full relative flex flex-col mb-4 ">
          <span className=" border border-primary/20 "></span>
          <span className="absolute left-[45%] px-2 -top-[0.6rem] z-20 bg-light text-center text-sm font-medium">
            Our Service Includes
          </span>
        </div>
        <div className="flex gap-5 w-full flex-wrap items-center justify-center pt-5 pb-10">
          {services.map((service) => (
            <div
              className="flex justify-center  items-center"
              key={service.title}>
              <Card
                title={service.title}
                image={service.image}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Service;
