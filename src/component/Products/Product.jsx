import React from "react";
import "./Product.css";
import headerImg from "../.././assets/plane.png";
import { ProductsData } from "../../data/products";
import { useState } from "react";
const Product = () => {
  const [productItems, setProductItems] = useState(ProductsData);
  return (
    <div className="flex flex-col gap-8 items-center justify-center   pb-[2rem] pl-[2rem] relative">
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

      <div className="porduct wrapper">
        <ul>
          <li>All</li>
          <li>Skin Care </li>
          <li>Conditioners</li>
          <li>Foundation</li>
        </ul>

        <div className="product-list">
          {productItems.map((item, i) => (
            <div className="product">effjwiad</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
