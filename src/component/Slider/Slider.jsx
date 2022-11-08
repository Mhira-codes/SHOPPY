import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// import swiper css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SliderProducts } from "../../data/products";

const Slider = () => {
  return (
    <div className="slider-container relative">
      <Swiper
        modules={[Pagination, Navigation]}
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        breakpoints={{
          856:{slidesPerView:3},
          640:{slidesPerView:2},
          0:{slidesPerView:1}
        }}
        className=" myswiper  w-[70%] h-[10rem]"
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide className="bg-white  flex p-[1rem] rounded-xl overflow-hidden relative box-border">
            <div className="left-side flex flex-col justify-between">
              <div className="title flex flex-col">
                <span className='text-[1.4rem] font-[600]'>{slide.name}</span>
                <span className='text-[0.7rem]'>{slide.detail}</span>
              </div>
              <span className="text-[2rem] font-[600]">{slide.price}$</span>
              <div className="btn text-[0.6rem] border border-solid border-[#343434]  rounded-2xl ">shop now</div>
            </div>

            <img src={slide.img} alt="" className="absolute right-0 w-[40%] h-full -bottom-[20%] -rotate-[20deg]"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
//console.log(SliderProducts)
export default Slider;
