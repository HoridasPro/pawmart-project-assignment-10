import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/PawMart.png";
import AuthContext from "../AuthContext/AuthContex";
import { BiMoon, BiSun } from "react-icons/bi";
import {
  FiList,
  FiLogOut,
  FiPlus,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";
import { FaPaw } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const [theme, setTheme] = useState();
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "text-white" : "text-black"}`
          }
        >
          Home
        </NavLink>
      </li>

      {/* {user && (
        <>
          <li>
            <NavLink
              to="/petsAndSupplies"
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-black"}`
              }
            >
              Pets & Supplies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addListing"
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-black"}`
              }
            >
              Add Listing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myListings"
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-black"}`
              }
            >
              My Listings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myOrders"
              className={({ isActive }) =>
                `${isActive ? "text-white" : "text-black"}`
              }
            >
              My Orders
            </NavLink>
          </li>
        </>
      )} */}
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

  useEffect(() => {
    const html = document.querySelector("html");
    if (theme === "dark") {
      html.classList.add("dark");
      html.setAttribute("data-theme", "dark");
    } else {
      html.classList.remove("dark");
      html.setAttribute("data-theme", "light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-base-100 shadow">
        <div className="navbar bg-[#2563EB] shadow-sm py-3 px-5">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
            {theme === "dark" ? (
              <a className="text-xl text-white font-bold">PawMart</a>
            ) : (
              <a className="text-xl text-white font-bold">PawMart</a>
            )}
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <div className="">
              {user ? (
                <div className="dropdown dropdown-end ml-4 relative group">
                  {/* Profile image */}
                  <label tabIndex={0} className="cursor-pointer">
                    <img
                      className="w-10 h-10 rounded-full border-2 border-white"
                      src={user.photoURL}
                      alt="User"
                    />
                  </label>

                  {/* Hover name */}
                  <span
                    className="absolute top-10 -left -translate-x-1/2 bg-gray-900 text-white text-sm px-2 py-1 rounded opacity-0 
                 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50"
                  >
                    {user.displayName || "Unknown User"}
                  </span>

                  {/* Dropdown menu */}
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box w-52 shadow mt-3 z-50"
                  >
                    <li>
                      <div className="flex items-center gap-2 px-2 py-1 rounded">
                        <MdDashboard  className="text-indigo-600" size={20} />
                        <Link to="/dashboardLayout/petsAndSupplies">Dashboard Home</Link>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2 px-2 py-1 rounded">
                        <FiUser className="text-indigo-600" size={20} />
                        <Link to="/profile">Profile</Link>
                      </div>
                    </li>
                    {/* <li>
                      <div className="flex items-center gap-2 px-2 py-1 rounded">
                        <FiPlus className="text-indigo-600" size={20} />
                        <Link to="/addListing" className="flex-1">
                          Add Listing
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2 px-2 py-1 rounded">
                        <FaPaw className="text-indigo-600" size={20} />
                        <Link to="/petsAndSupplies">Pets & Supplies</Link>
                      </div>
                    </li>

                    <li>
                      <div className="flex items-center gap-2 px-2 py-1 rounded">
                        <FiList className="text-indigo-600" size={20} />
                        <Link to="/myListings">My Listings</Link>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2 px-2 py-1 rounded">
                        <FiShoppingCart className="text-indigo-600" size={20} />
                        <Link to="/myOrders">My Orders</Link>
                      </div>
                    </li> */}
                    <li>
                      <button
                        onClick={() =>
                          setTheme(theme === "dark" ? "light" : "dark")
                        }
                        className="btn btn-ghost flex items-center gap-2 px-3 py-2  "
                      >
                        {theme === "dark" ? (
                          <>
                            <li>
                              <div className="flex mr-16">
                                <BiSun className="text-yellow-400" size={22} />
                                <span className="font-medium text-sm">
                                  Light Mode
                                </span>
                              </div>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <div className="flex mr-16">
                                <BiMoon className="text-indigo-600" size={22} />
                                <span className="text-sm">Dark Mode</span>
                              </div>
                            </li>
                          </>
                        )}
                      </button>
                    </li>
                    <li>
                      <div className="flex items-center gap-2 ml-1 px-2 py-1 rounded">
                        <FiLogOut className="text-indigo-600" size={20} />
                        <button
                          onClick={handleSignOut}
                          className="flex-1 text-left cursor-pointer"
                        >
                          Logout
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="btn bg-[#2563EB] text-white hover:bg-[#1D4ED8]"
                >
                  Login
                </Link>
              )}
            </div>

            {user ? (
              ""
            ) : (
              <Link
                to="/register"
                className="btn ml-2 bg-[#2563EB] text-white hover:bg-[#1D4ED8]"
              >
                Register
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
