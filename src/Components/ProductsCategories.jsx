import React from "react";
import { useNavigate } from "react-router";

const ProductsCategories = () => {
  const categories = ["Pets", "Food", "Accessories", "Care Products"];
  const navigate = useNavigate();

  return (
    <>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-20">
        {categories.map((item) => (
          <div
            key={item}
            onClick={() => navigate(`/category-filtered-product/${item}`)}
            className="cursor-pointer text-center p-5 shadow-sm  rounded-2xl border-2 border-gray-400 bg-amber-100 text-black hover:hover:scale-110 transition-all duration-300"
          >
            <h2 className="font-bold text-lg ">{item}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsCategories;
