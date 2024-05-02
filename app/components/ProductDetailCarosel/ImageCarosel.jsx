"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

const ImageCarosel = ({ images }) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[80px] ">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        emulateTouch={true}
        thumbWidth={60}
        showThumbs={true}
        className="productCarousel"
        renderThumbs={() =>
          images?.map((img) => (
            <Image
              key={img}
              src={img} // Use the same image source for both main and thumbnail
              width={60} // Adjust width as needed for thumbnails
              height={60} // Adjust height as needed for thumbnails
              alt="Product thumbnail"
            />
          ))
        }
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute rounded-full bottom-[10px] right-[60px] md:right-[71px] w-[30px] md:w-[40px] h-[30px] md:h-[40px] flex items-center justify-center bg-white z-10 hover:opacity-90 cursor-pointer"
          >
            <MdOutlineKeyboardArrowRight className="text-black text-[25px] md:text-[30px] rotate-180" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute rounded-full bottom-[10px] right-[10px] md:right-[10px] w-[30px] md:w-[40px] h-[30px] md:h-[40px] flex items-center justify-center bg-white z-10 hover:opacity-90 cursor-pointer"
          >
            <MdOutlineKeyboardArrowRight className="text-black text-[25px] md:text-[30px]" />
          </div>
        )}
      >
        {images?.map((img) => (
          <Image
            placeholder="blur"
            blurDataURL="data:..."
            width={550}
            height={650}
            key={img}
            src={img}
            alt="Product images"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarosel;
