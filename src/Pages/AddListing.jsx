import React from "react";

const AddListing = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Add Listing</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form>
              <fieldset className="fieldset">
                {/* For the product name */}
                <div>
                  <label className="label">Product Name</label>
                  <input type="text" className="input" placeholder="name" />
                </div>

                {/* For the  category */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Category</legend>
                  <select defaultValue="Pick a browser" className="select">
                    <option disabled={true}>Categories</option>
                    <option>Pets</option>
                    <option>Food</option>
                    <option>Accessories</option>
                    <option>Care Products</option>
                  </select>
                  <span className="label">Optional</span>
                </fieldset>

                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddListing;
