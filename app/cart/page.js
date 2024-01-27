import React from "react";
import Wrapper from "../components/Header/Wrapper";
import Cartitem from "./Cartitem";

const Cart = () => {
  return (
    <main>
      <div className="w-full md:py-20">
        <Wrapper>
          <div className="text-center max-w-[800px] mx-auto mt-5 md:mt-0">
            <h1 className="text-[28px] md:text-[34px] font-semibold mb-5 leading-tight">
              Shopping Cart
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-12 py-10">
            <div className="flex-[2]">
              {/* art items start */}
              <div className="text-lg font-bold">Cart Items</div>
              <Cartitem />
              <Cartitem />
              <Cartitem />
              <Cartitem />
              <Cartitem />
            </div>
            {/* Summary strat here */}
            <div className="flex-[1]">
              <div className="text-lg font-bold">Summary</div>
              <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                <div className="flex justify-between">
                  <div className="text-md md:text-lg font-medium text-black">
                    subtotal
                  </div>
                  <div className="text-md md:text-lg font-medium text-black">
                    &#0036;132655
                  </div>
                </div>
                <div className="text-sm md:text-md py-5 border-t mt-5">
                  The subtotal reflects the total price of your order, including
                  duties and taxes, before any applicable discounts. It does not
                  include delivery costs and international transaction fees.
                </div>
              </div>
              <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform  mb-3 hover:opacity-75 flex items-center gap-2 justify-center">
                Checkout
              </button>
            </div>
            {/* Sunnary end here */}
          </div>
        </Wrapper>
      </div>
    </main>
  );
};

export default Cart;

<button class="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center">
  Checkout
</button>;
