import React from "react";
import { Link } from "react-router-dom";

import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";
import SwiperCore from "swiper";
SwiperCore.use([Autoplay]);

function NewsCared({ title, summary, images }) {
  return (
    <Link to="/news/detail">
      <div className="flex gap-3 flex-col w-[400px] bg-white p-6 rounded-lg border border-green-300 shadow-lg hover:scale-105 transition duration-200 max-h-[500px]">
        <div>
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
            {images.map((img, index) => (
              <SwiperSlide key={index} className="h-[200px] w-full">
                <img
                  src={img}
                  alt={title}
                  className="border border-green-300 rounded-lg object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <h5 className="font-bold text-xl">{title}</h5>
        <p className="text-justify">{summary}</p>

        <p className=" self-center w-1/2 text-center p-3 m-3 bg-green rounded-lg">
          Read more
        </p>
      </div>
    </Link>
  );
}

export default NewsCared;
