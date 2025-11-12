import React from "react";
import ProductsCategories from "../Components/ProductsCategories";
import LatestProducts from "../Components/LatestProducts";
import HeroSection from "../Components/HeroSection";
import BannerSection from "../Components/BannerSection";

const latestProductsPromise = fetch(
  "http://localhost:3000/latest-products"
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <BannerSection></BannerSection>
      <ProductsCategories></ProductsCategories>
      <LatestProducts
        latestProductsPromise={latestProductsPromise}
      ></LatestProducts>
    </div>
  );
};

export default Home;
