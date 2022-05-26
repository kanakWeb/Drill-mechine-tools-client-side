import React, { useEffect, useState } from "react";

const ClientReview = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div className="py-10 ">
      <h2 className="text-2xl font-bold pb-16 text-center">
        Review- {reviews.length}
      </h2>

      <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviews?.map((review) => (
          <div
            key={review._id}
            className="card w-96 bg-base-300 text-neutral-content"
          >
            <div className="card-body items-center text-black text-center">
              <h2 className="card-title">Name : {review.name}</h2>
              <p className="text-xl">
                <span className="font-bold text-black text-xl">
                  Rating :
                </span>
                {review.rating}
              </p>
              <p>
                <span className="font-bold text-black text-xl">
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
