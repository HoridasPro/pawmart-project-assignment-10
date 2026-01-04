import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import PetsAndSupplies from "../Pages/PetsAndSupplies";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import AddListing from "../Pages/AddListing";
import MyListings from "../Pages/MyListings";
import PrivateRoute from "../Private/PrivateRoute";
import MyOrders from "../Pages/MyOrders";
import CategoryFilteredProducts from "../Pages/CategoryFilteredProducts";
import ProductDetails from "../Components/ProductDetails";
import OrderListing from "../Components/OrderListing";
import DownloadOrders from "../Components/DownloadOrdersPDF";
import ErrorPage from "../Pages/ErrorPage";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardOverview from "../Pages/DashboardOverView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "category-filtered-product/:categoryName",
        element: <CategoryFilteredProducts />,
      },
      {
        path: "productDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://pawmart-assignment-10-woad.vercel.app/products/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <ProductDetails />,
          </PrivateRoute>
        ),
      },
      {
        path: "/orderListing/:orderListing",
        loader: ({ params }) =>
          fetch(
            `https://pawmart-assignment-10-woad.vercel.app/orders/${params.orderListing}`
          ),
        element: <OrderListing />,
      },
      {
        path: "downloadOrders",
        element: <DownloadOrders />,
      },
    ],
  },
  {
    path: "dashboardLayout",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "petsAndSupplies",
        element: (
          <PrivateRoute>
            <PetsAndSupplies></PetsAndSupplies>
          </PrivateRoute>
        ),
      },
      {
        path: "addListing",
        element: (
          <PrivateRoute>
            <AddListing></AddListing>
          </PrivateRoute>
        ),
      },
      {
        path: "myListings",
        element: (
          <PrivateRoute>
            <MyListings></MyListings>
          </PrivateRoute>
        ),
      },
      {
        path: "myOrders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "dashboardOverview",
        element: (
          <PrivateRoute>
            <DashboardOverview></DashboardOverview>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
