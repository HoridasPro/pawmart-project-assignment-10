import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../AuthContext/AuthContex";
import Swal from "sweetalert2";
import UpdatedProduct from "./UpdatedProduct";
// import OrderListing from "../Components/OrderListing";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const handleModalRef = useRef(null);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/myOrders?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          const sortedData = data.sort(
            (a, b) => new Date(b.date - new Date(a.date))
          );
          setOrders(sortedData);
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
        fetch(`http://localhost:3000/addLis/${_id}`, {
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
            const remainingProduct = orders.filter(
              (product) => product._id !== _id
            );
            setOrders(remainingProduct);
          });
      }
    });
  };
  const handleUpdatedProduct = () => {
    handleModalRef.current.showModal();
  };

  return (
    <div className="overflow-x-auto flex mx-auto max-w-[1380px] mt-10 bg-gray-800">
      <table className="table">
        <thead>
          <tr>
            <th>SI</th>
            {/* <th>Products Images</th> */}
            <th>Products Name</th>
            <th>Buyer Name</th>
            <th>price</th>
            <th>Quantity</th>
            <th>Address</th>
            <th>Date</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(( order, index) => (
            <tr key={ order._id}>
              <td>{index + 1}</td>
              {/* <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={ order?.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td> */}
              <td>
                <div className="font-bold">{ order?.productName}</div>
              </td>
              <td>
                {  user?.displayName}
                <br />
              </td>
              <td>
                { order?.price}
                <br />
              </td>
              <td>
                { order?.quantity}
                <br />
              </td>
              
              <td>
                <div className="text-sm opacity-50">{ order?.address}</div>
              </td>
              <td>{ order?.date}</td>
              <th>
                <button
                  onClick={() => handleDeleteOrderProduct( order?._id)}
                  className="btn"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleUpdatedProduct( order?._id)}
                  className="btn ml-3"
                >
                  Update
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <dialog
        ref={handleModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>

          <div className="card bg-base-100 shrink-0 shadow-2xl">
            <div className="card-body">
              <UpdatedProduct handleModalRef={handleModalRef}></UpdatedProduct>
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
  );
};

export default MyOrders;
