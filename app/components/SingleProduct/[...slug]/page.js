"use client";
import React from "react";
import {
  JordanShoes,
  ProductData,
  Running,
  Football,
} from "@/public/Data/Data";
import ImageCarosel from "../../ProductDetailCarosel/ImageCarosel";
import Wrapper from "../../Header/Wrapper";
import { IoMdHeartEmpty, IoIosCart } from "react-icons/io";
import RelatedProduct from "../../RelatedProduct/RelatedProduct";

const SingleProduct = ({ params }) => {
  let selectedCategory;
  if (params.slug[0] === "Jordan") {
    const previousName = params.slug[1].split("-");
    const name = previousName.join(" ");
    const Products = JordanShoes.find((item) => item.name === name);
    selectedCategory = Products.varients;
  } else if (params.slug[0] === "Lifestyle") {
    const previousName = params.slug[1].split("-");
    const name = previousName.join(" ");
    const Products = ProductData.find((item) => item.name === name);
    selectedCategory = Products.varients;
  } else if (params.slug[0] === "Running-Shoes") {
    const previousName = params.slug[1].split("-");
    const name = previousName.join(" ");
    const Products = Running.find((item) => item.name === name);
    selectedCategory = Products.varients;
  } else if (params.slug[0] === "Football-Shoes") {
    const previousName = params.slug[1].split("-");
    const name = previousName.join(" ");
    const Products = Football.find((item) => item.name === name);
    selectedCategory = Products.varients;
  }

  const previousName = params.slug[2].split("-");
  const name = previousName.join(" ");

  const selectedProduct = selectedCategory.find(
    (product) => product.name === name
  );

  const restProduct = selectedCategory.filter(
    (product) => product.name !== name
  );

  const discount = selectedProduct.products.discount / 100;
  const discountPrice =
    selectedProduct.products.originalPrice -
    discount * selectedProduct.products.originalPrice;
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left Section start Here */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ImageCarosel images={selectedProduct.images} />
          </div>
          {/* left Section End Here */}

          {/* Right Column Start */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {selectedProduct.name}
            </div>
            {/* PRODUCT TITLE END */}

            {/* PRODUCT SUBTITLE/CATEGORIES START */}
            <div className="text-lg font-semibold mb-5 ">
              {selectedProduct.subtitle || selectedProduct.category}
            </div>
            {/* PRODUCT SUBTITLE/CATEGORIES END */}

            {/* Product Price Start */}
            <div className="flex items-center">
              <p className="mr-2 font-semibold text-lg">
                Price : &#0036;
                {discountPrice || selectedProduct.products.discountPrice}
              </p>
              <p className="line-through text-base font-medium">
                &#0036;{selectedProduct.products.originalPrice}
              </p>
              <p className="ml-auto text-base text-green-500 font-medium">
                {selectedProduct.products.discount}% Off
              </p>
            </div>
            {/* Product Price End */}
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>
            {/* Product Size Range Start */}
            <div className="mb-10">
              {/* Heading Start */}
              <div className="flex justify-between mb-2">
                <div className="font-semibold text-md">Select Size</div>
                <div className="font-semibold text-md text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* Selection Section Start */}
              <div class="grid grid-cols-3 gap-2">
                {selectedProduct.products.size.map((i) => (
                  <div
                    key={i}
                    className={`${
                      selectedProduct.products?.stockOut.includes(i)
                        ? "hover:cursor-not-allowed bg-black/[0.5] opacity-50 hover:border-none"
                        : "hover:cursor-pointer"
                    } text-center border rounded-md py-3 font-medium hover:border-black`}
                  >
                    {i}
                  </div>
                ))}
              </div>
              {/* Selection Section End */}
            </div>
            <div className="mb-3">
              <button
                onClick={() => {
                  AddToCard(selectedProduct);
                }}
                className="bg-black text-lg hover:opacity-75 text-white flex items-center justify-center cursor-pointer py-4 w-full rounded-full "
              >
                Add to Cart <IoIosCart size={20} className="ml-2" />
              </button>
            </div>
            <div className="mb-10">
              <button className="bg-white border-black border-[1px] text-lg hover:bg-black/[0.7] hover:border-black/[0.001] hover:text-white font-semibold text-black flex items-center justify-center cursor-pointer py-4 w-full rounded-full ">
                Wishlist <IoMdHeartEmpty size={20} className="ml-2" />
              </button>
            </div>
            <div>
              <p className="font-bold mb-5 text-lg">Product Details</p>
              <div className="text-md mb-5">
                <p>{selectedProduct.products.description}</p>
              </div>
            </div>
          </div>
          {/* Right column End */}
        </div>
        <RelatedProduct products={restProduct} />
      </Wrapper>
    </div>
  );
};

export default SingleProduct;
