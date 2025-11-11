import React, { useEffect, useState } from "react";
import Product from "../Components/Product";

const PetsAndSupplies = () => {
  const categories = ["All", "Pets", "Food", "Accessories", "Care Products"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url =
      selectedCategory === "All"
        ? "http://localhost:3000/products"
        : `http://localhost:3000/products?category=${selectedCategory}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Filter by Category</h1>

      {/* Category Buttons */}
      <div className="flex gap-3 mb-5 justify-between">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setSelectedCategory(item)}
            className={`p-20 py-5 rounded ${
              selectedCategory === item
                ? "bg-blue-500 text-black"
                : "bg-gray-500 hover:bg-blue-500"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.length === 0 ? (
          <p>No products found 😿</p>
        ) : (
          products.map((product) => <Product product={product}></Product>)
        )}
      </div>
    </div>
  );
};

export default PetsAndSupplies;
