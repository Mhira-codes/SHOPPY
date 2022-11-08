import React from "react";
import "./Product.css";
import headerImg from "../.././assets/plane.png";
import { ProductsData } from "../../data/products";
import { useState,  } from "react";
const Product = () => {
  const [productItems, setProductItems] = useState(ProductsData);

  const filterItem =(type)=>{
    setProductItems(ProductsData.filter((item)=>(
      item.type === type
    )
    ))
  }
  return (
    <div className="flex flex-col gap-8 items-center    pb-[2rem] pl-[2rem] relative">
      <div className="product header flex flex-col justify-start  items-start ">
        <img
          src={headerImg}
          alt=""
          className=" w-[8rem] absolute left-[27%] -top-[4.4rem]"
        />
        <h1 className="text-3xl text-start font-bold ">
          Our Featured Products
        </h1>
      </div>

      <div className="product-wrapper w-[90%]">
        <ul className=" product-item text-[1.3rem] flex flex-col gap-8 font-[500] cursor-pointer">
          <li onClick={()=> setProductItems(ProductsData)}>All</li>
          <li onClick={()=>filterItem("skin care")}>Skin Care </li>
          <li onClick={()=>filterItem("conditioner")}>Conditioners</li>
          <li onClick={()=>filterItem("foundation")}>Foundation</li>
        </ul>

        <div className="product-list" >
          {productItems.map((item, i) => (
            <div className="product w-[13rem] h-[9rem]  bg-white relative overflow-hidden  rounded-2xl flex gap-[1rem] p-[1rem]">
              <div className="left-side flex flex-col justify-between">
                <div className="title flex flex-col">
                  <span className="text-[1.2rem] font-[600]">{item.name}</span>
                  <span className="text-[0.7rem]">{item.detail}</span>
                </div>
                <span className="text-[1.5rem] font-[600]">{item.price}$</span>
                <div className="btn text-[0.6rem] border border-solid border- [#343434]  rounded-2xl ">
                  shop now
                </div>
              </div>
           
              <img src={item.img} alt="" className=" absolute w-[5rem] h-full right-0 -rotate-[20deg] -bottom-[20%]  "/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
