import SoftwareDevelopment from "../assets/images/software-development.webp";

const Service = () => {
  return (
    <main className="flex flex-col gap-12">
      <section className="flex md:flex-row  flex-col  items-center  md:bg-gradient-to-l bg-gradient-to-t  to-[#020024] from-[#a21ca0] px-[5%] gap-16 ">
        <div className="flex flex-col gap-8 flex-1">
          <h1 className="xl:font-extrabold  font-bold sm:text-2xl md:text-3xl xl:text-5xl text-primary-3">
            Software Development
          </h1>
          <span className=" text-light  text-pretty    font-medium xl:text-xl ">
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
        <div className="flex-1  h-[30rem]">
          <img
            src={SoftwareDevelopment}
            alt="software development"
            className="object-contain object-center h-full "></img>
        </div>
      </section>

      <section className="">
        <hr className="bg-primary border-primary"></hr>
      </section>
    </main>
  );
};

export default Service;
