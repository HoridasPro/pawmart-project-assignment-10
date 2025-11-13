import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router";
import Product from "../Components/Product";
import Loading from "../Components/Loading";

const CategoryFilteredProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/products?category=${categoryName}`)
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
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
        {categoryName} Products
      </h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products found </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((productItem) => (
            <Product key={productItem._id} product={productItem}></Product>
          ))}
        </div>
      )}
      <Link to="/">
        <button className="font-bold btn flex mx-auto">Back to home</button>
      </Link>
    </div>
  );
};

export default CategoryFilteredProducts;
