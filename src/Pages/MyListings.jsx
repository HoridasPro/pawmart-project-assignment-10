import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../AuthContext/AuthContex";
import Swal from "sweetalert2";
import Loading from "../Components/Loading";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updateProduct, setUpdateProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  // const [refresh, setRefresh] = useState(false);

  // Fetch Products
  const fetchProducts = async () => {
    setLoading(true);
    if (!user?.email) {
      setProducts([]);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        `https://paw-mart-project-api-server.vercel.app/addListing?email=${user.email}`
      );
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();

      // date অনুযায়ী sort
      const sortedData = data.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setProducts(sortedData);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [user?.email]);

  if (loading) return <Loading />;

  // Delete Product
  const handleDeleteOrderProduct = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://paw-mart-project-api-server.vercel.app/addListing/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your product has been deleted", "success");
              setProducts(products.filter((p) => p._id !== _id));
            } else {
              Swal.fire("Error!", "Failed to delete the product", "error");
            }
          });
      }
    });
  };

  // Open Update Modal
  const handleUpdatedProduct = (product) => {
    setUpdateProduct(product);
    setModalVisible(true);
  };

  // Update Product Handler
  const handleAddListing = async (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedProductData = {
      product_name: form.name.value,
      category: form.category.value,
      price: form.price.value,
      location: form.location.value,
      description: form.description.value,
      photo: form.photoURL.value,
      date: form.date.value,
      email: form.email.value,
    };

    try {
      const res = await fetch(
        `https://paw-mart-project-api-server.vercel.app/addListing/${updateProduct._id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedProductData),
        }
      );

      const data = await res.json();
      if (data.modifiedCount > 0) {
        setProducts(
          products.map((p) =>
            p._id === updateProduct._id ? { ...p, ...updatedProductData } : p
          )
        );
        Swal.fire("Success!", "Product updated successfully.", "success");
        setModalVisible(false);
      } else {
        Swal.fire("Error!", "No changes were made.", "error");
      }
    } catch (error) {
      console.error("Update failed:", error);
      Swal.fire("Error!", "Something went wrong while updating.", "error");
    }
  };

  return (
    <div className="mt-5 mb-10">
      <title>My Listings</title>
      <h1 className="text-black text-[30px] font-bold max-w-[1380px] mx-auto text-start]">
        Products Listings
      </h1>
      {products.length === 0 ? (
        <p className="text-[30px] font-bold text-center mt-10">
          ❌ Not found listings
        </p>
      ) : (
        <div className="overflow-x-auto flex mx-auto max-w-[1380px] mt-10 bg-gray-700 rounded-sm">
          <table className="table text-white">
            <thead>
              <tr className="text-white">
                <th>SI</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Category</th>
                <th>Price</th>
                <th>Date</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={
                        product.photo ||
                        product.image ||
                        "https://via.placeholder.com/60"
                      }
                      alt={product.product_name || product.productName || "Pet"}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td>{product.product_name || product.productName}</td>
                  <td>{product.email}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.date}</td>
                  <td>{product.location}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteOrderProduct(product._id)}
                      className="btn btn-sm hover:bg-[#B91C1C] bg-[#EF4444] text-white"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleUpdatedProduct(product)}
                      className="btn btn-sm hover:bg-[#16A34A] bg-[#22C55E] text-white ml-2"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Update Modal */}
          {modalVisible && updateProduct && (
            <dialog open className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h1 className="text-3xl font-bold mb-5">Update Listing</h1>
                <form onSubmit={handleAddListing}>
                  <fieldset className="grid gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Product Name"
                      defaultValue={
                        updateProduct.product_name || updateProduct.productName
                      }
                      className="input input-bordered"
                      required
                    />
                    <select
                      name="category"
                      defaultValue={updateProduct.category}
                      className="select select-bordered"
                    >
                      <option>Pets</option>
                      <option>Food</option>
                      <option>Accessories</option>
                      <option>Care Products</option>
                    </select>
                    <input
                      type="number"
                      name="price"
                      placeholder="Price"
                      defaultValue={updateProduct.price}
                      className="input input-bordered"
                      required
                    />
                    <input
                      type="text"
                      name="location"
                      placeholder="Location"
                      defaultValue={updateProduct.location}
                      className="input input-bordered"
                      required
                    />
                    <input
                      type="text"
                      name="description"
                      placeholder="Description"
                      defaultValue={updateProduct.description}
                      className="input input-bordered"
                      required
                    />
                    <input
                      type="text"
                      name="photoURL"
                      placeholder="Image URL"
                      defaultValue={updateProduct.photo || updateProduct.image}
                      className="input input-bordered"
                      required
                    />
                    <input
                      type="date"
                      name="date"
                      defaultValue={updateProduct.date}
                      className="input input-bordered"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      defaultValue={user.email}
                      className="input input-bordered"
                      readOnly
                    />
                    <button
                      type="submit"
                      className="btn bg-[#22C55E] text-white hover:bg-[#16A34A] mt-4 rounded-sm"
                    >
                      Update Listing
                    </button>
                  </fieldset>
                </form>
                <div className="modal-action">
                  <button
                    className="btn"
                    onClick={() => setModalVisible(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </dialog>
          )}
        </div>
      )}
    </div>
  );
};

export default MyListings;
