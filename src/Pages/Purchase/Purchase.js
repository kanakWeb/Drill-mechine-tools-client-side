import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);
  const { serviceId } = useParams();
  const [service, setServices] = useState([]);
  const {
    _id,
    img,
    name,
    AvailableQuantity,
    MinQuantity,
    price,
    des,
  } = service;
  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
   
    const purchase = {
      serviceID: _id,
      service: name,
      serviceAvailableQuantity: AvailableQuantity,
      serviceMinQuantity: MinQuantity,
      client: user.email,
      clientName: user.displayName,
      phone: event.target.phone.value,
    };
    //http://localhost:5000/purchase
    fetch("http://localhost:5000/purchase", {
      method: "POST",
      headers:{
        'content-type':"application/json"
      },
      body:JSON.stringify(purchase)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })


    event.target.reset();
  };

  return (
    <div className="card m-2 lg:card-side g-4  shadow-xl">
      <figure>
        <div className="card w-96 bg-base-300 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>
              <span className="font-bold text-black text-xl">
                Description :
              </span>
              {des}
            </p>
            <p>
              <span className="font-bold text-black">
                Minimum Quantity :
              </span>
              {MinQuantity}
            </p>
            <p>
              <span className="font-bold text-black">
                Available Quantity :
              </span>
              {AvailableQuantity}
            </p>
            <p>
              <span className="font-bold text-black">Price :</span> $
              {price}
            </p>
            <div className="card-actions"></div>
          </div>
        </div>
      </figure>
      <div className="card mt-5 w-full m-2 shadow-2xl  bg-base-300">
        <h2 className="lg:text-3xl text-cyan-500  font-bold text-center py-4 pt-10">
          Right Your Purchase Information{" "}
        </h2>
        <div className="card-body ">
          <form onSubmit={onSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder={user.displayName}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder={user.email}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Name</span>
              </label>
              <input
                name="serviceName"
                type="text"
                placeholder={name}
                className="input input-bordered"
                readOnly
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                placeholder={MinQuantity}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"></span>
              </label>
              <span className="label-text">Price</span>
              <input
                type="number"
                placeholder={price}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"></span>
              </label>
              <span className="label-text">Phone</span>
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-10">
              <button className="btn btn-primary">Purchase</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
