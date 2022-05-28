import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useService from "../../hooks/useService";

const ManageService = () => {
  const [user] = useAuthState(auth);
  const [service] = useService();

  const navigate = useNavigate();

  if (!user) {
    signOut(auth);
    localStorage.removeItem("accessToken");
    navigate("/");
  }

  const handleDelete = (id) => {
    const deleteItem = window.confirm("Are You sure?");

    if (deleteItem) {
      const url = `https://shielded-chamber-56561.herokuapp.com/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Service deleted");
        });
    }
  };

  return (
    <div className="py-5">
      <h2 className="">Services : {service.length}</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5 my-40 gap-10">
        {service.map((service) => (
          <div key={service._id} className="card lg:max-w-lg  shadow-xl">
            <figure>
              <img src={service.img} alt="service" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.name}</h2>
              <p>
                <span className="font-bold text-black text-xl">
                  Description :
                </span>
                {service.des}
              </p>
              <p>
                <span className="font-bold text-black">
                  Minimum Quantity :
                </span>
                {service.MinQuantity}
              </p>
              <p>
                <span className="font-bold text-black">
                  Available Quantity :
                </span>
                {service.AvailableQuantity}
              </p>
              <p>
                <span className="font-bold text-black">Price :</span>{" "}
                ${service.price}
              </p>
              <div className="card-actions flex item-center justify-around">
                <button
                  onClick={() => handleDelete(service._id)}
                  className="btn bg-gradient-to-r border-0 from-orange-600 to-blue-600 btn-wide text-white font-bold"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/dashboard/addService"
        className="btn  my-10 bg-gradient-to-r border-0 from-orange-600 to-blue-600 btn-wide text-white font-bold"
      >
        ADD service
      </Link>
    </div>
  );
};

export default ManageService;
