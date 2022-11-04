import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";
import { useState } from "react";

const Header = () => {

const [showNav,setShowNav] = useState(false)

const toggleMenu =()=>{
  setShowNav((showNav)=>!showNav)
}
  return (
    <div className="container flex justify-between items-center p-2 mt-5">
      <div className="logo flex items-center gap-2 ">
        <img src={logo} alt="" className="w-[2.5rem] h-[2.5rem]" />
        <span className="text-base font-semibold">shoppy</span>
      </div>
      <div className="right-side flex items-center justify-center  gap-2 ">
        <div className="bars"><GoThreeBars onClick={toggleMenu} className="hambuger hidden"/></div>


        <div className="nav-list  ">
          <ul className="flex justify-center items-center gap-3 list-none font-medium text-[16px] cursor-pointer  md:block lg:block" style={{display: showNav? 'inherit':'none'}} >
            <li>Collection</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
       
          </ul>
        </div>
        <div className="input">
        <input type="text" placeholder="search" className="search  w-full  border-collapse outline-none px-1 rounded"  />
        </div>
      <div >
      <CgShoppingBag  className="w-full h-6 cursor-pointer "/>
      </div>
      
      </div>
    </div>
  );
};

export default Header;
