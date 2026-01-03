import React from "react";
import { useNavigate } from "react-router";
// import Loading from "./Loading";

const ProductsCategories = () => {
  const categories = ["Pets", "Pet Food", "Accessories", "Pet Care Products"];
  const navigate = useNavigate();

  return (
    <div className="max-w-[1380px] mx-auto px-2 md:mt-10">
      <h1 className="text-[30px] font-bold text-center">4 Categories Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {categories.map((item) => (
          <div
            key={item}
            onClick={() => navigate(`/category-filtered-product/${item}`)}
            className="cursor-pointer text-center p-5 shadow-sm  rounded-sm bg-[#2563EB] hover:bg-[#1D4ED8] transition-all duration-300"
          >
            <h2 className="font-bold text-lg text-white">{item}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCategories;
