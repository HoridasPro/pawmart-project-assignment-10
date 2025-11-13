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
        `http://localhost:3000/addListing?email=${user.email}`
      );
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();
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
  const handleDeleteOrderProduct = async (_id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (!result.isConfirmed) return;

      const res = await fetch(`http://localhost:3000/addListing/${_id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete product");
      const data = await res.json();

      if (data.deletedCount && data.deletedCount > 0) {
        // Remove deleted product from state
        setProducts(products.filter((product) => product._id !== _id));
        Swal.fire("Deleted!", "Your product has been deleted", "success");
      } else {
        Swal.fire("Error!", "Failed to delete the product", "error");
      }
    } catch (error) {
      console.error("Delete failed:", error);
      Swal.fire("Error!", "Something went wrong while deleting.", "error");
    }
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
        `http://localhost:3000/addListing/${updateProduct._id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedProductData),
        }
      );
      if (!res.ok) throw new Error("Failed to update product");
      const data = await res.json();

      if (data.modifiedCount && data.modifiedCount > 0) {
        // Update product in state
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
    <>
      <title>My Listings</title>
      {products.length === 0 ? (
        <p className="text-[30px] font-bold text-center mt-10">
          ❌ Not found listings
        </p>
      ) : (
        <div className="overflow-x-auto flex mx-auto max-w-[1380px] mt-10 bg-gray-800">
          <table className="table">
            <thead>
              <tr>
                <th>SI</th>
                <th>Products Images</th>
                <th>Products Name</th>
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
                      src={product.photo}
                      alt={product.product_name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td>{product.product_name}</td>
                  <td>{product.email}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.date}</td>
                  <td>{product.location}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteOrderProduct(product._id)}
                      className="btn btn-sm"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleUpdatedProduct(product)}
                      className="btn btn-sm ml-2"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Modal */}
          {modalVisible && updateProduct && (
            <dialog open className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h1 className="text-3xl font-bold mb-5">Update Add Listing</h1>
                <form onSubmit={handleAddListing}>
                  <fieldset className="grid gap-5">
                    <input
                      type="text"
                      name="name"
                      placeholder="Product Name"
                      defaultValue={updateProduct.product_name}
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
                      defaultValue={updateProduct.photo}
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
                    <button type="submit" className="btn btn-neutral mt-4">
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
    </>
  );
};

export default MyListings;
