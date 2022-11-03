import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { VscSignIn } from "react-icons/vsc";
import { AiOutlineUsergroupDelete, AiOutlineSafety } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mt-[5rem] flex flex-col gap-10">
      <hr className="w-full h-[1px] bg-white border-none" />
      <div className="footer-details flex items-start justify-evenly">
        <div className="footer-logo  items-center flex gap-2">
          <img src={logo} alt="" className="w-[3rem]" />
          <span className="font-bold">shoppy</span>
        </div>
        <div className="secondpart flex  flex-col gap-5">
          <span className="text-[1.1rem] text-black font-medium">Contact us</span>
          <div className="list flex flex-col items-start gap-4">
            <div className="flex  items-center gap-3">
              <CiLocationOn className="text-xl text-black font-bold" />
              <span className="text-sm">GE-127-109</span>
            </div>
            <div  className ="flex items-center gap-3">
              <BsTelephone className="text-xl text-black"/>
              <span className="text-sm">+233 550 519 569</span>
            </div>
            <div className="flex  items-center gap-3" >
              <CiMail className="text-xl text-black" />
              <span className="text-sm">alhassansamiratu991@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="third-part flex flex-col gap-5">
          <span className="text-[1.1rem] text-black font-medium">Account</span>
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <VscSignIn className="text-xl text-black"/>
              <span className="text-sm">signin</span>
            </div>
          </div>
        </div>
        <div className="fourth-part flex flex-col gap-5">
          <span className="text-[1.1rem] text-black font-medium">Company</span>
          <div flex flex-col>
            <div className="flex  items-center gap-3">
              <AiOutlineUsergroupDelete className="text-xl text-black"/>
              <span className="text-sm">About us</span>
            </div>
          </div>
        </div>
        <div className="fifth flex flex-col gap-5">
          <span className="text-[1.1rem] text-black font-medium">Resources</span>
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <AiOutlineSafety className="text-xl text-black" />
              <span className="text-sm">Safety Privacy & Terms</span>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright text-center text-sm flex flex-col">
        <span>Copyright &copy; 2022 by Mhira-codes</span>
        <span>All right reserved</span>
      </div>
    </div>
  );
};

export default Footer;
