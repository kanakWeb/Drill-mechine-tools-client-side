import React from "react";
import useService from "../../hooks/useService";

const ManageService = () => {
  const [service] = useService();
  return (
    <div className="py-5">
      <h2 className="">
        Services : {service.length}
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5 my-40 gap-10">
        {service.map((service) => (
          <div className="card lg:max-w-lg  shadow-xl">
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
              <div className="card-actions justify-center">
                <button className="btn bg-gradient-to-r border-0 from-orange-600 to-blue-600 btn-wide text-white font-bold">
                 Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageService;
