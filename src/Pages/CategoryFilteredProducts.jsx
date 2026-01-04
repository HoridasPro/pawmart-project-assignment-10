import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router";
import Product from "../Components/Product";
import Loading from "../Components/Loading";

const CategoryFilteredProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://pawmart-assignment-10-woad.vercel.app/products?category=${categoryName}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [categoryName]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h2 className="text-[30px] mb-3 font-bold">
        {products.length}-{categoryName} Products
      </h2>

      {products.length === 0 ? (
        <h1 className="text-center">No products found </h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((productItem) => (
            <Product key={productItem._id} product={productItem}></Product>
          ))}
        </div>
      )}
      <Link to="/">
        <button className="cursor-pointer font-bold btm rounded-sm text-white bg-[#2563EB] hover:bg-[#1D4ED8] px-8 mb-10 py-3 flex mx-auto mt-10">
          Back to home
        </button>
      </Link>
    </div>
  );
};

export default CategoryFilteredProducts;
