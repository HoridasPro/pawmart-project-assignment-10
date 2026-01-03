import React from "react";
import { Link } from "react-router";

const Product = ({ product }) => {
  const { _id, product_name, price, location, image, category } = product;

  return (
    <div className="card bg-base-100  shadow-sm hover:scale-105 transition-all duration-300">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body hover:scal-105">
        <h2 className="card-title">{product_name}</h2>
        <div className="flex justify-end">
          <p>
            <span className="font-semibold">Category : </span> {category}
          </p>
          <p>
            <span className="font-semibold"></span>
            {price} $
          </p>
        </div>
        <div className="card-actions mt-5">
          <Link
            to={`/productDetails/${_id}`}
            className="btn w-full rounded-sm bg-[#2563EB] text-white hover:bg-[#1D4ED8]"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
