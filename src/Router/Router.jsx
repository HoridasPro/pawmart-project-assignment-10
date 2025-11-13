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
// import UpdatedProduct from "../Pages/UpdatedProduct";
import DownloadOrders from "../Components/DownloadOrdersPDF";
import UpdatedProduct from "../Pages/UpdatedProduct";
// import OrderListing from "../Components/OrderListing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/petsAndSupplies",
        element: <PetsAndSupplies />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/addListing",
        element: (
          <PrivateRoute>
            <AddListing />
          </PrivateRoute>
        ),
      },
      {
        path: "/myListings",
        element: (
          <PrivateRoute>
            <MyListings />
          </PrivateRoute>
        ),
      },
      {
        path: "/myOrders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "/category-filtered-product/:categoryName",
        element: <CategoryFilteredProducts />,
      },
      {
        path: "/productDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
        element: (
          <PrivateRoute>
            <ProductDetails />,
          </PrivateRoute>
        ),
      },
      {
        path: "/orderListing/:orderListing",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/orders/${params.orderListing}`),
        element: <OrderListing />,
      },
      {
        path: "/updatedProduct/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/addListing/${params.id}`),
        element: <UpdatedProduct />,
      },
      {
        path: "/downloadOrders",
        element: <DownloadOrders />,
      },
    ],
  },
]);
export default router;
