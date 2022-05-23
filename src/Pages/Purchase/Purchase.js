import React from 'react';
import {useParams } from 'react-router-dom';

const Purchase = () => {
    const{serviceId}=useParams()
    return (
        <div>
            <h2 className='text-center font-bold'> Purchase {serviceId}</h2>
        </div>
    );
};

export default Purchase;