import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

const MobileMenu = ({
  showCatMenu,
  setShowCatMenu,
  mobileMenu,
  setMobileMenu,
}) => {
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
    <div className="flex md:hidden">
      {!mobileMenu ? (
        <BiMenuAltRight
          onClick={() => setMobileMenu(!mobileMenu)}
          className="text-[20px]"
        />
      ) : (
        <div>
          <VscChromeClose
            onClick={() => setMobileMenu(!mobileMenu)}
            className="text-[20px]"
          />
          <ul className="w-full bg-white absolute top-[50px] left-0 px-7 h-[calc(100vh-50px)] flex flex-col items-start font-bold text-black">
            {data.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  {!!item?.subMenu ? (
                    <li
                      onClick={() => setShowCatMenu(!showCatMenu)}
                      className="flex py-3 border-t flex-col w-full relative"
                    >
                      <div className="flex w-full justify-between pr-4 items-center">
                        {item?.name}
                        <BsChevronDown size={14} />
                      </div>
                      {showCatMenu && (
                        <ul className="bg-white px-1 w-full absolute top-10 text-black shadow-lg">
                          {subMenuData.map((item) => {
                            return (
                              <Link key={item.id} href={item.route}>
                                <li className="color-black h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] gap-4">
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
                    <li className="border-t py-3 w-full last-of-type:border-b">
                      <Link href={item?.url}>{item.name}</Link>
                    </li>
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
