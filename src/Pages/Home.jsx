import React, { useEffect, useState } from "react";
import ProductsCategories from "../Components/ProductsCategories";
import LatestProducts from "../Components/LatestProducts";
import HeroSection from "../Components/HeroSection";
import BannerSlider from "../Components/BannerSlider";
import Loading from "../Components/Loading";
import FeaturedAdoptions from "../Components/FeaturedAdoptions";
import PetCareTips from "../Components/PetCareTips";
import Services from "./../Components/Services";
import HowItWorks from "./../Components/HowItWorks";
import WhyChoosePawMart from "./../Components/WhyChoosePawMart";
import Testimonials from "./../Components/Testimonials";
import NewsletterContact from "./../Components/NewsLetterContact";

const latestProductsPromise = fetch(
  "https://pawmart-assignment-10-woad.vercel.app/latest-products"
).then((res) => res.json());
console.log(latestProductsPromise);

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
      <Services></Services>
      <ProductsCategories></ProductsCategories>
      <FeaturedAdoptions></FeaturedAdoptions>
      <LatestProducts
        latestProductsPromise={latestProductsPromise}
      ></LatestProducts>
      <HowItWorks></HowItWorks>
      <PetCareTips></PetCareTips>
      <WhyChoosePawMart></WhyChoosePawMart>
      <Testimonials></Testimonials>
      <NewsletterContact></NewsletterContact>
    </div>
  );
};

export default Home;
