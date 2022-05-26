import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const AddReviews = () => {
  const [user] = useAuthState(auth);
  const onSubmit = (event) => {
    event.preventDefault();
    const carryReview = {
      name: user.displayName,
      rating: event.target.rating.value,
      review: event.target.review.value,
    };
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(carryReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast("Review Done");
        }
      });

    event.target.reset();
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 "></figure>
        <div class="card-body items-center ">
          <form onSubmit={onSubmit}>
            <h2 class="card-title text-center my-5">ADD Review</h2>
            <input type="text" placeholder={user.displayName} class="input input-info input-bordered w-full max-w-xs"  readOnly/>
            <select
              name="rating"
              class="select  my-2 select-info w-full max-w-xs"
            >
              <option disabled required selected>
                Select Review
              </option>
              <option>2</option>
              <option>3</option>
              <option>3.5</option>
              <option>4</option>
              <option>4.5</option>
              <option>5</option>
            </select>
            <textarea
              name="review"
              class="textarea textarea-info"
              placeholder="10 letter your review"
              required
            ></textarea>
            <div class="card-actions">
              <button class="btn btn-info">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReviews;
