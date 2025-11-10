import React from "react";
import { Link, useLoaderData } from "react-router";

const ProductDetails = () => {
  const products = useLoaderData();
  const {
    image,
    product_name,
    price,
    location,
    date,
    email,
    description,
    category,
  } = products;

  return (
    // <div>
    //   <h1>this product details</h1>
    //   {/* <img src={image} alt="" /> */}
    //   <p>{product_name}</p>
    //   <p>{price}</p>
    //   <p>{location}</p>
    // </div>
    <div className="  bg-base-100 shadow-2xl mb-10 w-11/12 mx-auto mt-10 flex gap-5 flex-col md:flex-row lg:flex-row">
      <figure className=" bg-[#1a191d] flex justify-center items-center w-full">
        <img
          className="hover:scale-110 transform transition duration-300"
          src={image}
          alt="Toy"
        />
      </figure>
      <div className="card-body  ]">
        <h2 className="card-title text-2xl">{product_name}</h2>
        <p>
          <span className="text-lg font-semibold">SellersName : </span>
          {location}
        </p>
        <p className="mb-25">
          <span className="text-lg font-semibold">Subcategory : </span>
          {date}
        </p>
        <div className="flex gap-5 -mt-20 flex-col md:flex-row lg:flex-row">
          <h2 className=" bg-[#1a191d] shadow-xl p-5 px-20 font-bold text-xl hover:scale-110 transform transition duration-300">
            Price:{price}
          </h2>

          <h2 className=" bg-[#1a191d] shadow-xl p-5 px-20 font-bold text-xl hover:scale-110 transform transition duration-300">
            Rating:{email}
          </h2>

          <h2 className=" bg-[#1a191d] shadow-xl p-5 px-20 font-bold text-xl hover:scale-110 transform transition duration-300">
            Quantity:{category}
          </h2>
        </div>
        <p className="mt-5">
          <span className="text-xl font-semibold">Description :</span>
          {description}
        </p>
        <Link to="/submitButton">
          <button
            type="button"
            className="bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 text-black py-1 px-7 font-semibold font-semibold rounded-sm mt-3"
          >
            Try Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
