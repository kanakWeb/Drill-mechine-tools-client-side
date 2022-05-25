import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input
        id="dashboard-sidebar"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content">
        <h2 className="text-4xl text-green-400">Dashboard</h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="dashboard-sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/*  <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Purchase</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Add Review</Link>
          </li>
          <li>
            <Link to="allUser">All User</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
