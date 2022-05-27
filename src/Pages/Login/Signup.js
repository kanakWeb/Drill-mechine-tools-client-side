import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link,useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Share/Loading";
import useToken from "../../hooks/useToken";


const Signup = () => {
  const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] =
    useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,reset} = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] =
    useUpdateProfile(auth);

const [token]=useToken(user || GoogleUser)

    let navigate = useNavigate();
 
  let SignUpErrorMessage;

  if (loading || GoogleLoading || updating) {
    return <Loading></Loading>;
  }

  if (error || GoogleError || updateError) {
    SignUpErrorMessage = (
      <p className="text-red-600">
        {error?.message ||
          GoogleError?.message ||
          updateError?.message}
      </p>
    );
  }
  if (token) {
    /* console.log(user || GoogleUser); */
     navigate("/");
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    reset()
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-300 shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-bold text-2xl">Sign Up</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
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
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 character longer valid email",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {SignUpErrorMessage}
            <button className="btn font-bold w-full btn-info btn-outline max-w-xs mt-4">
              Sign Up
            </button>
          </form>
          <p>
            Already have an account ?{" "}
            <Link className="text-green-500 font-bold" to="/login">
              Please login
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn font-bold btn-outline btn-accent"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
