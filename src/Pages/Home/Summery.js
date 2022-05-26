import React from "react";
import Country from "../../Assets/img/countries.jpg";
import Client from "../../Assets/img/believe-every-client.png";
import Success from "../../Assets/img/success.jpg";

const Summery = () => {
  return (
    <div className="grid sm:grid-cols-1 bg-orange-50 md:grid-cols-2 lg:grid-cols-3 m-5 py-20 gap-10">
      <div className="card  bg-base-100 shadow-xl image-full">
        <figure>
          <img src={Country} alt="country" />
        </figure>
        <div className="flex card-body justify-center items-center text-center">
          <h2 className="card-title   text-8xl font-bold ">🌎</h2>
          <h2 className="card-title py-1  text-white  text-2xl font-bold ">
            70
          </h2>
          <h2 className="card-title  text-white   text-xl font-bold ">
            Countries!
          </h2>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl image-full">
        <figure>
          <img src={Client} alt="Client" />
        </figure>
        <div className="flex card-body  justify-center items-center text-center ">
          <h2 className="card-title   text-8xl font-bold ">👥</h2>
          <h2 className="card-title py-1  text-white   text-xl font-bold ">
            1000
          </h2>
          <h2 className="card-title text-white  font-bold ">
            Client Satisfy!
          </h2>
        </div>
      </div>
      <div className="card  shadow-xl image-full">
        <figure>
          <img src={Success} alt="Success" />
        </figure>
        <div className="flex  card-body justify-center items-center text-center">
          <h2 className="card-title  text-8xl font-bold ">💻</h2>
          <h2 className="card-title py-1   text-white  text-2xl font-bold ">
            2000
          </h2>
          <h2 className="card-title  text-white  text-xl font-bold ">
            Successfully Project!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Summery;
