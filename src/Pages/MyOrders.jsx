import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../AuthContext/AuthContex";
import DownloadOrders from "../Components/DownloadOrdersPDF";
import Loading from "../Components/Loading";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (user?.email) {
      fetch(`https://paw-mart-project-api-server.vercel.app/myOrders?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          const sortedData = data.sort(
            (a, b) => new Date(b.date - new Date(a.date))
          );
          setOrders(sortedData);
        });
    }
  }, [user?.email]);
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
      <title>My Orders</title>
      <h2 className="max-w-[1380px] mx-auto mt-10 text-[30px] font-bold">{orders.length}-Orders Listing</h2>
      {orders.length === 0 ? (
        <p className="text-[30px] font-bold text-center mt-30">
          Not found Orders Listings👹
        </p>
        
      ) : (
        <div className="overflow-x-auto flex mx-auto max-w-[1380px] mt-10 bg-gray-800">
          <table className="table">
            <thead>
              <tr className="text-white">
                <th>SI</th>
                <th>Products Name</th>
                <th>Buyer Name</th>
                <th>price</th>
                <th>Quantity</th>
                <th>Address</th>
                <th>Date</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id} className="text-white">
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
      )}
      {orders.length === 0 ? "" : <DownloadOrders></DownloadOrders>}
    </>
  );
};

export default MyOrders;
