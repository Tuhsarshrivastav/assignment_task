import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProdcts } from "../redux/actions/ProductAction";
import Header from "../components/Header";
import Products from "../components/Products";
import Loader from "../utils/Loader";

const ProductListingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProdcts());
  }, [dispatch]);
  const productState = useSelector((state) => state.getAllProductReducer);
  const { loading, error, products } = productState;
  return (
    <>
      <Header />
      {error && products.length == 0 && (
        <div
          className=" w-full flex
        justify-center items-center"
        >
          <h1 className="bg-red-500 mt-2 p-2 text-white rounded-sm">
            Samthing went wrong with server please try again later
          </h1>
        </div>
      )}
      {loading && (
        <div className="flex justify-center items-center mt-2">
          <Loader />
        </div>
      )}

      <Products products={products} />
    </>
  );
};

export default ProductListingPage;
