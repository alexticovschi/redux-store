import React from "react";
import { useSelector } from "react-redux";

const ProductListing = () => {
  const products = useSelector((state) => state);

  console.log(products);

  return (
    <div className="ui grid container">
      <div className="ui container">
        <h1>Product Listing</h1>
      </div>
    </div>
  );
};

export default ProductListing;
