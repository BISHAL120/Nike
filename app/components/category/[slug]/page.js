import React from "react";
import Wrapper from "../../Header/Wrapper";
import Product from "../../Product/Product-Card";
import { ProductData } from "@/public/Data/Data";
import ProductCard from "../../Product/Product-Card";

const Category = ({ params }) => {
  return (
    <div className="w-full md:my-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            {params.slug}
          </div>
        </div>
        {/* Products start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-5 my-16 px-5 md:px-0">
          {ProductData?.map((item) => (
            <ProductCard key={item.id} ProductData={item} />
          ))}
        </div>
        {/* Product End */}
      </Wrapper>
    </div>
  );
};

export default Category;
