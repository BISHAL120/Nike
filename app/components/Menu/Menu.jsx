import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import {
  JordanShoes,
  ProductData,
  Running,
  Football,
} from "@/public/Data/Data";

const Menu = ({ showCatMenu, setShowCatMenu }) => {
  const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/components/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
  ];

  const countProduct = (category) => {
    let productCount = 0;
    category.forEach((item) => {
      const count = item.varients.length;
      productCount = count + productCount;
    });
    return productCount;
  };

  const subMenuData = [
    {
      id: 2,
      name: "Lifestyle",
      doc_count: countProduct(ProductData),
      route: "/components/categories/Lifestyle",
    },
    {
      id: 1,
      name: "Jordan",
      doc_count: countProduct(JordanShoes),
      route: "/components/categories/Jordan",
    },
    {
      id: 3,
      name: "Running shoes",
      doc_count: countProduct(Running),
      route: "/components/categories/Running-Shoes",
    },
    {
      id: 4,
      name: "Football shoes",
      doc_count: countProduct(Football),
      route: "/components/categories/Football-Shoes",
    },
  ];

  return (
    <div>
      <ul className="hidden md:flex items-center cursor-pointer gap-8 font-medium text-black">
        {data.map((item) => {
          return (
            <React.Fragment key={item.id}>
              {!!item?.subMenu ? (
                <li
                  onMouseEnter={() => setShowCatMenu(true)}
                  onMouseLeave={() => setShowCatMenu(false)}
                  className="flex items-center gap-2 relative"
                >
                  {item?.name}
                  <BsChevronDown size={14} />
                  {showCatMenu && (
                    <ul className="bg-white min-w-[250px] absolute top-6 left-0 px-1 text-black shadow-lg">
                      {subMenuData.map((item) => {
                        return (
                          <Link key={item.id} href={item.route}>
                            <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] gap-4">
                              {item.name}
                              <span className="opacity-50 text-sm">
                                ({item.doc_count})
                              </span>
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ) : (
                <li>
                  <Link href={item?.url}>{item.name}</Link>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
