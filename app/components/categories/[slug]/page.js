import React from "react";
import Wrapper from "../../Header/Wrapper";
import { JordanShoes, ProductData, Running } from "@/public/Data/Data";
import Category from "../../CategoryCards/Categories";

const Categories = ({ params }) => {
  let selectedCategory;
  if (params.slug === "Jordan") {
    selectedCategory = JordanShoes;
  } else if (params.slug === "Sneakers") {
    selectedCategory = ProductData;
  } else if (params.slug === "Running-Shoes") {
    selectedCategory = Running;
  }
  return (
    <div className="w-full md:my-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            There are {Running.length} Varients of {params.slug}
          </div>
        </div>
        <div>
          <Category selectedCategory={selectedCategory} />
        </div>
      </Wrapper>
    </div>
  );
};

export default Categories;
