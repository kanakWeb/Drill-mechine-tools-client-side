import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Share/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L42ULGzYcn55L8FExicEr81nYxP9tMWptaGWpgXG2spucDBaqTE8iQp4IQpzg3CxDvgP22jYH0NXdrYq9Zt9QX700yDaflaNe"
);
const Payment = () => {
  const { id } = useParams();

  const url = `https://shielded-chamber-56561.herokuapp.com/purchase/${id}`;

  const { data: purchase, isLoading } = useQuery(
    ["booking", id],
    () =>
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            "accessToken"
          )}`,
        },
      }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <h2 className="card-title text-green-600 font-bold">
            Hello, {purchase.clientName}
          </h2>
          <p className="font-bold">
            Please pay : ${purchase.service}
          </p>
          <p className="font-bold">
            Please pay :{" "}
            <span className="text-red-500">
              ${purchase.servicePrice}
            </span>
          </p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-full w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm purchase={purchase} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
