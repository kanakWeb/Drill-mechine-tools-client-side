import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyPurchase = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const [purchases, setPurchases] = useState([]);
  const email = user.email;
  useEffect(() => {
    fetch(`http://localhost:5000/purchase?clientEmail=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setPurchases(data);
      });
  }, []);
  return (
    <div>
      <h2>MyPurchase{purchases.length}</h2>
      <div class="overflow-x-auto">
  <table class="table w-full">
    
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
     
     {
         purchases.map((purchase,index)=><tr key={purchase._id}>
            <th>{index+1}</th>
            <td>{purchase.clientName}</td>
            <td>{purchase.service}</td>
            <td>{purchase.servicePrice}</td>
            <td>{purchase.servicePrice}</td>
          </tr>)
     }
      
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyPurchase;
