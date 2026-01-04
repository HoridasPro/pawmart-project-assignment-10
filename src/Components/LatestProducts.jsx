import React, { use } from "react";
import LatestProduct from "./LatestProduct";

const LatestProducts = ({ latestProductsPromise }) => {

  const latestProducts = use(latestProductsPromise);
  console.log(latestProducts);
  return (
    <div className="max-w-[1380px] mx-auto md:mt-10">
      <h1 className="text-[30px] font-bold px-3 mb-5 text-center">
        {latestProducts.length} Latests Listings
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:px-0 px-3 mt-3">
        {latestProducts.map((latestProduct) => (
          <LatestProduct
            key={latestProduct._id}
            latestProduct={latestProduct}
          ></LatestProduct>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
