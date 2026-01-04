import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router";
import AuthContext from "../AuthContext/AuthContex";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const { user, updatedProfile } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  // Update local state when context user changes
  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  if (!user) {
    return (
      <div className="text-center mt-20">
        <p className="text-xl text-gray-500">You are not logged in.</p>
        <Link
          to="/login"
          className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  const handleSave = async () => {
    try {
      const updatedUser = { ...user, displayName: name, photoURL };
      updatedProfile(updatedUser);

      setEditMode(false);
      toast.success("Profile updated successfully!", { autoClose: 3000 });
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile!", { autoClose: 3000 });
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-10 p-6 flex flex-col md:flex-row items-center bg-base-100 shadow-2xl rounded-2xl gap-10 relative">
      <ToastContainer />

      {/* Profile Image */}
      <div className="bg-green-100/30 p-6 rounded-2xl flex justify-center items-center">
        <img
          className="rounded-full h-64 w-64 object-cover"
          src={photoURL || "/default-avatar.png"}
          alt={name || "User Avatar"}
        />
      </div>

      {/* User Info */}
      <div className="text-center md:text-left flex flex-col justify-center gap-4 w-full max-w-md">
        {editMode ? (
          <>
            <input
              type="text"
              className="border p-2 rounded w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
            <input
              type="text"
              className="border p-2 rounded w-full"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Photo URL"
            />
            <div className="flex gap-2 mt-2">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 rounded hover:bg-green-600 transition"
              >
                Save
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="px-4 py-2 bg-gray-500 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold">{name || "No Name"}</h2>
            <p className="text-lg">{user.email || "No Email"}</p>
            {user.role && (
              <p className="font-medium">
                Role: <span>{user.role}</span>
              </p>
            )}
            {user.phone && (
              <p className="text-gray-500 font-medium">
                Phone: <span className="text-gray-700">{user.phone}</span>
              </p>
            )}
            <button
              onClick={() => setEditMode(true)}
              className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm font-medium"
            >
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
