import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Dashboard({  }) {
  const darkMode = useSelector((state) => state.app.darkMode);
  const user = useSelector((state) => state.user.userData);
  return (
    <>
      <div
        className={`h-screen ${
          darkMode ? "bg-blue-700" : "bg-blue-500"
        } text-white py-4 mt-auto`}
      >
        <div className="container mx-auto text-center">home</div>
        <div className="flex justify-center container mx-auto text-center">
          {!user ? (
            <>
              <p>Not yet logged in. Proceed to</p>
              <Link to='/login' className="ml-3 text-blue-500">Login</Link>
            </>
          ) : (
            <>
              <p>Already Logged in. Proceed to</p>
              <Link className="ml-3 text-blue-500">Profile</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
