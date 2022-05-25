import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import User from "../../Assets/img/user.jpg";

const Elementor = () => {
  const [user] = useAuthState(auth);
  return (
    <section class=" flex w-full justify-center items-center mt-20">
      <div class="w-2/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="lg:text-3xl text-cyan-500 font-bold text-center py-4 pt-10">
          {" "}
          Comment section
        </h2>
        <div class="flex justify-between items-center px-6 py-4">
          <div class="bg-orange-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold">
            Under Elementor
          </div>
          <div class="text-sm">May 14, 2022</div>
        </div>

        <div class="px-6 py-4 border-t border-gray-200">
          <div class="border rounded-lg p-4 bg-gray-200">
            Here is a short comment about this Author.
          </div>
        </div>

        <div class="bg-gray-200 px-6 py-4">
          <div class="uppercase text-xs text-gray-600 font-bold">
            Author
          </div>

          <div class="flex items-center pt-3">
            <div class="bg-blue-700 w-12 h-12 flex justify-center items-center rounded-full uppercase font-bold text-white">
              <img
                src={
                  user?.reloadUserInfo?.photoUrl
                    ? user?.reloadUserInfo?.photoUrl
                    : User
                }
                alt=""
              />
            </div>
            <div class="ml-4">
              <p class="font-bold"></p>
              <p class="text-sm text-gray-700 mt-1">Author</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Elementor;
