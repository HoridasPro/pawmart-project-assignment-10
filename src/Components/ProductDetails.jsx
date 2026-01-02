import React, { useEffect, useRef, useState } from "react";
import { Link, useLoaderData } from "react-router";
import OrderListing from "./OrderListing";
import Loading from "./Loading";

const ProductDetails = () => {
  const orderModalRef = useRef(null);
  const product = useLoaderData();
  const [loading, setLoading] = useState(true);

  const { image, product_name, price, location, email, description, category } =
    product;
  console.log(product);
  const handleProductOrderModal = () => {
    orderModalRef.current.showModal();
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <title>Product Details</title>
      <div className=" bg-white shadow-2xl mb-15 w-11/12 mx-auto mt-10 flex gap-5 flex-col md:flex-row lg:flex-row">
        <figure className="  flex justify-center items-center w-fit">
          <img
            className="hover:scale-105 transform transition duration-300"
            src={image}
            alt="Toy"
          />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title text-2xl">{product_name}</h2>

          <span className="text-lg font-semibold">Owner's Email : {email}</span>

          <p>
            <span className="text-lg font-semibold">Category : </span>
            {category}
          </p>

          <div className="flex gap-5 flex-col md:flex-row lg:flex-row">
            <h2 className="  bg-white text-black shadow-xl p-5 px-20 font-bold text-xl hover:scale-110 transform transition duration-300 rounded-xl">
              Price:{price}
            </h2>

            <h2 className="bg-white text-black shadow-xl p-5 px-20 font-bold text-xl hover:scale-110 transform transition duration-300 rounded-xl">
              Location:{location}
            </h2>
          </div>
          <p className="mt-10">
            <span className="text-lg font-semibold">Description : </span>
            {description}
          </p>

          <div>
            <button
              onClick={handleProductOrderModal}
              type="button"
              className="btn rounded-sm text-white bg-[#2563EB] hover:bg-[#1D4ED8] py-1 px-7 font-semibold mt-3 w-full"
            >
              Order Now
            </button>
            <dialog
              ref={orderModalRef}
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box bg-black text-white">
                <p className="py-4 font-bold text-2xl">Add New Listing</p>

                <div className="card-body bg-base-100 shrink-0 bg-black">
                  <OrderListing orderModalRef={orderModalRef}></OrderListing>
                </div>

                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
