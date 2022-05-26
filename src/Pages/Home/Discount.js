import React from "react";
import { Link } from "react-router-dom";
import background from "../../Assets/img/dis.png";
const Discount = () => {
  return (
    <div className="hero lg:min-h-screen bg-base-200">
      <div className="hero-content flex-col  lg:flex-row">
        <img
          className="mb-[-10px] hidden lg:block"
          width="700px"
          src={background}
          alt="bg"
        />
        <div>
          <h1 className="text-5xl font-bold">
            We Well Build Your Dream!
          </h1>
          <p className="py-6 text-2xl">
            Plan Perform inspire for discount 40% Repair Build tools
            in This away
          </p>
          <Link to="/service" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Discount;
