import React from "react";
import HeroSection1 from "../../components/Home/HeroSection1";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

function Home() {
  return (
    <div className="w-full">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <HeroSection1 />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSection1 />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSection1 />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSection1 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;
