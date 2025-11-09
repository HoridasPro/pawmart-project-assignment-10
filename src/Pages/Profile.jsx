import React, { useContext } from "react";

import { Link } from "react-router";
import AuthContext from "../AuthContext/AuthContex";
// import Loading from "./Loading";

const Profile = () => {
  const { user } = useContext(AuthContext);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);
  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <div>
      <title>Profile</title>
      {user ? (
        <div className="flex w-11/12 mx-auto justify-evenly bg-[#1a191d] shadow-2xl mt-10 mb-10 p-10 items-center rounded-2xl flex-col md:flex-row lg:flex-row">
          <div className=" bg-[#73d4892f] px-15 py-10 rounded-2xl ">
            <img
              className="rounded-full h-[250px] w-[250px] flex mx-auto"
              src={user?.photoURL}
              alt=""
            />
            <div className="text-center mt-2 text-xl font-semibold">
              <h2>{user?.displayName}</h2>
              <p>{user?.email}</p>
            </div>
          </div>
        </div>
      ) : (
        <Link to="/login"></Link>
      )}
    </div>
  );
};

export default Profile;
