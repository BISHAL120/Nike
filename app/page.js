"use client";
import Image from "next/image";
import { oswald } from "./fonts";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import banner1 from "@/public/assets/slide-1.png";
import banner2 from "@/public/assets/slide-2.png";
import banner3 from "@/public/assets/slide-3.png";

export default function Home() {
  return (
    <main className={`${oswald.className} text-center mt-5`}>
      <div className="max-w-[1200px] m-auto">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          renderIndicator={false}
          swipeable={true}
          emulateTouch={true}
          interval={2000}
          renderArrowPrev={(clickHandler, hasPrev) => (
            <div
              onClick={clickHandler}
              className="absolute bottom-0 right-[31px] md:right-[51px] w-[30px] md:w-[50px] h-[30px] md:h-[50px] flex items-center justify-center bg-black z-10 hover:opacity-90 cursor-pointer"
            >
              <BiArrowBack className="text-white text-sm md:text-lg" />
            </div>
          )}
          renderArrowNext={(clickHandler, hasNext) => (
            <div
              onClick={clickHandler}
              className="absolute bottom-0 right-0 md:right-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] flex items-center justify-center bg-black z-10 hover:opacity-90 cursor-pointer"
            >
              <BiArrowBack className="text-white text-sm md:text-lg rotate-180" />
            </div>
          )}
        >
          <div>
            <Image src={banner1} width="100%" height="100%" />
            <p
              className={`${oswald.className} px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90`}
            >
              Shop Now
            </p>
          </div>
          <div>
            <Image src={banner2} width="100%" height="100%" />
            <p className="px-[15px] md:px-[40px] py-[10] md:py-[25px] bg-white text-black/[0.9] flex items-center justify-center text-[15px] md:text-[30px] font-medium uppercase cursor-pointer hover:opacity-90 absolute bottom-[25px] md:bottom-[75px]">
              Shop Now
            </p>
          </div>
          <div>
            <Image src={banner3} width="100%" height="100%" />
            <p className="px-[15px] md:px-[40px] py-[10] md:py-[25px] bg-white text-black/[0.9] flex items-center justify-center text-[15px] md:text-[30px] font-medium uppercase cursor-pointer hover:opacity-90 absolute bottom-[25px] md:bottom-[75px]">
              Shop Now
            </p>
          </div>
        </Carousel>
      </div>
    </main>
  );
}
