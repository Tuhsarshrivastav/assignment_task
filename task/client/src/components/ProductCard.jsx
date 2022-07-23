import React from "react";
import { useDispatch } from "react-redux";
import { adToCart } from "../redux/actions/cartAction";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addTocartHandler = () => {
    dispatch(adToCart(product));
  };
  return (
    <div
      className="lg:w-1/3 md:w-1/4 p-4 w-full hover:scale-105
    transform transition duration-300 ease-out "
    >
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-contain w-full h-full block"
          src={product.image}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {product.category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {product.title.substr(1, 20)}
        </h2>
        <p className="text-sm">{product.description.substr(1, 100)}...</p>
        <p className="mt-1">
          <span className="text-gray-900">Price</span> ${product.price}
        </p>
        <span className="text-gray-900">Rating</span>{" "}
        <p className="inline-block">{product.rating.rate}</p>
        <p>
          {" "}
          <span className="text-gray-900">Count</span> {product.rating.count}
        </p>
      </div>
      <div className="flex justify-end w-full">
        <button
          onClick={addTocartHandler}
          className="bg-gray-700 hover:bg-gray-900 p-2 text-white text-md rounded-sm"
        >
          add to card
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
