import React from "react";
import Wrapper from "../../Header/Wrapper";
import {
  JordanShoes,
  ProductData,
  Running,
  Football,
} from "@/public/Data/Data";
import Category from "../../CategoryCards/Categories";

const Categories = ({ params }) => {
  let selectedCategory;
  if (params.slug === "Jordan") {
    selectedCategory = JordanShoes;
  } else if (params.slug === "Lifestyle") {
    selectedCategory = ProductData;
  } else if (params.slug === "Running-Shoes") {
    selectedCategory = Running;
  } else if (params.slug === "Football-Shoes") {
    selectedCategory = Football;
  }
  return (
    <div className="w-full md:my-20">
      <Wrapper>
        <div className="text-start max-w-[800px] mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-bold leading-tight px-5">
            {params.slug} Category
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
