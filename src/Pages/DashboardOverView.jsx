// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Bar, Line, Pie } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   PointElement,
//   LineElement,
//   ArcElement,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   PointElement,
//   LineElement,
//   ArcElement
// );

// const DashboardOverview = () => {
//   const [metrics, setMetrics] = useState({});
//   const [chartData, setChartData] = useState({});
//   const [users, setUsers] = useState([]);

//   // Fetch data from backend
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Metrics example
//         const metricsRes = await axios.get("/api/dashboard/metrics");
//         setMetrics(metricsRes.data);

//         // Chart data example
//         const chartRes = await axios.get("/api/dashboard/charts");
//         setChartData(chartRes.data);

//         // Users table
//         const usersRes = await axios.get("/api/users");
//         setUsers(usersRes.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchData();
//   }, []);

//   // Example fallback chart data if backend empty
//   const barData = chartData.bar || {
//     labels: ["Assets", "Users", "Orders"],
//     datasets: [
//       {
//         label: "Count",
//         data: [10, 20, 15],
//         backgroundColor: "rgba(59, 130, 246, 0.7)",
//       },
//     ],
//   };

//   const lineData = chartData.line || {
//     labels: ["Jan", "Feb", "Mar", "Apr"],
//     datasets: [
//       {
//         label: "Revenue",
//         data: [500, 1000, 750, 1200],
//         borderColor: "rgba(16, 185, 129, 1)",
//         backgroundColor: "rgba(16, 185, 129, 0.2)",
//         tension: 0.3,
//       },
//     ],
//   };

//   const pieData = chartData.pie || {
//     labels: ["Active", "Inactive", "Pending"],
//     datasets: [
//       {
//         label: "Users",
//         data: [20, 10, 5],
//         backgroundColor: [
//           "rgba(16, 185, 129, 0.7)",
//           "rgba(239, 68, 68, 0.7)",
//           "rgba(59, 130, 246, 0.7)",
//         ],
//       },
//     ],
//   };

//   return (
//     <div className="space-y-6">
//       {/* ========= Overview Cards ========= */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//         <div className="bg-white p-4 rounded shadow">
//           <h3 className="text-sm text-gray-500">Total Users</h3>
//           <p className="text-2xl font-bold">{metrics.totalUsers || 0}</p>
//         </div>
//         <div className="bg-white p-4 rounded shadow">
//           <h3 className="text-sm text-gray-500">Total Assets</h3>
//           <p className="text-2xl font-bold">{metrics.totalAssets || 0}</p>
//         </div>
//         <div className="bg-white p-4 rounded shadow">
//           <h3 className="text-sm text-gray-500">Pending Requests</h3>
//           <p className="text-2xl font-bold">{metrics.pendingRequests || 0}</p>
//         </div>
//         <div className="bg-white p-4 rounded shadow">
//           <h3 className="text-sm text-gray-500">Revenue</h3>
//           <p className="text-2xl font-bold">${metrics.revenue || 0}</p>
//         </div>
//       </div>

//       {/* ========= Charts ========= */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white p-4 rounded shadow">
//           <h3 className="text-lg font-semibold mb-2">Assets Overview (Bar)</h3>
//           <Bar data={barData} />
//         </div>
//         <div className="bg-white p-4 rounded shadow">
//           <h3 className="text-lg font-semibold mb-2">Revenue Trend (Line)</h3>
//           <Line data={lineData} />
//         </div>
//         <div className="bg-white p-4 rounded shadow">
//           <h3 className="text-lg font-semibold mb-2">Users Status (Pie)</h3>
//           <Pie data={pieData} />
//         </div>
//       </div>

//       {/* ========= Users Table ========= */}
//       <div className="bg-white p-4 rounded shadow overflow-x-auto">
//         <h3 className="text-lg font-semibold mb-2">Users Table</h3>
//         <table className="min-w-full table-auto border-collapse border border-gray-200">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border px-4 py-2">Name</th>
//               <th className="border px-4 py-2">Email</th>
//               <th className="border px-4 py-2">Role</th>
//               <th className="border px-4 py-2">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.length > 0 ? (
//               users.map((user) => (
//                 <tr key={user.id}>
//                   <td className="border px-4 py-2">{user.name}</td>
//                   <td className="border px-4 py-2">{user.email}</td>
//                   <td className="border px-4 py-2">{user.role}</td>
//                   <td className="border px-4 py-2">{user.status}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="text-center py-4">
//                   No users found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DashboardOverview;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

const DashboardOverview = () => {
  const [metrics, setMetrics] = useState({});
  const [chartData, setChartData] = useState({});
  const [users, setUsers] = useState([]);

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Metrics example
        const metricsRes = await axios.get("/api/dashboard/metrics");
        setMetrics(metricsRes.data || {});

        // Chart data example
        const chartRes = await axios.get("/api/dashboard/charts");
        setChartData(chartRes.data || {});

        // Users table
        const usersRes = await axios.get("/api/users");
        // Ensure users is an array
        setUsers(Array.isArray(usersRes.data) ? usersRes.data : []);
      } catch (err) {
        console.error(err);
        setUsers([]);
        setMetrics({});
        setChartData({});
      }
    };

    fetchData();
  }, []);

  // Example fallback chart data
  const barData = chartData.bar || {
    labels: ["Assets", "Users", "Orders"],
    datasets: [
      {
        label: "Count",
        data: [10, 20, 15],
        backgroundColor: "rgba(59, 130, 246, 0.7)",
      },
    ],
  };

  const lineData = chartData.line || {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Revenue",
        data: [500, 1000, 750, 1200],
        borderColor: "rgba(16, 185, 129, 1)",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const pieData = chartData.pie || {
    labels: ["Active", "Inactive", "Pending"],
    datasets: [
      {
        label: "Users",
        data: [20, 10, 5],
        backgroundColor: [
          "rgba(16, 185, 129, 0.7)",
          "rgba(239, 68, 68, 0.7)",
          "rgba(59, 130, 246, 0.7)",
        ],
      },
    ],
  };

  return (
    <div className="space-y-6">
      {/* ========= Overview Cards ========= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm text-gray-500">Total Users</h3>
          <p className="text-2xl font-bold">{metrics.totalUsers || 0}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm text-gray-500">Total Assets</h3>
          <p className="text-2xl font-bold">{metrics.totalAssets || 0}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm text-gray-500">Pending Requests</h3>
          <p className="text-2xl font-bold">{metrics.pendingRequests || 0}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm text-gray-500">Revenue</h3>
          <p className="text-2xl font-bold">${metrics.revenue || 0}</p>
        </div>
      </div>

      {/* ========= Charts ========= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Assets Overview (Bar)</h3>
          <Bar data={barData} />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Revenue Trend (Line)</h3>
          <Line data={lineData} />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Users Status (Pie)</h3>
          <Pie data={pieData} />
        </div>
      </div>

      {/* ========= Users Table ========= */}
      <div className="bg-white p-4 rounded shadow overflow-x-auto">
        <h3 className="text-lg font-semibold mb-2">Users Table</h3>
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Role</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) && users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.role}</td>
                  <td className="border px-4 py-2">{user.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardOverview;
