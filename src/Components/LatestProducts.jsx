import React, { use } from "react";
import LatestProduct from "./LatestProduct";

const LatestProducts = ({ latestProductsPromise }) => {
  const latestProducts = use(latestProductsPromise);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {latestProducts.map((latestProduct) => (
        <LatestProduct latestProduct={latestProduct}></LatestProduct>
      ))}
    </div>
  );
};

export default LatestProducts;
