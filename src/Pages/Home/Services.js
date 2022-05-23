import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services,setService]=useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
            <h2 className='text-3xl font-bold text-orange-400 text-center py-20'>Services {services.length}</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {services.map(service=><Service 
                key={service._id}
                service={service}
                ></Service>)}
            </div>

        </div>
    );
};

export default Services;