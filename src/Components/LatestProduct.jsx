import React from "react";
import { Link } from "react-router";

const LatestProduct = ({ latestProduct }) => {
  const { _id, image, product_name, category, price, location } = latestProduct;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product_name}</h2>
        <p>{category}</p>
        <p>{price}</p>
        <p>{location}</p>
        <div className="card-actions">
          <Link to={`/productDetails/${_id}`} className="btn btn-primary">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
