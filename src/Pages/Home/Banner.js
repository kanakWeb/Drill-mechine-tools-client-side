import React from 'react';
import backgroundImg from '../../Assets/img/background.jpg'

const Banner = () => {
    return (
        <div 

        style={{
            background: `url(${backgroundImg})`,
            backgroundSize: "cover",
          }}
         className="hero lg:min-h-screen">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-white">
    <div className="max-w-5xl bg-slate-500 py-10 rounded-lg bg-opacity-10 ">
      <h1 className="mb-5 text-5xl text-cyan-500 pt-10 font-bold">Drill Machine Tool There</h1>
      <p className="mb-5 text-3xl">Drilling and pump work are inherently dangerous and require careful safety planning and procedures. Some of these can addressed with general</p>
      <button className="btn mt-12 bg-gradient-to-r from-orange-400 to-blue-500 text-white font-bold btn-wide">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;