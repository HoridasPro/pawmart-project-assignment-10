import React from "react";
import { Link } from "react-router";

const LatestProduct = ({ latestProduct }) => {
  const { _id, product_name, category, price, location, description,image } =
    latestProduct;

  return (
    <div className="card bg-base-100 w-96 shadow-sm border-2 border-gray-300 bg-white">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-black max-">
        <h2 className="card-title">{product_name}</h2>
        <div className="flex justify-end">
          <p><span className="font-semibold">Category : </span> {category}</p>
          <p><span className="font-semibold">Price : </span>{price}</p>
        </div>
        <p><span className="font-semibold">Location : </span>{location}</p>
        <div className="card-actions">
          <Link
            to={`/productDetails/${_id}`}
            className="btn btn-primary w-full rounded-sm"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
