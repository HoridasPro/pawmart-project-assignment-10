import React from "react";
import ProductsCategories from "../Components/ProductsCategories";
import LatestProducts from "../Components/LatestProducts";

const latestProductsPromise = fetch("http://localhost:3000/products").then(
  (res) => res.json()
);

const Home = () => {
  return (
    <div>
      <h1>this is home</h1>
      <ProductsCategories></ProductsCategories>
      <LatestProducts latestProductsPromise={latestProductsPromise}></LatestProducts>
    </div>
  );
};

export default Home;
