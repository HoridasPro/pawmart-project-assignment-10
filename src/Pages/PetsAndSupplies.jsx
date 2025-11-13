import React, { useEffect, useState } from "react";
import Product from "../Components/Product";
import Loading from "../Components/Loading";

const PetsAndSupplies = () => {
  const categories = ["All", "Pets", "Food", "Accessories", "Care Products"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url =
      selectedCategory === "All"
        ? "http://localhost:3000/products"
        : `http://localhost:3000/products?category=${selectedCategory}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [selectedCategory]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto mt-10 mb-15">
      {/* Category Buttons */}
      <h1 className="text-2xl font-bold mb-5">Filter by Category</h1>
      <div className="flex gap-3 mb-5 justify-between">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setSelectedCategory(item)}
            className="p-20 py-5 rounded-xl flex 
                border-2 border-gray-400 bg-amber-100 text-black hover:scale-110 hover:bg-blue-500 transition-all duration-300"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.length === 0 ? (
          <p className="text-[30px] font-bold flex justify-center">
            No products found
          </p>
        ) : (
          products.map((product) => <Product product={product}></Product>)
        )}
      </div>
    </div>
  );
};

export default PetsAndSupplies;
