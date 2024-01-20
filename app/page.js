"use client";
import Wrapper from "./components/Header/Wrapper";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import { ProductData } from "@/public/Data/Data";
import ProductCard from "./components/Product/Product-Card";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-5 my-16 px-5 md:px-0">
          {ProductData?.map((item) => (
            <ProductCard key={item.id} ProductData={item} />
          ))}
        </div>
        {/* Product End */}
      </Wrapper>
    </main>
  );
}
