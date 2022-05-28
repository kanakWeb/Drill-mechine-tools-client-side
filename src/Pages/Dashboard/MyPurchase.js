import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const MyPurchase = () => {
  const [user] = useAuthState(auth);
  const [purchases, setPurchases] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(
        `https://shielded-chamber-56561.herokuapp.com/purchase?clientEmail=${user?.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem(
              "accessToken"
            )}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setPurchases(data);
        });
    }
  }, [purchases]);

  const handleDelete = (id) => {
    const deleteItem = window.confirm("Are You sure?");

    if (deleteItem) {
      const url = `https://shielded-chamber-56561.herokuapp.com/purchase/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Purchase service deleted");
          console.log(data);
        });
    }
  };

  return (
    <div>
      <h2>MyPurchase :{purchases.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Service</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {purchases?.map((purchase, index) => (
              <tr key={purchase._id}>
                <th>{index + 1}</th>
                <td>{purchase.clientName}</td>
                <td>{purchase.service}</td>
                <td>{purchase.quantity}</td>
                <td>{purchase.servicePrice}</td>
                <td>
                  {purchase.servicePrice && !purchase.paid && (
                    <>
                      <Link to={`/dashboard/payment/${purchase._id}`}>
                        <button className="btn btn-xs btn-success">
                          pay
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(purchase._id)}
                        className="btn btn-xs btn-secondary mx-1"
                      >
                        Delete
                      </button>
                    </>
                  )}
                  {purchase.servicePrice && purchase.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPurchase;
