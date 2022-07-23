import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
const Navbar = () => {
  const cartstate = useSelector((state) => state.cartReducers);

  return (
    <header className="text-gray-600  body-font border-b border-gray-100">
      <div className="container mx-auto flex  p-5 flex-row md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-large md:w-1/7 w-full items-center  text-gray-900 mb-4 md:mb-0 "
        >
          <span
            className="md:ml-3 ml-11
           text-xl text-gray-900   "
          >
            Online Store
          </span>
        </Link>
        <nav className="md:ml-auto flex text-center  items-center text-base justify-center">
          <Link to="/cart">
            <BsHandbag size={20} />
            <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-indigo-600 text-xs text-white font-medium absolute top-2 right-2">
              {cartstate.cartItems.length}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
