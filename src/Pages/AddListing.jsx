import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../AuthContext/AuthContex";
import { toast } from "react-toastify";
import Loading from "../Components/Loading";
// import { useLocation, useNavigate } from "react-router";

const AddListing = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  const handleAddListing = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const location = form.location.value;
    const description = form.description.value;
    const photo = form.photoURL.value;
    const date = form.date.value;
    const email = form.email.value;
    const newProduct = {
      product_name: name,
      category: category,
      price: price,
      location: location,
      description: description,
      image: photo,
      date: date,
      email: email,
    };

    fetch("https://pawmart-assignment-10-woad.vercel.app/addListing", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after posting the data", data);
        toast.success("Add data successfull");
        e.target.reset();
      });
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
      <title>Add Listing</title>
      <div className="hero py-10">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add Listing</h1>
          </div>
          <div className="card bg-base-100 shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleAddListing}>
                <fieldset className="fieldset grid gap-10 ">
                  <div className="flex gap-5 items-center">
                    <div className="">
                      <label className="label">Product Name</label>
                      <input
                        type="text"
                        name="name"
                        className="input"
                        placeholder="name"
                        required
                      />
                    </div>

                    <fieldset className="fieldset w-[50%]">
                      <label className="label">Category</label>
                      <select
                        defaultValue="Pick a browser"
                        name="category"
                        className="select"
                      >
                        <option>Pets</option>
                        <option>Pet Food</option>
                        <option>Accessories</option>
                        <option>Pet Care Products</option>
                      </select>
                    </fieldset>
                  </div>

                  <div className="flex justify-between">
                    <div className="">
                      <label className="label">Price</label>
                      <input
                        type="number"
                        name="price"
                        className="input"
                        placeholder="0 if pet is selected"
                        required
                      />
                    </div>

                    <div>
                      <label className="label">Location</label>
                      <input
                        type="text"
                        name="location"
                        className="input"
                        placeholder="location"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-[50%]">
                      <label className="label">Description</label>
                      <input
                        type="text"
                        name="description"
                        className="input"
                        placeholder="description"
                        required
                      />
                    </div>

                    <div>
                      <label className="label">Image</label>
                      <input
                        type="text"
                        name="photoURL"
                        className="input"
                        placeholder="photoURL"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div className="w-[50%]">
                      <label className="label">Date</label>
                      <input
                        type="date"
                        name="date"
                        className="input"
                        placeholder="date"
                        required
                      />
                    </div>

                    <div>
                      <label className="label">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="input"
                        placeholder="email"
                        defaultValue={user?.email}
                        readOnly
                        required
                      />
                    </div>
                  </div>

                  <button className="btn bg-[#2563EB] text-white hover:bg-[#1D4ED8] mt-4">
                    Add Listing
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddListing;
