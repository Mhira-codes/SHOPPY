import React from "react";
import { TestimonialsData } from "../../data/testimonials";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from 'swiper';
const Testimonial = () => {
  return (
    <div className="px-[4rem] text-center w-full relative mb-[5rem]">
      <h1  className="text-[2rem] font-bold pb-2">Reviews</h1>
      <Swiper
         modules={[Navigation, Pagination]}
         navigation={true}
      slidesPerView={3}
      slidesPerGroup={1}
      spaceBetween={20}
      loop={true}
      loopFillGroupWithBlank={1}
   className=' testimonial p-[1rem]'
     >
        
        
          {TestimonialsData.map((review, i) => (
            <SwiperSlide >
              <div className="slide bg-white flex flex-col  justify-center text-center p-[0.3rem] gap-4 relative rounded-lg items-center">
        
                <div className="">
                <img src={review.image} alt="" className="w-[3rem]"/>
                </div>
               
                <div>
                  <span className="text-sm text-center p-[1rem] pb-[1rem] text-[#7c7272] items-center">{review.comment}</span>
                </div>
                <div  className="border-b border-b-solid border-b-[#c6c6c6] w-[80%] flex items-center justify-center "></div>
                <div>
     
                  <span className="name font-semibold">{review.name}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
       
      </Swiper>
    </div>
  );
};

export default Testimonial;
