import React from "react";
import "./Rate.css";
import rateImg from "../../assets/testimonialHero.png";
const Rate = () => {
  return (
    <div className="rate  flex justify-center items-center flex-col">
      <div className="rate-wrapper grid  w-full">
        {/* left */}
        <div className="left flex flex-col text-left gap-3">
          <span className="text-3xl uppercase font-bold">Top rated</span>
          <p className="text-[0.9rem]">
            SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN
            REJOICED
          </p>
        </div>

        {/* middle */}
        <div className="flex  justify-center">
        <img src={rateImg} alt="" className="w-[25rem]   " />
        </div>
        
      

        {/* rigt-side */}
        <div className=" right flex flex-col text-right gap-3">
          <span className="text-3xl uppercase font-bold">100k</span>
          <span className="text-[0.9rem] uppercase">Happy customers with us</span>
        </div>
      </div>
    </div>
  );
};

export default Rate;
