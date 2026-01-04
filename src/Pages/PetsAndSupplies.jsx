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

  // 🔹 Pagination states
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 8;

  // 🔹 Fetch Products (Category + Pagination)
  useEffect(() => {
    setLoading(true);

    const url =
      selectedCategory === "All"
        ? `https://paw-mart-project-api-server.vercel.app/products?page=${page}&limit=${limit}`
        : `https://paw-mart-project-api-server.vercel.app/products?category=${selectedCategory}&page=${page}&limit=${limit}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // ✅ backend pagination response handle
        if (data.products) {
          setProducts(data.products);
          setTotalPages(data.totalPages);
        } else {
          // fallback (if backend returns array only)
          setProducts(data);
          setTotalPages(1);
        }
      })
      .catch((err) => console.error("Fetch error:", err))
      .finally(() => setLoading(false));
  }, [selectedCategory, page]);

  // 🔹 Search Product
  const handleSearch = (e) => {
    e.preventDefault();
    const searchItem = e.target.searchitem.value.trim();
    if (!searchItem) return;

    setLoading(true);
    setPage(1);

    fetch(
      `https://paw-mart-project-api-server.vercel.app/search?search=${searchItem}&page=1&limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || data);
        setTotalPages(data.totalPages || 1);
      })
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
      <div className="flex justify-center mt-10 mb-4">
        <form onSubmit={handleSearch}>
          <div className="relative flex items-center">
            <input
              type="search"
              name="searchitem"
              placeholder="Search"
              className="input w-[250px] md:w-[350px] rounded-l-full border px-4 py-2"
            />
            <button
              type="submit"
              className="btn rounded-r-full px-4 py-2 bg-[#2563EB] text-white hover:bg-[#1D4ED8]"
            >
              <FaSearch />
            </button>
          </div>
        </form>
      </div>

      {/* 🔹 Category Filter */}
      <div className="max-w-7xl mx-auto mb-10 px-3">
        <h1 className="text-2xl font-bold mb-5">
          Showing {products.length} Products
        </h1>

        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => {
                setSelectedCategory(item);
                setPage(1);
              }}
              className={`px-5 py-2 rounded-xl font-medium transition
                ${
                  selectedCategory === item
                    ? "bg-[#2563EB] text-white"
                    : "bg-gray-200 text-black"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* 🔹 Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length === 0 ? (
            <p className="text-2xl font-bold text-center col-span-4 text-red-500">
              ❌ No products found
            </p>
          ) : (
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))
          )}
        </div>

        {/* 🔹 Pagination */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-40"
          >
            Prev
          </button>

          <span className="font-semibold">
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default PetsAndSupplies;
