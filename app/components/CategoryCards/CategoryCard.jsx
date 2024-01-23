import Link from "next/link";
import Image from "next/image";
import React from "react";

const CategoryCard = ({ item }) => {
  const previousName = item.name.split(" ");
  const name = previousName.join("-");

  return (
    <div>
      <Link
        key={item.id}
        href={`/components/category/${item.category}/${name}`}
        className="max-w-[500px] mx-auto transform overflow-hidden bg-white duration-200 md:hover:scale-105 cursor-pointer"
      >
        <Image
          width={500}
          height={500}
          src={item?.varients[0]?.images[0]}
          alt={`product img 1`}
        />
        <div className="pt-4 md:p-4 max-w-[500px] text-black/[0.9]">
          <h2 className="text-xl md:text-3xl font-bold text-center ">
            {item.name}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
