import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../AuthContext/AuthContex";
import Swal from "sweetalert2";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/myListings?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          const sortedData = data.sort(
            (a, b) => new Date(b.date - new Date(a.date))
          );
          setProducts(sortedData);
        });
    }
  }, [user?.email]);

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
        fetch(`http://localhost:3000/addListing/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted",
                icon: "success",
              });
            }
            const remainingProduct = products.filter(
              (product) => product._id !== _id
            );
            setProducts(remainingProduct);
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto flex mx-auto max-w-[1380px] mt-10 bg-gray-800">
      <table className="table">
        <thead>
          <tr>
            <th>SI</th>
            <th>Products Images</th>
            <th>Products Name</th>
            <th>Email</th>
            <th>price</th>
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
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={product?.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold">{product?.product_name}</div>
              </td>
              <td>
                {product?.email}
                <br />
              </td>
              <td>
                {product?.price}
                <br />
              </td>
              <td>{product?.date}</td>
              <td>
                <div className="text-sm opacity-50">{product?.location}</div>
              </td>
              <th>
                <button
                  onClick={() => handleDeleteOrderProduct(product?._id)}
                  className="btn"
                >
                  Delete
                </button>
                <button className="btn ml-3">Update</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyListings;
