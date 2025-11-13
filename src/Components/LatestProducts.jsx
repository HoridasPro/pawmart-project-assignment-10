import React, { use } from "react";
import LatestProduct from "./LatestProduct";

const LatestProducts = ({ latestProductsPromise }) => {
  const latestProducts = use(latestProductsPromise);
  return (
    <div className="max-w-7xl mx-auto mt-10 mb-20">
      <h1 className="text-[30px] font-bold">
        {latestProducts.length} Latests Listings
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mt-6">
        {latestProducts.map((latestProduct) => (
          <LatestProduct key={latestProduct._id} latestProduct={latestProduct}></LatestProduct>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
