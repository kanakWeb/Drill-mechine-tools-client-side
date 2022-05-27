import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet, } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

 
  return (
    <div className="drawer drawer-mobile">
      <input
        id="dashboard-sidebar"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content">
        <h2 className="text-4xl font-bold text-cyan-500 text-center my-3">Dashboard</h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="dashboard-sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 overflow-y-auto my-2 w-48 bg-base-100 text-base-content">
          {/*  <!-- Sidebar content here --> */}
          <li className="m-1">
            <Link to="/dashboard/">My Profile</Link>
          </li>
          {!admin && (
            <>
              <li className="m-1">
                <Link to="/dashboard/myPurchase">My Purchase</Link>
              </li>
              <li className="m-1">
                <Link to="/dashboard/review">Add Review</Link>
              </li>
            </>
          )}
          {admin && (
            <>
              <li className="m-1">
                <Link to="/dashboard/allUser">All User</Link>
              </li>
              <li className="m-1">
                <Link to="/dashboard/addService">Add  Service</Link>
              </li>
              <li className="m-1">
                <Link to="/dashboard/manageService">Manage Service</Link>
              </li>
              <li className="m-1">
                <Link to="/dashboard/allOrder">All Order</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
