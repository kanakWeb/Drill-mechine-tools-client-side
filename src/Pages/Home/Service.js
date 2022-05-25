import React from 'react';
import {useNavigate} from 'react-router-dom';

const Service = ({service}) => {
const{_id,img,name,AvailableQuantity,MinQuantity,price,des}=service


const navigate=useNavigate()
    const handleDetails=(id)=>{
      navigate(`/service/${id}`)
    }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p><span className='font-bold text-black text-xl'>Description : </span> {des}</p>
    <p ><span className='font-bold text-black'>Minimum Quantity :</span> {MinQuantity}</p>
    <p ><span className='font-bold text-black'>Available Quantity :</span> {AvailableQuantity}</p>
    <p ><span className='font-bold text-black'>Price :</span>  ${price}</p>
    <div className="card-actions justify-center">
      <button onClick={()=>handleDetails(_id)} className="btn bg-gradient-to-r border-0 from-orange-600 to-blue-600 btn-wide text-white font-bold">Order Now</button>
    </div>
  </div>
</div>
    );
};

export default Service;