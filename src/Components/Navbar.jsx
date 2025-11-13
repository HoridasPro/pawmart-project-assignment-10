import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/PawMart.png";
import AuthContext from "../AuthContext/AuthContex";
const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hidden md:block ${isActive ? "text-red-400" : ""}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/petsAndSupplies"
          className={({ isActive }) =>
            `hidden md:block ${isActive ? "text-red-400" : ""}`
          }
        >
          Pets & Supplies
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/addListing"
              className={({ isActive }) =>
                `hidden md:block ${isActive ? "text-red-400" : ""}`
              }
            >
              Add Listing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myListings"
              className={({ isActive }) =>
                `hidden md:block ${isActive ? "text-red-400" : ""}`
              }
            >
              My Listings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myOrders"
              className={({ isActive }) =>
                `hidden md:block ${isActive ? "text-red-400" : ""}`
              }
            >
              My Orders
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  // Sign out
  const handleSignOut = () => {
    userSignOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm py-3 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <figure className="w-14  ">
          <img src={logoImg} alt="" />
        </figure>
        <a className="text-xl font-bold">PawMart</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="">
          {user ? (
            <Link to="/profile">
              <div className="relative group">
                <img
                  className="w-10 h-10 rounded-full cursor-pointer"
                  src={user?.photoURL}
                  alt="User"
                />
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full 
             bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 
              group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                >
                  {user?.displayName || "Unknown User"}
                </span>
              </div>
            </Link>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>

        {user ? (
          <Link
            onClick={handleSignOut}
            to="/"
            className="btn ml-5"
          >
            Logout
          </Link>
        ) : (
          <Link to="/register" className="btn">
            Register
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
