import React, { useRef } from "react";
import { Link, useLoaderData } from "react-router";
import OrderListing from "./OrderListing";

const ProductDetails = () => {
  const orderModalRef = useRef(null);
  const product = useLoaderData();

  const {
    image,
    product_name,
    price,
    location,
    // date,
    email,
    description,
    category,
  } = product;

  const handleProductOrderModal = () => {
    orderModalRef.current.showModal();
  };

  return (
    <div className="  bg-base-100 shadow-2xl mb-10 w-11/12 mx-auto mt-10 flex gap-5 flex-col md:flex-row lg:flex-row">
      <figure className=" bg-[#1a191d] flex justify-center items-center w-fit">
        <img
          className="hover:scale-110 transform transition duration-300"
          src={image}
          alt="Toy"
        />
      </figure>
      <div className="card-body  ]">
        <h2 className="card-title text-2xl">{product_name}</h2>
        <p>
          <span className="text-lg font-semibold">Category : </span>
          {category}
        </p>
        <p>
          <span className="text-lg font-semibold">Owner's Email : </span>
          {email}
        </p>
        <p className="mb-25">
          <span className="text-lg font-semibold">Description : </span>
          {description}
        </p>
        <div className="flex gap-5 -mt-20 flex-col md:flex-row lg:flex-row">
          <h2 className=" bg-[#1a191d] shadow-xl p-5 px-20 font-bold text-xl hover:scale-110 transform transition duration-300">
            Price:{price}
          </h2>

          <h2 className=" bg-[#1a191d] shadow-xl p-5 px-20 font-bold text-xl hover:scale-110 transform transition duration-300">
            Location:{location}
          </h2>

          {/* <h2 className=" bg-[#1a191d] shadow-xl p-5 px-20 font-bold text-xl hover:scale-110 transform transition duration-300">
            Quantity:{category}
          </h2> */}
        </div>
        <p className="mt-5">
          <span className="text-xl font-semibold">Description :</span>
          {description}
        </p>

        <div>
          <button
            onClick={handleProductOrderModal}
            type="button"
            className="bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 text-black py-1 px-7 font-semibold font-semibold rounded-sm mt-3 w-full"
          >
            Order Now
          </button>
          <dialog
            ref={orderModalRef}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>

              <div className="card bg-base-100 shrink-0 shadow-2xl">
                <div className="card-body">
                  <OrderListing orderModalRef={orderModalRef}></OrderListing>
                </div>
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
  );
};

export default ProductDetails;
