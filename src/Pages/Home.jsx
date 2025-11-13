import React, { useEffect, useState } from "react";
import ProductsCategories from "../Components/ProductsCategories";
import LatestProducts from "../Components/LatestProducts";
import HeroSection from "../Components/HeroSection";
import BannerSlider from "../Components/BannerSlider";
import Loading from "../Components/Loading";

const latestProductsPromise = fetch(
  "http://localhost:3000/latest-products"
).then((res) => res.json());

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return <Loading />;
  }
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
