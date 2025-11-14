import React, { useEffect, useState, useContext } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import AuthContext from "../AuthContext/AuthContex";

const DownloadOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://paw-mart-project-api-server.vercel.app/orders?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data))
        .catch((err) => console.error("Orders error : ", err));
    }
  }, [user?.email]);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    doc.text("My Orders Report", 14, 20);
    doc.text(`User: ${user?.email || "N/A"}`, 14, 28);

    const head = [
      [
        "SI",
        "productName",
        "buyerName",
        "Price",
        "Quantity",
        "Address",
        "Date",
        "Phone",
      ],
    ];
    const body = orders.map((order, index) => [
      index + 1,
      order?.productName,
      user?.displayName,
      order?.quantity,
      order?.price,
      order?.address,
      new Date(order.date).toLocaleDateString(),
      order?.phone,
    ]);

    autoTable(doc, {
      startY: 34,
      head,
      body,
      styles: { fontSize: 9 },
      headStyles: { fillColor: [22, 160, 133] },
      theme: "grid",
    });

    doc.save("orders-report.pdf");
  };

  return (
    <div className="text-center mt-10 mb-10">
      <button
        onClick={handleDownloadPDF}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 font-bold rounded-md cursor-pointer"
      >
        Download Report
      </button>
    </div>
  );
};

export default DownloadOrders;
