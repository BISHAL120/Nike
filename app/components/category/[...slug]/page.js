"use client";
import React from "react";
import Wrapper from "../../Header/Wrapper";
import {
  JordanShoes,
  ProductData,
  Running,
  Football,
} from "@/public/Data/Data";
import ProductCard from "../../Product/Product-Card";

const Category = ({ params }) => {
  let selectedCategory;
  if (params.slug[0] === "Jordan") {
    const previousName = params.slug[1].split("-");
    const name = previousName.join(" ");
    const product = JordanShoes.find((item) => item.name === name);
    selectedCategory = product.varients;
  } else if (params.slug[0] === "Lifestyle") {
    const previousName = params.slug[1].split("-");
    const name = previousName.join(" ");
    const product = ProductData.find((item) => item.name === name);
    selectedCategory = product.varients;
  } else if (params.slug[0] === "Running-Shoes") {
    const previousName = params.slug[1].split("-");
    const name = previousName.join(" ");
    const product = Running.find((item) => item.name === name);
    selectedCategory = product.varients;
  } else if (params.slug[0] === "Football-Shoes") {
    const previousName = params.slug[1].split("-");
    const name = previousName.join(" ");
    const product = Football.find((item) => item.name === name);
    selectedCategory = product.varients;
  }
  return (
    <div className="w-full md:my-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            {params.slug[1]}
          </div>
        </div>
        {/* Products start */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-16 px-0 md:px-5">
          {selectedCategory?.map((item) => (
            <ProductCard key={item.id} ProductData={item} />
          ))}
        </div>
        {/* Product End */}
      </Wrapper>
    </div>
  );
};

export default Category;
