import React from "react";
import { useSelector } from "react-redux";

const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducers);
  const { cartItems } = cartState;
  console.log(cartItems);
  return (
    <div>
      {cartItems.length == 0 && (
        <h1 className="text-center mt-60">There is no products in your cart</h1>
      )}
      {cartItems.map((cart) => (
        <div key={cart._id}>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto">
              <div
                className="flex border border-gray-200 p-4 bg-gray-50 items-center lg:w-3/5 mx-auto sm:flex-row flex-col hover:scale-105
            transform transition duration-300 ease-out"
              >
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center  text-indigo-500 flex-shrink-0">
                  <img
                    className="object-contain h-32"
                    src={cart.image}
                    alt=""
                  />
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    {cart.name.substr(1, 20)}
                  </h2>
                  <p className="leading-relaxed text-base">
                    {cart.description.substr(1, 100)}
                  </p>
                  <p className="leading-relaxed text-base mt-1 text-gray-600">
                    {cart.category}
                  </p>

                  <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Price : ${cart.prices}
                  </a>
                  <p className="leading-relaxed text-base">
                    Rate : {cart.rate}
                  </p>
                  <p className="leading-relaxed text-base">
                    Count : {cart.count}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default CartScreen;
