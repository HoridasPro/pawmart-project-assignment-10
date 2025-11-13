import React, { useState } from "react";

const SearchProduct = () => {
  const [profile,setProfile]=useState()
   // Search function
  const handleSearch = (e) => {
    e.preventDefault();
    const searchItem = e.target.searchitem.value;
    fetch(`http://localhost:3000/search?search=${searchItem}`)
      .then(res => setProfile(res.data))
      .catch(err => console.log(err));
  };
  return (
    <div>
       <form onSubmit={handleSearch} className='mt-4 md:mt-0'>
          <div className="relative flex items-center">
            <input
              type="search"
              name="searchitem"
              placeholder="Search"
              className="input w-[250px] md:w-[300px] rounded-l-full border border-gray-300 outline-none px-4 py-2"
            />
            <button
              type="submit"
              className="btn rounded-r-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
            >
              <FaSearch />
            </button>
          </div>
        </form>
         
    </div>
  );
};

export default SearchProduct;
