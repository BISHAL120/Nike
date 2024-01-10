import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const Menu = ({ showCatMenu, setShowCatMenu }) => {
  const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/components/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
  ];

  const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11, route: "/jordan" },
    { id: 2, name: "Sneakers", doc_count: 8, route: "/sneakers" },
    { id: 3, name: "Running shoes", doc_count: 64, route: "/running" },
    { id: 4, name: "Football shoes", doc_count: 107, route: "/football" },
    { id: 4, name: "Store", doc_count: 1, route: "/store" },
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
                                {item.doc_count}
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
