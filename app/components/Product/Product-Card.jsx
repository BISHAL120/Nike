"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const ProductCard = (ProductData) => {
  const params = useParams();
  const name = params.slug[1];
  const originalPrice = ProductData?.ProductData?.products?.originalPrice;
  const discount = ProductData?.ProductData?.products?.discount;
  const totalDiscount = (discount / 100) * originalPrice;
  const discountPrice = originalPrice - totalDiscount;
  const previousName = ProductData.ProductData.name.split(" ");
  const Name = previousName.join("-");

  return (
    <Link
      href={`/components/SingleProduct/${ProductData.ProductData.category}/${name}/${Name}`}
      className="max-w-[500px] mx-auto transform overflow-hidden bg-white duration-200 md:hover:scale-105 cursor-pointer"
    >
      <Image
        width={500}
        height={500}
        src={ProductData?.ProductData?.images[0]}
        alt={`product img 1`}
      />
      <div className="pt-4 md:p-4 max-w-[500px] text-black/[0.9]">
        <h2 className="text-base md:text-lg font-medium ">
          {ProductData?.ProductData?.name}
        </h2>
        <div className="flex flex-wrap justify-start items-center text-black/[0.5]">
          <p className="mr-2 text-sm md:text-lg font-semibold ">
            &#0036;{discountPrice.toFixed(2)}
          </p>
          <p className="text-base ml-auto md:ml-0 font-medium line-through">
            {!originalPrice === discountPrice && <> &#0036;{originalPrice}</>}
          </p>
          <p className="ml-0 md:ml-auto text-base font-medium text-green-500 ">
            {!discount === 0 && <>{discount}% off</>}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
