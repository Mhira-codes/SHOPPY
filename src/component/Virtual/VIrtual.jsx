import React from "react";
import "./Virtual.css";
import Shade from "../../assets/shade.png";
import ReactCompareImage from 'react-compare-image';
import Before from "../../assets/before.png"
import After from "../../assets/after.png"
const VIrtual = () => {
  return (
    <div className="virtual-class my-[6rem] p-[2rem] flex justify-around">
      {/* left-side */}
      <div className="left-virtual flex flex-col gap-8 relative ">
        <span className="text-[2rem] font-bold  uppercase">Virtual Try-on</span>
        <span className="text-[1.6rem] uppercase  block w-[20rem] ">Never buy the wrong shade again</span>
        <span className="text-[1.6rem] font-bold">Try now!</span>
        <img src={Shade} alt="shade" className="w-[10rem] absolute bottom-[3rem]"/>
      </div>
      {/* right-side */}
      <div className="right-virtual ">
        <div className="image-wrapper w-[30rem]">
        <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
     
       
        </div>
    </div>
  );
};

export default VIrtual;
