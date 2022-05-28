import React, { useEffect, useState } from "react";

const ClientReview = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("https://shielded-chamber-56561.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  const toolsCopy = [...reviews];
  const reversedTools = toolsCopy?.reverse();

  return (
    <div className="py-10 ">
      <h2 className="text-2xl font-bold pb-16 text-center">
        Review- {reviews.length}
      </h2>

      <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 m-5 gap-10">
        {reversedTools?.slice(0,3).map((review) => (
          <div
            key={review._id}
            className="card  bg-base-300 text-neutral-content"
          >
            <div className="card-body items-center text-black text-center">
              <h2 className="card-title">Name : {review.name}</h2>
              <p className="text-xl">
                <span className="font-bold mx-2 text-black text-xl">
                  Rating :
                </span>
                {review.rating}
              </p>
              <p>
                <span className="font-bold mx-2 text-black text-xl">
                  Review :
                </span>
                {review.review.slice(0, 80)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReview;
   

/* <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 

</div> */