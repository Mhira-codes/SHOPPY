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
    <div className="slider relative">
      <Swiper

      modules={[Pagination, Navigation]}
      navigation={true}
      loopFillGroupWithBlank={true}
      sidesperview={3}
spaceBetween={40}
slidesPerGroup={1}
loop={true}
className="unset w-[70%] h-[12rem]"
      >
        {SliderProducts.map((slide,i)=>(
      
          
            <SwiperSlide className="bg-white  flex p-[1rem] rounded overflow-hidden relative box-border">
        
        
              <div className="left-side">
              <div className="title">
<span>{slide.name}</span>
<span>{slide.detail}</span>
              </div>
<span>{slide.price}</span>
<div>shop now</div>
              </div>

              <img src={slide.img} alt="" />
            </SwiperSlide>
       ))} 
      </Swiper>
    </div>
    
  );

};
//console.log(SliderProducts)
export default Slider;
