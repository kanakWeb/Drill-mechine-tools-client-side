import React from 'react';
import backgroundImg from '../../Assets/img/background.jpg'

const Banner = () => {
    return (
        <div 

        style={{
            background: `url(${backgroundImg})`,
            backgroundSize: "cover",
          }}
         className="hero min-h-screen">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-white">
    <div className="max-w-5xl">
      <h1 className="mb-5 text-5xl pt-10 font-bold">Hello there</h1>
      <p className="mb-5 text-3xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn bg-gradient-to-r from-orange-400 to-blue-500 text-white font-bold btn-wide">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;