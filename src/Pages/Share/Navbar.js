import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import User from "../../Assets/img/user.jpg";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    /* navigate("/login"); */
    localStorage.removeItem('accessToken');
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">DashBoard</Link>
        </li>
      )}
      <li>
        {user ? (
          <>
            <div>
              <li onClick={logout}>LogOut</li>
            </div>
            <div className="">
              <label
                tabIndex="0"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user?.reloadUserInfo?.photoUrl
                        ? user?.reloadUserInfo?.photoUrl
                        : User
                    }
                    alt="0"
                  />
                </div>
                <div></div>
              </label>
            </div>
          </>
        ) : (
          <Link className="font-bold" to="/login">
            Login
          </Link>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar  bg-stone-300 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost font-bold text-cyan-500 upper-case lg:text-2xl">
          Drill Machine Tools
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="mx-auto">

      <label
      for="dashboard-sidebar"
       tabIndex="1" className="btn btn-ghost lg:hidden">
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
          </label>
      </div>
    </div>
  );
};

export default Navbar;
