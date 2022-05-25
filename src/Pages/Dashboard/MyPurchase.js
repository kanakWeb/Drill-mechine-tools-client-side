import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyPurchase = () => {
  const [user] = useAuthState(auth);
  const [purchases, setPurchases] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(
        `http://localhost:5000/purchase?clientEmail=${user?.email}`,
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
          console.log(res);
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
  }, [user]);
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
            </tr>
          </thead>
          <tbody>
            {purchases?.map((purchase, index) => (
              <tr key={purchase._id}>
                <th>{index + 1}</th>
                <td>{purchase.clientName}</td>
                <td>{purchase.service}</td>
                <td>{purchase.servicePrice}</td>
                <td>{purchase.servicePrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPurchase;
