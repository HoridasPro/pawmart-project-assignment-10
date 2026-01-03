import React, { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import AuthContext from "../AuthContext/AuthContex";
import { toast } from "react-toastify";

// import { FaEye } from "react-icons/fa";
// import { IoMdEyeOff } from "react-icons/io";

const Register = () => {
  const { userSignInWithGoogle, userRegister, updatedProfile } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;
    console.log(displayName, email, password, photoURL);
    const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!pattern.test(password)) {
      toast.error(
        "Password must include at least 1 uppercase letter, at least 1 lowercase letter and minimum 6 characters"
      );
      return;
    }

    // User register with email and password
    userRegister(email, password)
      .then((result) => {
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
        updatedProfile(displayName, photoURL)
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            console.log(error.message);
          });
        setTimeout(() => {
          window.location.reload();
        }, 5000);
        toast.success("Register Successful");
        console.log(result.user);
      })
      .catch((error) => {
        toast.success("This email is already used");
        console.log(error.message);
      });
  };
  // Google Popup signIn
  const handleGoogle = () => {
    userSignInWithGoogle()
      .then((result) => {
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
        console.log(result.user);
        toast("Google Login Succsessfull");
      })
      .catch((error) => {
        console.log(error.message);
        toast("Something is wrong");
      });
  };

  return (
    <>
      <title>SignUp</title>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Register</h1>
          </div>
          <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body bg-base-100 w-full rounded-2xl">
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset w-full">
                  {/* Email input field */}
                  <label className="label mt-3">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Name"
                    required
                  />
                  {/* Email input field */}
                  <label className="label mt-3">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                    required
                  />

                  {/* Password input field */}
                  <label className="label mt-3">Password</label>
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      className="input"
                      placeholder="Password"
                      required
                    />
                    {/* Photo URL field */}
                    <label className="label mt-3">PhotoURL</label>
                    <input
                      type="text"
                      name="photoURL"
                      className="input"
                      placeholder="PhotoURL"
                      required
                    />
                    <div className="absolute left-55 top-3 text-xl"></div>
                  </div>
                  <button className="btn mt-4 bg-[#2563EB] text-white hover:bg-[#1D4ED8]">
                    Register
                  </button>
                </fieldset>
              </form>

              <button onClick={handleGoogle} className="btn bg-base-100   mt-1">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
              <p>
                Already have an account please ?
                <Link
                  className="text-blue-500 hover:text-blue-800 font-bold text-xl ml-2"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
