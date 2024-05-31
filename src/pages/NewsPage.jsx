import React from "react";
import NewsCared from "../components/Card/NewsCared";

const news = [
  {
    title: "New Advances in Renewable Energy",
    publication_date: "2024-05-27",
    summary:
      "Scientists have developed a new type of solar panel that is significantly more efficient than current models, potentially revolutionizing the renewable energy industry.",
    content:
      "Researchers at the National Renewable Energy Laboratory have unveiled a breakthrough in solar panel technology. The new panels utilize a novel material that allows for a 30% increase in energy conversion efficiency compared to traditional silicon-based panels. This advancement could make solar energy more viable and cost-effective for widespread use. The team is now working on scaling up production and reducing manufacturing costs. Experts believe this development could play a crucial role in the global transition to renewable energy sources, helping to reduce reliance on fossil fuels and combat climate change.",
    images: [
      "https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/2674271/pexels-photo-2674271.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
  {
    title: "New Advances in Renewable Energy",
    publication_date: "2024-05-27",
    summary:
      "Scientists have developed a new type of solar panel that is significantly more efficient than current models, potentially revolutionizing the renewable energy industry.",
    content:
      "Researchers at the National Renewable Energy Laboratory have unveiled a breakthrough in solar panel technology. The new panels utilize a novel material that allows for a 30% increase in energy conversion efficiency compared to traditional silicon-based panels. This advancement could make solar energy more viable and cost-effective for widespread use. The team is now working on scaling up production and reducing manufacturing costs. Experts believe this development could play a crucial role in the global transition to renewable energy sources, helping to reduce reliance on fossil fuels and combat climate change.",
    images: [
      "https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/2674271/pexels-photo-2674271.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
  {
    title: "New Advances in Renewable Energy",
    publication_date: "2024-05-27",
    summary:
      "Scientists have developed a new type of solar panel that is significantly more efficient than current models, potentially revolutionizing the renewable energy industry.",
    content:
      "Researchers at the National Renewable Energy Laboratory have unveiled a breakthrough in solar panel technology. The new panels utilize a novel material that allows for a 30% increase in energy conversion efficiency compared to traditional silicon-based panels. This advancement could make solar energy more viable and cost-effective for widespread use. The team is now working on scaling up production and reducing manufacturing costs. Experts believe this development could play a crucial role in the global transition to renewable energy sources, helping to reduce reliance on fossil fuels and combat climate change.",
    images: [
      "https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/2674271/pexels-photo-2674271.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
  {
    title: "New Advances in Renewable Energy",
    publication_date: "2024-05-27",
    summary:
      "Scientists have developed a new type of solar panel that is significantly more efficient than current models, potentially revolutionizing the renewable energy industry.",
    content:
      "Researchers at the National Renewable Energy Laboratory have unveiled a breakthrough in solar panel technology. The new panels utilize a novel material that allows for a 30% increase in energy conversion efficiency compared to traditional silicon-based panels. This advancement could make solar energy more viable and cost-effective for widespread use. The team is now working on scaling up production and reducing manufacturing costs. Experts believe this development could play a crucial role in the global transition to renewable energy sources, helping to reduce reliance on fossil fuels and combat climate change.",
    images: [
      "https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/2674271/pexels-photo-2674271.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
  {
    title: "New Advances in Renewable Energy",
    publication_date: "2024-05-27",
    summary:
      "Scientists have developed a new type of solar panel that is significantly more efficient than current models, potentially revolutionizing the renewable energy industry.",
    content:
      "Researchers at the National Renewable Energy Laboratory have unveiled a breakthrough in solar panel technology. The new panels utilize a novel material that allows for a 30% increase in energy conversion efficiency compared to traditional silicon-based panels. This advancement could make solar energy more viable and cost-effective for widespread use. The team is now working on scaling up production and reducing manufacturing costs. Experts believe this development could play a crucial role in the global transition to renewable energy sources, helping to reduce reliance on fossil fuels and combat climate change.",
    images: [
      "https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/2674271/pexels-photo-2674271.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
  {
    title: "New Advances in Renewable Energy",
    publication_date: "2024-05-27",
    summary:
      "Scientists have developed a new type of solar panel that is significantly more efficient than current models, potentially revolutionizing the renewable energy industry.",
    content:
      "Researchers at the National Renewable Energy Laboratory have unveiled a breakthrough in solar panel technology. The new panels utilize a novel material that allows for a 30% increase in energy conversion efficiency compared to traditional silicon-based panels. This advancement could make solar energy more viable and cost-effective for widespread use. The team is now working on scaling up production and reducing manufacturing costs. Experts believe this development could play a crucial role in the global transition to renewable energy sources, helping to reduce reliance on fossil fuels and combat climate change.",
    images: [
      "https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/2674271/pexels-photo-2674271.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
  {
    title: "New Advances in Renewable Energy",
    publication_date: "2024-05-27",
    summary:
      "Scientists have developed a new type of solar panel that is significantly more efficient than current models, potentially revolutionizing the renewable energy industry.",
    content:
      "Researchers at the National Renewable Energy Laboratory have unveiled a breakthrough in solar panel technology. The new panels utilize a novel material that allows for a 30% increase in energy conversion efficiency compared to traditional silicon-based panels. This advancement could make solar energy more viable and cost-effective for widespread use. The team is now working on scaling up production and reducing manufacturing costs. Experts believe this development could play a crucial role in the global transition to renewable energy sources, helping to reduce reliance on fossil fuels and combat climate change.",
    images: [
      "https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/2674271/pexels-photo-2674271.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
];
function NewsPage() {
  return (
    <section className="flex items-center gap-6 p-[5%] flex-col sm:flex-row">
      <div className="self-start w-[100%] lg:w-[40%] p-2 my-12">
        <div className="flex items-center gap-3 w-full flex-col bg-green-2 rounded-lg p-2 min-h-[100px]">
          <h6>search</h6>
          <form className="flex h-8 relative w-full border rounded-full">
            <input
              type="email"
              className="w-full pl-2 py-2 text-gray-900    rounded-full focus:outline-none focus:ring-2 pr-[7rem] focus:ring-indigo-500 text-secondary-dark"
              placeholder="Search..."
              required
            />
            <button
              type="submit"
              className="px-4 absolute top-0 bottom-0 -right-[0.125rem] rounded-full bg-green text-light  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              search
            </button>
          </form>
        </div>
        <div className="flex items-center gap-3 w-full flex-col bg-green-2 my-4 rounded-lg p-2 min-h-[100px]">
          <h6 className=" text-base font-bold">Category</h6>
          <div className="flex flex-col gap-2 w-full p-2">
            <button className=" text-left hover:text-fuchsia-500">
              software
            </button>
            <button className=" text-left hover:text-fuchsia-500">
              networking
            </button>
            <button className=" text-left hover:text-fuchsia-500">
              hardware
            </button>
            <button className=" text-left hover:text-fuchsia-500">
              contribution
            </button>
            <button className=" text-left hover:text-fuchsia-500">
              social
            </button>
            <button className=" text-left hover:text-fuchsia-500">
              partner ship
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-12 gap-6 flex-wrap">
        {news.map((item, index) => (
          <NewsCared key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

export default NewsPage;
