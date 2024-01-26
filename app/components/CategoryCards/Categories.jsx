import React from "react";
import CategoryCard from "./CategoryCard";

const Category = ({ selectedCategory }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-16 px-0 md:px-5">
      {selectedCategory.map((item) => (
        <CategoryCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Category;
