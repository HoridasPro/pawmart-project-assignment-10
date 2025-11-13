import React from "react";
import { Link } from "react-router";

const LatestProduct = ({ latestProduct }) => {
  const { _id, product_name, category, price, location, image } = latestProduct;

  return (
    <div className="card bg-base-100   shadow-sm  hover:scale-105  transition-all duration-300 bg-white">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body text-black">
        <h2 className="card-title">{product_name}</h2>
        <div className="flex justify-end">
          <p>
            <span className="font-semibold">Category : </span> {category}
          </p>
          <p>
            <span className="font-semibold">Price : </span>
            {price}
          </p>
        </div>
        <p>
          <span className="font-semibold">Location : </span>
          {location}
        </p>
        <div className="card-actions">
          <Link
            to={`/productDetails/${_id}`}
            className="btn primary w-full rounded-sm"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
