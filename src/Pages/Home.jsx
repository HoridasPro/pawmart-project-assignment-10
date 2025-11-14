import React, { useEffect, useState } from "react";
import ProductsCategories from "../Components/ProductsCategories";
import LatestProducts from "../Components/LatestProducts";
import HeroSection from "../Components/HeroSection";
import BannerSlider from "../Components/BannerSlider";
import Loading from "../Components/Loading";
import FeaturedAdoptions from "../Components/FeaturedAdoptions";
import PetCareTips from "../Components/PetCareTips";
// import ToolTips from "../Components/ToolTips";
// import { Tooltip } from "react-tooltip";

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
      <title>Home</title>
      <HeroSection></HeroSection>
      <BannerSlider></BannerSlider>
      <ProductsCategories></ProductsCategories>
      <LatestProducts
        latestProductsPromise={latestProductsPromise}
      ></LatestProducts>
      <FeaturedAdoptions></FeaturedAdoptions>
      <PetCareTips></PetCareTips>
    </div>
  );
};

export default Home;
