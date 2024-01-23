import React from "react";
import CategoryCard from "./CategoryCard";

const Category = ({ selectedCategory }) => {
  console.log(selectedCategory);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-16 px-0 md:px-5">
      {selectedCategory.map((item) => (
        <CategoryCard item={item} />
      ))}
    </div>
  );
};

export default Category;

{
  /* <Link
      href={`/components/category/`}
      className="max-w-[500px] mx-auto transform overflow-hidden bg-white duration-200 md:hover:scale-105 cursor-pointer"
    >
      
    </Link> */
}
