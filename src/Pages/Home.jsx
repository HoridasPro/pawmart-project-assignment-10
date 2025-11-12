import React from "react";
import ProductsCategories from "../Components/ProductsCategories";
import LatestProducts from "../Components/LatestProducts";
import HeroSection from "../Components/HeroSection";
import BannerSlider from "../Components/BannerSlider";

const latestProductsPromise = fetch(
  "http://localhost:3000/latest-products"
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <BannerSlider></BannerSlider>
      <ProductsCategories></ProductsCategories>
      <LatestProducts
        latestProductsPromise={latestProductsPromise}
      ></LatestProducts>
    </div>
  );
};

export default Home;
