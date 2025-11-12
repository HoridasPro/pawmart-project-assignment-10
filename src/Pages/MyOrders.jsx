import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../AuthContext/AuthContex";
import { Link } from "react-router";
import DownloadOrders from "../Components/DownloadOrdersPDF";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
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

  return (
    <>
      <div className="overflow-x-auto flex mx-auto max-w-[1380px] mt-10 bg-gray-800">
        <table className="table">
          <thead>
            <tr>
              <th>SI</th>
              <th>Products Name</th>
              <th>Buyer Name</th>
              <th>price</th>
              <th>Quantity</th>
              <th>Address</th>
              <th>Date</th>
              {/* <th>Email</th> */}
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="font-bold">{order?.productName}</div>
                </td>
                <td>
                  {user?.displayName}
                  <br />
                </td>
                <td>
                  {order?.price}
                  <br />
                </td>
                <td>
                  {order?.quantity}
                  <br />
                </td>
                <td>
                  <div className="text-sm opacity-50">{order?.address}</div>
                </td>
                <td>{order?.date}</td>
                <td>{order?.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <DownloadOrders></DownloadOrders>
    </>
  );
};

export default MyOrders;
