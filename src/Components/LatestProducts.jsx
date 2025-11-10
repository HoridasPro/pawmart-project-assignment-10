import React, { use } from "react";
import LatestProduct from "./LatestProduct";

const LatestProducts = ({ latestProductsPromise }) => {
  const latestProducts = use(latestProductsPromise);
  console.log(latestProducts);
  return (
    <div>
      <h1>this is latest products</h1>
      {}
    </div>
  );
};

export default LatestProducts;
