import React from "react";

import { IoArrowBackOutline } from "react-icons/io5";
import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";
import SwiperCore from "swiper";
import { Link } from "react-router-dom";
SwiperCore.use([Autoplay]);

import { CiShare2 } from "react-icons/ci";

import { useLocation } from "react-router-dom";

import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import {
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";
import { FaXTwitter } from "react-icons/fa6";

const news = {
  title: "New Advances in Renewable Energy",
  publication_date: "2024-05-27",
  summary:
    "Scientists have developed a new type of solar panel that is significantly more efficient than current models, potentially revolutionizing the renewable energy industry.",
  content:
    "Researchers at the National Renewable Energy Laboratory have unveiled a breakthrough in solar panel technology. The new panels utilize a novel material that allows for a 30% increase in energy conversion efficiency compared to traditional silicon-based panels. This advancement could make solar energy more viable and cost-effective for widespread use. The team is now working on scaling up production and reducing manufacturing costs. Experts believe this development could play a crucial role in the global transition to renewable energy sources, helping to reduce reliance on fossil fuels and combat climate change.Researchers at the National Renewable Energy Laboratory have unveiled a breakthrough in solar panel technology. The new panels utilize a novel material that allows for a 30% increase in energy conversion efficiency compared to traditional silicon-based panels. This advancement could make solar energy more viable and cost-effective for widespread use. The team is now working on scaling up production and reducing manufacturing costs. Experts believe this development could play a crucial role in the global transition to renewable energy sources, helping to reduce reliance on fossil fuels and combat climate change.Researchers at the National Renewable Energy Laboratory have unveiled a breakthrough in solar panel technology. The new panels utilize a novel material that allows for a 30% increase in energy conversion efficiency compared to traditional silicon-based panels. This advancement could make solar energy more viable and cost-effective for widespread use. The team is now working on scaling up production and reducing manufacturing costs. Experts believe this development could play a crucial role in the global transition to renewable energy sources, helping to reduce reliance on fossil fuels and combat climate change.Researchers at the National Renewable Energy Laboratory have unveiled a breakthrough in solar panel technology. The new panels utilize a novel material that allows for a 30% increase in energy conversion efficiency compared to traditional silicon-based panels. This advancement could make solar energy more viable and cost-effective for widespread use. The team is now working on scaling up production and reducing manufacturing costs. Experts believe this development could play a crucial role in the global transition to renewable energy sources, helping to reduce reliance on fossil fuels and combat climate change.",
  images: [
    "https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ],
};

function NewsDetailPage() {
  const location = useLocation();
  const fullUrl = `${window.location.origin}${location.pathname}${location.search}${location.hash}`;
  console.log(fullUrl);
  return (
    <section className="flex items-center justify-center my-12 flex-col p-[5%]">
      <div>
        <h3 className="text-2xl font-extrabold">{news.title}</h3>
      </div>
      <div className="text-sm font-bold">
        <h6>
          {news.publication_date} <span>| Brothers It Plc</span>
        </h6>
      </div>
      <div className="m-12 lg:w-1/2 md:w-3/4 w-full">
        <Swiper
          modules={[Autoplay, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          longSwipes={true}
          className="w-full"
        >
          {news.images.map((img, index) => (
            <SwiperSlide key={index} className="lg:h-[400px] md:[300px] w-full">
              <img
                src={img}
                alt={news.title}
                className="border border-green-300 rounded-lg object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="lg:w-1/2 md:w-3/4 w-full leading-7 text-justify ">
        <p>{news.content}</p>
      </div>

      <div className="flex items-center flex-col my-6 gap-2 ">
        <div className="flex gap-2 items-center">
          share
          <CiShare2 />
        </div>
        <div className="flex items-center gap-3">
          <FacebookShareButton
            title={news.title}
            hashtag="brothersIt"
            url={fullUrl}
          >
            <FacebookIcon round={true} size={32} />
          </FacebookShareButton>
          <TelegramShareButton
            title={news.title}
            hashtag="brothersIt"
            url={fullUrl}
          >
            <TelegramIcon round={true} size={32} />
          </TelegramShareButton>
          <TwitterShareButton
            title={news.title}
            hashtag="brothersIt"
            url={fullUrl}
          >
            <FaXTwitter round={true} size={32} />
          </TwitterShareButton>
          <LinkedinShareButton
            title={news.title}
            hashtag="brothersIt"
            url={fullUrl}
          >
            <LinkedinIcon round={true} size={32} />
          </LinkedinShareButton>
        </div>
      </div>
      <Link
        to="/news"
        className="p-2 w-[100px] m-6 bg-green rounded-2xl flex items-center justify-center gap-2 text-center"
      >
        <IoArrowBackOutline /> <span>back</span>
      </Link>
    </section>
  );
}

export default NewsDetailPage;
