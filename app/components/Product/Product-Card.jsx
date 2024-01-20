"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = (ProductData) => {
  const originalPrice = ProductData?.ProductData?.price;
  const discount = ProductData?.ProductData?.discount;
  const totalDiscount = (discount / 100) * originalPrice;
  const discountPrice = originalPrice - totalDiscount;
  return (
    <Link
      href="/"
      className="max-w-[500px] mx-auto transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <Image
        width={500}
        height={500}
        src={ProductData.ProductData?.img}
        alt={`product img 1`}
      />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">
          {ProductData?.ProductData?.name}
        </h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold ">&#0036;{discountPrice}</p>
          <p className="text-base font-medium line-through">
            &#0036;{originalPrice}
          </p>
          <p className="ml-auto text-base font-medium text-green-500 ">
            {discount}% off
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
