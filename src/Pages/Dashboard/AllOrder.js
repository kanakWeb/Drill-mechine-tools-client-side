import React, { useEffect, useState } from "react";

const AllOrder = () => {
  //allPurchase
  const [allPurchase, setAllPurchase] = useState([]);
  useEffect(() => {
    fetch("https://shielded-chamber-56561.herokuapp.com/allPurchase")
      .then((res) => res.json())
      .then((data) => setAllPurchase(data));
  }, []);

  return (
    <div className="  overflow-x-auto">
      <table className="table  w-full">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Service</th>
            <th>Client</th>
            <th>Client Email</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {allPurchase.map((p, index) => (
            <tr key={p._id}>
              <th>{index + 1}</th>
              <td>{p.service}</td>
              <td>{p.clientName}</td>
              <td>{p.clientEmail}</td>
              <td>{p.quantity}</td>
              <td>{p.servicePrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllOrder;
