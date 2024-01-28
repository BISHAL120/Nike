"use client";
import Wrapper from "./components/Header/Wrapper";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import {
  ProductData,
  JordanShoes,
  Running,
  Football,
} from "@/public/Data/Data";
import ProductCard from "./components/Product/Product-Card";
import Image from "next/image";
import Link from "next/link";
import CategoryCard from "./components/CategoryCards/CategoryCard";
import { updateCardCount } from "./AddToCard";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        {/* Heading and Paragraph Start */}
        <div className="text-center max-w-[800px] my-[50px] md:my-[80px] mx-auto">
          <div className="text-[28px] md:text-[34px] leading-tight mb-5 font-medium">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running.
          </div>
        </div>
        {/* Heading and Paragraph End */}

        {/* Products start */}
        <h1 className="text-4xl font-semibold text-neutral-700">
          All Product Category
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-16 px-5 md:px-0">
          {ProductData?.map((item) => (
            <CategoryCard key={item.id} item={item} />
          ))}
          {Running?.map((item) => (
            <CategoryCard key={item.id} item={item} />
          ))}
          {JordanShoes?.map((item) => (
            <CategoryCard key={item.id} item={item} />
          ))}
          {Football?.map((item) => (
            <CategoryCard key={item.id} item={item} />
          ))}
        </div>
        {/* Product End */}
      </Wrapper>
    </main>
  );
}

// <ProductCard key={item.id} ProductData={item} />
{
  /* <Link
  href={`/`}
  className="max-w-[500px] mx-auto transform overflow-hidden bg-white duration-200 md:hover:scale-105 cursor-pointer"
>
  <Image
    width={500}
    height={500}
    src={item?.varients[0]?.images[0]}
    alt={`product img 1`}
  />
  <div className="pt-4 md:p-4 max-w-[500px] text-black/[0.9]">
    <h2 className="text-base md:text-lg font-medium ">
      {item?.varients[0]?.name}
    </h2>
    <div className="flex flex-wrap justify-start items-center text-black/[0.5]">
      <p className="mr-2 text-sm md:text-lg font-semibold ">
        &#0036;{item?.varients[0]?.products.discountPrice.toFixed(2)}
      </p>
      <p className="text-base ml-auto md:ml-0 font-medium line-through">
        &#0036;{item?.varients[0]?.products.discountPrice.originalPrice}
      </p>
      <p className="ml-0 md:ml-auto text-base font-medium text-green-500 ">
        {discount}% off
      </p>
    </div>
  </div>
</Link> */
}
