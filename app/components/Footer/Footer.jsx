import React from "react";
import "./Footer.scss";
import footerLogo from "@/public/assets/footer-logo.png";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "../Header/Wrapper";
import { oswald } from "@/app/fonts";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 pb-3">
      <Wrapper className="flex flex-col gap-12 md:flex-row justify-between">
        <div className="flex flex-col sm:flex-row justify-center gap-[50px] md:gap-[75px] lg:gap-[100px]">
          {/* Left Section start */}
          {/* main Menu */}
          <div className="flex justify-between px-4 md:px-0 md:justify-normal items-start">
            <div className={`flex flex-col gap-3 shrink-0`}>
              <div
                className={`${oswald.className} text-sm font-medium uppercase`}
              >
                Find a Store
              </div>
              <div
                className={`${oswald.className} text-sm font-medium uppercase`}
              >
                Become a partner
              </div>
              <div
                className={`${oswald.className} text-sm font-medium uppercase`}
              >
                sing up for Email
              </div>
              <div
                className={`${oswald.className} text-sm font-medium uppercase`}
              >
                Send Us Feedback
              </div>
              <div
                className={`${oswald.className} text-sm font-medium uppercase`}
              >
                Student Discount
              </div>
            </div>
            <Image
              className="sm:hidden max-w-[150px]"
              width="100%"
              height="100%"
              src={footerLogo}
              alt="footer images"
            />
          </div>
          {/* main Menu End */}

          {/* Normal Menu Start */}
          <div className="flex justify-between px-4 md:px-0 md:justify-normal gap-[50px] md:gap-[75px]">
            {/* Normal Menu Left Start*/}
            <div className="flex flex-col gap-3">
              <div
                className={`${oswald.className} capitalize font-medium text-sm`}
              >
                get help
              </div>
              <div className="text-sm text-nowrap	 text-white/[0.5] hover:text-white cursor-pointer capitalize">
                Order status
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer capitalize">
                delivery
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer capitalize">
                returns
              </div>
              <div className="text-sm text-nowrap text-white/[0.5] hover:text-white cursor-pointer capitalize">
                payment option
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer capitalize">
                contact us
              </div>
            </div>
            {/* Normal Menu Left End */}

            {/* Normal Menu Right Start*/}
            <div className="flex flex-col gap-3">
              <div
                className={`${oswald.className} capitalize font-medium text-sm`}
              >
                about nike
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer capitalize">
                news
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer capitalize">
                careers
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer capitalize">
                investors
              </div>
              <div className="text-sm text-white/[0.5] hover:text-white cursor-pointer capitalize">
                Sustainability
              </div>
            </div>
            {/* Normal MMenu Right End */}
          </div>
          {/* Normal Menu End */}
        </div>

        {/* footer icon Start from here */}
        <div className="flex justify-center gap-12 md:gap-5">
          <div className="footer-icon cursor-pointer w-10 h-10 bg-white/[0.25] rounded-full text-black hover:text-white flex items-center justify-center">
            <FaFacebookF className="icon transform transition-transform duration-300" />
          </div>
          <div className="footer-icon cursor-pointer w-10 h-10 bg-white/[0.25] rounded-full text-black hover:text-white flex items-center justify-center">
            <FaTwitter className="icon transform transition-transform duration-300" />
          </div>
          <div className="footer-icon cursor-pointer w-10 h-10 bg-white/[0.25] rounded-full text-black hover:text-white flex items-center justify-center">
            <FaYoutube className="icon transform transition-transform duration-300" />
          </div>
          <div className="footer-icon cursor-pointer w-10 h-10 bg-white/[0.25] rounded-full text-black hover:text-white flex items-center justify-center">
            <FaInstagram className="icon transform transition-transform duration-300" />
          </div>
        </div>
      </Wrapper>
      <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        {/* LEFT START */}
        <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
          © 2023 Nike, Inc. All Rights Reserved
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Guides
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Terms of Sale
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Terms of Use
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Privacy Policy
          </div>
        </div>
        {/* RIGHT END */}
      </Wrapper>
    </footer>
  );
};

export default Footer;
