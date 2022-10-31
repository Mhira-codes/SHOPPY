import React from "react";
import "./Hero.css";
import heroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
const Hero = () => {
  return (
    <div className="hero-section">
      {/* left-side */}
      <div className="hero-sides">
        <div className="hero-title">
          <span className=" uppercase font-semibold text-[1.5rem] block">Skin protection cream</span>
        </div>
        <div className=" sub-title flex flex-col text-black">
          <span className="font-bold text-[2.5rem]">Trending Collection</span>
          <p className="block">Seedily say has suitable disporsal and boy </p>
          <p className="block">Excerise joy man children rejoiced</p>
        </div>
      </div>
      {/* middle-side */}
      <div className="middle-side flex items-baseline justify-center relative">
        <div className="blue-img w-[30rem] h-[30rem] absolute -z-[99] rounded-full bottom-0"></div>
        <img src={heroImg} alt="" width={600} className="w-[30rem] absolute bottom-0" />
        <div className="cart absolute bottom-[25%] leftflex gap-[1rem]">
          <RiShoppingBagFill className="w-[40px] h-[40px] bg-white rounded-full p-[10px]"/>
          <div className="sigup">
            <span>Best signup offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
      {/* right-hand */}
      <div className="hero-sides flex flex-col text-right">
<div className="flex flex-col text-right">
    <span className="font-bold  text-[2.5rem]">1.5m</span>
    <p className="text-right">Monthly Traffic </p>
</div>
<div  className="flex flex-col text-right">
    <span className="font-bold  text-[2.5rem]">100k</span>
    <p className="text-right">Happy Customers </p>
</div>
      </div>
    </div>
  );
};

export default Hero;
