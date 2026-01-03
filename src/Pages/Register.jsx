import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../AuthContext/AuthContex";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { userRegister, updatedProfile, userSignInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    photoURL: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const photoURL = e.target.photoURL.value.trim();

    let tempErrors = { name: "", email: "", password: "", photoURL: "" };
    let hasError = false;

    // Name validation
    if (!name) {
      tempErrors.name = "Name is required";
      hasError = true;
    }

    // Email validation
    if (!email) {
      tempErrors.email = "Email is required";
      hasError = true;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      tempErrors.email = "Invalid email format";
      hasError = true;
    }

    // Password validation
    const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!password) {
      tempErrors.password = "Password is required";
      hasError = true;
    } else if (!pattern.test(password)) {
      tempErrors.password =
        "Password must include at least 1 uppercase, 1 lowercase and min 6 chars";
      hasError = true;
    }

    // PhotoURL validation
    if (!photoURL) {
      tempErrors.photoURL = "Photo URL is required";
      hasError = true;
    } else if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/.test(photoURL)) {
      tempErrors.photoURL = "Invalid image URL";
      hasError = true;
    }

    setErrors(tempErrors);
    if (hasError) return;

    // Firebase register
    userRegister(email, password)
      .then(() => {
        updatedProfile(name, photoURL)
          .then(() => console.log("Profile updated"))
          .catch((err) => console.log(err.message));

        // 🔹 Save credentials in localStorage for demo auto-fill
        localStorage.setItem("demoUser", JSON.stringify({ email, password }));

        toast.success("Register successful!");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // ✅ Google login
  const handleGoogleLogin = () => {
    userSignInWithGoogle()
      .then(() => {
        toast.success("Google Login Successful");
        navigate("/"); // Redirect after Google login
      })
      .catch(() => {
        toast.error("Something went wrong with Google login");
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="card p-8 max-w-md w-full shadow-xl">
        <h1 className="text-3xl font-bold mb-4">Register</h1>

        <form onSubmit={handleRegister}>
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input w-full mb-1"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input w-full mb-1"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          {/* Password */}
          <div className="relative mb-1">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input w-full pr-10"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}

          {/* Photo URL */}
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            className="input w-full mb-2"
          />
          {errors.photoURL && (
            <p className="text-red-500 text-sm">{errors.photoURL}</p>
          )}

          <button className="btn w-full bg-blue-600 text-white hover:bg-blue-700 mt-2 mb-2">
            Register
          </button>
        </form>

        {/* Google login */}
        <button
          onClick={handleGoogleLogin}
          className="btn w-full bg-red-600 text-white hover:bg-red-700 mb-4"
        >
          <FcGoogle className="text-xl"/> Login with Google
        </button>

        <p className="mt-4 text-center">
          Already have an account?
          <Link
            className="text-blue-500 hover:text-blue-800 font-bold text-xl ml-2"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
