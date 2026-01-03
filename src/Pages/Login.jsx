import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../AuthContext/AuthContex";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { userLogin, userSignInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Demo button auto-fill
  const fillDemoUser = () => {
    const savedUser = localStorage.getItem("demoUser");
    if (!savedUser) {
      toast.error("No demo user found. Please register first.");
      return;
    }
    const { email, password } = JSON.parse(savedUser);
    setEmail(email);
    setPassword(password);
    toast.info("Demo user credentials filled");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Email & Password are required");
      return;
    }

    userLogin(email, password)
      .then(() => {
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
        toast.success("Login successful");
      })
      .catch(() => {
        toast.error("Invalid email or password");
      });
  };

  // ✅ Google login
  const handleGoogleLogin = () => {
    userSignInWithGoogle()
      .then(() => {
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
        toast.success("Google Login Successful");
      })
      .catch(() => {
        toast.error("Something went wrong with Google login");
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <h1 className="text-4xl font-bold">Login</h1>

        <div className="card w-full max-w-md shadow-xl p-6">
          {/* Demo User */}
          <button
            onClick={fillDemoUser}
            className="btn btn-outline w-full mb-4"
          >
            Demo User (Auto-fill)
          </button>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className="input w-full mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative mb-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input w-full pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <button className="btn w-full bg-blue-600 text-white hover:bg-blue-700 mb-2">
              Login
            </button>
          </form>

          {/* Google login */}
          <button
            onClick={handleGoogleLogin}
            className="btn w-full bg-red-600 text-white hover:bg-red-700 mb-4"
          >
            <FcGoogle className="text-xl" /> Login with Google
          </button>

          <p className="mt-4 text-center">
            Don't have an account?
            <Link className="text-blue-500 font-bold ml-2" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
