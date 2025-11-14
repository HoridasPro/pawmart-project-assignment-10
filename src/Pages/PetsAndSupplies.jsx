import React, { useEffect, useState } from "react";
import Product from "../Components/Product";
import Loading from "../Components/Loading";
import { FaSearch } from "react-icons/fa";

const PetsAndSupplies = () => {
  const categories = [
    "All",
    "Pets",
    "Pet Food",
    "Accessories",
    "Pet Care Products",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch Products by Category
  useEffect(() => {
    setLoading(true);
    const url =
      selectedCategory === "All"
        ? "https://paw-mart-project-api-server.vercel.app/products"
        : `https://paw-mart-project-api-server.vercel.app/products?category=${selectedCategory}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Fetch error:", err))
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  // 🔹 Search Product Function
  const handleSearch = (e) => {
    e.preventDefault();
    const searchItem = e.target.searchitem.value.trim();
    if (!searchItem) return;

    setLoading(true);
    fetch(`https://paw-mart-project-api-server.vercel.app/search?search=${searchItem}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Search error:", err))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <title>Pets & Supplies</title>

      {/* 🔍 Search Bar */}
      <div className="flex justify-center mt-6 mb-4">
        <form onSubmit={handleSearch}>
          <div className="relative flex items-center">
            <input
              type="search"
              name="searchitem"
              placeholder="Search"
              className="input w-[250px] md:w-[350px] rounded-l-full border border-gray-300  e px-4 py-2"
            />
            <button
              type="submit"
              className="btn rounded-r-full px-4 py-2 bg-amber-100 hover:to-blue-400 text-black"
            >
              <FaSearch />
            </button>
          </div>
        </form>
      </div>

      {/* 🔹 Filter Buttons */}
      <div className="max-w-7xl mx-auto mb-10 md:px-0 px-3">
        <h1 className="text-2xl font-bold mb-5 text-center">
          {products.length}-Products
        </h1>
        <div className="flex md:flex-row justify-between gap-4 mb-8 flex-col">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setSelectedCategory(item)}
              className={`px-6 py-3 rounded-xl border-2 w-full border-gray-400 text-black font-medium transition-all duration-300
                ${
                  selectedCategory === item
                    ? "bg-blue-600 text-white scale-105"
                    : "bg-amber-100 hover:bg-blue-400 hover:text-white"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length === 0 ? (
            <p className="text-[30px] font-bold text-center col-span-3 text-yellow-300">
              ❌ No products found
            </p>
          ) : (
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default PetsAndSupplies;
