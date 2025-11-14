import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../AuthContext/AuthContex";

const OrderListing = ({ orderModalRef }) => {
  const { user } = useContext(AuthContext);
  const order = useLoaderData();
  const { _id: productId } = order;

  const handlOrderSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const buyerName = form.name.value;
    const email = form.email.value;
    const productId = form.productId.value;
    const productName = form.productName.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const address = form.address.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const additionalNotes = form.additionalNotes.value;

    const newOrder = {
      productId: productId,
      productName: productName,
      buyerName: buyerName,
      email: email,
      quantity: quantity,
      price: price,
      address: address,
      phone: phone,
      date: date,
      additionalNotes: additionalNotes,
    };

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          orderModalRef.current.close();
        }
        toast.success("Order is successfull");
        console.log("after order", data);
        e.target.reset();
      });
  };
  return (
    <div>
      <div>
        <div>
          <form onSubmit={handlOrderSubmit}>
            <fieldset className="fieldset grid gap-10 ">
              <div className="flex gap-5 items-center">
                <div className="">
                  <label className="label">Buyer Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input bg-black"
                    placeholder="buyer name"
                    defaultValue={user?.displayName}
                    readOnly
                    required
                  />
                </div>
                <div className="">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input bg-black"
                    placeholder="email"
                    defaultValue={user?.email}
                    readOnly
                    required
                  />
                </div>
              </div>

              <div className="flex justify-between gap-5">
                <div className="">
                  <label className="label">Product Id</label>
                  <input
                    type="text"
                    name="productId"
                    className="input bg-black"
                    placeholder="productId"
                    defaultValue={productId}
                    readOnly
                    required
                  />
                </div>

                <div className="">
                  <label className="label">Product Name</label>
                  <input
                    type="text"
                    name="productName"
                    className="input bg-black"
                    placeholder="product name"
                    defaultValue={order?.product_name}
                    readOnly
                    required
                  />
                </div>
              </div>

              <div className="flex justify-between gap-5">
                <div className="">
                  <label className="label">Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    className="input bg-black"
                    placeholder="(if category pet, quantity 1)"
                    required
                  />
                </div>

                <div>
                  <label className="label">Price</label>
                  <input
                    type="number"
                    name="price"
                    className="input bg-black"
                    placeholder="price"
                    defaultValue={order?.price}
                    readOnly
                    required
                  />
                </div>
              </div>

              <div className="flex justify-between gap-5">
                <div className="">
                  <label className="label">Address</label>
                  <input
                    type="text"
                    name="address"
                    className="input bg-black"
                    placeholder="address"
                    required
                  />
                </div>

                <div>
                  <label className="label">Date</label>
                  <input
                    type="date"
                    name="date"
                    className="input bg-black"
                    placeholder="date"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-between gap-5">
                <div className="">
                  <label className="label">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    className="input bg-black"
                    placeholder="phone"
                    required
                  />
                </div>

                <div>
                  <label className="label">additional Notes</label>
                  <input
                    type="text"
                    name="additionalNotes"
                    className="input bg-black"
                    placeholder="additional notes"
                    required
                  />
                </div>
              </div>

              <button className="btn bg-amber-100 hover:bg-blue-400 text-black mt-4">
                Add Listing
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderListing;
