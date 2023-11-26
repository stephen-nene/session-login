import { message } from "antd";
import React, { useState } from "react";
import { IoCloseSharp, IoPencilOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../store/actions/userAction"
// import { handleServerLogout } from "../Fetchfun";

function Profile({ darkmode }) {
  const [update, setUpdate] = useState(true);
  const user = useSelector((state) => state.user.userData);
  const [profileData, setProfileData] = useState({ ...user });
  const dispatch = useDispatch();
  const navigate = useNavigate()

  
  const handleLogout = () => {
    // Dispatch an action to logout the user
    // handleServerLogout(dispatch,navigate)
    dispatch(logout());
  };

  const handleUpdateProfile = () => {
    // Dispatch an action to update the user's profile with profileData
    // dispatch(updateUserProfile(profileData));
    message.success("Profile updated successfully");
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
        <div className="w-full md:w-1/2 p-4 rounded-lg bg-gray-300 shadow-lg relative">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            value={profileData.name}
            onChange={(e) =>
              setProfileData({ ...profileData, name: e.target.value })
            }
            className="border rounded w-full py-2 px-3"
            disabled={update}
          />

          <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
            Email
          </label>
          <input
            type="email"
            value={profileData.email}
            onChange={(e) =>
              setProfileData({ ...profileData, email: e.target.value })
            }
            className="border rounded w-full py-2 px-3"
            disabled={update}
          />

          <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
            Phone Number
          </label>
          <input
            type="text"
            value={profileData.phonenumber}
            onChange={(e) =>
              setProfileData({ ...profileData, phonenumber: e.target.value })
            }
            className="border rounded w-full py-2 px-3"
            disabled={update}
          />

          {!update && (
            <>
          <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
            {" "}
            Password
          </label>
          <input
            type="password"
            placeholder=" password"
            onChange={(e) =>
              setProfileData({ ...profileData, password: e.target.value })
            }
            className="border rounded w-full py-2 px-3"
            disabled={update}
          />
          <input
            type="password"
            onChange={(e) =>
              setProfileData({
                ...profileData,
                confirm_password: e.target.value,
              })
            }
            className="border rounded w-full py-2 px-3"
            placeholder="confirm password"
            disabled={update}
          />
            </>

          )}

          <div className="flex mt-5">
            <p>UserRole </p>
            <p className="text-lime-600">: {user && profileData.role}</p>
          </div>

          <div className="flex justify-center">
            {!update && (
              <button
                className="mt-4 p-2 bg-lime-700 hover:bg-lime-500 border border-black rounded"
                onClick={handleUpdateProfile}
              >
                Update Profile
              </button>
            )}
          </div>

          <div className="absolute top-0 right-0 mr-2 mt-2">
            {update ? (
              <IoPencilOutline
                onClick={() => {
                  setUpdate(!update);
                }}
                className="cursor-pointer"
                size={30}
              />
            ) : (
              <IoCloseSharp
                onClick={() => {
                  setUpdate(!update);
                }}
                className="cursor-pointer"
                size={30}
              />
            )}
          </div>
        </div>

        <button
          className="mt-4 p-2 bg-rose-700 hover:bg-rose-500 border border-black rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Profile;
