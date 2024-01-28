import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { reload, removeFromCart } from "../AddToCard";

const Cartitem = ({ product }) => {
  const size = product.products.size.filter(
    (item) => !product.products.stockOut.includes(item)
  );
  console.log(size);
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* image start */}
      <div className="aspect-square w-[50px] md:w-[120px] shrink-0">
        <Image
          src={product.images[0]}
          alt="shoes img"
          width={150}
          height={150}
          srcset="square"
        />
      </div>
      {/* image end */}
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {product.name}
          </div>
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {product.subtitle || product.category}
          </div>
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            Price : &#0036;
            {product.products.originalPrice -
              product.products.originalPrice / product.products.discount}
          </div>
        </div>
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          Men&apos;s Basketball Shoes
        </div>
        <div className="flex items-center mt-4 gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
          <div className="flex items-center gap-1">
            <div className="font-semibold">Size:</div>
            <select className="hover:text-black outline-none cursor-pointer w-20">
              {size.map((size) => (
                <option key={size} className="text-lg" value={size}>
                  {size}
                </option>
              ))}
              {/* <option value="UK 6.5">UK 6.5</option>
              <option value="UK 7">UK 7</option>
              <option value="UK 7.5">UK 7.5</option>
              <option value="UK 8">UK 8</option>
              <option value="UK 8.5">UK 8.5</option>
              <option value="UK 9">UK 9</option>
              <option value="UK 9.5">UK 9.5</option>
              <option value="UK 10">UK 10</option>
              <option value="UK 10.5">UK 10.5</option>
              <option value="UK 11" disabled>
                UK 11
              </option>
              <option value="UK 11.5" disabled>
                UK 11.5
              </option> */}
            </select>
          </div>
          <div className="flex items-center gap-1">
            <div className="font-semibold">Quantity:</div>
            <select className="hover:text-black outline-none cursor-pointer w-10">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div
            onClick={() => {
              removeFromCart(product);
              reload();
            }}
            className="ml-auto cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
          >
            <RiDeleteBin6Line />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
