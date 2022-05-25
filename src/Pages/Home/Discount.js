import React from "react";
import background from '../../Assets/img/banner1 (2).jpg'
const Discount = () => {
  return (
    <div
    >
      <div
      style={{
        background: `url(${background})`,
        backgroundSize: "cover",
      }}
      
      class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Hello there</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut
              assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
