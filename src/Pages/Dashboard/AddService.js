import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddService = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "b35cf920fa58b1f76bbd187475859702";

  const onSubmit = async (data) => {
    const image = data.img[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        /* console.log("imageBB", result); */
        if (result.success) {
          const img = result.data.url;
          const serviceData = {
            name: data.name,
            des: data.des,
            MinQuantity: data.MinQuantity,
            AvailableQuantity: data.MinQuantity,
            price: 900,
            img: img,
          };

          //send service

          fetch(
            "https://shielded-chamber-56561.herokuapp.com/addService",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem(
                  "accessToken"
                )}`,
              },
              body: JSON.stringify(serviceData),
            }
          )
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("SuccessFully added ");
                reset();
              } else {
                toast.error("Not a added service");
              }
            });
        }
      });
  };

  return (
    <div
      className="flex w-full my-9
     lg:my-48 justify-center items-center"
    >
      <div className="card w-96 bg-base-300 shadow-xl">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Service name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">
                  Description
                </span>
              </label>
              <textarea
                type="text"
                placeholder="Description"
                className="input input-bordered w-full max-w-xs"
                {...register("des", {
                  required: {
                    value: true,
                    message: "Description is Required",
                  },
                })}
              />
              <label className="label">
                {errors.des?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.des.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">img</span>
              </label>
              <input
                type="file"
                placeholder="Your Name"
                className="input input-bordered py-2 w-full max-w-xs"
                {...register("img", {
                  required: {
                    value: true,
                    message: "img is Required",
                  },
                })}
              />
              <label className="label">
                {errors.img?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.img.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">
                  MinQuantity
                </span>
              </label>
              <input
                type="text"
                placeholder="MinQuantity"
                className="input input-bordered w-full max-w-xs"
                {...register("MinQuantity", {
                  required: {
                    value: true,
                    message: "MinQuantity is Required",
                  },
                })}
              />
              <label className="label">
                {errors.MinQuantity?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.MinQuantity.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">
                  AvailableQuantity
                </span>
              </label>
              <input
                type="text"
                placeholder="AvailableQuantity"
                className="input input-bordered w-full max-w-xs"
                {...register("AvailableQuantity", {
                  required: {
                    value: true,
                    message: "AvailableQuantity is Required",
                  },
                })}
              />
              <label className="label">
                {errors.AvailableQuantity?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.AvailableQuantity.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered w-full max-w-xs"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price is Required",
                  },
                })}
              />
              <label className="label">
                {errors.price?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.price.message}
                  </span>
                )}
              </label>
            </div>

            <button className="btn font-bold w-full btn-info btn-outline max-w-xs mt-4">
              Add Service
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
