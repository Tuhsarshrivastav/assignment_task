import React from "react";

import ProductCard from "./ProductCard";
const Products = ({ products }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <React.Fragment key={product._id}>
              <ProductCard product={product} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
