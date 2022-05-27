import React, { useEffect, useState } from 'react';

const AllOrder = () => {
//allPurchase
const [allPurchase, setAllPurchase] = useState([]);
useEffect(() => {
  fetch("http://localhost:5000/allPurchase")
    .then((res) => res.json())
    .then((data) => setAllPurchase(data));
}, []);
    
    return (
        <div>
            <h2>All Order : {allPurchase?.length}</h2>
        </div>
    );
};

export default AllOrder;