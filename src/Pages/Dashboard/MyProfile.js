import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import User from "../../Assets/img/user.jpg";

const MyProfile = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="flex justify-center items-center bg-base-300 min-h-screen">
      <div className="h-auto sm:w-96 w-[320px] transition-all bg-white rounded-lg overflow-hidden">
        <div className="h-60 w-full  flex justify-center items-center">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={
                  user?.reloadUserInfo?.photoUrl
                    ? user?.reloadUserInfo?.photoUrl
                    : User
                }
                alt="user"
              />
            </div>
          </div>
        </div>
        <div className="md:-mt-12 -mt-24 px-4 ">
          <p className="text-2xl text-blue-600 font-semibold">
            Name :{" "}
            <span className="text-xl text-green-500">
              {user.displayName}
            </span>
          </p>
          <div className="flex gap-6 ">
            <p className="text-2xl text-blue-600 font-semibold">
              Email :{" "}
              <span className="text-xl text-green-500">
                {user.email}
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-3 items-center">
              <i className="text-gray-400 fa fa-flash"></i>
              <p className="font-semibold text-pink-500">
                Available now
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <i className="text-gray-400 fa fa-dollar"></i>
              <p className="font-semibold text-green-500">24 hours</p>
            </div>
            <div className="flex gap-3 items-center">
              <i className="text-gray-400 fa fa-envelope-o"></i>
              <p className="font-semibold text-yellow-500">
                Contacts now
              </p>
            </div>
          </div>
          <button className="my-5 h-12 w-full bg-blue-500 cursor-pointer text-white transition-all hover:bg-blue-800 rounded-lg ">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
