"use client";
import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import Link from "next/link";
import Menu from "../Menu/Menu";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import MobileMenu from "../Menu/MobileMenu";
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow("translate-y-[-80PX]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex justify-between items-center top-0 z-20 sticky transition-transform duration-300 ${show}`}
    >
      <Wrapper className="flex justify-between items-center">
        <Link href="/">
          <Image className="w-[60px] md:w-[60px]" src={logo} alt="logo" />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
        {/* icon start from here */}
        <div className="flex items-center gap-5 md:gap-3 text-black">
          <div className="w-8 md:w-12 h-8 md:h-12 flex justify-center items-center rounded-full hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[30px] md:text-[24px]" />
            <div className="h-[18px] md:h-[18px] w-[18px] md:w-[18px] bg-red-600 rounded-full absolute top-[-3px] md:top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              5
            </div>
          </div>
          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 flex items-center justify-center rounded-full hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart className="text-[27px] md:text-[20px]" />
              <div className="h-[18px] md:h-[18px] w-[18px] md:w-[18px] bg-red-600 rounded-full absolute top-[-3px] md:top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                {count || 0}
              </div>
            </div>
          </Link>
          <MobileMenu
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            mobileMenu={mobileMenu}
            setMobileMenu={setMobileMenu}
          />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
